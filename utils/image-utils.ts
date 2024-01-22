declare const document: any;

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

// export const toDataURL = (url: string) => {
//   return new Promise((resolve, reject) => {
//     if (!document) {
//       reject(new Error("Document is not available"));
//       return;
//     }

//     // @ts-ignore
//     const image: any = new Image();
//     image.src = url;

//     image.onload = function () {
//       const canvas = document.createElement("canvas");
//       const context = canvas.getContext("2d");
//       canvas.width = image.width;
//       canvas.height = image.height;

//       context.drawImage(image, 0, 0);
//       resolve(canvas.toDataURL());
//     };

//     image.onerror = function () {
//       reject(new Error("Failed to load image"));
//     };
//   });
// };

export const toDataURL = (url: string): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    if (!document) {
      reject(new Error("Document is not available"));
      return;
    }

    // @ts-ignore
    const image = new Image();
    image.src = url;
    image.crossOrigin = "https://192.168.25.3:6006";

    image.onload = function () {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.width = image.width;
      canvas.height = image.height;

      console.log(canvas, context);

      context.drawImage(image, 0, 0);

      resolve(canvas.toDataURL());
      return;
    };

    image.onerror = function () {
      reject(new Error("Failed to load image"));
    };
  });
};
