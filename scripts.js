function prevImage() {
    // Add your logic to show the previous image
    window.location.href="index.html"
  }
 
  function nextImage() {
    // Add your logic to show the next image
    window.location.href="menu.html"
  }
  function appetizer() {
    // Add your logic to show the next image
    window.location.href="appetizer.html"
  }
  function mainCourse() {
    // Add your logic to show the next image
    window.location.href="mainCourse.html"
  }
  function Dessert() {
    // Add your logic to show the next image
    window.location.href="Dessert.html"
  }
  function Bevereges() {
    // Add your logic to show the next image
    window.location.href="Bevereges.html"
  }
  function prevImageFromMenu() {
    // Add your logic to show the next image
    window.location.href="menu.html"
  }
//   function toggleDetails(item) {
//     const details = item.querySelector('.details');
//     if (details.style.display === 'block') {
//         details.style.display = 'none';
//     } else {
//         details.style.display = 'block';
//     }

let currentlyOpenDetails = null;
 
function toggleDetails(item) {
    const details = item.querySelector('.details');
 
    if (currentlyOpenDetails && currentlyOpenDetails !== details) {
currentlyOpenDetails.style.display = 'none';
    }
 
if (details.style.display === 'block') {
details.style.display = 'none';
        currentlyOpenDetails = null;
    } else {
details.style.display = 'block';
        currentlyOpenDetails = details;
    }
}
