window.onload = function() {
    // initialiseDishes();
    populateDishes();
    resizePlates();
};

window.onresize = function () {
    resizePlates();
};

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
    }

    else if (containerSize >= threeCards ){
        container.style.width = `${threeCards}px`;
    }

    else{
        container.style.width = `${fourCards / 2}px`;
    }
}

function Dish(url, name, category, price){
    this.url = url;
    this.name = name;
    this.category = category;
    this.price = price;
}

function addDishContainerHTML(dish){
    const htmlText = `
                      <img class="dish" src=${dish.url} alt="dish">
                      <p class="dish-name">${dish.name}</p>
                      <p class="dish-category">${dish.category}</p>
                      <p class="dish-price">${dish.price}</p>
                      `;


    let element = document.createElement("div");
    let attr = document.createAttribute("class");
    attr.value = "dish-container";
    element.setAttributeNode(attr);

    element.innerHTML = htmlText;
    let allDishesContainer = document.getElementById("all-dishes-container");
    allDishesContainer.appendChild(element);

    console.log(element);
}

function initialiseDishes() {
    // this method is only called once :(
    console.log(JSON.parse(localStorage.getItem("dishesList")));
    localStorage.clear();

    const dishes = [];
    let d1 = new Dish("images/dishes/dish_1.png", "Escargos", "Entrees", "$15.00");
    let d2 = new Dish("images/dishes/dish_2.png", "Salmon Pasta", "Second Courses", "$12.00");
    let d3 = new Dish("images/dishes/dish_3.png", "Chicken Breasts", "Entrees", "$5.00");
    let d4 = new Dish("images/dishes/dish_4.png", "Ground Beef", "Main courses", "$20.00");
    let d5 = new Dish("images/dishes/dish_5.png", "Fruit Salad", "Desserts", "$3.00");
    let d6 = new Dish("images/dishes/dish_6.png", "Veggie Salad", "Entrees", "$7.00");
    let d7 = new Dish("images/dishes/dish_7.png", "Salmon Salad", "Main Courses", "$10.00");

    dishes.push(d1);
    dishes.push(d2);
    dishes.push(d3);
    dishes.push(d4);
    dishes.push(d5);
    dishes.push(d6);
    dishes.push(d7);

    localStorage.setItem("dishesList", JSON.stringify(dishes));
    // console.log(JSON.stringify(dishes));
}

function populateDishes() {
    const dishesList = JSON.parse(localStorage.getItem("dishesList"));
    dishesList.forEach(dish => {
        addDishContainerHTML(dish);
    })
}