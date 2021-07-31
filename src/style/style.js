export function style(obj) {
  if (typeof obj === "object" && !Array.isArray(obj)) {
    let array = [];
    Object.entries(obj).forEach(([key, val]) => {
      array.push(`${key}:${val};`);
    });
    return array;
  }
}
