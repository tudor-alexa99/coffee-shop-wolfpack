// reorganize the plates

window.onload = function() {
    resizePlates();
};

window.onresize = function () {
    resizePlates();
};

// window.onscroll = function () {
//     scrollDelay();
// }

function resizePlates() { // function thar resizes the container of all-dishes dynamically
    //get the size of all-dishes container
    var container = document.getElementById("all-dishes-container");
    //get the size of a box containing information about a dish
    let card = document.querySelector('.dish-container');
    let containerSize = container.offsetWidth;
    let cardSize = card.offsetWidth;

    let fourCards = cardSize * 4;
    let threeCards = cardSize * 3;

    // console.log(threeCards);
    // console.log(containerSize);
    // return;

    if (containerSize < fourCards && containerSize >= threeCards){
        container.style.width = threeCards + "px";
        console.log("Resized to 3");
    }
    if(containerSize >= fourCards){
        container.style.width = fourCards + "px";
        console.log("Resized to 4");
    }
    // console.log("Resize");
    // console.log(container.offsetWidth);
}

//
// function scrollDelay() {
//     console.log("Scroll");
// }