export var mount = (el, continer) => {
  var element = document.createElement(`${el.tag}`);
  if (!el.props) {
    el.props = {};
  }
  if (typeof el.props === "object") {
    Object.entries(el.props).forEach(([key, val]) => {
      element.setAttribute(key, val);
    });
  }

  if (typeof el.children === "string") {
    element.appendChild(document.createTextNode(el.children));
  } else {
    for (let index = 0; index < el.children.length; index++) {
      if (typeof el.children[index] === "string") {
        element.textContent += el.children[index];
        console.log(document.createTextNode(el.children[index]));
      } else {
        const item = el.children[index];
        mount(item, element);
      }
    }
  }
  continer.appendChild(element);
  return element;
};
