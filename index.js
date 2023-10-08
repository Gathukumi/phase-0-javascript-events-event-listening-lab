function addingEventListener() {
    // Get the element with the ID 'input'
    const input = document.getElementById('input');
  
    // Define the callback function
    function clickAlert() {
      alert('I was clicked!');
    }
  
    // Add a click event listener to the 'input' element
    input.addEventListener('click', clickAlert);
}
  
  // Call the addingEventListener function to set up the event listener
  addingEventListener();
  