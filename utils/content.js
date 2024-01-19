export const stripHtml = (html) => {
  return html.replace(/(<([^>]+)>)/gi, "");
};

export const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
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

export const containsMotionProps = (props) => {
  let containsMotionProps = false;
  if (
    props.initial ||
    props.animate ||
    props.variants ||
    props.transition ||
    props.whileHover ||
    props.whileTap ||
    props.whileFocus ||
    props.whileDrag ||
    props.whileInView
  ) {
    containsMotionProps = true;
  }

  return containsMotionProps;
};

export const splitArrayIntoChunks = (arr, chunkSize) => {
  return Array.from({ length: Math.ceil(arr.length / chunkSize) }, (_, index) =>
    arr.slice(index * chunkSize, index * chunkSize + chunkSize),
  );
};

export const remapNavData = (data, state = true, level = 0) => {
  const newContent = {
    isVisible: state,
    isActive: false,
    navStyle: level === 0 ? "main-nav" : "sub-nav",
  };

  return data.map((item, index) => {
    const newItem = { ...item, ...newContent, level, index };

    if (item.navItems.length > 0) {
      return {
        ...newItem,
        navItems: remapNavData(item.navItems, false, level + 1),
      };
    } else {
      return newItem;
    }
  });
};

export const updateNavState = (array, key, index, persistOn) => {
  if (key === "isActive" && persistOn === "all") {
    const newArray = [...array];
    newArray[index][key] = !array[index][key];
    return newArray;
  }

  return array.map((item, i) => {
    if (i === index && item[key] === false) {
      return { ...item, [key]: true };
    } else {
      return { ...item, [key]: false };
    }
  });
};
