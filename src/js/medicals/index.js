async function getData() {
    try {
        const response = await fetch('https://6831e3bcc3f2222a8cb0bb7e.mockapi.io/medicals');
        if (!response.ok) {
            throw new Error(`Error loading data: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data.newsletters || [];
    } catch (error) {
        console.error('Error:', error.message);
        return [];
    }
}

// Function to render the articles
async function medicals() {
    const articles = await getData();
    const container = document.getElementById('articlesList');
    
    if (!container) {
        console.error('Container element not found');
        return;
    }

    if (articles.length === 0) {
        container.innerHTML = `
            <div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
                <p>No articles found.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = articles.map(article => `
        <div class="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div class="p-6">
                ${article.image ? `
                    <div class="mb-4">
                        <img src="${article.image}" 
                             alt="${article.name}" 
                             class="w-full h-48 object-cover rounded-lg shadow-sm"/>
                    </div>
                ` : ''}
                <h2 class="text-2xl font-bold text-gray-800 mb-2">${article.name}</h2>
                <p class="text-gray-600 mb-4">${article.description}</p>
                ${article.frequency ? `
                    <div class="flex items-center text-sm text-gray-500">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span>${article.frequency}</span>
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');
}

// Initialize when the DOM is ready
document.addEventListener('DOMContentLoaded', renderArticles);