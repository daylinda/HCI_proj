// Show the sign-in popup

// Show the settings popup (for gear icon)
function showPopup() {
    document.getElementById('popup').style.display = 'block';
}

// Close any popup
function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

function openQuestionaire(pageUrl) {
    window.location.href = pageUrl;
}
function openPath() {
    window.location.href = 'learningpath.html';
}