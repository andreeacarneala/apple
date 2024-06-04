const signUpButton = document.querySelector('.signup');

const modal = document.getElementById('signupModal');


const closeButton = document.querySelector('.close');



signUpButton.addEventListener('click', function() {

    modal.style.display = 'block';
});

const subscriptionFormContainer = document.createElement('div');
subscriptionFormContainer.innerHTML = `
    <div class="visme_d" data-title="Simple Newsletter Subscription" data-url="01ey0rj6-simple-newsletter-subscription?fullPage=true" data-domain="forms" data-full-page="true" data-min-height="100vh" data-form-id="61838"></div>
    <script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script>
`;

document.body.appendChild(subscriptionFormContainer);

closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault();
        validateSignUpForm();
});

function validateSignUpForm() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    
    alert('Form submitted successfully!');
}

document.addEventListener('DOMContentLoaded', function () {
    const searchLink = document.getElementById('searchLink');
    const searchContainer = document.getElementById('searchContainer');
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('resultsContainer');
    const audioPlayer = document.getElementById('audioPlayer');

    searchLink.addEventListener('click', function (event) {
        event.preventDefault();
        searchContainer.style.display = searchContainer.style.display === 'none' ? 'flex' : 'none';
    });

    searchButton.addEventListener('click', function () {
        const searchTerm = searchInput.value.trim();
        if (searchTerm !== '') {
            fetch (`https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}&entity=song&limit=10`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    displayResults(data.results);
                })
                .catch(error => console.error('Error fetching data:', error));
        }
    });

    function displayResults(results) {
        resultsContainer.innerHTML = '';
        results.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.classList.add('result-item');
            resultElement.innerHTML = `
                <img src="${result.artworkUrl100}" alt="Album Artwork">
                <div class="result-info">
                    <h3>${result.trackName}</h3>
                </div>
                <div class="result-details hidden">
                    <p>Artist: ${result.artistName}</p>
                    <p>Album: ${result.collectionName}</p>
                    <audio controls class="preview-audio" src="${result.previewUrl}"></audio>
                </div>
            `;
            resultElement.addEventListener('click', function () {
                const details = resultElement.querySelector('.result-details');
                const audio = details.querySelector('.preview-audio');
                details.classList.toggle('hidden');
                details.classList.toggle('visible');
                if (audio.paused) {
                    audio.play();
                } else {
                    audio.pause();
                }
            });
            resultsContainer.appendChild(resultElement);
        });
    }
});

    
    
    
    function playSong(previewUrl) {
        const audioPlayer = document.getElementById('audioPlayer');
        audioPlayer.src = previewUrl;
        audioPlayer.play();
    }
        
    document.addEventListener('DOMContentLoaded', () => {
        const englishBtn = document.getElementById('englishBtn');
        const romanianBtn = document.getElementById('romanianBtn');
    
        const elementsToTranslate = {
            'Home': { en: 'Home', ro: 'Acasă' },
            'Search': { en: 'Search', ro: 'Căutare' },
            'Library': { en: 'Library', ro: 'Bibliotecă' },
            'Create your first playlist': { en: 'Create your first playlist', ro: 'Creează-ți prima listă de redare' },
            "It's easy, we'll help you": { en: "It's easy, we'll help you", ro: 'Este ușor, te vom ajuta' },
            'Legal': { en: 'Legal', ro: 'Legal' },
            'Safety & Privacy Center': { en: 'Safety & Privacy Center', ro: 'Centru de siguranță și confidențialitate' },
            'Privacy Policy': { en: 'Privacy Policy', ro: 'Politica de Confidențialitate' },
            'Cookies': { en: 'Cookies', ro: 'Cookie-uri' },
            'About Ads': { en: 'About Ads', ro: 'Despre reclame' },
            'Accessibility': { en: 'Accessibility', ro: 'Accesibilitate' },
            'Discover new music every day': { en: 'Discover new music every day', ro: 'Descoperă muzică nouă în fiecare zi' },
            'Sign up': { en: 'Sign up', ro: 'Înscrie-te' },
            'Log in': { en: 'Log in', ro: 'Autentificare' },
            'Submit': { en: 'Submit', ro: 'Trimite' },
            'Email': { en: 'Email', ro: 'Email' },
            'Password': { en: 'Password', ro: 'Parolă' }
        };
    
        function translatePage(lang) {
            document.querySelectorAll('a, h4, p, button, span, h3').forEach(element => {
                const key = element.textContent.trim();
                if (elementsToTranslate[key]) {
                    element.textContent = elementsToTranslate[key][lang];
                }
            });
            
            document.querySelectorAll('input[placeholder]').forEach(input => {
                const key = input.getAttribute('placeholder').trim();
                if (elementsToTranslate[key]) {
                    input.setAttribute('placeholder', elementsToTranslate[key][lang]);
                }
            });
        }
    
        englishBtn.addEventListener('click', () => {
            translatePage('en');
        });
    
        romanianBtn.addEventListener('click', () => {
            translatePage('ro');
        });
    });
    
    
const loginButton = document.querySelector('.login');
const loginModal = document.getElementById('loginModal');
const loginCloseButton = loginModal.querySelector('.close');

loginButton.addEventListener('click', function() {
    loginModal.style.display = 'block';
});
loginCloseButton.addEventListener('click', function() {
    loginModal.style.display = 'none';
});
window.addEventListener('click', function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = 'none';
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Log in form submitted!');
});

document.addEventListener('DOMContentLoaded', function() {
    const createPlaylistButtons = document.querySelectorAll('.createPlaylistBtn');
    createPlaylistButtons.forEach(button => {
        button.addEventListener('click', function() {
            createPlaylist();
        });
    });

    function createPlaylist() {
        const playlistName = prompt('Enter playlist name:');
        if (!playlistName) return;

        const playlistElement = document.createElement('div');
        playlistElement.classList.add('playlist');
        playlistElement.innerHTML = `
            <h4>${playlistName}</h4>
            <ul class="playlistTracks"></ul>
            <button class="deletePlaylistBtn">Delete Playlist</button>
            <input type="text" class="addTrackInput" placeholder="Add track">
            <button class="addTrackBtn">Add Track</button>
        `;

        const playlistList = document.getElementById('playlistList');
        playlistList.appendChild(playlistElement);

        const deleteButton = playlistElement.querySelector('.deletePlaylistBtn');
        deleteButton.addEventListener('click', function() {
            playlistElement.remove();
        });

        const addTrackButton = playlistElement.querySelector('.addTrackBtn');
        addTrackButton.addEventListener('click', function() {
            addTrack(playlistElement);
        });
    }

    function addTrack(playlistElement) {
        const trackInput = playlistElement.querySelector('.addTrackInput');
        const trackName = trackInput.value.trim();
        if (!trackName) return;

        const trackItem = document.createElement('li');
        trackItem.textContent = trackName;

        const playlistTracks = playlistElement.querySelector('.playlistTracks');
        playlistTracks.appendChild(trackItem);

        trackInput.value = ''; 
    }
});