const items = [
  { id: 1, name: "apple", price: 1.75, categoryId: 1, inventory: 100 },
  { id: 2, name: "banana", price: 0.25, categoryId: 1, inventory: 100 },
  { id: 3, name: "orange", price: 1.0, categoryId: 1, inventory: 100 },
  { id: 4, name: "broccoli", price: 3.0, categoryId: 2, inventory: 100 },
  { id: 5, name: "cucumber", price: 1.0, categoryId: 2, inventory: 100 },
  { id: 6, name: "milk", price: 5.75, categoryId: 3, inventory: 100 },
  { id: 7, name: "cheddar cheese", price: 4.0, categoryId: 3, inventory: 100 },
  { id: 8, name: "sourdough loaf", price: 5.5, categoryId: 4, inventory: 100 },
];

const cart = [];

// ------------------ Complete the functions written below ------------------------------ //

function logItemNames() {
  //TODO: use the .forEach() method to log out the name of each item
  cart.forEach(function (item) {
    // For each item in the 'cart', log out its name to the console
    console.log(item.name);
  });
  // I find the () usage kind of strange but it works specifically for.each(pass through fuction is HUGE)
}

/**
 * @param {number} id
 * @returns {{id: number, name: string, price: number, category: string, inventory: number}} item
 */
function findItemById(id) {
   // Use the .find() method to search for an item with a matching id
   const foundItem = items.find(item => item.id === id);
  //it took me a long time but I undertsand the syntax now. items.find = look thorugh array called items; item is a paramter which is kind of like i = i++ in a for loop; item.id look for something that is an ID subtype of object in the array (which we are iterating through by item) and look for a match to id;
   // Return the found item or null if not found
   return foundItem || null;
}

/**
 * @returns {items[]} Returns a new array with capitalized names
 */
function capitalizeNames() {
  // TODO:  Use the .map() and possibly .slice() methods and return a new items array with the item names capitalized
  // DO NOT MUTATE THE ORIGINAL ARRAY IN YOU LOGIC
  // .map is a method that will create a new array from the "parent" array.  The ... is actually an argument passed into the .map method to tell the .map to copy all elements of the origional array. If we wanted to create a copy of the array with only one element type we could put in item.element instead and have a shortened array.
    const capitalizedItems = items.map(item => {
      // Create a new object with the same properties as the original item
      return {
        ...item,
        name: item.name.toUpperCase(), // Capitalize the 'name' property
      };
    });
  
    return capitalizedItems;
  }
  // i'm going to keep it 100% real I do not understand everyhting on this fuction. I will ask during office hours sometime. I understand a new array is created called capitalizedItems and that the .map function is used to iterate through the origional array and populate the new array. I understand this is done so we don't mutate the origional array.  But I don't really get the ...item syntax. I see how it's chaning the name property specifically. This is definilty not "in my fingers"
}

/**
 * @returns {number} the sum of all inventory items
 */

// so .reduce is a built in method that sums things. it takes two parametrs 1) you need to make a variable in this case invcounter or you can just use acculator which is the running total and intiilzied in the method to 0 by defualt. The second parameter is a counting thing like i = i++;  But key syntax is return invcounetr/accumulator which is initlized ot 0 PLUS + item.inventory which specifies the thing you are trying to accumluate. becuase you could also accumulat price if you so chose by using something like item.price. ACtually this happens to be the next question...
function calculateTotalInventory() {
   // Use the .reduce() method to calculate the total inventory
   const totalInventory = items.reduce((invcounter, item) => {
    // Add the 'inventory' property of each item to the accumulator
    return invcounter + item.inventory;
  }, 0); // Initialize the accumulator to 0

  return totalInventory;
}

/**
 * @returns {number} the total price of all inventory items combined
 */
function calculateAllInventoryPrice() {
  // TODO Use the .reduce() method to return the total price of all the items in inventory
  const totalInventoryPrice = items.reduce((pricecounter, item) => {
    // Add the 'inventory' property of each item to the accumulator
    return pricecounter + item.price;
  }, 0); // Initialize the accumulator to 0


}

/**
 * @param {string} name
 * @returns {number} the price of the item passed in
 */
function getItemPriceByName(name) {
  // TODO: Use your knowledge of objects and arrays to get the price of the item passed in
  const itempricebyname = items.find(item => item.name === name)
    return item ? item.price : null;
    // item ? is using the truthiness concept we learned earlier. Why is it better than just return item.price? I didn't get this error becuase i'm having some trouble running/troubleshooting the code but I understand it can create a problem. Where there is a call to a value which is undefined and it can cause a runtime error.  I find this a little odd, given everything elese in arrays in JAvascrip seem to just give you undefined as an answer. E.g. when you try to call an element of an array which is outside the boundries of an array. I'm not sure why this error is different.

}

/**
 * @param {categoryId} id of category to find
 * @returns {items[]} array of all items which belong to the given category
 */
function filterItemsByCategoryId(categoryId) {
    // Use the .find() method to search for an item with the specified name
    const foundItem = items.find(item => item.categoryId === categoryId);

    // If an item with the specified name is found, return its price; otherwise, return null
    return foundItem ? foundItem.categoryId : null;

}

function logCartItems() {
  // Use a loop or array method to iterate through the cart
  cart.forEach(item => {
    // Log the details of each item to the console
    console.log(`Item: ${item.name}, Price: $${item.price.toFixed(2)}, Quantity: ${item.quantity}`);
  });
}


/**
 * @returns { number } returns the total price of items in your cart
 */
function calculateTotalCartPrice() {  
    // Use the .reduce() method to calculate the total price
    const totalInventoryPrice = items.reduce((pricecounter, item) => {
      return pricecounter + (item.price * item.inventory);
  }, 0);
  // the initilization of the accumultor to zero is strange to me. It's just not obvious or clear that the 0); is an argument and being applied to the accumulator. Although having it apply to anything other than the accuulator makes less sense.  It's just that the syntax as written seems confusing (accumluator, elementplaceholder) {logic stuff} 0; initilization at the end? why not before the logic? it just kinda hanging out.

// --------------------- DO NOT CHANGE THE CODE BELOW ------------------------ //

const ids = prompt(
  "enter numbers separated by commas for the ids of the items you want to add to your cart",
  "1, 3, 5"
);
// Split the string of numbers into an array of strings.
const idArr = ids.split(", ");

idArr.forEach((id) => cart.push(id));
console.log(`The names of all the items are: `);
logItemNames();
const itemId = prompt("enter the id of an item you are trying to find", "1");
console.log(
  `The item with id ${itemId} is  ${JSON.stringify(
    findItemById(+itemId),
    null,
    2
  )}`
);
console.log(
  "We can map over an array and return a new array with the names capitalized like so: ",
  capitalizeNames()
);
console.log(
  "The total inventory of all grocery items is: ",
  calculateTotalInventory()
);
console.log(
  "The total price of all items in inventory is: ",
  calculateAllInventoryPrice()
);

const itemToFind = prompt(
  "Enter the name of an item to find the price of",
  "apple"
);
console.log(`The price of ${itemToFind} is: `, getItemPriceByName(itemToFind));

const categoryId = prompt(
  "Enter a number between 1-4 to filter only items with that categoryId",
  2
);
console.log(
  `The items in category ${categoryId} are: `,
  filterItemsByCategoryId(+categoryId)
);

console.log("Cart items: ");
logCartItems();

console.log(
  `The total price of the items in your cart is: `,
  calculateTotalCartPrice()
);
