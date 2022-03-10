export const createBrandText = (text: string) => {
  return text
    .replace("**", "<strong class='brand-text'>")
    .replace("**", "</strong>");
};

export const createRowText = (text: string) => {
  return text.replace("**", "").replace("**", "");
};

export const removeAllPointsFromString = (text: string) => {
  return text.replace(/\./g, "");
};

export const convertToHHMMSS = (time: number, short = false) => {
  const H = Math.floor(time / 3600);
  const i = Math.floor((time % 3600) / 60);
  const s = time % 60;
  if (short) {
    return (time / 3600).toFixed(1);
  }
  return `${H}:${i}:${s}`;
};

export const rowalizer = <T>(array: T[], itemPerRow = 3) => {
  let newArray: T[][] = [];
  const rows = Math.ceil(array.length / itemPerRow);
  Array.from({ length: rows }, (_, index) => {
    let start = index * itemPerRow;
    let end = start + itemPerRow;
    newArray.push(array.slice(start, end));
  });

  return newArray;
};

//Permette di dispatchare eventi Google
// export const createGAEvent = (event: string, content: string) => {
//   return () => {
//     if (typeof window !== "undefined") {
//       window.dataLayer = window.dataLayer || [];
//       window.dataLayer.push({
//         event: event,
//         content: content,
//       });
//     }
//   };
// };
