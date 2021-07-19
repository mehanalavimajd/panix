export var mount = function (el, continer) {
  var element = document.createElement(`${el.tag}`);
  if (typeof el.props == "object" && el.props !== null) {
    for (var key in el.props) {
      element.setAttribute(key, el.props[key]);
    }

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
export var node = function (tag, props, children) {
  return {
    tag: tag,
    props: props,
    children: children,
  };
};

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
    }
    // children
    if (typeof newnode.children == "string") {
      if (newnode.children !== oldel.textContent) {
        oldel.textContent = newnode.children;
      }
    } else {
      mount(newnode, oldel.parentNode);
      unmount(oldel);
    }
  }
}
