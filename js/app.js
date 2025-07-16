// API Configuration
const VIX_API_BASE = 'https://vixsrc.to';
const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';

// DOM Elements
const popularMoviesContainer = document.getElementById('popular-movies');
const trendingTvContainer = document.getElementById('trending-tv');
const recentlyAddedContainer = document.getElementById('recently-added');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const featuredTitle = document.getElementById('featured-title');
const featuredDescription = document.getElementById('featured-description');
const watchNowBtn = document.getElementById('watch-now-btn');
const moreInfoBtn = document.getElementById('more-info-btn');
const playerModal = document.getElementById('player-modal');
const closeBtn = document.querySelector('.close-btn');
const videoPlayer = document.getElementById('video-player');
const videoTitle = document.getElementById('video-title');
const videoDescription = document.getElementById('video-description');
const navHome = document.getElementById('nav-home');
const navMovies = document.getElementById('nav-movies');
const navTv = document.getElementById('nav-tv');
const navGenres = document.getElementById('nav-genres');
const seeAllMovies = document.getElementById('see-all-movies');
const seeAllTv = document.getElementById('see-all-tv');
const seeAllRecent = document.getElementById('see-all-recent');

// Featured Content - Stranger Things
const featuredContent = {
    tmdbId: 66732,
    title: "Stranger Things",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
    type: "tv",
    season: 1,
    episode: 1,
    backdrop: "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
    poster: "/49WJfeN0moxb9IPfGn8AIqMGskD.jpg"
};

// Extensive Content Database
const contentDatabase = {
    popularMovies: [
        { tmdbId: 505642, title: "Black Panther: Wakanda Forever", type: "movie", poster: "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg" },
        { tmdbId: 76600, title: "Avatar: The Way of Water", type: "movie", poster: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" },
        { tmdbId: 640146, title: "Ant-Man and the Wasp: Quantumania", type: "movie", poster: "/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg" },
        { tmdbId: 315162, title: "Puss in Boots: The Last Wish", type: "movie", poster: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg" },
        { tmdbId: 536554, title: "M3GAN", type: "movie", poster: "/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg" },
        { tmdbId: 385687, title: "Fast X", type: "movie", poster: "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg" },
        { tmdbId: 594767, title: "Shazam! Fury of the Gods", type: "movie", poster: "/3GrRpt6UYN2BtQb3C4DTQ1YvprF.jpg" },
        { tmdbId: 603692, title: "John Wick: Chapter 4", type: "movie", poster: "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg" },
        { tmdbId: 502356, title: "The Super Mario Bros. Movie", type: "movie", poster: "/zNKs1T0VZuJiVuhuL5GSCNkGdxf.jpg" },
        { tmdbId: 447365, title: "Guardians of the Galaxy Vol. 3", type: "movie", poster: "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg" },
        { tmdbId: 667538, title: "Transformers: Rise of the Beasts", type: "movie", poster: "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg" },
        { tmdbId: 298618, title: "The Flash", type: "movie", poster: "/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg" },
        { tmdbId: 569094, title: "Spider-Man: Across the Spider-Verse", type: "movie", poster: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg" },
        { tmdbId: 677179, title: "Creed III", type: "movie", poster: "/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg" },
        { tmdbId: 804150, title: "Cocaine Bear", type: "movie", poster: "/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg" },
        { tmdbId: 842945, title: "Supercell", type: "movie", poster: "/gbGHezV6yrhua0KfAgwrknSOiIY.jpg" },
        { tmdbId: 646389, title: "Plane", type: "movie", poster: "/qi9r5xBgcc9KTxlOLjssEbDgO0J.jpg" },
        { tmdbId: 700391, title: "65", type: "movie", poster: "/rzRb63TldOKdKydCvWJM8B6EkPM.jpg" },
        { tmdbId: 758323, title: "The Pope's Exorcist", type: "movie", poster: "/9JBEPLTPSm0d1mbEcLxULjJq9Eh.jpg" },
        { tmdbId: 713704, title: "Evil Dead Rise", type: "movie", poster: "/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg" }
    ],
    trendingTv: [
        { tmdbId: 66732, title: "Stranger Things", type: "tv", season: 4, episode: 1, poster: "/49WJfeN0moxb9IPfGn8AIqMGskD.jpg" },
        { tmdbId: 60574, title: "Peaky Blinders", type: "tv", season: 6, episode: 1, poster: "/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg" },
        { tmdbId: 82856, title: "The Mandalorian", type: "tv", season: 3, episode: 1, poster: "/rTWh8fOV9gl9X8YBP0vqAhdXDo6.jpg" },
        { tmdbId: 1399, title: "Game of Thrones", type: "tv", season: 1, episode: 1, poster: "/7WUHnWGx5OO145IRxPDUkQSh4C7.jpg" },
        { tmdbId: 100088, title: "The Last of Us", type: "tv", season: 1, episode: 1, poster: "/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg" },
        { tmdbId: 94605, title: "The Witcher", type: "tv", season: 3, episode: 1, poster: "/7vjaCdMw15FEbXyLQTVa04URsPm.jpg" },
        { tmdbId: 71712, title: "The Good Doctor", type: "tv", season: 6, episode: 1, poster: "/6tfT03sGp9k4c0J3dypjrI8TSAI.jpg" },
        { tmdbId: 1416, title: "Grey's Anatomy", type: "tv", season: 19, episode: 1, poster: "/zPIug5giU8oug6Xes5K1sTfQJxY.jpg" },
        { tmdbId: 63174, title: "Lucifer", type: "tv", season: 6, episode: 1, poster: "/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg" },
        { tmdbId: 60735, title: "The Flash", type: "tv", season: 9, episode: 1, poster: "/lJA2RCMfsWoskqlQhXPSLFQGXEJ.jpg" },
        { tmdbId: 456, title: "The Simpsons", type: "tv", season: 34, episode: 1, poster: "/zI3E2a3WYma5w8emI35mgY5NEl5.jpg" },
        { tmdbId: 1668, title: "Friends", type: "tv", season: 10, episode: 1, poster: "/f496cm9enuEsZkSPzCwnTESEK5s.jpg" },
        { tmdbId: 4614, title: "House M.D.", type: "tv", season: 8, episode: 1, poster: "/lkvhReTBZ2Ksl0Dl5Oplsf6UYkF.jpg" },
        { tmdbId: 1421, title: "Modern Family", type: "tv", season: 11, episode: 1, poster: "/fu5vEUHgxkAPmX26ISQXqHmlPMq.jpg" },
        { tmdbId: 1418, title: "The Big Bang Theory", type: "tv", season: 12, episode: 1, poster: "/ooBGRQBdbGzBxAVfExiO8r7kloA.jpg" },
        { tmdbId: 1100, title: "How I Met Your Mother", type: "tv", season: 9, episode: 1, poster: "/dvxSvr6OmYGvvt8Z1VdBlPfL1Lf.jpg" },
        { tmdbId: 1434, title: "Family Guy", type: "tv", season: 21, episode: 1, poster: "/eWWCRjBfLyePh2tfZdvNcIvKSJe.jpg" },
        { tmdbId: 4565, title: "Supernatural", type: "tv", season: 15, episode: 1, poster: "/3iFm6Kz7iYoFaEcj4fLyZHAmTQA.jpg" },
        { tmdbId: 31910, title: "The Walking Dead", type: "tv", season: 11, episode: 1, poster: "/xf9wuDcqlUPWABZNeDKPbZUjWx0.jpg" },
        { tmdbId: 1402, title: "The Walking Dead: Dead City", type: "tv", season: 1, episode: 1, poster: "/n5j7bVQgYOTNTTjSwL3dR3XlYVh.jpg" }
    ],
    recentlyAdded: [
        { tmdbId: 11138512, title: "The Northman", type: "movie", poster: "/a8QxnqxFgH8Q8f13QdDsQdQKyQS.jpg" },
        { tmdbId: 6710474, title: "Everything Everywhere All at Once", type: "movie", poster: "/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg" },
        { tmdbId: 10234724, title: "Moon Knight", type: "tv", season: 1, episode: 1, poster: "/6L6fplwYqLU5Rz6QSjBOY6SWMWR.jpg" },
        { tmdbId: 11280740, title: "Severance", type: "tv", season: 1, episode: 1, poster: "/63fP77RPjQlU1UYbwN2hJ5dUOyQ.jpg" },
        { tmdbId: 1745960, title: "Top Gun: Maverick", type: "movie", poster: "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg" },
        { tmdbId: 505026, title: "Death Stranding", type: "movie", poster: "/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg" },
        { tmdbId: 760104, title: "The Batman", type: "movie", poster: "/74xTEgt7R36Fpooo50r9T25onhq.jpg" },
        { tmdbId: 634649, title: "Spider-Man: No Way Home", type: "movie", poster: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" },
        { tmdbId: 524434, title: "Eternals", type: "movie", poster: "/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg" },
        { tmdbId: 568124, title: "Encanto", type: "movie", poster: "/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg" },
        { tmdbId: 438148, title: "Minions: The Rise of Gru", type: "movie", poster: "/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg" },
        { tmdbId: 453395, title: "Doctor Strange in the Multiverse of Madness", type: "movie", poster: "/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg" },
        { tmdbId: 610150, title: "Dragon Ball Super: Super Hero", type: "movie", poster: "/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg" },
        { tmdbId: 361743, title: "Top Gun: Maverick", type: "movie", poster: "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg" },
        { tmdbId: 507086, title: "Jurassic World Dominion", type: "movie", poster: "/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg" },
        { tmdbId: 919355, title: "Dragon Knight", type: "movie", poster: "/uSMJbYhaEpQtF9vkMhpgljc0CA4.jpg" },
        { tmdbId: 718789, title: "Lightyear", type: "movie", poster: "/vpILbP9eOQEtdQgl4vgjZUNY07r.jpg" },
        { tmdbId: 585083, title: "Hotel Transylvania: Transformania", type: "movie", poster: "/teCy1egGQa0y8ULJvlrDHQKnxBL.jpg" },
        { tmdbId: 438631, title: "Dune", type: "movie", poster: "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg" },
        { tmdbId: 566525, title: "Shang-Chi and the Legend of the Ten Rings", type: "movie", poster: "/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg" }
    ]
};

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Set featured content
    featuredTitle.textContent = featuredContent.title;
    featuredDescription.textContent = featuredContent.description;
    document.querySelector('.hero').style.backgroundImage = 
        `linear-gradient(rgba(0, 0, 0, 0.5), var(--primary)), url('${featuredContent.backdrop}')`;

    // Render content
    renderContent(contentDatabase.popularMovies, popularMoviesContainer);
    renderContent(contentDatabase.trendingTv, trendingTvContainer);
    renderContent(contentDatabase.recentlyAdded, recentlyAddedContainer);
    
    // Event listeners
    watchNowBtn.addEventListener('click', () => playContent(featuredContent));
    moreInfoBtn.addEventListener('click', () => showContentInfo(featuredContent));
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
    closeBtn.addEventListener('click', closePlayer);
    window.addEventListener('click', (e) => {
        if (e.target === playerModal) closePlayer();
    });

    // Navigation links
    navHome.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    navMovies.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('popular-movies').scrollIntoView({ behavior: 'smooth' });
    });

    navTv.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('trending-tv').scrollIntoView({ behavior: 'smooth' });
    });

    navGenres.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Genres section would be displayed here in a full implementation');
    });

    // See All buttons
    seeAllMovies.addEventListener('click', (e) => {
        e.preventDefault();
        alert('All movies would be displayed here in a full implementation');
    });

    seeAllTv.addEventListener('click', (e) => {
        e.preventDefault();
        alert('All TV shows would be displayed here in a full implementation');
    });

    seeAllRecent.addEventListener('click', (e) => {
        e.preventDefault();
        alert('All recently added content would be displayed here in a full implementation');
    });
});

// Render content cards
function renderContent(items, container) {
    container.innerHTML = items.map(item => `
        <div class="content-card" data-tmdb="${item.tmdbId}" data-type="${item.type}" 
            ${item.type === 'tv' ? `data-season="${item.season || 1}" data-episode="${item.episode || 1}"` : ''}>
            <img src="${TMDB_IMAGE_BASE}${item.poster}" alt="${item.title}" class="card-image" 
                onerror="this.src='https://via.placeholder.com/300x450?text=No+Image'">
            <div class="card-info">
                <div class="card-title">${item.title}</div>
                <div class="card-meta">
                    <span>${item.type === 'movie' ? 'Movie' : 'TV Show'}</span>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add click event to cards
    container.querySelectorAll('.content-card').forEach(card => {
        card.addEventListener('click', () => {
            const tmdbId = card.getAttribute('data-tmdb');
            const type = card.getAttribute('data-type');
            const title = card.querySelector('.card-title').textContent;
            const season = card.getAttribute('data-season');
            const episode = card.getAttribute('data-episode');
            
            const content = {
                tmdbId,
                type,
                title,
                description: `Now playing: ${title}`,
                season,
                episode
            };
            
            playContent(content);
        });
    });
}

// Play content using Vixsrc.to embed
function playContent(content) {
    videoTitle.textContent = content.title;
    videoDescription.textContent = content.description;
    
    let embedUrl;
    if (content.type === 'movie') {
        embedUrl = `${VIX_API_BASE}/movie/${content.tmdbId}?primaryColor=f43f5e&autoplay=true`;
    } else {
        embedUrl = `${VIX_API_BASE}/tv/${content.tmdbId}/${content.season || 1}/${content.episode || 1}?primaryColor=f43f5e&autoplay=true`;
    }
    
    videoPlayer.src = embedUrl;
    playerModal.style.display = 'block';
}

// Show content info
function showContentInfo(content) {
    alert(`Information about ${content.title}\n\nTMDB ID: ${content.tmdbId}\nType: ${content.type === 'movie' ? 'Movie' : 'TV Show'}`);
}

// Close player
function closePlayer() {
    playerModal.style.display = 'none';
    videoPlayer.src = '';
}

// Handle search
function handleSearch() {
    const query = searchInput.value.trim();
    if (query) {
        alert(`You searched for: ${query}\n\nIn a full implementation, this would show search results.`);
        searchInput.value = '';
    }
}