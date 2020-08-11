export const getTimeEnd = (duration, progress) => {
  const timeLeft = duration - progress;
  const hours = Math.floor(timeLeft / 3600);
  let minutes = Math.floor(timeLeft / 60);
  let seconds = Math.floor(timeLeft % 60);
  if (minutes < 10) {
    minutes = `0` + minutes;
  }
  if (seconds < 10) {
    seconds = `0` + seconds;
  }
  return hours + `:` + minutes + `:` + seconds;
};
