let node = (tag, props, children) => {
  return {
    tag,
    props,
    children,
  };
};
let createElement = (node) => {
  let el = document.createElement(node.tag);
  for (const [key, value] in node.props) {
    el.setAttribute(key, value);
  }
  if (Array.isArray(node.children)) {
    node.children.forEach((child) => {
      createElement(child);
    });
  }
  if (typeof node.children == "string") {
    el.innerHTML = node.children;
  }
  return el;
};
let update = (newnode, oldel) => {
  if (newnode.tag !== oldel.tagName) {
    oldel.parentNode.replaceChild(createElement(newnode), oldel);
  } else {
    // props
    if (newnode.props.length === oldel.attributes.length) {
      oldel.attributes.forEach((item) => {
        item.key;
        item.value;
        for (const [key, value] in newnode.props) {
        }
      });
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
        oldel.parentNode.replaceChild(createElement(newnode), oldel);
      }
    } else if (typeof newnode.children == "string") {
      if (newnode.children !== oldel.textContent) {
        oldel.textContent = newnode.children;
      }
    }
  }
};
let render = (node, el) => {
  el.appendChild(createElement(node));
};

export { createElement, node, render, update };
