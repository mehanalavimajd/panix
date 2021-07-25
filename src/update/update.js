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
