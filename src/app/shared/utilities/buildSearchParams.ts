const buildSearchParams = <T extends Record<any, any>>(params: T) => {
  const searchParams = new URLSearchParams();

  for (const key in params) {
    searchParams.append(key, params[key]);
  }

  return searchParams.toString();
};

export { buildSearchParams };
