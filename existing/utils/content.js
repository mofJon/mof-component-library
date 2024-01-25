export const stripHtml = (html) => {
  return html.replace(/(<([^>]+)>)/gi, "");
};

export const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();

  if (typeof window === "undefined") return null;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

export const loadLazyImage = (element) => {
  if (element) {
    element.querySelectorAll("*").forEach((item) => {
      if (item.getAttribute("data-srcset")) {
        item.setAttribute("srcset", item.getAttribute("data-srcset"));
        item.removeAttribute("data-srcset");
      }
      if (item.getAttribute("data-src")) {
        item.setAttribute("src", item.getAttribute("data-src"));
        item.removeAttribute("data-src");
      }
    });
    element.classList.add("lazy-loaded");
  }
};
