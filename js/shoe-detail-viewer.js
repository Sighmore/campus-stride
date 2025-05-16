// Shoe Detail Viewer Script
document.addEventListener('DOMContentLoaded', function() {
    // Create a modal container for the shoe details
    const modal = document.createElement('div');
    modal.className = 'shoe-modal';
    modal.style.display = 'none';
    modal.style.position = 'fixed';
    modal.style.zIndex = '1000';
    modal.style.left = '0';
    modal.style.top = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.overflow = 'auto';
    modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'shoe-modal-content';
    modalContent.style.backgroundColor = 'white';
    modalContent.style.margin = '5% auto';
    modalContent.style.padding = '20px';
    modalContent.style.border = '1px solid #888';
    modalContent.style.width = '80%';
    modalContent.style.maxWidth = '800px';
    modalContent.style.borderRadius = '10px';
    modalContent.style.position = 'relative';
    modalContent.style.transition = 'all 0.3s ease';
    modalContent.style.transform = 'scale(0.8)';
    
    // Close button
    const closeBtn = document.createElement('span');
    closeBtn.className = 'close-btn';
    closeBtn.innerHTML = '&times;';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '10px';
    closeBtn.style.right = '20px';
    closeBtn.style.color = '#aaa';
    closeBtn.style.fontSize = '28px';
    closeBtn.style.fontWeight = 'bold';
    closeBtn.style.cursor = 'pointer';
    
    // Content container
    const shoeDetails = document.createElement('div');
    shoeDetails.className = 'shoe-details';
    shoeDetails.style.display = 'flex';
    shoeDetails.style.flexDirection = 'column';
    shoeDetails.style.alignItems = 'center';
    
    // Image container
    const shoeImage = document.createElement('div');
    shoeImage.className = 'shoe-image';
    shoeImage.style.marginBottom = '20px';
    shoeImage.style.width = '100%';
    shoeImage.style.maxWidth = '400px';
    shoeImage.style.height = 'auto';
    shoeImage.style.textAlign = 'center';
    
    const img = document.createElement('img');
    img.id = 'modal-shoe-img';
    img.style.width = '100%';
    img.style.height = 'auto';
    img.style.borderRadius = '8px';
    img.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    
    // Shoe info
    const shoeInfo = document.createElement('div');
    shoeInfo.className = 'shoe-info';
    shoeInfo.style.textAlign = 'center';
    shoeInfo.style.width = '100%';
    
    const shoeTitle = document.createElement('h2');
    shoeTitle.id = 'modal-shoe-title';
    shoeTitle.style.color = '#292f36';
    shoeTitle.style.marginBottom = '10px';
    shoeTitle.style.fontSize = '24px';
    
    const shoePrice = document.createElement('p');
    shoePrice.id = 'modal-shoe-price';
    shoePrice.style.color = '#ff6b6b';
    shoePrice.style.fontWeight = 'bold';
    shoePrice.style.marginBottom = '15px';
    shoePrice.style.fontSize = '20px';
    
    const shoeDescription = document.createElement('p');
    shoeDescription.id = 'modal-shoe-description';
    shoeDescription.style.lineHeight = '1.6';
    shoeDescription.style.color = '#555';
    shoeDescription.style.marginBottom = '20px';
    
    const addToCartBtn = document.createElement('button');
    addToCartBtn.className = 'modal-add-to-cart';
    addToCartBtn.textContent = 'Add to Cart';
    addToCartBtn.style.backgroundColor = '#4ecdc4';
    addToCartBtn.style.color = 'white';
    addToCartBtn.style.border = 'none';
    addToCartBtn.style.padding = '12px 30px';
    addToCartBtn.style.borderRadius = '4px';
    addToCartBtn.style.cursor = 'pointer';
    addToCartBtn.style.fontWeight = '600';
    addToCartBtn.style.transition = 'all 0.3s ease';
    
    // Add event listener for the add to cart button
    addToCartBtn.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#ff6b6b';
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    });
    
    addToCartBtn.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#4ecdc4';
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
    
    addToCartBtn.addEventListener('click', function() {
        this.textContent = 'Added!';
        this.style.backgroundColor = '#292f36';
        
        // Reset after animation
        setTimeout(() => {
            this.textContent = 'Add to Cart';
            this.style.backgroundColor = '#4ecdc4';
        }, 1500);
    });
    
    // Append elements to the DOM
    shoeImage.appendChild(img);
    shoeInfo.appendChild(shoeTitle);
    shoeInfo.appendChild(shoePrice);
    shoeInfo.appendChild(shoeDescription);
    shoeInfo.appendChild(addToCartBtn);
    
    shoeDetails.appendChild(shoeImage);
    shoeDetails.appendChild(shoeInfo);
    
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(shoeDetails);
    
    modal.appendChild(modalContent);
    
    document.body.appendChild(modal);
    
    // Shoe product data
    const shoeProducts = {
        'flat-bottom-shoes': {
            title: 'Flat Bottom Shoes',
            price: 'KSh 350',
            image: 'images/2.jpg',
            description: 'Elegant flat bottom shoes designed for comfort and style. Perfect for casual and formal occasions. Made with premium materials and attention to detail.'
        },
        'lady-slides': {
            title: 'Lady Slides',
            price: 'KSh 300',
            image: 'images/1.jpg',
            description: 'Comfortable and stylish slides perfect for everyday wear. Features a soft cushioned footbed and durable outsole.'
        },
        'zano-slide': {
            title: 'Zano Slide',
            price: 'KSh 350',
            image: 'images/3.jpg',
            description: 'Trendy Zano slides with unique patterns and designs. Made for fashion-forward individuals who value both comfort and style.'
        },
        'casual-doll-sandals': {
            title: 'Casual Doll Sandals',
            price: 'KSh 650',
            image: 'images/4.jpg',
            description: 'Premium casual sandals for your dolls. Features adjustable straps and soft footbed for the perfect fit.'
        }
    };
    
    // Add event listeners to the product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.style.cursor = 'pointer';
        
        card.addEventListener('click', function(e) {
            // Prevent default if it's a link
            if (e.target.tagName === 'A') {
                e.preventDefault();
            }
            
            // Get the product title
            const productTitle = this.querySelector('.product-title').textContent.toLowerCase().trim();
            let productKey = '';
            
            // Match the title to our product data
            if (productTitle === 'ladies\' slides') {
                productKey = 'lady-slides';
            } else if (productTitle === 'ladies\' flat bottom shoes') {
                productKey = 'flat-bottom-shoes';
            } else if (productTitle === 'ladies\' zano slide') {
                productKey = 'zano-slide';
            } else if (productTitle === 'casual ladies\' sandals') {
                productKey = 'casual-doll-sandals';
            }
            
            if (productKey && shoeProducts[productKey]) {
                // Update modal content
                document.getElementById('modal-shoe-img').src = shoeProducts[productKey].image;
                document.getElementById('modal-shoe-title').textContent = shoeProducts[productKey].title;
                document.getElementById('modal-shoe-price').textContent = shoeProducts[productKey].price;
                document.getElementById('modal-shoe-description').textContent = shoeProducts[productKey].description;
                
                // Show the modal with animation
                modal.style.display = 'block';
                setTimeout(() => {
                    modalContent.style.transform = 'scale(1)';
                }, 10);
            }
        });
    });
    
    // Close modal when clicking on close button or outside the modal
    closeBtn.addEventListener('click', function() {
        modalContent.style.transform = 'scale(0.8)';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modalContent.style.transform = 'scale(0.8)';
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    });
    
    // Add smooth reveal animation for product cards
    const revealCards = function() {
        const cards = document.querySelectorAll('.product-card');
        let delay = 0;
        
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, delay);
            
            delay += 150;
        });
    };
    
    // Run the animations
    revealCards();
});