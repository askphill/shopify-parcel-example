/**
 * Debounce and throttle
 */

/**
 * Debounce
 * @param {() => void} fn
 * @param {number} wait
 * @returns {() => void} debounced
 */
function debounce(fn, wait) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}

/**
 * Throttle
 * @param {() => void} fn
 * @param {number} delay
 * @returns {() => void} throttled
 **/
function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  };
}

/**
 * Pubsub
 */
let subscribers = {};

/**
 * Subscribe to an event
 * @param {string} eventName
 * @param {(data: any) => void} callback
 * @returns {() => void} unsubscribe()
 */
function subscribe(eventName, callback) {
  if (subscribers[eventName] === undefined) {
    subscribers[eventName] = [];
  }

  subscribers[eventName] = [...subscribers[eventName], callback];

  return function unsubscribe() {
    subscribers[eventName] = subscribers[eventName].filter((cb) => {
      return cb !== callback;
    });
  };
}

/**
 * Publish an event
 * @param {string} eventName
 * @param {any} data
 * @returns {void}
 **/
function publish(eventName, data) {
  if (subscribers[eventName]) {
    subscribers[eventName].forEach((callback) => {
      callback(data);
    });
  }
}

/**
 * DOM
 */

/**
 * @param {HTMLElement} element
 * @param {IntersectionObserverInit} options
 * @returns {Promise<void>}
 */
function inView(element, options) {
  return new Promise((resolve) => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            resolve();
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
        ...options,
      },
    );

    observer.observe(element);
  });
}
