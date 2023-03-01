// selectors for places pages
const galleryBtn= document.getElementById("gallery-btn")
const galleryItems= document.querySelectorAll(".gallery")
const galleryPage= document.getElementById("places-page")
const galleryTab= document.getElementById("gallery-tab")
const backContainer= document.getElementById("back-container")
const backBtn= document.getElementById("back")

// selectors for parallax scrolling

const toTop = document.getElementById("to-top")

// sector for gallery images
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

     // remover view gallery button
     galleryTab.classList.add("not-active")
     
     //add display grid to the whole section
     galleryPage.classList.remove("places-page")
     galleryPage.classList.add("page-active")
     
     //remove gallery images's style one by one
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
     
     //add new style to all the gallery images for grid
     galleryItems.forEach(items=>items.classList.add("gallery-active"))
     
     //show x mark
     backContainer.classList.add("active")
}

function removeGrid(){
     
     //remove new style to all the gallery images for grid
     galleryItems.forEach(items=>items.classList.remove("gallery-active"))
     

     ////add gallery images's style one by one
     gallery1.classList.add("gallery1")
     gallery2.classList.add("gallery2")
     gallery3.classList.add("gallery3")
     gallery4.classList.add("gallery4")
     gallery5.classList.add("gallery5")
     gallery6.classList.add("gallery6")
     gallery7.classList.add("gallery7")
     gallery8.classList.add("gallery8")
     gallery9.classList.add("gallery9")
     gallery10.classList.add("gallery10")
     gallery11.classList.add("gallery11")
     

     //display view gallery button and remove grid
     galleryTab.classList.remove("not-active")
     galleryPage.classList.remove("page-active")
     galleryPage.classList.add("places-page")
     
     //remove x mark
     backContainer.classList.remove("active")
     
}

function goToTop(){
      window.scrollTo(0,0)
}

function scrollToSection(sections) {
     const section = document.getElementById(sections);
     section.scrollIntoView({ behavior: "smooth" });
   }



//when view gallery is clicked
galleryBtn.addEventListener("click",addGrid)

//when x mark is clicked
backBtn.addEventListener("click",removeGrid)

//go back to top
toTop.addEventListener("click",goToTop)


//hamburger menu
const navIcons = document.querySelectorAll(".ham-menu")
const navBar= document.querySelector(".nav-bar ul")
const hamMenu= document.querySelector(".ham-menu")

navIcons.forEach(function(navIcon) {
     navIcon.addEventListener('click', function() {
       navIcon.classList.toggle('open');
     });
   });

hamMenu.addEventListener('click',function(){
     navBar.classList.toggle('open-bar')
})