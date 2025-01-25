// Navigation
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        
        // Hide all sections
        document.querySelectorAll('section').forEach(section => {
            section.classList.add('hidden');
        });

        // Show target section
        document.getElementById(targetId).classList.remove('hidden');
    });
});

// Crop Management
let crops = [];

function addCrop() {
    const cropName = document.getElementById('cropName').value;
    const cropArea = document.getElementById('cropArea').value;
    const plantingDate = document.getElementById('plantingDate').value;

    if (cropName && cropArea && plantingDate) {
        const crop = {
            name: cropName,
            area: cropArea,
            date: plantingDate
        };

        crops.push(crop);
        updateCropList();

        // Clear inputs
        document.getElementById('cropName').value = '';
        document.getElementById('cropArea').value = '';
        document.getElementById('plantingDate').value = '';
    }
}

function updateCropList() {
    const cropManagement = document.getElementById('cropManagement');
    cropManagement.innerHTML = '<h3>Your Crops</h3>';

    crops.forEach((crop, index) => {
        cropManagement.innerHTML += `
            <div class="crop-item">
                <p>Crop: ${crop.name}</p>
                <p>Area: ${crop.area} acres</p>
                <p>Planted: ${crop.date}</p>
                <button onclick="removeCrop(${index})">Remove</button>
            </div>
        `;
    });
}

function removeCrop(index) {
    crops.splice(index, 1);
    updateCropList();
}

// Market Prices (Simulated Data)
const marketPricesElement = document.getElementById('marketPrices');
const marketData = [
    { crop: 'Wheat', price: '$5.50/bushel' },
    { crop: 'Corn', price: '$4.25/bushel' },
    { crop: 'Soybeans', price: '$12.75/bushel' }
];

marketData.forEach(item => {
    marketPricesElement.innerHTML += `
        <div class="market-item">
            <p>${item.crop}: ${item.price}</p>
        </div>
    `;
});

// Profile Management
document.getElementById('profileForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const farmerName = document.getElementById('farmerName').value;
    const farmLocation = document.getElementById('farmLocation').value;
    const contactNumber = document.getElementById('contactNumber').value;

    // In a real app, this would save to backend/local storage
    alert(`Profile Saved:\nName: ${farmerName}\nLocation: ${farmLocation}\nContact: ${contactNumber}`);
});