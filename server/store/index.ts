const cache: Record<string, any> = {};

export function has(key: string) {
  return key in cache;
}

export function get(key: string) {
  if (key in cache) {
    return cache[key];
  }

  return null;
}

export function set(key: string, value: any) {
  cache[key] = value;
}

export function clear() {
  const keys = Object.keys(cache);

  for (const key of keys) {
    delete cache[key];
  }
}
