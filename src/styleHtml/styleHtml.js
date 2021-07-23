export const styleHtml = (obj, container) => {
  let css = style(obj);
  let fullString = "";
  css.forEach((el) => {
    fullString += el;
  });
  container.setAttribute("style", fullString);
};
