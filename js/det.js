// Get the current date
const currentDate = new Date();

// Access individual date components
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // January is 0, so we add 1 to get the correct month
const day = currentDate.getDate();

// Format the date as desired (e.g., YYYY-MM-DD)
const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

// Display the date in the specified paragraph element
document.getElementById('currentDate').textContent = formattedDate;

