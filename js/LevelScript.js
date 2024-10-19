// Function to get query parameters from the URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}


// When the page loads, set the button background and text color based on the parameters
window.onload = function () {
    const bgColor = getQueryParam('bgColor'); // Get the background color from URL
    
    // Select all buttons correctly by tag or class
    const buttons = document.querySelectorAll('.bttn'); // Use the correct class or 'button' if targeting all buttons
    // Apply background color to each button
    buttons.forEach(button => {
        button.style.backgroundColor = "#"+bgColor; // Apply the background color
    });
};



function openPath(pageUrl) {
    window.location.href = pageUrl;
}