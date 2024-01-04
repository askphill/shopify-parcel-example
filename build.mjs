import { build as esbuild, context } from 'esbuild';
import postcss from 'esbuild-postcss';
import { readdir, unlink, writeFile } from 'fs/promises';
import { readFileSync, existsSync, watch as fsWatch } from 'fs';
import path from 'path';

const isWatch = process.argv.includes('--watch');
const isDevelopment = process.argv.includes('--development') || isWatch;

const entries = JSON.parse(readFileSync(path.resolve(process.cwd(), 'package.json'), 'utf8'))['entries'];

const jsWatchPattern = /src\/.*\.(js|ts)$/;
const cssWatchPattern = /src\/.*\.css$|.*\.liquid$|tailwind\.config\..*$/;

const prefix = isDevelopment ? 'ap-dev.' : 'ap.'; // false to disable
const snippet = 'snippets/dev.liquid'; // false to disable

/** @type {import('esbuild').BuildOptions} */
const commonOptions = {
  ...['assetNames', 'chunkNames', 'entryNames'].reduce((acc, key) => ((acc[key] = `${prefix || ''}[name]`), acc), {}),
  target: ['es2022', 'ios16'],
  logLevel: 'info',
  minify: true,
  bundle: true,
  outdir: 'assets',
};

/** @type {import('esbuild').BuildOptions} */
const jsOptions = {
  ...commonOptions,
  entryPoints: entries.filter((e) => e.match(/.*\.(js|ts)$/)),
  format: 'esm',
  sourcemap: isDevelopment ? true : false,
  splitting: true,
};

/** @type {import('esbuild').BuildOptions} */
const cssOptions = {
  ...commonOptions,
  entryPoints: entries.filter((e) => e.match(/.*\.css$/)),
  external: ['*.woff', '*.woff2', '*.ttf', '*.otf', '*.png', '*.jpg', '*.jpeg', '*.svg'],
  plugins: [postcss()],
};

const clean = async () => {
  console.log('Cleaning...');

  const files = [
    snippet && existsSync(snippet) && snippet,
    // files with prefix
    ...(prefix
      ? await readdir(commonOptions.outdir).then((files) =>
          files.filter((file) => file.startsWith(prefix)).map((file) => path.join(commonOptions.outdir, file)),
        )
      : []),
  ].filter(Boolean);

  if (files.length) await Promise.all(files.map((file) => unlink(file)));
};

const build = async () => {
  console.log('Building...');

  await Promise.all([esbuild(jsOptions), esbuild(cssOptions)]);
};

const watch = async () => {
  console.log('\nWatching...');

  let timeout;
  const [jsContext, cssContext] = await Promise.all([context(jsOptions), context(cssOptions)]);

  const watcher = fsWatch(process.cwd(), { recursive: true, persistent: true }, async (_, file) => {
    if (snippet && (!existsSync(snippet) || readFileSync(snippet, 'utf8') !== 'development'))
      await writeFile(snippet, 'development');

    const [buildJs, buildCss] = [file.match(jsWatchPattern), file.match(cssWatchPattern)];

    if ((buildJs || buildCss) && file !== snippet) {
      clearTimeout(timeout);
      timeout = setTimeout(
        async () => {
          const timeStart = performance.now();
          console.log(
            `Rebuilding ${buildJs ? 'js' : ''}${buildJs && buildCss ? ' and ' : ''}${buildCss ? 'css' : ''}...`,
          );

          try {
            await Promise.all([buildJs && jsContext.rebuild(), buildCss && cssContext.rebuild()]);
            console.log(`⚡ \x1b[32mDone in ${(performance.now() - timeStart).toFixed()}ms\x1b[0m`);
          } catch {} // esbuild logs errors, don't stop the watcher
        },
        200, // debounce time
      );
    }
  });

  process.on('SIGINT', async () => {
    watcher.close();
    if (isDevelopment && isWatch) {
      await clean();
      console.log(`\n\x1b[33mDon't forget to build for production\x1b[0m`);
    }
    process.exit(0);
  });
};

await clean();
await build();
if (isWatch) await watch();
