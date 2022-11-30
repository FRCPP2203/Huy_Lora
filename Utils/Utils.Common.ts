export const objContainKey = (obj: any, key: string): boolean => {
  return obj.hasOwnProperty(key);
};

export const isAPI = (query: any): boolean => {
  return query.hasOwnProperty("api");
};
