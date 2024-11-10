//butoni
function Buttoni() {
    window.location.href = 'menu.html';
}

//menu
const menuItems = [
    {
        category: 'betoni',
        name: 'Betoni',
        image: 'https://th.bing.com/th/id/OIP.jr9HmFqpAlYMmeeV1gcsNQHaHa?rs=1&pid=ImgDetMain', 
        description: 'Vila ',
        price: 'Vila Company'
    },
    {
        category: 'ndertimi',
        name: 'Ndertimi',
        image: 'https://c889979.ssl.cf3.rackcdn.com/eduquip/uploads/prod_img/2_42493_s.jpg',
        description: 'Vila',
        price: 'VilaCompany'
        
    },
    {
        category: 'gurthyesa',
        name: 'Gurthesa',
        image: 'https://www.drawingtutorials101.com/drawing-tutorials/Architecture-and-Places/World-Heritage-Sites/stonehenge/how-to-draw-Stonehenge-step-0.png', 
        description: 'Vila',
        price: 'VilaCompany'
    },
    {
        category: 'asfallti',
        name: 'Asfallti',
        image: 'https://i.pinimg.com/236x/c1/23/de/c123de2be0afee01677bfc71c324a1b1.jpg?nii=t',
        description:'Vila', 
        price: 'VilaCompany'
    },
    {
        category: 'qeramika',
        name: 'Qeramika',
        image: 'https://clipartmag.com/image/bathtub-drawing-10.jpg', // Replace this with actual image URL
        description: 'Vila',
        price: 'VilaCompany'
    },
];
function filterMenu() {
    const selectedCategory = document.getElementById('categorySelect').value;
    const menuGallery = document.getElementById('menu-gallery');

    // Clear previous items
    menuGallery.innerHTML = '';

    // Filter items based on the selected category
    const filteredItems = menuItems.filter(item => {
        return selectedCategory === 'all' || item.category === selectedCategory;
    });

    // Display the filtered items
    filteredItems.forEach(item => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menu-item');

        menuItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <p><strong>${item.price}</strong></p>
        `;

        menuGallery.appendChild(menuItemDiv);
    });
}

// Initialize the menu by showing all items on page load
window.onload = filterMenu;
 
//contact form 
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
//alert
function showReservationAlert(event) {
    event.preventDefault();
    alert("Your reservation has been sent.");
}