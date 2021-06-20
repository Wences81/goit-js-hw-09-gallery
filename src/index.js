import './sass/main.scss';

const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];




const imagesContainer = document.querySelector(".js-gallery");

const imagesMarkup = createImageCardsMarkup(galleryItems);

imagesContainer.insertAdjacentHTML("beforeend", imagesMarkup);

imagesContainer.addEventListener("click", openImagesContainerClick)



function createImageCardsMarkup(galleryItems) {

  return galleryItems
    
    .map(({ preview, original, description }) => {
     
    return `
   <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li> `;
    
  })
    .join("");
  
}





const openModal = document.querySelector(".js-lightbox")

const changeSrcImage = document.querySelector(".lightbox__image")




function openImagesContainerClick(e) {

  e.preventDefault();

  const isGalleryImage = e.target.classList.contains("gallery__image");

  if (!isGalleryImage) {
    return
  }

    openModal.classList.add("is-open");

    changeSrcImage.src = e.target.dataset.source;
    changeSrcImage.alt = e.target.alt;

    


    window.addEventListener("keydown", onEscClick);

    window.addEventListener("keydown", onArrowPress)


  
}



const closeModal = document.querySelector('[data-action="close-lightbox"]');

closeModal.addEventListener("click", onCloseModal);


const overlay = document.querySelector(".lightbox__overlay");

 overlay.addEventListener("click", onCloseModal);


function onCloseModal() {
  
  openModal.classList.remove("is-open");
  
  changeSrcImage.src = "";
  changeSrcImage.alt = "";
 
  

  window.removeEventListener("keydown", onEscClick);

  window.removeEventListener("keydown", onArrowPress);


}






function onEscClick(e) {

  if (e.key === "Escape") {
   
    onCloseModal();

 }
  
}


let arrowImages = [];
galleryItems.forEach(item => {
  arrowImages.push(item.original);
});

function onArrowPress(e) {

  let index = arrowImages.indexOf(changeSrcImage.src);

  if (e.key === "ArrowRight") {
    
    if (index < arrowImages.length - 1) {
      changeSrcImage.setAttribute("src", arrowImages[index + 1]);
    } else {
      index = -1;
      changeSrcImage.setAttribute("src", arrowImages[index + 1]);
    }
  }

  if (e.key === "ArrowLeft") {

    if (index === 0) {
      index = arrowImages.length;
      changeSrcImage.setAttribute("src", arrowImages[index - 1]);

    } else changeSrcImage.setAttribute("src", arrowImages[index - 1]);
  }
  
}
