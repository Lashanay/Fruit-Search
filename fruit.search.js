let fruits = [
    'Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 
    'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 
    'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 
    'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 
    'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 
    'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 
    'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 
    'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 
    'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 
    'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 
    'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 
    'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 
    'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'
];

// Sort fruit names in the order givin.
    let sortedFruits = fruits.sort();

//reference
    let input = document.getElementById("input");

//Execute funtion on keyup
    input.addEventListener("keyup", (e) => {

//loop through above array
//Initially remove all elements (so if the user erases a letter or adds a new letter then clean previous outputs)
    removeElements();
    for (let i of sortedFruits) {

//convert input to lowercase and compare with each string.
    if (
    i.toLowerCase().startsWith(input.value. toLowerCase()) &&
    input.value != ""
    ) {

//create li element
    let listItem = document.createElement("li");

//One common class name
    listItem.classList.add("list-items");
    listItem.style.cursor = "pointer";
    listItem.setAttribute("onclick", "displayNames('" + i + "')");

//Display matched part in bold
    let word = "<b>" + i.substr(0, input.value.length) + "</b>";
    word += i.substr(input.value.length);

// Display the value array
        listItem.innerHTML = word;
        document.querySelector(".list").appendChild(listItem);

    
       }
    }
});

function displayNames(value) {
    input.value = value;
    removeElements();
}
function removeElements() {


//clear all the item
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
    item.remove();
    });
}