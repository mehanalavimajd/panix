export const addEvent = (el, onevent, callback) => {
  onevent = String(onevent).toLowerCase();
  if (onevent.charAt(0) + onevent.charAt(1) === "on") {
    onevent = onevent.substring(2);
  }
  el.addEventListener(onevent, callback);
};
export var mount = (el, container) => {
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
      } else {
        const item = el.children[index];
        mount(item, element);
      }
    }
  }
  container.appendChild(element);
  return element;
};
export var node = function (tag, props, children) {
  return {
    tag: tag,
    props: props,
    children: children,
  };
};
export function style(obj) {
  if (typeof obj === "object" && !Array.isArray(obj)) {
    let array = [];
    Object.entries(obj).forEach(([key, val]) => {
      array.push(`${key}:${val};`);
    });
    return array;
  }
}
export var unmount = (el) => {
  el.parentNode.removeChild(el);
};
export function update(newnode, oldel) {
  if (newnode.tag !== oldel.tagName) {
    mount(newnode, oldel.parentNode);
    unmount(oldel);
  } else {
    // props
    if (newnode.props.length === oldel.attributes.length) {
      oldel.attributes.forEach((item) => {
        var oldKey = item.key;
        var oldValue = item.value;
        for (const [key, value] in newnode.props) {
          var newKey = key;
          var newValue = value;
        }
        if (newKey !== oldKey) {
          oldKey = newKey;
        }
        if (newValue !== oldValue) {
          oldValue = newValue;
        }
      });
    } else {
      mount(newnode, oldel.parentNode);
      unmount(oldel);
    }
    // children
    if (Array.isArray(newnode.children)) {
      if (newnode.children.length === oldel.children.length) {
        let i = 0;
        newnode.forEach((child) => {
          if (newnode.children[i] !== oldel.children[i]) {
            oldel.children[0] = newnode.children[0];
          }
          i++;
        });
      } else {
        mount(newnode, oldel.parentNode);
        unmount(oldel);
      }
    }
    if (typeof newnode.children == "string") {
      if (newnode.children !== oldel.textContent) {
        oldel.textContent = newnode.children;
      }
    }
  }
}
