export const formatTime = (timestamp) => {
    const ts = new Date(timestamp);
    return ts.toLocaleTimeString('en-US');
};
  