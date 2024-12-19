const productList = document.getElementById('product-list');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const categoryBtns = document.querySelectorAll('.category-btn');

function filterProduct() {
    const searchValue = searchInput.value.toLowerCase(); // Use 'value' to get input text
    const productItems = document.querySelectorAll('.product-item');
    const activeCategory = document.querySelector('.category-btn.active')?.dataset.category || 'all'; // Handle 'all' by default

    productItems.forEach(item => {
        const title = item.querySelector('h3').innerText.toLowerCase();
        const category = item.dataset.category;

        if (
            (title.includes(searchValue) || searchValue === '') &&
            (category === activeCategory || activeCategory === 'all')
        ) {
            item.style.display = 'block'; // Show matching items
        } else {
            item.style.display = 'none'; // Hide non-matching items
        }
    });
}

function setCategory(e) {
    categoryBtns.forEach(btn => btn.classList.remove('active')); // Remove 'active' class from all buttons
    e.target.classList.add('active'); // Add 'active' class to the clicked button
    filterProduct(); // Reapply filter
}

// Event Listeners
searchBtn.addEventListener('click', filterProduct);
searchInput.addEventListener('keyup', filterProduct);
categoryBtns.forEach(btn => {
    btn.addEventListener('click', setCategory); // Correct syntax for event listener
});

// Initial Filter
filterProduct();



