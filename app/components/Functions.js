
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    
    return `${hours}:${minutes}:${remainingSeconds}`;
  }

  let seconds = 0;

function startCounter() {
  setInterval(() => {
    seconds++;
    console.log(formatTime(seconds));
  }, 1000);
}

startCounter();