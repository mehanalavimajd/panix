import error from "./error.js";
let node = (tag, props, children) => {
  return {
    tag,
    props: !props ? {} : props,
    children,
  };
};
let createElement = (node) => {
  let el = document.createElement(node.tag);
  for (const key in node.props) {
    if (node.props.hasOwnProperty(key)) {
      el.setAttribute(key, node.props[key]);
    }
  }
  if (Array.isArray(node.children)) {
    node.children.forEach((child) => {
      el.appendChild(createElement(child));
    });
  } else if (typeof node.children == "string") {
    el.innerHTML = node.children;
  } else {
    error("The children argument of node should be either an array or String");
  }
  return el;
};
let update = (newnode, oldel) => {
  if (newnode.tag.toLowerCase !== oldel.tagName.toLowerCase) {
    oldel = createElement(newnode);
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
      oldel = createElement(newnode);
    }
    // children
    if (Array.isArray(newnode.children)) {
      if (newnode.children.length === oldel.children.length) {
        let i = 0;
        newnode.forEach((child) => {
          if (newnode.children[i] !== oldel.children[i]) {
            oldel.children[i] = newnode.children[i];
          }
          i++;
        });
      } else {
        oldel = createElement(newnode);
      }
    } else if (typeof newnode.children == "string") {
      if (newnode.children !== oldel.textContent) {
        oldel.textContent = newnode.children;
      }
    }
  }
  return oldel;
};
let render = (el, cont) => {
  cont.appendChild(el);
};
export { node, createElement, update, render };
