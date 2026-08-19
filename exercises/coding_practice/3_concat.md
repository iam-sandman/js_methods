##### 1. Concatenating Two Arrays.

```js
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const combinedArray = array1.concat(array2);
console.log(combinedArray);
```

</details>

###### Output:

```js
[1, 2, 3, 4, 5, 6];
```

##### 2. Create new array of all the users.

```js
const activeUsers = ["Alice", "Bob"];
const inactiveUsers = ["Charlie", "David"];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const allUsers = activeUsers.concat(inactiveUsers);
console.log(allUsers);
```

</details>

###### Output:

```js
["Alice", "Bob", "Charlie", "David"];
```

##### 3. Create combined array of all the arrays.

```js
const arrA = ["a", "b"];
const arrB = ["c", "d"];
const arrC = ["e", "f"];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const combinedArray = arrA.concat(arrB, arrC);
console.log(combinedArray);
```

</details>

###### Output:

```js
["a", "b", "c", "d", "e", "f"];
```

##### 4. Update the cart with following items ("bread", "cheese").

```js
const shoppingCart = ["milk", "eggs"];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const updatedCart = shoppingCart.concat("bread", "cheese");
console.log(updatedCart);
```

</details>

###### Output:

```js
["milk", "eggs", "bread", "cheese"];
```

##### 5. Add the following values to the array (3, [4, 5], 6).

```js
const list = [1, 2];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const updatedList = list.concat(3, [4, 5], 6);
console.log(updatedList);
```

</details>

###### Output:

```js
[1, 2, 3, 4, 5, 6];
```

##### 6. Concatenating an Empty Array. Calling `concat()` without any arguments creates a shallow copy of the array.

```js
const original = [1, 2, { id: 3 }];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const shallowOriginal = original.concat();
console.log(shallowOriginal);
```

</details>

###### Output:

```js
[1, 2, { id: 3 }];
```

##### 7. Accessing Elements from the Start (Positive Index). Access elements at position 0 and 2

```js
const fruits = ["apple", "banana", "cherry", "date"];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
console.log(fruits.at(0));
console.log(fruits.at(2));
```

</details>

###### Output:

```js
apple
---------------
cherry
```

##### 8. Accessing Elements from the End (Negative Index - The Main Use Case).Access elements at the end of an array.

```js
const colors = ["red", "green", "blue", "yellow"];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
// Equivalent to colors[colors.length - 1]

console.log(colors.at(-1));
console.log(colors.at(-2));
```

</details>

###### Output:

```js
yellow
----------------
blue
```

##### 9. Access characters from position 0, -1 and -5.

```js
const sentence = "JavaScript";
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
console.log(sentence.at(0));
console.log(sentence.at(-1));
console.log(sentence.at(-5));
```

</details>

###### Output:

```js
J;
t;
c;
```

##### 10. It return undefined for out of the list try accessing elements at index 3 and -4. Create a method that return "No items found" if an array element.

```js
const numbers = [10, 20, 30];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
console.log(numbers.at(3));
console.log(numbers.at(-4));

// when to use
const items = [];
const lastItemOrDefault = items.at(-1) ?? "No items found";
console.log(lastItemOrDefault); // Output: "No items found"

const data = [1, 2, 3];
const firstItemOrDefault = data.at(0) ?? "No items found";
console.log(firstItemOrDefault); // Output: 1
```

</details>

###### Output:

```js
undefined
------------------
undefined
------------------
"No items found"
------------------
1
```

##### 11. Logging Each Element:\*\*

```js
const fruits = ["apple", "banana", "cherry"];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
fruits.forEach((item) => console.log(item));
```

</details>

###### Output:

```js
apple;
banana;
cherry;
```

##### 12. Accessing Index and Array.

```js
const numbers = [10, 20, 30];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
numbers.forEach((item, index, arr) =>
  console.log(`Element at index ${index}: ${item}. Full array: ${arr}`),
);
```

</details>

###### Output:

```js
Element at index 0: 10. Full array: 10,20,30
Element at index 1: 20. Full array: 10,20,30
Element at index 2: 30. Full array: 10,20,30
```

##### 13. Performing Side Effects (e.g., Modifying an External Variable).

```js
const prices = [10.5, 20.0, 5.25];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
let totalPrice = 0;
prices.forEach((price) => (totalPrice += price));
console.log(totalPrice);
```

</details>

###### Output:

```js
35.75;
```

##### 14. Append list item to the the html page.

```js
const items = ["item1", "item2", "item3"];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const items = ["item1", "item2", "item3"];
const listElement = document.getElementById("myList"); // Assuming an HTML <ul> with id 'myList'

items.forEach((itemText) => {
  const listItem = document.createElement("li");
  listItem.textContent = itemText;
  if (listElement) {
    listElement.appendChild(listItem);
  }
});
```

</details>

###### Output:

```js

```

##### 15. Applying a Function to Each Element (Without Returning a New Array). If you have a function that performs an action and you want to apply it to every element.

```js
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
function processUserData(user) {
  console.log(`Processing user: ${user.name}, ID: ${user.id}`);
  // Simulate sending data to an API for each user
  // sendToAPI(user);
}

users.forEach(processUserData);
```

</details>

###### Output:

```js
Processing user: Alice, ID: 1
Processing user: Bob, ID: 2
```

##### 16. Double the numbers below with map method of js.

```js
const numbers = [1, 2, 3, 4, 5];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const doubleNumbers = numbers.map((num) => num * 2);
console.log(doubleNumbers);
```

</details>

###### Output:

```js
[1, 2, 3, 4, 5] (original array unchanged)
[2, 4, 6, 8, 10] (new array)
[ 1, 4, 9, 16, 25 ]
```

##### 17. Extracting Properties from Objects

```js
const users = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 24 },
  { id: 3, name: "Charlie", age: 35 },
];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const userNames = users.map((user) => user.name);
console.log(userNames);

const userAge = users.map((user) => user.age);
console.log(userAge);
```

</details>

###### Output:

```js
["Alice", "Bob", "Charlie"]
-------------------------------
[(30, 24, 35)];
```

##### 18. Formatting Data

```js
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 },
];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
console.log(
  products.map((product) => ({
    name: product.name.toUpperCase(),
    price: `$${product.price.toFixed(2)}`,
  })),
);
```

</details>

###### Output:

```js
[
  { name: "LAPTOP", price: "$1200.00" },
  { name: "MOUSE", price: "$25.00" },
  { name: "KEYBOARD", price: "$75.00" },
];
```

##### 19. Formatting data to find the total value of particular product using `map()` method

```js
const products = [
  {
    name: "laptop",
    price: 1000,
    count: 5,
  },
  {
    name: "desktop",
    price: 1500,
    count: 5,
  },
  {
    name: "phone",
    price: 500,
    count: 10,
  },
];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const totalPrice = products.map((product) => product.price * product.count);
console.log(totalPrice);
```

</details>

###### Output:

```js
[ 5000, 7500, 5000 ]
-------------------------------
[
{ name: 'laptop', totalValue: 5000 },
{ name: 'desktop', totalValue: 7500 },
{ name: 'phone', totalValue: 5000 }
]
```

##### 20. Using `index` and `array` arguments.

```js
const letters = ["a", "b", "c"];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const indexedLetters = letters.map((letter, index) => {
  return `${index}: ${letter}`;
});

console.log(indexedLetters);

const originalArrayInCallback = letters.map((letter, index, arr) => {
  console.log(
    `Current element: ${letter}, Index: ${index}, Original array: ${arr}`,
  );
  return letter.toUpperCase();
});
```

</details>

###### Output:

```js
["0: a", "1: b", "2: c"];

Current element: a, Index: 0, Original array: a,b,c
Current element: b, Index: 1, Original array: a,b,c
Current element: c, Index: 2, Original array: a,b,c
output: [ 'A', 'B', 'C' ]
```

##### 21. Finding an Element in an Array:\*\*

```js
const fruits = ["apple", "banana", "cherry", "banana"];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
console.log(fruits.indexOf("banana"));
console.log(fruits.indexOf("grape"));
```

</details>

###### Output:

```js
1 (first occurrence)
-1
```

##### 22. Finding an Element from a Specific Index.

```js
const numbers = [10, 20, 30, 20, 40];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
console.log(numbers.indexOf(20, 0)); // Output: 1 (search from start)
console.log(numbers.indexOf(20, 2)); // Output: 3 (search from index 2)
console.log(numbers.indexOf(20, -1)); // Output: -1 (search from index 4 (5-1), 20 is not found at or after index 4)
```

</details>

###### Output:

```js
1 (search from start)
3 (search from index 2)
-1 (search from index 4 (5-1), 20 is not found at or after index 4)
```

##### 23. Searching in Strings.

```js
const sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.indexOf("fox")); // Output: 16 (index of 'f')
console.log(sentence.indexOf("cat")); // Output: -1
console.log(sentence.indexOf("quick", 5)); // Output: -1 (search starts at index 5, 'quick' starts at 4)
console.log(sentence.indexOf("lazy", 20)); // Output: 35 (search starts at index 20)
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript

```

</details>

###### Output:

```js

```

##### 24. `indexOf()` and `NaN` (Important Distinction). Find the index of `undefined` and `NaN` in following array.

```js
const mixedArray = [1, "hello", NaN, undefined];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
console.log(mixedArray.indexOf(NaN));
console.log(mixedArray.indexOf(undefined));
```

</details>

###### Output:

```js
-1 (does NOT find NaN)
3
```

##### 25. Finding the First Position of an Element/Substring. When you need to know _where_ an item first appears in a sequence, not just if it exists.

```js
const cities = ["London", "Paris", "New York", "London"];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const firstLondonIndex = cities.indexOf("London");
console.log(`First London is at index: ${firstLondonIndex}`);
```

</details>

###### Output:

```js
0;
```

##### 26. Checking for Existence and Then Performing an Action Based on Position. If finding the element is just the first step before modifying or removing it at that specific index.

```js
const todoList = ["Buy groceries", "Walk dog", "Pay bills"];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const taskIndex = todoList.indexOf("Walk dog");

if (taskIndex !== -1) {
  todoList.splice(taskIndex, 1); // Remove the task
  console.log("Task completed:", todoList);
}
```

</details>

###### Output:

```js
Task completed: [ 'Buy groceries', 'Pay bills' ]
```

##### 27. Determining if an Item is Unique or Its First Occurrence. To check if an element is the first of its kind in an array (a common pattern for getting unique values while preserving order).

```js
const data = [1, 5, 2, 5, 3, 1, 4];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const uniqueData = data.filter((item, index) => data.indexOf(item) === index);
console.log(uniqueData);
```

</details>

###### Output:

```js
[1, 5, 2, 3, 4];
```

##### 28. Parsing Simple String Formats. When a string contains delimited data and you need to find the position of a delimiter to extract parts.

```js
const userData = "ID:123;Name:Alice;Age:30";
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const nameStartIndex = userData.indexOf("Name:") + "Name:".length;
const nameEndIndex = userData.indexOf(";", nameStartIndex);
const name = userData.substring(nameStartIndex, nameEndIndex);
console.log(`User name: ${name}`);
```

</details>

###### Output:

```js
User name: Alice
```

##### 29. Finding the Last Occurrence of a Number.

```js
const numbers = [10, 20, 30, 10, 40, 30];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const lastIndexOf30 = numbers.lastIndexOf(30);
console.log(lastIndexOf30);
```

</details>

###### Output:

```js
5 (the second 30 is at index 5)
```

##### 30. Finding an Element Not Present.

```js
const fruits = ["apple", "banana", "cherry"];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const lastIndexOfGrape = fruits.lastIndexOf("grape");
console.log(lastIndexOfGrape);
```

</details>

###### Output:

```js
-1;
```

##### 31. Using `fromIndex`. Search "A" from index 4 (inclusive) backwards.

```js
const data = ["A", "B", "C", "A", "D", "A", "E"];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const result1 = data.lastIndexOf("A", 4);
console.log(result1);
```

</details>

###### Output:

```js
3 (finds the 'A' at index 3)
```

##### 32. Search "A" from a negative fromIndex -2.

```js
const result1 = data.lastIndexOf("A", 4);
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const result3 = data.lastIndexOf("A", -2);
```

</details>

###### Output:

```js
2 refers to index 5 ('A')
```
