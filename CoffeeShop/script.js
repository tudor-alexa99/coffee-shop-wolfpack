// reorganize the plates

window.onload = function() {
    resizePlates();
    populateDishes();
};

window.onresize = function () {
    resizePlates();
};

// window.onscroll = function () {
//     scrollDelay();
// }

function resizePlates() { // function thar resizes the container of all-dishes dynamically
    //get the size of all-dishes container
    const container = document.getElementById("all-dishes-container");
    //get the size of a box containing information about a dish

    const card = document.querySelector('.dish-container');
    const containerSize = window.innerWidth;
    const cardSize = card.offsetWidth;
    const fourCards = cardSize * 4;
    const threeCards = cardSize * 3;
    if (containerSize >= fourCards){
        container.style.width = `${fourCards}px`;
        console.log("Resized to 4");
    }

    else if (containerSize >= threeCards ){
        container.style.width = `${threeCards}px`;
        console.log("Resized to 3");
    }

    else{
        container.style.width = `${fourCards / 2}px`;
    }
}

//
// function scrollDelay() {
//     console.log("Scroll");
// }

function Dish(url, name, category, price){
    this.url = url;
    this.name = name;
    this.category = category;
    this.price = price;
}

function dishContainerHTML(dish){
    const text = '<div class=\"dish-container\"><img class=\"dish\" src=\"' +dish.url + "\"  alt=\"dish\">\n" +
        "      <p class=\"dish-name\">' + dish.name + ' </p>\n" +
        "      <p class=\"dish-category\">' + dish</p>\n" +
        "      <p class=\"dish-price\">$12.00</p>\n" +
        "    </div>"
}

function populateDishes() {

}