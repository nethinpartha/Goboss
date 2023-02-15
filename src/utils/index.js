
// Windows API to calculate TTI
function getTimeToInteractive() {
    const requestStart = window.performance.timeOrigin.requestStart;
    const domInteractive = window.performance.timeOrigin.domInteractive;

    return domInteractive - requestStart;
}

// API to calculate resource timing
function getResourceEntries() {
    return window.performance.getEntriesByType('resource') || [];
}