function updateTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const formattedTime = `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
  
  document.getElementById('time').textContent = formattedTime;
}

// Update time every second (1000 milliseconds)
setInterval(updateTime, 1000);

// Initial call to display time immediately
updateTime();

