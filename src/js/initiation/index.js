async function getData() {
    try {
        const response = await fetch('/data.json');
        if (!response.ok) {
            throw new Error(`Error loading data: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data || [];
    } catch (error) {
        console.error('Error:', error.message);
        return [];
    }
}

// Function to render the articles
async function medicals() {
    const doctors = await getData();
    const container = document.querySelector('.card-container');
    
    if (!container) {
        console.error('Container element not found');
        return;
    }

    if (doctors.length === 0) {
        container.innerHTML = `
            <div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
                <p>No articles found.</p>
            </div>
        `;
        return;
    }


    container.innerHTML = doctors.map(medical => `
       <div class="card">
      <img src="${medical.assets/images.about.juan_perez.jpg}" alt="${medical.Dr. Juan_Pérez}"/>
      <h3>${medical.Dr. Juan_Pérez}</h3>
      <p>${medical.Dermatólogo}</p>
      <p>${medical.description1}</p>
    </div>
    `).join('');
}

// Initialize when the DOM is ready
document.addEventListener('DOMContentLoaded', medicals);