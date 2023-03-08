// GLOBAL VARIABLES
const ramen_url = "http://localhost:3000/ramens"

const menu = document.querySelector("#ramen-menu")
const detailImage = document.querySelector(".detail-image")
const detailName = document.querySelector(".detail-name")
const detailRest = document.querySelector(".detail-restaurant")
const detailRating = document.querySelector("#rating-display")
const submitForm = document.querySelector("#new-ramen")

//! COMMUNICATION WITH THE SERVER
const fetchAllRamens = () => {
    fetch(ramen_url)
    .then((resp) => resp.json())
    .then((ramensArr) =>{
    console.log(ramensArr);
    ramensArr.forEach(ramenObj => {
    renderRamenPicture(ramenObj);
    })
    });
}
// RENDERING FUNCTIONS
renderRamenPicture = ramenObj => {
    const img = document.createElement("img")
    img.src = ramenObj.image;
    img.alt = ramenObj.name;
    img.addEventListener("elick", (e) => {
    console.log(e.target)
    console.log(ramenObj)
    detailImage.src = ramenObj.image
    detailName.textContent = ramenObj.name
    detailRest.innerText = ramenObj.restaurant
    detailRating.textContent = ramenObj.rating
    detailComment.textContent = ramenObj.comment
    })
    menu.append(img)
}
const init = () => {
    fetchAllRamens();
    submitForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const newRamenObj = {
            name: e.target.quesrySelector("#new-name").value,
            restaurant: e.target.restaurant.value,
            image: e.target[2].value,
            rating: document.getElementById("#new-rating").value,
            comment: e.target["new-comment"].value,
        };
        renderRamenPicture(newRamenObj);
    })
};
init();

//PAGE LOAD FUNCTIONS AND NEW RAMEN INFO


// NOTES
// init function is optional



