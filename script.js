//copy menu
function copyMenu(){

    let dptCategory = document.querySelector('.dpt-cat');
    let dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    //Copy nav
    let mainNav = document.querySelector('.header-nav nav');
    let navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;//#endregion
     
    // copy .header-nav .wrapper to thetop-nav
    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}

copyMenu();

//show mobile menu
const menuButton = document.querySelector(".trigger"),
	closeButton = document.querySelector(".t-close"),
	addclass = document.querySelector(".site");

menuButton.addEventListener("click", function () {
	addclass.classList.toggle("showmenu");
});

closeButton.addEventListener("click", function () {
	addclass.classList.remove("showmenu");
});

//show sub menu
const submenu = document.querySelectorAll(".has-child .icon-small");
submenu.forEach((menu) => menu.addEventListener("click", toggle));

function toggle(e) {
	e.preventDefault();
	submenu.forEach((item) =>
		item != this
			? item.closest(".has-child").classList.remove("expand")
			: null
	);
	if (this.closest(".has-child").classList != "expand");
	this.closest(".has-child").classList.toggle("expand");
}

// Slider -----------------
const swiper = new Swiper('.swiper', {
    loop: true,
    parallax:true,
    autoplay: {
        delay: 5000,
    },
  
    pagination: {
      el: '.swiper-pagination',
    },

     // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  
  });
  
//show search ---------------
const searchButton = document.querySelector(".t-search"),
	    tClose = document.querySelector(".search-close"),
	    showClass = document.querySelector(".site");

searchButton.addEventListener("click", function () {
	showClass.classList.toggle("showsearch");
});

tClose.addEventListener("click", function () {
	showClass.classList.remove("showsearch");
});

//show dpt menu
const dptButton = document.querySelector(".dpt-cat .dpt-trigger"),
	    dptClass = document.querySelector(".site");

dptButton.addEventListener("click", function () {
	dptClass.classList.toggle("showdpt");
});

//product image slider
var productThumb = new Swiper(".small-image", {
	loop: true,
	spaceBetween: 10,
	slidesPerView: 3,
	freeMode: true,
	watchSlidesProgress: true,
	breakpoints: {
		481: {
			spaceBetween: 32,
		},
	},
});

var productBig = new Swiper(".big-image", {
	loop: true,
	autoHeight: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	thumbs: {
		swiper: productThumb,
	},
});

//stock products bar width percentage
let stocks = document.querySelectorAll('.products .stock');

for(let x = 0; x < stocks.length; x++){
	let stock = stocks[x].dataset.stock,
	available = stocks[x].querySelector('.qty-available').innerHTML,
	sold = stocks[x].querySelector('.qty-sold').innerHTML,
	percent = sold*100/stock;

	stocks[x].querySelector('.available').style.width = percent + '%';
}

//Filter show / Hide
const Fpopup = document.querySelector('.filter');
const Ftrigger = document.querySelector('.filter-trigger');

if(Ftrigger){
	Ftrigger.addEventListener('click', () => {
		Fpopup.classList.toggle('show');
	});
}


// Auto close by click outside .filter
document.addEventListener('click', (e) => {
  if (!Fpopup.contains(e.target) && !Ftrigger.contains(e.target)) {
    Fpopup.classList.remove('show');
  }
});


// show cart from mobile menu
const divPopup = document.querySelector('.mini-cart');
const divTrigger = document.querySelector('.cart-trigger');

divTrigger.addEventListener('click', () => {
	divPopup.classList.toggle('show');
})

// Auto close by click outside cart in mobile menu
document.addEventListener('click', (e) => {
	if (!divPopup.contains(e.target) && !divTrigger.contains(e.target)) {
		divPopup.classList.remove('show');
	}
});


//show modal on load
window.onload = function () {
	document.querySelector(".site").classList.toggle("showmodal");
};
document.querySelector(".modalclose").addEventListener("click", function () {
	document.querySelector(".site").classList.remove("showmodal");
});