// Data Structure for Product Catalog
        const productsData = [
            {
                id: 1,
                title: "Bunny Plush",
                category: "Snuggles & Friends",
                price: 26.00,
                originalPrice: null,
                badge: null,
                bgColor: "bg-[#e2edd8]", // Pastel Soft Green
                // SVG Graphic for Bunny Plush
                svg: `
                <svg viewBox="0 0 200 200" class="w-full h-full object-contain p-4 drop-shadow-sm">
                    <!-- Background Soft Shadow -->
                    <ellipse cx="100" cy="175" rx="45" ry="8" fill="#d0dfc2"/>
                    <!-- Ears -->
                    <ellipse cx="80" cy="65" rx="14" ry="40" fill="#f2e2c4" transform="rotate(-12 80 65)"/>
                    <ellipse cx="80" cy="65" rx="8" ry="30" fill="#eacba8" transform="rotate(-12 80 65)"/>
                    <ellipse cx="120" cy="65" rx="14" ry="40" fill="#f2e2c4" transform="rotate(12 120 65)"/>
                    <ellipse cx="120" cy="65" rx="8" ry="30" fill="#eacba8" transform="rotate(12 120 65)"/>
                    <!-- Arms -->
                    <ellipse cx="65" cy="130" rx="12" ry="25" fill="#e3d0ae" transform="rotate(20 65 130)"/>
                    <ellipse cx="135" cy="130" rx="12" ry="25" fill="#e3d0ae" transform="rotate(-20 135 130)"/>
                    <!-- Body -->
                    <ellipse cx="100" cy="135" rx="38" ry="32" fill="#f2e2c4"/>
                    <ellipse cx="100" cy="135" rx="26" ry="22" fill="#f8ece0"/>
                    <!-- Feet -->
                    <ellipse cx="78" cy="165" rx="14" ry="10" fill="#e3d0ae"/>
                    <ellipse cx="122" cy="165" rx="14" ry="10" fill="#e3d0ae"/>
                    <!-- Head -->
                    <circle cx="100" cy="100" r="32" fill="#f2e2c4"/>
                    <!-- Eyes -->
                    <circle cx="88" cy="98" r="3.5" fill="#3a2e2b"/>
                    <circle cx="112" cy="98" r="3.5" fill="#3a2e2b"/>
                    <circle cx="89" cy="97" r="1" fill="#ffffff"/>
                    <circle cx="113" cy="97" r="1" fill="#ffffff"/>
                    <!-- Nose & Mouth -->
                    <polygon points="100,103 96,100 104,100" fill="#e0a39a"/>
                    <path d="M 100 103 Q 96 108 93 106 M 100 103 Q 104 108 107 106" stroke="#8c6d62" stroke-width="1.5" fill="none" stroke-linecap="round"/>
                    <!-- Cheeks -->
                    <circle cx="82" cy="105" r="5" fill="#f4c3b6" opacity="0.6"/>
                    <circle cx="118" cy="105" r="5" fill="#f4c3b6" opacity="0.6"/>
                </svg>`
            },
            {
                id: 2,
                title: "Forrest Coloring Books",
                category: "Creative Corners",
                price: 14.00,
                originalPrice: null,
                badge: null,
                bgColor: "bg-[#d8e8ed]", // Soft Sky Blue/Green
                // SVG Graphic for Coloring Books
                svg: `
                <svg viewBox="0 0 200 200" class="w-full h-full object-contain p-4 drop-shadow-sm">
                    <!-- Shadow -->
                    <polygon points="45,170 165,170 155,175 35,175" fill="#c3d7dc"/>
                    <!-- Back Book -->
                    <g transform="rotate(-8 100 100)">
                        <rect x="50" y="35" width="95" height="125" rx="6" fill="#faebd7" stroke="#90a89d" stroke-width="1.5"/>
                        <!-- Line Illustrations on Cover -->
                        <path d="M 75 80 C 75 60, 115 60, 115 80 Z" fill="none" stroke="#7a9689" stroke-width="1.5"/>
                        <path d="M 85 110 Q 95 90 105 110" fill="none" stroke="#7a9689" stroke-width="1.5"/>
                        <circle cx="80" cy="125" r="8" fill="none" stroke="#7a9689" stroke-width="1.5"/>
                        <circle cx="110" cy="125" r="8" fill="none" stroke="#7a9689" stroke-width="1.5"/>
                    </g>
                    <!-- Front Book -->
                    <g transform="rotate(4 100 100)">
                        <rect x="60" y="38" width="95" height="125" rx="6" fill="#fcf8f2" stroke="#819c8f" stroke-width="1.5"/>
                        <!-- Bear & Bunny Outlines -->
                        <circle cx="110" cy="85" r="16" fill="none" stroke="#688476" stroke-width="1.5"/>
                        <circle cx="103" cy="72" r="4" fill="none" stroke="#688476" stroke-width="1.5"/>
                        <circle cx="117" cy="72" r="4" fill="none" stroke="#688476" stroke-width="1.5"/>
                        <path d="M 105 88 Q 110 92 115 88" fill="none" stroke="#688476" stroke-width="1.5"/>
                        <!-- Bunny on front book -->
                        <ellipse cx="80" cy="125" rx="12" ry="14" fill="none" stroke="#688476" stroke-width="1.5"/>
                        <ellipse cx="75" cy="103" rx="3" ry="10" fill="none" stroke="#688476" stroke-width="1.5"/>
                        <ellipse cx="83" cy="103" rx="3" ry="10" fill="none" stroke="#688476" stroke-width="1.5"/>
                    </g>
                </svg>`
            },
            {
                id: 3,
                title: "Matching Animal Cards",
                category: "Learn & Play",
                price: 20.00,
                originalPrice: null,
                badge: null,
                bgColor: "bg-[#f5ede2]", // Light Beige
                // SVG Graphic for Animal Cards Stack
                svg: `
                <svg viewBox="0 0 200 200" class="w-full h-full object-contain p-4 drop-shadow-sm">
                    <!-- Card Stack Shadow -->
                    <rect x="35" y="40" width="60" height="75" rx="8" fill="#e8dacb"/>
                    <rect x="38" y="37" width="60" height="75" rx="8" fill="#efe2d4"/>
                    <g transform="rotate(-5 65 70)">
                        <rect x="35" y="35" width="60" height="75" rx="8" fill="#fff9f2" stroke="#e2d3c1" stroke-width="1.5"/>
                        <!-- Fox -->
                        <polygon points="65,55 52,72 78,72" fill="#d97736"/>
                        <polygon points="65,55 60,72 70,72" fill="#ffffff"/>
                        <circle cx="61" cy="64" r="1.5" fill="#2b2b2b"/>
                        <circle cx="69" cy="64" r="1.5" fill="#2b2b2b"/>
                    </g>
                    <!-- Top Right Deer Card -->
                    <g transform="rotate(6 130 65)">
                        <rect x="100" y="30" width="60" height="75" rx="8" fill="#fff9f2" stroke="#e2d3c1" stroke-width="1.5"/>
                        <!-- Deer -->
                        <ellipse cx="130" cy="68" rx="10" ry="14" fill="#c48b59"/>
                        <path d="M 124 50 L 120 42 M 136 50 L 140 42" stroke="#8c582f" stroke-width="2" stroke-linecap="round"/>
                        <circle cx="127" cy="62" r="1.5" fill="#2b2b2b"/>
                        <circle cx="133" cy="62" r="1.5" fill="#2b2b2b"/>
                    </g>
                    <!-- Bottom Left Bear Card -->
                    <g transform="rotate(3 65 135)">
                        <rect x="35" y="100" width="60" height="75" rx="8" fill="#fff9f2" stroke="#e2d3c1" stroke-width="1.5"/>
                        <!-- Bear -->
                        <circle cx="65" cy="135" r="15" fill="#a0754c"/>
                        <circle cx="53" cy="123" r="5" fill="#a0754c"/>
                        <circle cx="77" cy="123" r="5" fill="#a0754c"/>
                        <ellipse cx="65" cy="140" rx="7" ry="5" fill="#d4b494"/>
                        <circle cx="60" cy="132" r="1.5" fill="#2b2b2b"/>
                        <circle cx="70" cy="132" r="1.5" fill="#2b2b2b"/>
                    </g>
                    <!-- Bottom Right Fox Card -->
                    <g transform="rotate(-4 130 135)">
                        <rect x="100" y="100" width="60" height="75" rx="8" fill="#fff9f2" stroke="#e2d3c1" stroke-width="1.5"/>
                        <!-- Sitting Fox -->
                        <path d="M 120 145 C 115 125, 145 125, 140 145 Z" fill="#d97736"/>
                        <circle cx="130" cy="125" r="9" fill="#d97736"/>
                        <polygon points="130,132 125,124 135,124" fill="#ffffff"/>
                    </g>
                </svg>`
            },
            {
                id: 4,
                title: "Mini Alpaca Plush",
                category: "Snuggles & Friends",
                price: 32.00,
                originalPrice: null,
                badge: "Bestseller",
                bgColor: "bg-[#fbe3db]", // Soft Pastel Pink
                // SVG Graphic for Alpaca Plush
                svg: `
                <svg viewBox="0 0 200 200" class="w-full h-full object-contain p-4 drop-shadow-sm">
                    <ellipse cx="100" cy="175" rx="35" ry="7" fill="#ebd2c8"/>
                    <!-- Legs -->
                    <rect x="80" y="140" width="10" height="28" rx="4" fill="#fdfbf7"/>
                    <rect x="110" y="140" width="10" height="28" rx="4" fill="#fdfbf7"/>
                    <!-- Body (Fluffy) -->
                    <ellipse cx="100" cy="130" rx="32" ry="25" fill="#fdfbf7"/>
                    <!-- Neck -->
                    <path d="M 108 135 L 122 80 L 102 80 L 88 135 Z" fill="#fdfbf7"/>
                    <!-- Head -->
                    <ellipse cx="112" cy="72" rx="16" ry="14" fill="#fdfbf7"/>
                    <!-- Ears -->
                    <ellipse cx="105" cy="56" rx="4" ry="10" fill="#fdfbf7" transform="rotate(-15 105 56)"/>
                    <ellipse cx="118" cy="56" rx="4" ry="10" fill="#fdfbf7" transform="rotate(15 118 56)"/>
                    <!-- Face & Eyes -->
                    <circle cx="118" cy="70" r="2" fill="#3a2e2b"/>
                    <path d="M 122 73 Q 120 77 117 76" stroke="#a38b7d" stroke-width="1.2" fill="none"/>
                    <!-- Fluffy Topknot -->
                    <circle cx="110" cy="62" r="6" fill="#fff"/>
                    <circle cx="115" cy="61" r="5" fill="#fff"/>
                </svg>`
            },
            {
                id: 5,
                title: "Pastel Art Kit",
                category: "Creative Corners",
                price: 29.00,
                originalPrice: null,
                badge: "Limited",
                bgColor: "bg-[#d1e3e7]", // Muted Pastel Blue
                // SVG Graphic for Art Kit
                svg: `
                <svg viewBox="0 0 200 200" class="w-full h-full object-contain p-4 drop-shadow-sm">
                    <!-- Pouch -->
                    <rect x="30" y="90" width="55" height="75" rx="8" fill="#eaddca" stroke="#cbbaa3" stroke-width="1.5"/>
                    <path d="M 30 110 Q 57 120 85 110" stroke="#c0af97" stroke-width="1.5" fill="none"/>
                    <circle cx="57.5" cy="102" r="3" fill="#a08f77"/>
                    
                    <!-- Pencils -->
                    <g transform="translate(32, 25)">
                        <rect x="0" y="20" width="5" height="45" fill="#f4b2b0"/>
                        <rect x="8" y="15" width="5" height="50" fill="#aed1e6"/>
                        <rect x="16" y="25" width="5" height="40" fill="#c6e2b5"/>
                        <rect x="24" y="10" width="5" height="55" fill="#fcd7ad"/>
                    </g>

                    <!-- Paint Palette -->
                    <rect x="100" y="40" width="70" height="100" rx="10" fill="#f7f3ec" stroke="#dcd5ca" stroke-width="1.5"/>
                    <!-- Color Swatches -->
                    <circle cx="120" cy="60" r="8" fill="#f3b8aa"/>
                    <circle cx="150" cy="60" r="8" fill="#fad089"/>
                    <circle cx="120" cy="85" r="8" fill="#a3d2ca"/>
                    <circle cx="150" cy="85" r="8" fill="#5eaaa8"/>
                    <circle cx="120" cy="110" r="8" fill="#96bb7c"/>
                    <circle cx="150" cy="110" r="8" fill="#d9adad"/>

                    <!-- Brushes -->
                    <line x1="105" y1="150" x2="165" y2="150" stroke="#ccaa85" stroke-width="3" stroke-linecap="round"/>
                    <polygon points="165,148 173,150 165,152" fill="#5eaaa8"/>
                </svg>`
            },
            {
                id: 6,
                title: "Sensory Clay Trio",
                category: "Fun in Motion",
                price: 25.00,
                originalPrice: 35.00,
                badge: "Sale",
                bgColor: "bg-[#f7ebd9]", // Warm Cream Beige
                // SVG Graphic for Sensory Clay Jars & Wooden Tools
                svg: `
                <svg viewBox="0 0 200 200" class="w-full h-full object-contain p-4 drop-shadow-sm">
                    <!-- Wooden Tools on Left -->
                    <g transform="rotate(-30 60 140)">
                        <rect x="30" y="135" width="50" height="8" rx="3" fill="#d9b48f"/>
                        <polygon points="80,135 92,139 80,143" fill="#c49e78"/>
                    </g>
                    <g transform="rotate(-15 70 150)">
                        <rect x="40" y="150" width="55" height="9" rx="3" fill="#c49e78"/>
                    </g>

                    <!-- Stack of 3 Clay Jars -->
                    <!-- Bottom Jar (Pink) -->
                    <rect x="105" y="115" width="60" height="35" rx="6" fill="#f2c4c4"/>
                    <rect x="102" y="112" width="66" height="8" rx="3" fill="#e8b0b0"/>
                    <!-- Label -->
                    <rect x="109" y="123" width="52" height="20" rx="2" fill="#fffefb"/>
                    <line x1="115" y1="130" x2="155" y2="130" stroke="#d49b9b" stroke-width="2"/>

                    <!-- Middle Jar (Mint) -->
                    <rect x="105" y="80" width="60" height="35" rx="6" fill="#c2e2d2"/>
                    <rect x="102" y="77" width="66" height="8" rx="3" fill="#add4c2"/>
                    <!-- Label -->
                    <rect x="109" y="88" width="52" height="20" rx="2" fill="#fffefb"/>
                    <text x="135" y="98" font-size="5" text-anchor="middle" fill="#588b73" font-weight="bold">SENSORY</text>
                    <text x="135" y="103" font-size="4" text-anchor="middle" fill="#7ba38f">CLAY TRIO</text>

                    <!-- Top Jar (Beige) -->
                    <rect x="105" y="45" width="60" height="35" rx="6" fill="#eae0d0"/>
                    <rect x="102" y="42" width="66" height="8" rx="3" fill="#ded0bc"/>
                    <!-- Label -->
                    <rect x="109" y="53" width="52" height="20" rx="2" fill="#fffefb"/>
                    <line x1="115" y1="60" x2="155" y2="60" stroke="#bca88e" stroke-width="2"/>
                </svg>`
            }
        ];

        // State Management
        let selectedCategory = "All";
        let minPrice = 14.00;
        let maxPrice = 35.00;

        // DOM Elements
        const productGrid = document.getElementById('product-grid');
        const categoryRadios = document.querySelectorAll('input[name="category"]');
        
        const rangeMin = document.getElementById('range-min');
        const rangeMax = document.getElementById('range-max');
        const sliderRange = document.getElementById('slider-range');
        const minPriceDisplay = document.getElementById('min-price-display');
        const maxPriceDisplay = document.getElementById('max-price-display');
        
        const activePriceChip = document.getElementById('active-price-chip');
        const activeCategoryChip = document.getElementById('active-category-chip');
        const chipMin = document.getElementById('chip-min');
        const chipMax = document.getElementById('chip-max');
        const chipCategoryText = document.getElementById('chip-category-text');
        
        const removePriceChipBtn = document.getElementById('remove-price-chip');
        const removeCategoryChipBtn = document.getElementById('remove-category-chip');
        const clearAllBtn = document.getElementById('clear-all-btn');

        // Accordion Controls
        const categoryToggle = document.getElementById('category-toggle');
        const categoryContent = document.getElementById('category-content');
        const categoryArrow = document.getElementById('category-arrow');
        
        const priceToggle = document.getElementById('price-toggle');
        const priceContent = document.getElementById('price-content');
        const priceArrow = document.getElementById('price-arrow');

        // Render Products Function
        function renderProducts() {
            productGrid.innerHTML = '';

            const filteredProducts = productsData.filter(product => {
                const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
                const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
                return matchesCategory && matchesPrice;
            });

            if (filteredProducts.length === 0) {
                productGrid.innerHTML = `
                    <div class="col-span-full py-12 text-center">
                        <p class="text-gray-500 text-lg">No toys found matching your filter criteria.</p>
                        <button onclick="resetFilters()" class="mt-4 text-xs font-semibold text-pink-accent underline">Reset Filters</button>
                    </div>
                `;
                return;
            }

            filteredProducts.forEach(product => {
                const card = document.createElement('div');
                card.className = "flex flex-col group cursor-pointer";
                
                // Format prices
                const formattedPrice = product.price.toFixed(2).replace('.', ',') + " USD";
                const formattedOrigPrice = product.originalPrice 
                    ? `$${product.originalPrice.toFixed(2).replace('.', ',')} USD` 
                    : null;

                card.innerHTML = `
                    <!-- Card Image Container -->
                    <div class="relative w-full aspect-square ${product.bgColor} rounded-2xl overflow-hidden mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
                        ${product.badge ? `
                            <span class="absolute top-3 left-3 bg-[#383b42] text-white text-[11px] font-medium px-2.5 py-1 rounded-md z-10 shadow-sm">
                                ${product.badge}
                            </span>
                        ` : ''}
                        ${product.svg}
                    </div>

                    <!-- Card Details -->
                    <div class="flex flex-col flex-grow">
                        <h3 class="text-base sm:text-lg font-medium text-gray-900 mb-1.5 line-clamp-1">${product.title}</h3>
                        
                        <!-- Price Row -->
                        <div class="flex items-center gap-2 mb-4">
                            ${formattedOrigPrice ? `
                                <span class="text-gray-400 line-through text-sm sm:text-base font-normal">${formattedOrigPrice}</span>
                                <span class="text-pink-accent font-semibold text-sm sm:text-base">$${formattedPrice}</span>
                            ` : `
                                <span class="text-pink-accent font-semibold text-sm sm:text-base">$${formattedPrice}</span>
                            `}
                        </div>

                        <!-- Buy Now Button -->
                        <div class="mt-auto">
                            <button class="bg-lime-btn hover:bg-lime-btn-hover text-gray-900 font-semibold text-xs py-2.5 px-6 rounded-full transition-all duration-200 active:scale-95 shadow-xs">
                                Buy now
                            </button>
                        </div>
                    </div>
                `;
                productGrid.appendChild(card);
            });
        }

        // Dual Slider Logic
        function updateSlider() {
            let minVal = parseFloat(rangeMin.value);
            let maxVal = parseFloat(rangeMax.value);

            if (maxVal - minVal < 2) {
                if (event && event.target === rangeMin) {
                    rangeMin.value = maxVal - 2;
                    minVal = maxVal - 2;
                } else {
                    rangeMax.value = minVal + 2;
                    maxVal = minVal + 2;
                }
            }

            minPrice = minVal;
            maxPrice = maxVal;

            // Slider track visual calculations
            const minPercent = ((minVal - rangeMin.min) / (rangeMin.max - rangeMin.min)) * 100;
            const maxPercent = ((maxVal - rangeMin.min) / (rangeMin.max - rangeMin.min)) * 100;

            sliderRange.style.left = minPercent + "%";
            sliderRange.style.width = (maxPercent - minPercent) + "%";

            // Update displays
            minPriceDisplay.textContent = minVal.toFixed(2);
            maxPriceDisplay.textContent = maxVal.toFixed(2);

            chipMin.textContent = minVal.toFixed(2).replace('.', ',');
            chipMax.textContent = maxVal.toFixed(2).replace('.', ',');

            renderProducts();
        }

        // Event Listeners for Dual Slider
        rangeMin.addEventListener('input', updateSlider);
        rangeMax.addEventListener('input', updateSlider);

        // Category Filter Listener
        categoryRadios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                selectedCategory = e.target.value;
                if (selectedCategory !== "All") {
                    activeCategoryChip.classList.remove('hidden');
                    chipCategoryText.textContent = selectedCategory;
                } else {
                    activeCategoryChip.classList.add('hidden');
                }
                renderProducts();
            });
        });

        // Remove Filter Chips Logic
        removePriceChipBtn.addEventListener('click', () => {
            rangeMin.value = 10;
            rangeMax.value = 40;
            activePriceChip.classList.add('hidden');
            updateSlider();
        });

        removeCategoryChipBtn.addEventListener('click', () => {
            selectedCategory = "All";
            document.querySelector('input[name="category"][value="All"]').checked = true;
            activeCategoryChip.classList.add('hidden');
            renderProducts();
        });

        function resetFilters() {
            rangeMin.value = 14;
            rangeMax.value = 35;
            selectedCategory = "All";
            document.querySelector('input[name="category"][value="All"]').checked = true;
            activePriceChip.classList.remove('hidden');
            activeCategoryChip.classList.add('hidden');
            updateSlider();
        }

        clearAllBtn.addEventListener('click', resetFilters);

        // Accordion Collapsible Logic
        categoryToggle.addEventListener('click', () => {
            categoryContent.classList.toggle('hidden');
            categoryArrow.classList.toggle('rotate-180');
        });

        priceToggle.addEventListener('click', () => {
            priceContent.classList.toggle('hidden');
            priceArrow.classList.toggle('rotate-180');
        });

        // Load More button feedback
        document.getElementById('load-more-btn').addEventListener('click', function() {
            this.textContent = "Loading...";
            setTimeout(() => {
                this.textContent = "No More Products";
                this.disabled = true;
                this.classList.add('opacity-50', 'cursor-not-allowed');
            }, 800);
        });

        // Initialize App
        window.onload = function() {
            updateSlider();
            renderProducts();
        };