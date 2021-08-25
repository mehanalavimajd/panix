export function isNode(node) {
  return node.tag && (node.props || node.props === null) && node.children
    ? true
    : false;
}
