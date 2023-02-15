function CalculateProgress(duration, runtime) {
    let watchDuration = 0;
    if (duration == runtime || typeof watchDuration === 'NaN') {
        return watchDuration;
    }
    watchDuration = Math.floor(duration / runtime * 100);
    return watchDuration;
}

export default CalculateProgress;