export const capitalise = (str?: string) => {
  if (!str) return null;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const camelToHyphen = (str: string) => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
};
