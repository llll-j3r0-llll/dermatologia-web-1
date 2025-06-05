async function loadBanner() {
    try {
        const response = await fetch('/data/banner.json');
        if (!response.ok) {
            throw new Error(`Error loading banner: ${response.status} ${response.statusText}`);
        }

        const banner = await response.json();

        const bannerContainer = document.querySelector('.banner-container');
        if (!bannerContainer) {
            console.error('Banner container not found');
            return;
        }

        bannerContainer.innerHTML = `
            <div class="banner">
                <img src="${banner.image}" alt="${banner.title}">
                <div class="banner-text">
                    <h2>${banner.title}</h2>
                    <p>${banner.description}</p>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Error loading banner:', error.message);
    }
}

// Ejecutar cuando cargue el DOM
document.addEventListener('DOMContentLoaded', loadBanner);
