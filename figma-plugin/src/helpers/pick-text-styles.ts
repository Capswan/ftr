const allowed = ["color", "fontSize"];

export const pickTextStyles = (styleObject: object) => {
  const style = {};

  Object.entries(styleObject).forEach(([key, el]) => {
    if (allowed.includes(key)) {
      style[key] = el;
    }
  });

  return style;
};
