// Write your code in this file!
const currentUser = 'Grace Hopper';

//this was my solution before I read the solution in the assignment description
//const welcomeMessage = 'Welcome to Flatbook, ' + currentUser + '!'; 
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`; 

const excitedWelcomeMessage = welcomeMessage.toUpperCase(); 

const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;