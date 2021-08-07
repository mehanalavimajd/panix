export const addEvent = (el, onevent, callback) => {
  onevent = String(onevent).toLowerCase();
  if (onevent.charAt(0) + onevent.charAt(1) === "on") {
    console.log(true);
    onevent = onevent.substring(2);
  }
  el.addEventListener(onevent, callback);
};
