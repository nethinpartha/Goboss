// Use this utility to determine the tenant for tenant specific configurations
// In future, if the number of tenants increses, add a switch control flow and determine the types
export const __isThemeOfType = (themeType = '') => process.env.REACT_APP_THEMETYPE === "classic" ? true : false;