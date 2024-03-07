"use server";

export const getCardListingData = async (
  fetchController: any,
  queryData: any,
  fetchUrl = "/umbraco/api/CardListingFilter/GetCards",
) => {
  if (fetchController.current) {
    fetchController.current.abort();
  }
  const controller = new AbortController();
  fetchController.current = controller;

  const dataRes = await fetch(fetchUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    signal: fetchController.current?.signal,
    body: JSON.stringify(queryData),
  }).catch(console.error);

  if (dataRes && dataRes.ok) {
    const data = await dataRes.json();
    return data;
  } else {
    return [];
  }
};
