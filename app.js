const galleryBtn= document.getElementById("gallery-btn")
const galleryItems= document.querySelectorAll(".gallery")
const galleryPage= document.getElementById("places-page")
const galleryTab= document.getElementById("gallery-tab")
const backContainer= document.getElementById("back-container")
const backBtn= document.getElementById("back")


const gallery1=document.querySelector(".gallery1")
const gallery2=document.querySelector(".gallery2")
const gallery3=document.querySelector(".gallery3")
const gallery4=document.querySelector(".gallery4")
const gallery5=document.querySelector(".gallery5")
const gallery6=document.querySelector(".gallery6")
const gallery7=document.querySelector(".gallery7")
const gallery8=document.querySelector(".gallery8")
const gallery9=document.querySelector(".gallery9")
const gallery10=document.querySelector(".gallery10")
const gallery11=document.querySelector(".gallery11")


function addGrid(){
     galleryTab.classList.add("not-active")
     galleryPage.classList.remove("places-page")
     galleryPage.classList.add("page-active")

     gallery1.classList.remove("gallery1")
     gallery2.classList.remove("gallery2")
     gallery3.classList.remove("gallery3")
     gallery4.classList.remove("gallery4")
     gallery5.classList.remove("gallery5")
     gallery6.classList.remove("gallery6")
     gallery7.classList.remove("gallery7")
     gallery8.classList.remove("gallery8")
     gallery9.classList.remove("gallery9")
     gallery10.classList.remove("gallery10")
     gallery11.classList.remove("gallery11")

     gallery1.classList.add("gallery-active")
     gallery2.classList.add("gallery-active")
     gallery3.classList.add("gallery-active")
     gallery4.classList.add("gallery-active")
     gallery5.classList.add("gallery-active")
     gallery6.classList.add("gallery-active")
     gallery7.classList.add("gallery-active")
     gallery8.classList.add("gallery-active")
     gallery9.classList.add("gallery-active")
     gallery10.classList.add("gallery-active")
     gallery11.classList.add("gallery-active")

     backContainer.classList.add("active")
}





galleryBtn.addEventListener("click",addGrid)