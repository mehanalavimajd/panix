export var mount = function (el, continer) {
  var element = document.createElement(`${el.tag}`);
  if (typeof el.props == "object" && el.props !== null) {
    Object.entries(el.props).forEach(([key, val]) => {
      element.setAttribute(key, val);
    });

    if (typeof el.children === "string") {
      element.appendChild(document.createTextNode(el.children));
    } else {
      for (let index = 0; index < el.children.length; index++) {
        const item = el.children[index];
        mount(item, element);
      }
    }
    continer.appendChild(element);
    return element;
  }
};
