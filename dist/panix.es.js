const addEvent = (el, onevent, callback) => {
  onevent = String(onevent).toLowerCase();
  if (onevent.charAt(0) + onevent.charAt(1) === "on") {
    onevent = onevent.substring(2);
  }
  el.addEventListener(onevent, callback);
};

var mount = (el, container) => {
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
        element.appendChild(document.createTextNode(el.children[index]));
      } else {
        const item = el.children[index];
        mount(item, element);
      }
    }
  }
  container.appendChild(element);
  return element;
};

var node = (tag, props, children) => {
  return {
    tag,
    props,
    children,
  };
};

function isNode(node) {
  return node.tag && (node.props || node.props === null) && node.children
    ? true
    : false;
}

function style(obj) {
  if (typeof obj === "object" && !Array.isArray(obj)) {
    let array = [];
    Object.entries(obj).forEach(([key, val]) => {
      array.push(`${key}:${val};`);
    });
    return array;
  }
}

var unmount = (el) => {
  el.parentNode.removeChild(el);
};

function update(newnode, oldel) {
  let restart = () => {
    mount(newnode, oldel.parentNode);
    unmount(oldel);
  };
  if (newnode.tag !== oldel.tagName) {
    restart();
  } else {
    // props
    if (newnode.props.length === oldel.attributes.length) {
      oldel.attributes.forEach((item) => {
        item.key;
        item.value;
        for (const [key, value] in newnode.props) {
        }
      });
    } else {
      restart();
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
        restart();
      }
    }
    if (typeof newnode.children == "string") {
      if (newnode.children !== oldel.textContent) {
        oldel.textContent = newnode.children;
      }
    }
  }
}

export { addEvent, isNode, mount, node, style, unmount, update };
