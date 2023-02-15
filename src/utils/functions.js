export function identifyUser(userId, traits) {
  let browseWindow = typeof window !== undefined ? window.analytics : {};
  if (!browseWindow) return null;

  browseWindow.identify(userId, traits);
}
