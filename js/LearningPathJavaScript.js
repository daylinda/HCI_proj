//below is code for world map red dots, when the dots are clicked, their id is appended to url and sent to the recipie page
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('svg circle').forEach(item => {
        item.addEventListener('click', event => {
            
            const url = `./learningpage.html`;
            window.location.href = url;
        });
    });
});
