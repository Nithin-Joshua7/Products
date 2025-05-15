"use strict";

document.addEventListener('DOMContentLoaded', () => {
    // Initialize modals to be hidden
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
        console.log(`Initialized modal ${modal.id} to display: none`);
    });

    // Modal selectors
    const sizeChartBtn = document.querySelector('.size-chart-btn');
    const compareBtn = document.querySelector('.compare-btn');
    const closeButtons = document.querySelectorAll('.close-btn');

    // Log selector results
    console.log('sizeChartBtn found:', !!sizeChartBtn);
    console.log('compareBtn found:', !!compareBtn);
    console.log('Modals found:', modals.length);
    console.log('Close buttons found:', closeButtons.length);

    // Modal functions
    function openModal(modalId) {
        try {
            console.log(`Attempting to open modal: ${modalId}`);
            const modal = document.getElementById(modalId);
            if (!modal) {
                console.error(`Modal with ID ${modalId} not found`);
                return;
            }
            modals.forEach(m => {
                m.classList.remove('modal-open');
                m.style.display = 'none';
            });
            modal.classList.add('modal-open');
            modal.style.display = 'flex';
            console.log(`Opened modal: ${modalId}`);
        } catch (error) {
            console.error(`Error opening modal ${modalId}:`, error);
        }
    }

    function closeModal(modalId) {
        try {
            const modal = document.getElementById(modalId);
            if (!modal) {
                console.error(`Modal with ID ${modalId} not found`);
                return;
            }
            modal.classList.remove('modal-open');
            modal.style.display = 'none';
            console.log(`Closed modal: ${modalId}`);
        } catch (error) {
            console.error(`Error closing modal ${modalId}:`, error);
        }
    }

    // Modal event listeners
    if (sizeChartBtn) {
        sizeChartBtn.addEventListener('click', (e) => {
            console.log('Size Chart button clicked');
            e.preventDefault();
            openModal('sizeChartModal');
        });
    } else {
        console.error('sizeChartBtn not found');
    }

    if (compareBtn) {
        compareBtn.addEventListener('click', (e) => {
            console.log('Compare Colours button clicked');
            e.preventDefault();
            openModal('compareModal');
        });
    } else {
        console.error('compareBtn not found');
    }

    closeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('Close button clicked');
            modals.forEach(modal => {
                modal.classList.remove('modal-open');
                modal.style.display = 'none';
            });
        });
    });

    modals.forEach(modal => {
        modal.addEventListener('click', e => {
            if (e.target === modal) {
                e.stopPropagation();
                console.log(`Clicked outside modal: ${modal.id}`);
                modal.classList.remove('modal-open');
                modal.style.display = 'none';
            }
        });
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            console.log('ESC key pressed');
            modals.forEach(modal => {
                modal.classList.remove('modal-open');
                modal.style.display = 'none';
            });
        }
    });

    // Compare Colours Modal setup
    const compareSwatches = document.querySelectorAll('.compare-swatches .swatch');
    const selectedSwatchesContainer = document.querySelector('.selected-swatches');
    let selectedCompareColors = [];

    function updateSelectedSwatches() {
        selectedSwatchesContainer.innerHTML = '';
        if (selectedCompareColors.length === 0) {
            selectedSwatchesContainer.innerHTML = '<p>No colours selected.</p>';
            return;
        }
        selectedCompareColors.forEach(({ color, image }) => {
            const colorItem = document.createElement('div');
            colorItem.classList.add('color-item');
            colorItem.innerHTML = `
                <img src="${image}" alt="${color} T-Shirt">
                <div class="swatch" style="background: ${color === 'Black' ? '#000' : color === 'Red' ? '#ff0000' : '#0000ff'}"></div>
                <span>${color}</span>
            `;
            selectedSwatchesContainer.appendChild(colorItem);
        });
    }

    compareSwatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            const color = swatch.dataset.color;
            const image = swatch.dataset.image;
            const isSelected = selectedCompareColors.some(item => item.color === color);
            if (isSelected) {
                selectedCompareColors = selectedCompareColors.filter(item => item.color !== color);
                swatch.classList.remove('selected');
            } else {
                selectedCompareColors.push({ color, image });
                swatch.classList.add('selected');
            }
            updateSelectedSwatches();
        });
    });

    // Gallery
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const mainImage = document.getElementById('mainImage');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            thumbnails.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
            mainImage.src = thumb.src;
            mainImage.alt = thumb.alt;
            const color = thumb.alt.split(' ')[0];
            swatches.forEach(s => {
                s.classList.toggle('active', s.dataset.color === color);
                if (s.dataset.color === color) {
                    localStorage.setItem('selectedColor', color);
                }
            });
        });
    });

    // Variants
    const swatches = document.querySelectorAll('.color-swatches:not(.compare-swatches) .swatch');
    const sizeButtons = document.querySelectorAll('.size-btn');

    swatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            swatches.forEach(s => s.classList.remove('active'));
            swatch.classList.add('active');
            const selectedColor = swatch.dataset.color;
            if (!swatch.dataset.image) {
                console.error(`No data-image for color ${selectedColor}`);
                return;
            }
            mainImage.src = swatch.dataset.image;
            mainImage.alt = `${selectedColor} T-Shirt`;
            localStorage.setItem('selectedColor', selectedColor);
            thumbnails.forEach(thumb => {
                thumb.classList.toggle('active', thumb.src.endsWith(swatch.dataset.image));
            });
            console.log(`Swatch clicked: ${selectedColor}, Image: ${swatch.dataset.image}`);
        });
    });

    sizeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            sizeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const selectedSize = btn.dataset.size;
            localStorage.setItem('selectedSize', selectedSize);
        });
    });

    // Load from localStorage
    const savedColor = localStorage.getItem('selectedColor');
    const savedSize = localStorage.getItem('selectedSize');
    if (savedColor) {
        swatches.forEach(s => {
            if (s.dataset.color === savedColor) {
                s.classList.add('active');
                mainImage.src = s.dataset.image;
                mainImage.alt = `${savedColor} T-Shirt`;
                thumbnails.forEach(thumb => {
                    thumb.classList.toggle('active', thumb.src.endsWith(s.dataset.image));
                });
            } else {
                s.classList.remove('active');
            }
        });
    }
    if (savedSize) {
        sizeButtons.forEach(b => {
            b.classList.toggle('active', b.dataset.size === savedSize);
        });
    }

    // Tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.dataset.tab).classList.add('active');
        });
    });

    // Handle Pair Well With image errors
    const pairImages = document.querySelectorAll('.pair-card img');
    pairImages.forEach(img => {
        img.addEventListener('error', () => {
            console.error(`Failed to load image: ${img.src}`);
            img.src = 'images/fallback.jpeg';
        });
    });

    // Carousel navigation
    const carousel = document.querySelector('.pair-carousel');
    const leftArrow = document.querySelector('.carousel-controls .carousel-arrow-left');
    const rightArrow = document.querySelector('.carousel-controls .carousel-arrow-right');

    if (carousel && leftArrow && rightArrow) {
        console.log('Carousel and arrows found');
        leftArrow.addEventListener('click', () => {
            console.log('Left arrow clicked');
            carousel.scrollBy({ left: -200, behavior: 'smooth' });
        });

        rightArrow.addEventListener('click', () => {
            console.log('Right arrow clicked');
            carousel.scrollBy({ left: 200, behavior: 'smooth' });
        });
    } else {
        console.error('Carousel or arrows not found:', {
            carousel: !!carousel,
            leftArrow: !!leftArrow,
            rightArrow: !!rightArrow
        });
    }
});