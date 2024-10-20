// Show the sign-in popup

// Show the settings popup (for gear icon)
function showPopup(target) {
    var message;

    switch (target) {
        case 'login':
            message = 'Login steps';
            break;
        case 'ai':
            message = 'Chat with AI Tutor';
            break;
        case 'human':
            message = 'Chat with tutor';
            break;
        case 'playlist':
            message = 'Create new playlist/ add to playlist';
            break;
        default:
            message = 'Adjust Settings';
    }
    
    var popupText = document.getElementById('popup-text');
    popupText.innerText = message;

    document.getElementById('popup').style.display = 'block';
}

function showLoginPopup() {
  
    document.getElementById('login-popup').style.display = 'block';
}

function showGroupPopup() {

    document.getElementById('group-popup').style.display = 'block';
}

function showAiPopup() {

    document.getElementById('ai-popup').style.display = 'block';
}
function showHumanPopup() {

    document.getElementById('human-popup').style.display = 'block';
}
function showPlaylistPopup() {

    document.getElementById('playlist-popup').style.display = 'block';
}

// Close any popup
function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

function openQuestionaire(pageUrl) {
    window.location.href = pageUrl;
}
function openPath(url) {
    window.location.href = url;
}