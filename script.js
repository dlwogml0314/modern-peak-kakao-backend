/* script.js 파일 */

// 1. 상품 데이터 (더 많은 데이터를 추가하여 페이지네이션 테스트)
const productsData = [
    { id: 101, name: 'Minimalist Black Trench Coat', category: 'Outer', subCategory: 'Jacket', originalPrice: 150000, salePrice: 135000, dateAdded: 20251115, description: "최소한의 디자인을 적용한 고급 트렌치 코트입니다. 방수 기능이 뛰어나고 우아한 실루엣을 자랑합니다." },
    { id: 102, name: 'Essential Cotton Denim Jacket (Blue)', category: 'Outer', subCategory: 'Denim', originalPrice: 95000, salePrice: 85000, dateAdded: 20251110, description: "어떤 코디에도 잘 어울리는 클래식한 블루 데님 재킷입니다. 사계절 활용 가능하며 내구성이 뛰어납니다." },
    { id: 103, name: 'Soft Teddy Fur Bomber', category: 'Outer', subCategory: 'Padding', originalPrice: 120000, salePrice: 75000, dateAdded: 20251101, description: "부드러운 테디 퍼 소재로 제작되어 보온성이 매우 뛰어난 숏 항공 점퍼입니다. 트렌디한 오버핏." },
    { id: 104, name: 'Classic PU Leather Biker Jacket', category: 'Outer', subCategory: 'Leather', originalPrice: 180000, salePrice: 175000, dateAdded: 20251025, description: "빈티지한 워싱을 더한 인조 가죽 바이커 재킷입니다. 견고한 지퍼와 디테일이 돋보입니다." },
    { id: 105, name: 'Urban Padded Vest (Grey)', category: 'Outer', subCategory: 'Padding', originalPrice: 70000, salePrice: 65000, dateAdded: 20251112, description: "가볍고 따뜻한 회색 패딩 베스트입니다. 레이어드하기 좋으며 활동성이 뛰어납니다." },
    { id: 106, name: 'Two-Tone Windbreaker Hoodie', category: 'Outer', subCategory: 'Jacket', originalPrice: 88000, salePrice: 79000, dateAdded: 20251030, description: "두 가지 색상이 배색된 스타일리시한 바람막이 후드티입니다. 가을철 아웃도어 활동에 적합합니다." },
    { id: 107, name: 'Vintage Washed Denim Overshirt', category: 'Outer', subCategory: 'Denim', originalPrice: 105000, salePrice: 99000, dateAdded: 20251105, description: "오버사이즈 핏의 빈티지 워싱 데님 오버셔츠. 재킷처럼 활용할 수 있는 두꺼운 소재입니다." },
    { id: 108, name: 'Warm Quilted Liner Jacket', category: 'Outer', subCategory: 'Jacket', originalPrice: 65000, salePrice: 55000, dateAdded: 20251108, description: "단독 또는 코트 안에 입기 좋은 퀼팅 라이너 재킷입니다. 가볍지만 따뜻합니다." },
    { id: 109, name: 'Suede Western Jacket (Brown)', category: 'Outer', subCategory: 'Leather', originalPrice: 160000, salePrice: 140000, dateAdded: 20251020, description: "부드러운 스웨이드 질감이 특징인 서부 스타일 재킷입니다. 독특한 포켓 디자인이 특징." },
    { id: 110, name: 'Long Heavy Duck Down Parka', category: 'Outer', subCategory: 'Padding', originalPrice: 220000, salePrice: 199000, dateAdded: 20251114, description: "극강의 추위에 대비할 수 있는 오리털 롱 파카입니다. 방풍 및 방수 기능." },
    { id: 111, name: 'Casual Checkered Blazer', category: 'Outer', subCategory: 'Jacket', originalPrice: 110000, salePrice: 105000, dateAdded: 20251103, description: "세련된 체크 패턴의 캐주얼 블레이저. 데일리룩이나 비즈니스 캐주얼에 활용하기 좋습니다." },
    { id: 112, name: 'Slim Fit Black Denim', category: 'Outer', subCategory: 'Denim', originalPrice: 75000, salePrice: 68000, dateAdded: 20251015, description: "가장 기본적인 슬림핏 블랙 데님 팬츠입니다. 뛰어난 신축성으로 착용감이 편안합니다." },
    { id: 113, name: 'Oversize Wool Half Coat', category: 'Outer', subCategory: 'Jacket', originalPrice: 140000, salePrice: 130000, dateAdded: 20251001, description: "오버사이즈 핏의 울 혼방 하프 코트입니다." },
    { id: 114, name: 'Lightweight Packable Down', category: 'Outer', subCategory: 'Padding', originalPrice: 90000, salePrice: 85000, dateAdded: 20251005, description: "가볍고 휴대하기 편한 패커블 다운 재킷." },
    { id: 115, name: 'Cropped Fit Leather Jacket', category: 'Outer', subCategory: 'Leather', originalPrice: 155000, salePrice: 150000, dateAdded: 20251009, description: "크롭 기장의 세련된 레더 재킷." },
    { id: 116, name: 'Dark Wash Raw Denim', category: 'Outer', subCategory: 'Denim', originalPrice: 80000, salePrice: 75000, dateAdded: 20251012, description: "짙은 생지 데님 재킷입니다." },
    // 추가 상품 (페이지 3 테스트용)
    { id: 117, name: 'Elegant Belted Blazer', category: 'Outer', subCategory: 'Jacket', originalPrice: 130000, salePrice: 125000, dateAdded: 20250928, description: "벨트 디테일이 들어간 우아한 블레이저." },
    { id: 118, name: 'Heavyweight Sherpa Coat', category: 'Outer', subCategory: 'Padding', originalPrice: 190000, salePrice: 180000, dateAdded: 20250920, description: "두툼하고 따뜻한 셰르파 소재의 코트." },
    { id: 119, name: 'Distressed Black Denim', category: 'Outer', subCategory: 'Denim', originalPrice: 110000, salePrice: 105000, dateAdded: 20250915, description: "빈티지한 디스트로이드 디테일의 블랙 데님." },
];

// 상태 변수
let cart = []; 
let currentFilter = 'All'; 
let currentPage = 1; 
const productsPerPage = 8; 

// DOM 요소 캐시
const productGrid = document.getElementById('product-grid');
const cartCountElement = document.getElementById('cart-count');
const totalCountElement = document.getElementById('total-product-count');
const sortSelect = document.getElementById('sort-select');
const subCategoryFilter = document.getElementById('sub-category-filter');
const bottomPagination = document.querySelector('.bottom-pagination');
const productModal = document.getElementById('product-modal');
const closeBtn = document.querySelector('.close-btn');

// 유틸리티: 가격 포맷팅
function formatPrice(price) {
    return price.toLocaleString('ko-KR') + '원';
}

// 2. 장바구니 기능
function updateCartCount() {
    cartCountElement.textContent = cart.length;
}

function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartCount();
        alert(`${product.name}이(가) 장바구니에 추가되었습니다. (현재 장바구니: ${cart.length}개)`);
    }
}

// 3. 정렬 로직
function sortProducts(products, sortBy) {
    // 상품 배열의 사본을 정렬하여 원본 데이터를 보호합니다.
    const sortedProducts = [...products]; 
    switch (sortBy) {
        case 'low-price':
            sortedProducts.sort((a, b) => a.salePrice - b.salePrice);
            break;
        case 'high-price':
            sortedProducts.sort((a, b) => b.salePrice - a.salePrice);
            break;
        case 'name':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name, 'ko-KR'));
            break;
        case 'date':
        default:
            sortedProducts.sort((a, b) => b.dateAdded - a.dateAdded); // 최신순
            break;
    }
    return sortedProducts;
}

// 4. 필터링 로직
function filterProducts(filter) {
    if (filter === 'All') {
        return productsData;
    }
    // subCategory 필터링
    return productsData.filter(p => p.subCategory === filter);
}

// 5. 페이지네이션 바 렌더링
function renderPagination(totalProducts) {
    bottomPagination.innerHTML = '';
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    if (totalPages <= 1) return;

    // << 와 <
    bottomPagination.innerHTML += `<a href="#" data-page="1" title="첫 페이지">&lt;&lt;</a>`;
    bottomPagination.innerHTML += `<a href="#" data-page="${currentPage > 1 ? currentPage - 1 : 1}" title="이전 페이지">&lt;</a>`;

    // 페이지 번호
    for (let i = 1; i <= totalPages; i++) {
        const activeClass = i === currentPage ? 'active' : '';
        bottomPagination.innerHTML += `<a href="#" class="${activeClass}" data-page="${i}">${i}</a>`;
    }

    // > 와 >>
    bottomPagination.innerHTML += `<a href="#" data-page="${currentPage < totalPages ? currentPage + 1 : totalPages}" title="다음 페이지">&gt;</a>`;
    bottomPagination.innerHTML += `<a href="#" data-page="${totalPages}" title="마지막 페이지">&gt;&gt;</a>`;
}

// 6. 상품 목록 렌더링 (페이지네이션 적용)
function renderProducts(products) {
    productGrid.innerHTML = '';
    
    // 페이지네이션 슬라이싱
    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    const paginatedProducts = products.slice(start, end);

    totalCountElement.textContent = products.length; // 총 개수 업데이트

    paginatedProducts.forEach(product => {
        const item = document.createElement('div');
        item.className = 'product-item';
        
        item.innerHTML = `
            <a href="#" class="product-link" data-product-id="${product.id}">
                <div class="product-image-placeholder">
                    ${product.category} / ${product.subCategory}
                </div>
                <p class="product-name">${product.name}</p>
                <p class="product-price">
                    ${product.originalPrice !== product.salePrice ? `<span class="original-price">${formatPrice(product.originalPrice)}</span>` : ''}
                    <span class="sale-price">${formatPrice(product.salePrice)}</span>
                </p>
            </a>
            <button class="add-to-cart-btn" data-product-id="${product.id}">장바구니 담기</button>
        `;

        productGrid.appendChild(item);
    });

    // 이벤트 리스너 재할당 (장바구니 및 상세 페이지)
    productGrid.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); 
            const productId = parseInt(e.target.dataset.productId);
            addToCart(productId);
        });
    });

    productGrid.querySelectorAll('.product-link, .product-image-placeholder').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // product-link의 data-product-id를 사용
            const productId = parseInt(e.currentTarget.closest('.product-item').querySelector('.product-link').dataset.productId);
            showProductModal(productId);
        });
    });

    renderPagination(products.length); // 페이지네이션 바 업데이트
}

// 7. 모달 표시 기능
function showProductModal(productId) {
    const product = productsData.find(p => p.id === productId);
    const modalDetails = document.getElementById('modal-details');

    if (!product) return;

    modalDetails.innerHTML = `
        <div class="modal-img">
            <p style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #555;">${product.name}</p>
        </div>
        <div class="modal-info">
            <h3>${product.name}</h3>
            <p><strong>상품 번호:</strong> ${product.id}</p>
            <p><strong>카테고리:</strong> ${product.category} > ${product.subCategory}</p>
            <p>${product.description}</p>
            <div class="modal-price-tag">
                <span class="original-price">${formatPrice(product.originalPrice)}</span> ${formatPrice(product.salePrice)}
            </div>
            <button class="add-to-cart-btn" data-product-id="${product.id}" style="width: 100%; padding: 15px; background-color: var(--highlight-color); color: var(--primary-color); border: none; font-size: 16px; margin-top: 15px; font-weight: 700; cursor: pointer;">구매/장바구니 추가</button>
        </div>
    `;

    // 모달 내부의 장바구니 버튼 이벤트
    modalDetails.querySelector('.add-to-cart-btn').addEventListener('click', () => {
        addToCart(product.id);
        // productModal.style.display = 'none'; // 추가 후 모달 닫기
    });

    productModal.style.display = 'block'; // 모달 열기
}

// 8. 메인 핸들러: 모든 동작의 중심
function mainRenderHandler(newPage = 1) {
    currentPage = newPage;
    
    // 1. 필터링
    const filtered = filterProducts(currentFilter);
    
    // 2. 정렬
    const sorted = sortProducts(filtered, sortSelect.value); 
    
    // 3. 렌더링
    renderProducts(sorted);
}

// 9. 이벤트 리스너 설정
// 정렬 드롭다운 변경 시
sortSelect.addEventListener('change', () => mainRenderHandler(1)); 

// 서브 카테고리 필터 버튼 클릭 시
subCategoryFilter.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target;
    if (target.classList.contains('filter-btn')) {
        subCategoryFilter.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        target.classList.add('active');
        currentFilter = target.dataset.filter;
        mainRenderHandler(1); // 필터 변경 시 1페이지로 이동
    }
});

// 페이지네이션 버튼 클릭 시
bottomPagination.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target;
    if (target.tagName === 'A' && target.dataset.page) {
        const newPage = parseInt(target.dataset.page);
        if (newPage !== currentPage) {
             mainRenderHandler(newPage);
        }
    }
});

// 모달 닫기 이벤트
closeBtn.onclick = function() {
    productModal.style.display = 'none';
}
window.onclick = function(event) {
    if (event.target === productModal) {
        productModal.style.display = 'none';
    }
}

// 페이지 로드 시 초기 렌더링
window.addEventListener('load', () => {
    mainRenderHandler();
    updateCartCount();
});