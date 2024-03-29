let allGridItems = [...document.getElementsByClassName("grid-item")];
let popupBg = document.getElementById("popup-bg");
let popupImg = document.getElementById("popup-img");

const openPopup = (e) => {
  let gridItemClicked = e.target.closest(".grid-item .grid-img");
  console.log(gridItemClicked)
  let clickedImageName = gridItemClicked.id;
  popupBg.classList.add("active");
  popupImg.src = gridItemClicked.src;
  console.log(clickedImageName)
};

const closePopup = () => {
  popupBg.classList.remove("active");
};

allGridItems.forEach((el) => el.addEventListener("click", openPopup));

popupImg.addEventListener("click", (e) => e.stopPropagation());
popupBg.addEventListener("click", closePopup);





