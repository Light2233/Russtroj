import { writable, get } from 'svelte/store';

function storable(key, initialValue) {
  const store = writable(initialValue);
  const { subscribe, set, update } = store;
  const isBrowser = typeof window !== 'undefined';

  if (isBrowser) {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      set(JSON.parse(storedValue));
    }
  }

  return {
    subscribe,
    set: (value) => {
      if (isBrowser) {
        localStorage.setItem(key, JSON.stringify(value));
      }
      set(value);
    },
    update: (cb) => {
      const updatedStore = cb(get(store));
      if (isBrowser) {
        localStorage.setItem(key, JSON.stringify(updatedStore));
      }
      set(updatedStore);
    }
  };
}

const langStore = storable('lang', 'ru');
export default langStore;