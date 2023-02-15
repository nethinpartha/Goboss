export function removeTrailingSlash(value) {
  return value.replace(/^\/|\/$/g, "") ? value.replace(/^\/|\/$/g, "") : "home";
}
