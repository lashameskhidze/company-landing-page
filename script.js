let boxes = document.querySelector(".boxes");
let portfolioBtn = document.querySelector(".portfolioBtn");

let limit = 2;
let skip = 4;  


async function fetchData() {
    const res = await fetch(`https://dummyjson.com/products?limit=4`);
    const data = await res.json();

    console.log(data);
    HtmlBoxes(data.products);
}

fetchData();

function HtmlBoxes(data) {
    data.forEach((product) => {
        let erti = document.createElement("div");
        erti.classList.add("pirveli");
        erti.innerHTML = `
            <div class="photo">
                <img src="${product.images[0]}" alt="">
                <div class="num">
                    <p>${product.id}</p>
                </div>
            </div>
            <div class="text">
                <p class="mainText">${product.category}</p>
                <p class="smallText">$${product.price}</p>
            </div>
        `;
        boxes.appendChild(erti);
    });
}


portfolioBtn.addEventListener("click", async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
    const data = await res.json();

    console.log(data);
    HtmlBoxes(data.products);

    skip += limit;

    if(skip>=8){
        portfolioBtn.style.display="none"
    }
});




let lastlargediv=document.getElementById("lastlargediv")
let lastBoxes=document.getElementById("lastBoxes")

async function didiDivFetchData() {
    const res=await fetch(`https://dummyjson.com/products?limit=1`)
    const data=await res.json()


    console.log(data);
    didiDivHTMLbox(data.products)
}

didiDivFetchData()


function didiDivHTMLbox(data){
    data.forEach((el)=>{
        let largeDiv=document.createElement("div")
        largeDiv.classList.add("large")
        largeDiv.innerHTML=`
        <div class="left">
                    <img class="img" src="${el.images[0]}" alt="">
                </div>

                <div class="right">
                    <p class="main">${el.title}</p>
                    <p class="little">${el.description}</p>
                </div>
        `
        lastlargediv.appendChild(largeDiv)
    })
}


async function pataraDivFetchData() {
    const res=await fetch(`https://dummyjson.com/products?limit=3&skip=1`)
    const data=await res.json()

    console.log(data);
    pataraDivHtmlBox(data.products)
}

pataraDivFetchData()


function pataraDivHtmlBox(data){
    data.forEach((el)=>{
        let littleDiv=document.createElement("div")
        littleDiv.classList.add("Lboxes")
        littleDiv.innerHTML=`
                        <div class="erti">
                    <div class="zeda">
                        <img src="${el.images[0]}" alt="">
                    </div>
                    <div class="qveda">
                        <p>${el.title}</p>
                    </div>
                </div>
        `
        lastBoxes.appendChild(littleDiv)
    })
}

let lastBtn=document.getElementById("lastBtn")

let lastlimit=3
let lastskip=4


lastBtn.addEventListener("click", async()=>{
    const res = await fetch(`https://dummyjson.com/products?limit=${lastlimit}&skip=${lastskip}`);
    const data = await res.json();

    console.log(data);
    pataraDivHtmlBox(data.products);

    lastskip += lastlimit;

    if(lastskip>=9){
        lastBtn.style.display="none"
    }
})


const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const secondOpenModalBtn = document.getElementById("secondOpenModalBtn");
const closeBtn = document.querySelector(".close-btn");


openModalBtn.addEventListener("click", () => {
    modal.style.display = "block"; 
});


closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});


window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

secondOpenModalBtn.addEventListener("click", () => {
    modal.style.display = "block"; 
});




async function swiperdiv() {
    const res=await fetch(`https://dummyjson.com/users?limit=5`)
    const data=await res.json()

    

    let swiperWrapper=document.querySelector(".swiper-wrapper")

    data.users.forEach((product)=>{
        let swiperSlide=document.createElement("div")
        swiperSlide.classList.add("swiper-slide")
        swiperSlide.innerHTML=`
                <img class="img" src="${product.image
                }" alt="">
                <div class="text">
                    <p class="large">${product.firstName} </p>
                    <p class="little">${product.company.title}</p>
                </div>
        `
        swiperWrapper.appendChild(swiperSlide)
    })

}

swiperdiv()




document.addEventListener('DOMContentLoaded', function () {
    const swiperElement = document.querySelector('.mySwiper');
    const slidesContainer = swiperElement.querySelector('.swiper-wrapper');

    if (swiperElement && slidesContainer) {
    
        const checkAndInitializeSwiper = () => {
            const slides = slidesContainer.querySelectorAll('.swiper-slide');
            if (slides.length > 0) {
            
                const swiper = new Swiper(swiperElement, {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false, 
                    },
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        dynamicBullets: true, 
                    },
                    breakpoints: {
                        1200: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 2, 
                        },
                        372: {
                            slidesPerView: 1, 
                        },
                    },
                    on: {
                        init: function () {
                            this.autoplay.start(); 
                        },
                        slideChange: function () {
                            if (isNaN(this.realIndex)) {
                                console.warn('Invalid realIndex:', this.realIndex);
                            }
                        },
                        resize: function () {
                            this.update();
                        },
                    },
                });

                setTimeout(() => {
                    if (!swiper.autoplay.running) {
                        swiper.autoplay.start(); 
                    }
                    swiper.update();
                }, 100);

                window.addEventListener('resize', function () {
                    swiper.update(); 
                });
            } else {
                console.warn("No slides available for Swiper.");
            }
        };
        setTimeout(checkAndInitializeSwiper, 1000);
    } else {
        console.error("Swiper element '.mySwiper' or '.swiper-wrapper' not found.");
    }
});

let commentLimit=1
let commentSkip=0

async function comments() {
    const res=await fetch(`https://dummyjson.com/comments?limit=${commentLimit}&skip=${commentSkip}`)
    const data=await res.json()

    console.log(data);
    DetalComment(data)

    let totalProduct=data.total
    let totalPages=totalProduct/commentLimit
    console.log(totalPages);
    

}

comments()

function DetalComment(data){
    let MaincommentsDiv=document.getElementById("MaincommentsDiv")
    MaincommentsDiv.innerHTML=``

    data.comments.forEach((product)=>{
        let conteiner=document.createElement("div")
        conteiner.classList.add("conteiner")
        conteiner.innerHTML=`
        <div class="top">
            <img src="./Testimonials-container-photo.svg" alt="">
        </div>
        <p class="small">"${product.body}"</p>

        <div class="names">
        <p class="autor">${product.user.fullName}</p>
        <p class="company">Microsoft</p>
        </div>
        `

        MaincommentsDiv.appendChild(conteiner)
        
    })
}






let prevBtn=document.getElementById("prev")
let nextBtn=document.getElementById("next")



nextBtn.addEventListener("click", async ()=>{
    const res=await fetch(`https://dummyjson.com/comments?limit=${commentLimit}&skip=${commentSkip}`)
    const data=await res.json()

    let totalProduct=data.total
    let totalPages=totalProduct/commentLimit


    if(commentSkip<totalPages){
        DetalComment(data)

        commentSkip+=commentLimit

        
    }
    
})

prevBtn.addEventListener("click", async ()=>{
    const res=await fetch(`https://dummyjson.com/comments?limit=${commentLimit}&skip=${commentSkip}`)
    const data=await res.json()


    if(commentSkip>0){
        DetalComment(data)

        commentSkip-=commentLimit
       
    }
    
    
    
})


let form=document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault()
    let inputvalue=document.getElementById("input")
    console.log(inputvalue.value);
    inputvalue.value = "";
})



const track = document.querySelector('.slider-track');
const images = Array.from(track.children);

// Duplicate the images for infinite looping
images.forEach((image) => {
    const clone = image.cloneNode(true);
    track.appendChild(clone);
});
