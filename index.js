const navBar = document.getElementById('nav_Bar')
const closeIconDiv = document.getElementById('closeIconDiv')
const toggleIconDiv = document.getElementById('toggleIconDiv')
const navLinks = document.querySelectorAll('.navLink')

// Add advert =====================================>

const closeAdvertIconDiv = document.getElementById('closeAdvertIconDiv')
const advertPage = document.getElementById('advert')

function showVistorPage(){
  setTimeout(()=> advertPage.style.opacity = 1,2000)
}
showVistorPage()

closeAdvertIconDiv.onclick = ()=>{
advertPage.style.display = "none"
}

toggleIconDiv.onclick = ()=>{
    navBar.classList.add('showNavBar')
    // advertPage.style.display = 'none'

}
closeIconDiv.onclick = ()=>{
    navBar.classList.remove('showNavBar')
}

function removeNav_Bar(){
    navBar.classList.remove('showNavBar')
    // advertPage.style.display = 'none'


}

removeNav_Bar()
navLinks.forEach(navLink =>{
    navLink.addEventListener('click', removeNav_Bar)
})


// Add Backround to the header Division

function addHeaderBg(){
    if(this.scrollY >= 20){
        const header = document.getElementById('header')
        header.classList.add('headerBg')
    }else{
        header.classList.remove('headerBg')
    }
}
window.addEventListener('scroll', addHeaderBg)


// Show Cart Screen ====================================>
const cartPage = document.getElementById('cartDivision')
const cartIcon = document.getElementById('headerCartBtn')
const closeCartIcon = document.getElementById('closeCartIcon')

cartIcon.onclick = ()=>{
 cartPage.style.top = '110px'
 advertPage.style.display = 'none'
}
closeCartIcon.onclick = ()=>{
  cartPage.style.top = '-250%'
}



// catalog JavaScript ==========================================>

const lists = document.querySelectorAll('.menuListItem')
const sectionItems = document.querySelectorAll('.sectionItem')

// Add active class(Background to the button) ===============>
for(let l = 0; l<lists.length; l++){
    lists[l].addEventListener('click', function(){
        for(let w = 0; w<lists.length; w++){
            lists[w].classList.remove('active')
        }
        this.classList.add('active')

        let dataFilter = this.getAttribute('data-filter')
        for(let y = 0; y<sectionItems.length; y++){
            sectionItems[y].classList.add('hide')
            sectionItems[y].classList.remove('live')
            if(sectionItems[y].getAttribute('data-item') == dataFilter || dataFilter == "all"){
                sectionItems[y].classList.remove('hide')
                sectionItems[y].classList.add('live')
            }
        }
    })
}

// heart icon Toggle Action ======================>
const heartIcons = document.querySelectorAll('#heartIcon')

for(let h = 0; h<heartIcons.length; h++){
  heartIcons[h].addEventListener('click', function(){
    heartIcons[h].innerHTML = `<i class='bx bxs-heart icon' style='color:#ed9d3e'  ></i>`

  })
}

// Toggle share links =============================>
const shareIcons = document.querySelectorAll('#shareIcon')
const shareLinks = document.querySelectorAll('#shareLinks')

for(let s = 0; s<shareIcons.length; s++){
  shareIcons[s].addEventListener('click', function(){
    for(let f = 0; f<shareLinks.length; f++){
      shareLinks[f].classList.add('displayIcons');
    }
   
  //  this.classList.remove('displayIcons')
 })
}  



// Adding item to cart =============================>
const addTocartButtons = document.querySelectorAll('#addToCartBtn')
const htmlCartItem = document.getElementById('itemsInCart') 


addTocartButtons.forEach(addButton =>{
addButton.addEventListener('click', addItemToCart)
} )

function addItemToCart(e){
  e.preventDefault()
  let btn = e.target;
  
  // let deleteItemBtn = btn.parentElement.parentElement.children[0].children[0].src;

  let cartImage = btn.parentElement.parentElement.children[0].children[0].src;
 
  let imageName = btn.parentElement.parentElement.children[1].children[0].innerText;
  
  let itemPrice = btn.parentElement.parentElement.children[1].children[2].innerText;
  

  let newItem = document.createElement('div')
  newItem.classList.add('item')
  newItem.innerHTML = `<div id="deleteCartItem">
                        <i class="uil uil-times icon"></i>
                      </div>
                      <div class="cartImg">
                          <img src="${cartImage}" alt="Cart Image">
                      </div>
                      <div class="ImageName">
                          <span>${imageName}</span>
                          <p>PRICE: ${itemPrice}</p>
                      </div>
                      <div class="itemControl">
                        <i class="uil uil-plus-circle icon"></i>
                        <span>x1</span>
                        <i class="uil uil-minus-circle icon"></i>
                      </div>`

  htmlCartItem.appendChild(newItem)  
  const cartTitle = document.querySelector('.cartTitle') 
  cartTitle.innerHTML = `<h2>Your Cart Details </h2>` 

}


// CountDown timer ==============================================>
let launchDate = new Date("Jan 1, 2028 12:00:00").getTime();
let timer = setInterval(tick, 1000)


function tick (){
let now = new Date().getTime();
let t = launchDate - now;

if (t > 0){
   
// Algorith to calculate hours....
    let hrs = Math.floor((t % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
    if (hrs < 10){
        hrs  = "0" + hrs;
    }
// Algorith to calculate Minutes ....
    let mins = Math.floor((t % (1000 * 60 * 60 )) / (1000 * 60));
    if (mins < 10){
        mins  = "0" + mins;
    }

// Algorithm to calculate Seconds....
   let secs = Math.floor((t % (1000 * 60)) / (1000));
   if (secs < 10){
    secs  = "0" + secs;
}

let time = ` ${hrs}  Hrs   |    ${mins} Mins  |  ${secs}  Sec`;

    document.querySelector('.countdown').innerHTML = time;
}
}



// Blog Post Fuction =============================================>
let postSwiper = new Swiper(".sectionContainer", {
    cssMode: true,
    loop: true,
    autoplay: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    mausehold: true,

    breakpoints: {
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
     
      
    }

  });

// Banner Swiper Fucntion ===========================>
let newSwiper = new Swiper(".bannerContent", {
    cssMode: true,
    loop: true,
    autoplay: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    mausehold: true,

  });

//   customer swiper function ====================================>

let customerSwiper = new Swiper(".clientBody", {
    cssMode: true,
    loop: true,
    autoplay: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    mausehold: true,

    breakpoints: {
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1240: {
        slidesPerView: 3,
        spaceBetween: 20,
        autoplay: false,
        loop: false,

      }
     
      
    }

  });




