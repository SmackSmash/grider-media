// Pause an async function to simulate slow interner
// Make sure to await pause when called
export const pause = duration => new Promise(res => setTimeout(res, duration));
