export const getQueryByName = (str: string, key: string) => {
  const queryString = str;
  const regex = new RegExp("[?&]" + key + "=([^&#]*)");
  const matched = queryString.match(regex);
  return matched ? matched[1] : "";
};

export const stripQueryString = (str: string) => {
  const url = new URL(str);
  url.search = "";
  return url;
};
