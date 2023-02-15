export function clean(obj) {
  for (var propName in obj) {
    if (Array.isArray(obj[propName])) {
      if (obj[propName].length === 0) {
        delete obj[propName];
      }
    }
    if (typeof obj[propName] === "object"
      && Object.keys(obj[propName]).length === 0
      && obj[propName].constructor === Object) {
      delete obj[propName];
    }
    if (obj[propName] === null || obj[propName] === undefined) {
      delete obj[propName];
    }
  }
  return obj
}