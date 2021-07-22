export function style(obj) {
  if (typeof obj === "object" && obj !== null) {
    let array = [];
    Object.entries(obj).forEach(([key, val]) => {
      key = key.split("'");
      array.push(`${key}:${val};`);
    });
    return array;
  }
}
