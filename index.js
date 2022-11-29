// import { artGallery } from './data.js'

// data object for gallery 


const artGallery = [
    {   
        group:["digital","retrato"],
        image:"/images/eowyn.jpg" ,
        alt: "éowyn",

    },
    {   
        group:["digital", "retrato"],
        image:"/images/arwen.jpg",
        alt:"arwen",
    },
    {   
        group:["digital", "retrato"],
        image:"/images/galadriel.jpg",
        alt:"galadriel",
    },
    {   
        group:["tradicional","fauflo"],
        image:"/images/lavendercat.jpg",
        alt:"gato 1",
    },
    {   
        group:["tradicional","fauflo"],
        image:"/images/loafcat.jpg",
        alt:"gato 2",
    },
        {   
        group:["tradicional","fauflo"],
        image:"/images/templecat.jpg",
        alt:"gato 3",
    },
    {   
        group:["digital", "retrato"],
        image:"/images/gazechoreo.jpg",
        alt:"cartel",
    },
    {   
        group:["digital", "retrato"],
        image:"/images/akashalines.jpg",
        alt:"akasha",
    },
    {   
        group:["digital","fauflo"],
        image:"/images/gatovolador.jpg",
        alt:"gato volador",
    },
    {   
        group:["digital","paisaje","fauflo"],
        image:"/images/shadow.jpg",
        alt:"panteras",
    },
    {   
        group:["digital","fauflo"],
        image:"/images/chamomile.jpg",
        alt:"manzanilla",
    },
    {   
        group:["digital","fauflo"],
        image:"/images/swan.jpg",
        alt:"cisne",
    },
    {   
        group:["tradicional","fauflo"],
        image:"/images/collagetrenza.jpg",
        alt:"collage 1",
    },
    {   
        group:["tradicional","fauflo"],
        image:"/images/collage7.jpg",
        alt:"collage 2",
    },
    {   
        group:["tradicional","fauflo"],
        image:"/images/collage8.jpg",
        alt:"collage 3",
    },
    {   
        group:["digital","fauflo"],
        image:"/images/perrin.jpg",
        alt:"perro",
    },
    {   
        group:["digital","paisaje"],
        image:"images/campatorres.jpg",
        alt:"campa torres",
    },
    {   
        group:["digital","paisaje"],
        image:"images/green.jpg",
        alt:"green",
    },
    {   
        group:["digital","fauflo"],
        image:"images/handflower.jpg",
        alt:"estudio",
    },
    {   
        group:["digital","fauflo"],
        image:"images/catpile.jpg",
        alt:"gatos",
    },
    {   
        group:["digital","fauflo"],
        image:"images/inaweek.jpg",
        alt:"cómic",
    },
    {   
        group:["tradicional","retrato"],
        image:"/images/mamiem.jpg",
        alt:"mamie m",
    },
    {   
        group:["digital","retrato"],
        image:"images/maneskinvamps.jpg",
        alt:"maneskin",
    },
    {   
        group:["digital","fauflo"],
        image:"/images/flowers.jpg",
        alt:"estudio 2",
    },
    {   
        group:["digital","fauflo"],
        image:"/images/birdies.jpg",
        alt:"periquitos",
    }
    
]

document.addEventListener('click', function(e){

    if(e.target.id === 'email'){
        alert("aguacooper@gmail.com")
    }
    if(e.target.id === 'instagram'){
        window.open("https://www.instagram.com/agua.jpg/")
    }
    if(e.target.id === 'twitter'){
       window.open("https://twitter.com/aguajpg")
    }
    if(e.target.id === 'todo'){
        render()
    }
    if(e.target.id === 'digital'){
        // alert("hello")
         document.getElementById('container').innerHTML=digital()
    }
    if(e.target.id === 'tradicional'){
        document.getElementById('container').innerHTML=tradicional()
    }
    if(e.target.id === 'retrato'){
        document.getElementById('container').innerHTML=retrato()
    }
    if(e.target.id ==='paisaje'){
        document.getElementById('container').innerHTML=paisaje()
    }
    if(e.target.id === "fauflo"){
        document.getElementById('container').innerHTML=fauflo()
    }
    if(e.target.id === "top-btn"){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

})
function digital(){
    let digitalArt= ''
    const getDigital=artGallery.filter(function(art){
        if(art.group.includes('digital')){
            digitalArt+=`
            <div class="modal">
                
            <img src="${art.image}" alt="${art.alt}">
        
             </div>

            `
        }
    })
    return digitalArt
}

function tradicional(){
    let tradicionalArt= ''
    const gettradicional=artGallery.filter(function(art){
        if(art.group.includes('tradicional')){
            tradicionalArt+=`
            <div class="modal">
                
            <img src="${art.image}" alt="${art.alt}">
        
             </div>

            `
        }
    })
    return tradicionalArt
}
function retrato(){
    let retratoArt= ''
    const getRetrato=artGallery.filter(function(art){
        if(art.group.includes('retrato')){
            retratoArt+=`
            <div class="modal">
                
            <img src="${art.image}" alt="${art.alt}">
        
             </div>

            `
        }
    })
    return retratoArt
}
function paisaje(){
    let paisajeArt= ''
    const getPaisaje=artGallery.filter(function(art){
        if(art.group.includes('paisaje')){
            paisajeArt+=`
            <div class="modal">
                
            <img src="${art.image}" alt="${art.alt}">
        
             </div>

            `
        }
    })
    return paisajeArt
}
function fauflo(){
    let faufloArt= ''
    const getFauflo=artGallery.filter(function(art){
        if(art.group.includes('fauflo')){
            faufloArt+=`
            <div class="modal">
                
            <img src="${art.image}" alt="${art.alt}">
        
             </div>

            `
        }
    })
    return faufloArt
}

function getGallery(){
    let getGalleryImage= ""

    const getGallerObj= artGallery.filter(function(art){

        getGalleryImage+=`    
            <div class="modal">
                
                    <img src="${art.image}" alt="${art.alt}">
                
            </div>

        `
    })
    return getGalleryImage
}


function render(){
    document.getElementById('container').innerHTML=getGallery()
}
render()














