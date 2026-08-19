##### 1. Fill the following array with 0.

```js
const numbers = [1, 2, 3, 4, 5];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
numbers.fill(0);
console.log(numbers);
```

</details>

###### Output:

```js
[0, 0, 0, 0, 0] (original array modified)
```

##### 2. Fill from index 1 (inclusive) to index 3 (exclusive) with 'orange'

```js
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
fruits.fill("orange", 1, 3);
console.log(fruits);
```

</details>

###### Output:

```js
["apple", "orange", "orange", "date", "elderberry"];
```

##### 3. Fill from index 2 to the end with 'X'.

```js
const data = ["A", "B", "C", "D", "E"];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
data.fill("X", 2);
console.log(data);
```

</details>

###### Output:

```js
// Output: ['A', 'B', 'X', 'X', 'X']
```

##### 4. Fill from the second to last element (-2) to the end with 'Z'.

```js
const items = [10, 20, 30, 40, 50];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
items.fill("Z", -2);
console.log(items);
```

</details>

###### Output:

```js
[10, 20, 30, "Z", "Z"];
```

##### 5. Fill from the beginning to the third from last element with Y (-2 exclusive, so up to -3 inclusive)

```js
const items = [10, 20, 30, 40, 50];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
items.fill("Y", 0, -2);
console.log(items);
```

</details>

###### Output:

```js
["Y", "Y", 30, 40, 50];
```

##### 6. Create an array of 5 empty strings.

```js

```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const fiveEmptyStrings = new Array(5).fill("");
console.log(fiveEmptyStrings);
```

</details>

###### Output:

```js
["", "", "", "", ""];
```

##### 7. Create an array for a 7-day schedule, all initially 'Free'

```js

```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const weeklySchedule = new Array(7).fill("Free");
console.log(weeklySchedule);
```

</details>

###### Output:

```js
["Free", "Free", "Free", "Free", "Free", "Free", "Free"];
```

##### 8. Reset a section of the board to 0. Reset elements from index 2 up to (but not including) 6

```js
const gameBoard = [1, 1, 0, 1, 0, 0, 1, 1, 1];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
gameBoard.fill(0, 2, 6);
console.log(gameBoard); // Output: [1, 1, 0, 0, 0, 0, 1, 1, 1]
```

</details>

###### Output:

```js

```

b

##### 9. Pre-allocating Array Slots for Future Use. Create an array of 10 slots for user IDs, initialized to null.

```js

```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const userIdSlots = new Array(10).fill(null);
console.log(userIdSlots);
```

</details>

###### Output:

```js
[null, null, null, null, null, null, null, null, null, null];
```

##### 10. Fill with empty objects. then add id: 1 to the first object.

```js
[{}, {}, {}];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
// DANGEROUS: All elements reference the SAME object
const badFill = new Array(3).fill({});
badFill[0].id = 1;
console.log(badFill); // Output: [{ id: 1 }, { id: 1 }, { id: 1 }] (all changed!)

// CORRECT: Use map to create unique object instances
const goodFill = new Array(3).fill(null).map(() => ({})); // Fill with null first, then map
goodFill[0].id = 1;
console.log(goodFill); // Output: [{ id: 1 }, {}, {}] (only the first changed)
```

</details>

###### Output:

```js
[{ id: 1 }, {}, {}];
```

##### 11. Populate an Array with Dynamic or Sequential Values.

```js

```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
// DON'T:
const sequence = new Array(5).fill().forEach((_, i) => i + 1); // Doesn't work like this

// DO:
const sequence = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(sequence); // Output: [1, 2, 3, 4, 5]

// Or map after initial fill for simpler cases:
const randomNumbers = new Array(3).fill(null).map(() => Math.random());
console.log(randomNumbers); // Output: [0.123..., 0.456..., 0.789...] (random numbers)
```

</details>

###### Output:

```js
[1, 2, 3, 4, 5];
-----------------------------------------------
[0.123..., 0.456..., 0.789...] (random numbers)
```

##### 12. Advanced: Creating a Fixed-Size Buffer/Pool (e.g., for object reuse):\*\*

```js

```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
class ObjectPool {
  constructor(size, factoryFn) {
    // Pre-fill the pool with instances
    this.pool = new Array(size).fill(null).map(factoryFn);
    this.availableIndices = Array.from({ length: size }, (_, i) => i);
  }

  acquire() {
    if (this.availableIndices.length > 0) {
      const index = this.availableIndices.pop();
      return { object: this.pool[index], index: index };
    }
    return null; // Pool exhausted
  }

  release(index) {
    if (
      index >= 0 &&
      index < this.pool.length &&
      !this.availableIndices.includes(index)
    ) {
      // Reset object state if necessary (e.g., clear data)
      // this.pool[index].reset();
      this.availableIndices.push(index);
    }
  }
}

// Example: A pool of 3 "worker" objects
const workerPool = new ObjectPool(3, () => ({
  id: Math.random().toFixed(2),
  busy: false,
}));

console.log("Initial Pool:", workerPool.pool);
/* Output (example):
Initial Pool: [
  { id: '0.12', busy: false },
  { id: '0.34', busy: false },
  { id: '0.56', busy: false }
]
*/

const worker1 = workerPool.acquire();
if (worker1) {
  worker1.object.busy = true;
  console.log("Acquired Worker 1:", worker1.object);
}

const worker2 = workerPool.acquire();
if (worker2) {
  worker2.object.busy = true;
  console.log("Acquired Worker 2:", worker2.object);
}

console.log("Current Pool (modified in place):", workerPool.pool);
/* Output (example):
Current Pool (modified in place): [
  { id: '0.12', busy: true },  // Worker 1 modified
  { id: '0.34', busy: true },  // Worker 2 modified
  { id: '0.56', busy: false }
]
*/

workerPool.release(worker1.index); // Release worker1 by its index
console.log(
  "After releasing Worker 1, available:",
  workerPool.availableIndices,
); // [0, (original last index)]
```

</details>

###### Output:

```js

```

##### 13. Advanced: Initializing a Matrix (2D Array) (Careful with Shallow Copy\!):\*\*

```js

```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
// You can use `fill()` to initialize rows, but then `map()` to ensure each row is a _unique_ array.
// Creates a 3x3 matrix initialized with 0s
// Step 1: Create an array of 3 'slots' (null or undefined)
// Step 2: Map each slot to a new array of 3 zeros
const matrix = new Array(3).fill(null).map(() => new Array(3).fill(0));
console.log(matrix);
/* Output:
[
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]
*/

// Test for uniqueness of inner arrays (important!)
matrix[0][0] = 9;
console.log(matrix);
/* Output:
[
  [9, 0, 0], // Only this row changed
  [0, 0, 0],
  [0, 0, 0]
]
*/

// Contrast with incorrect way (all rows would be the same array reference):
// const badMatrix = new Array(3).fill(new Array(3).fill(0));
// badMatrix[0][0] = 9;
// console.log(badMatrix); // All rows would be [9,0,0]!
```

</details>

###### Output:

```js

```

##### 14. Reverse the following array.

```js
const numbers = [1, 2, 3, 4, 5];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
numbers.reverse();
console.log(numbers);
```

</details>

###### Output:

```js
 [5, 4, 3, 2, 1] (original array modified)
```

##### 15. Reverse the following array of strings.

```js
const fruits = ["apple", "banana", "cherry"];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
fruits.reverse();
console.log(fruits);
```

</details>

###### Output:

```js
["cherry", "banana", "apple"];
```

##### 16. Reverse an array of objects.

```js
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
users.reverse();
console.log(users);
```

</details>

###### Output:

```js
[
  { id: 3, name: "Charlie" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" },
];
```

##### 17. Assuming activityLog is already sorted oldest to newest, reverse for newest to oldest display

```js
const activityLog = [
  { time: "10:00", event: "Logged in" },
  { time: "10:15", event: "Viewed profile" },
  { time: "10:30", event: "Edited settings" },
];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
activityLog.reverse();
activityLog.forEach((log) => console.log(`${log.time}: ${log.event}`));
```

</details>

###### Output:

```js
10:30: Edited settings
10:15: Viewed profile
10:00: Logged in
```

##### 18. String Reversal (in combination with `split()` and `join()`):\*\*

```js
const originalString = "JavaScript";
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const reversedString = originalString.split("").reverse().join("");
console.log(reversedString);
```

</details>

###### Output:

```js
"tpircSavaJ";
```

##### 19. **Implementing Stack-like Behavior with Arrays (Push/Pop from End, Reverse to Process):** While `push()` and `pop()` are efficient at the end of an array, if you conceptually need to process items in LIFO (Last-In, First-Out) order but they were added in FIFO (First-In, First-Out) order, reversing the array can prepare it for iteration.

```js
const operations = ["load data", "process data", "save results"];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
operations.reverse();
while (operations.length > 0) {
  const op = operations.pop();
  console.log(`Executing: ${op}`);
}

// This will execute 'save results', then 'process data', then 'load data'
```

</details>

###### Output:

```js

```

##### 20. Reverse the original array without modifing it.

```js
const originalArray = [1, 2, 3];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const reversedCopy = [...originalArray].reverse(); // Using spread operator
// OR
// const reversedCopy = originalArray.slice().reverse(); // Using slice()

console.log(originalArray); // Output: [1, 2, 3] (original untouched)
console.log(reversedCopy); // Output: [3, 2, 1]
```

</details>

###### Output:

```js
[1, 2, 3] (original untouched)
[3, 2, 1]
```

##### 21. For Performance-Critical Sorting with Complex Criteria.

```js
const numbers = [40, 100, 1, 5, 25, 10];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
// More direct and often slightly more efficient for descending sort:
numbers.sort((a, b) => b - a);
console.log(numbers);
```

</details>

###### Output:

```js
[100, 40, 25, 10, 5, 1];
```

##### 22. Creating a Reverse Iterator (Conceptual), that processes elements from end to start.

```js
const steps = ["Step 1: Init", "Step 2: Process", "Step 3: Finalize"];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
function processInReverseOrder(items, callback) {
  // Create a copy to avoid modifying original array for this specific processing
  const reversedItems = [...items].reverse();
  for (const item of reversedItems) {
    callback(item);
  }
}

const steps = ["Step 1: Init", "Step 2: Process", "Step 3: Finalize"];
console.log("Processing steps in reverse:");
processInReverseOrder(steps, (step) => console.log(step));
```

</details>

###### Output:

```js
Processing steps in reverse:
Step 3: Finalize
Step 2: Process
Step 1: Init
```

##### 23. Implementing a Circular Queue or Deque (Simplified Push/Unshift/Shift/Pop). If you simulate a queue or deque where adding/removing from both ends is important, `reverse()` can be part of how you manage the underlying array, though not typically for every operation.

```js

```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
class Deque {
  constructor(items = []) {
    this.data = items;
  }

  addFront(item) {
    this.data.unshift(item); // Add to front
  }

  addBack(item) {
    this.data.push(item); // Add to back
  }

  removeFront() {
    return this.data.shift(); // Remove from front
  }

  removeBack() {
    return this.data.pop(); // Remove from back
  }

  // A display method that can show in reversed order
  displayReversed() {
    return [...this.data].reverse(); // Return a reversed copy
  }

  toArray() {
    return this.data;
  }
}

const myDeque = new Deque();
myDeque.addBack(1); // [1]
myDeque.addBack(2); // [1, 2]
myDeque.addFront(0); // [0, 1, 2]

console.log("Deque (normal order):", myDeque.toArray()); // [0, 1, 2]
console.log("Deque (reversed order):", myDeque.displayReversed()); // [2, 1, 0]
```

</details>

###### Output:

```js

```

##### 24. Advanced Simple UI Element Reordering (e.g., for a 'latest first' feed). In UI development, if you get data in one order and need to display it in reverse, applying `reverse()` (on a copy if managing state immutably) is common.

```js
const recentActivities = [
  { id: 1, text: "User A posted", timestamp: "2025-07-26T10:00:00Z" },
  { id: 2, text: "User B commented", timestamp: "2025-07-26T10:15:00Z" },
  { id: 3, text: "User A liked a post", timestamp: "2025-07-26T10:30:00Z" },
];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
// To display 'Latest Activity' first in a feed:
const displayActivities = [...recentActivities].reverse(); // Create a copy and reverse it

displayActivities.forEach((activity) => {
  console.log(
    `[${new Date(activity.timestamp).toLocaleTimeString()}] ${activity.text}`,
  );
});
```

</details>

###### Output:

```js
[10:30:00 AM] User A liked a post
[10:15:00 AM] User B commented
[10:00:00 AM] User A posted
```

#### Syntax:

```javascript
arr.toReversed();
```

#### Parameters:

- None.

#### Return Value:

- A new `Array` instance with the elements of the original array reversed.

#### How it Works (Mental Model):

Imagine `toReversed()` as a copy machine that reverses the order of items. You feed it a list, and it spits out a new list with all the items in reverse sequence, leaving your original list untouched.

#### Key Features:

- **Non-mutating:** This is its defining characteristic. It never modifies the original array.
- **Returns a New Array:** Always creates and returns a completely new array instance.
- **Shallow Copy:** Like most array methods that return new arrays, it performs a shallow copy. If your array contains objects, the new array will contain references to the _same_ objects, not copies of them. Modifying a nested object in the reversed array will still affect the original object.
- **Readability:** Clearly indicates that the original array is not being changed.

##### 25. Reversing a Simple Array.

```js
const originalNumbers = [1, 2, 3, 4, 5];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const reversedNumbers = originalNumbers.toReversed();
console.log(reversedNumbers);
console.log(originalNumbers);
```

</details>

###### Output:

```js
 Output: [5, 4, 3, 2, 1]
 Output: [1, 2, 3, 4, 5] (original is unchanged)
```

##### 25. Reversing an Array of Strings.

```js
const words = ["apple", "banana", "cherry"];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const reversedWords = words.toReversed();

console.log(reversedWords);
console.log(words);
```

</details>

###### Output:

```js
["cherry", "banana", "apple"]
[("apple", "banana", "cherry")] (Original is unchanged)
```

##### 26. Shallow Copy Behavior (Objects).

```js
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const reversedUsers = users.toReversed();
console.log(reversedUsers);
reversedUsers[0].name = "Bobby";
console.log(users[1]);
```

</details>

###### Output:

```js
[
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" },
];
 { id: 2, name: 'Bobby' } (Original array's object is modified)
```

##### 27. When You Need a Reversed Copy, Preserving the Original Array.

```js
const messages = ["Received", "Read", "Replied"];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const displayOrderMessages = messages.toReversed(); // For displaying latest first
console.log("Original messages:", messages);
console.log("Display order:", displayOrderMessages);
```

</details>

###### Output:

```js
Original messages: [ 'Received', 'Read', 'Replied' ]
Display order: [ 'Replied', 'Read', 'Received' ]
```

##### 28. Get the top 2 scores, sorted descending, in an immutable way. Chaining Array Methods. Since `toReversed()` returns a new array, you can directly chain other non-mutating array methods (`map`, `filter`, `reduce`, `slice`, `sort`, etc.) onto its result without an intermediate step.

```js
const scores = [85, 92, 78, 95, 88];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const topScores = scores
  .toSorted((a, b) => a - b) // Sort ascending first (to use toReversed more clearly)
  .toReversed() // Then reverse to get descending
  .slice(0, 2); // Take the top 2

console.log(topScores);
console.log(scores);
```

</details>

###### Output:

```js
Output: [95, 92]
Output: [85, 92, 78, 95, 88] (original is unchanged)
```

##### 29. Readability and Clarity. The method name `toReversed()` clearly communicates that a _new_, reversed array will be returned, making the code more self-documenting compared to `arr.slice().reverse()`.

```js

```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
// Less clear intention (requires knowing slice() makes a copy)
const oldWay = myArray.slice().reverse();

// Clearer intention
const newWay = myArray.toReversed();
```

</details>

###### Output:

```js

```

##### 30. When Browser Compatibility for Older Environments is a Concern (Without Polyfill). `toReversed()` is an ES2023 feature. If you're targeting older browsers or environments that don't transpile newer JavaScript features, `toReversed()` will not be available. In such cases, the `[...arr].reverse()` or `arr.slice().reverse()` pattern is the compatible solution.

```js

```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const myArr = [1, 2, 3];
const reversedCopy = [...myArr].reverse(); // Works universally
// Or:
// const reversedCopy = myArr.slice().reverse();
```

</details>

###### Output:

```js

```

##### 31. Displaying Chronological Data in Reverse Order (Latest First). A common UI pattern is to show recent activity or comments with the newest entry at the top.

```js
const activityFeed = [
  { id: 1, action: "User logged in", timestamp: "2025-07-26T10:00:00Z" },
  { id: 2, action: "Item added to cart", timestamp: "2025-07-26T10:15:00Z" },
  { id: 3, action: "Order placed", timestamp: "2025-07-26T10:30:00Z" },
];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
function renderActivityFeed(feed) {
  const reversedFeed = feed.toReversed(); // Get latest activity first
  reversedFeed.forEach((activity) => {
    console.log(
      `[${new Date(activity.timestamp).toLocaleTimeString()}] ${activity.action}`,
    );
  });
}

console.log("--- Latest Activity First ---");
renderActivityFeed(activityFeed);
console.log("\nOriginal feed still intact:", activityFeed);
```

</details>

###### Output:

```js
[10:30:00 AM] Order placed
[10:15:00 AM] Item added to cart
[10:00:00 AM] User logged in
```

##### 32. Implementing Undo/Redo Stacks (Immutable History). While a full undo/redo system is complex, `toReversed()` can be useful when reconstructing states or displaying history in a particular order without affecting the underlying history array.

```js

```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
let appStateHistory = []; // Assume this stores snapshots of your app state

function commitState(newState) {
  appStateHistory.push(newState);
  console.log("State committed. History length:", appStateHistory.length);
}

function getUndoStack() {
  // Get a stack of states that can be "undone" (reversed from current to past)
  // Exclude the very last (current) state from the undo stack, or include if current is undoable.
  return appStateHistory.slice(0, -1).toReversed();
}

// Simulate app state changes
commitState({ theme: "light", user: "Guest" });
commitState({ theme: "dark", user: "Guest" });
commitState({ theme: "dark", user: "Alice" });

const undoableStates = getUndoStack();
console.log("\nUndo Stack (most recent undo first):");
undoableStates.forEach((state, index) => {
  console.log(`  Undo ${index + 1}:`, state);
});
/* Output:
  Undo 1: { theme: 'dark', user: 'Guest' }
  Undo 2: { theme: 'light', user: 'Guest' }
*/
console.log("\nOriginal history remains:", appStateHistory);
```

</details>

###### Output:

```js
  Undo 1: { theme: 'dark', user: 'Guest' }
  Undo 2: { theme: 'light', user: 'Guest' }
```

##### 33. Preparing Data for Specific UI Components. Some UI libraries or components might expect data in a specific order (e.g., for a historical chart where the X-axis needs to be reversed).

```js
const sensorReadings = [
  { timestamp: 1, value: 20 },
  { timestamp: 2, value: 22 },
  { timestamp: 3, value: 21 },
  { timestamp: 4, value: 25 },
];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
// If a charting library expects data points from newest to oldest for a specific type of chart
const chartData = sensorReadings.toReversed().map((reading) => ({
  x: `Time ${reading.timestamp}`,
  y: reading.value,
}));

console.log("Chart data (reversed order):", chartData);
/* Output:
Chart data (reversed order): [
  { x: 'Time 4', y: 25 },
  { x: 'Time 3', y: 21 },
  { x: 'Time 2', y: 22 },
  { x: 'Time 1', y: 20 }
]
*/
```

</details>

###### Output:

```js
Chart data (reversed order): [
  { x: 'Time 4', y: 25 },
  { x: 'Time 3', y: 21 },
  { x: 'Time 2', y: 22 },
  { x: 'Time 1', y: 20 }
]
```

### The `toSpliced()` Method in JavaScript

#### It is a Non-Mutating Array Methods (ES2023 Additions)

Historically, modifying an array by removing or adding elements in the middle (`Array.prototype.splice()`) directly mutated the original array. This often necessitated creating a copy first (`[...arr].splice(...)` or `arr.slice().splice(...)` which doesn't directly work as `splice` mutates) if the original array needed to be preserved. `toSpliced()` directly addresses this by always returning a brand new array with the changes.

#### Syntax:

```javascript
arr.toSpliced(start, deleteCount, item1, item2, /* ..., */ itemN);
```

#### Parameters:

- `start` (Required): The zero-based index at which to start changing the array.
  - If `start` is greater than the array's length, `start` will be set to the array's length.
  - If `start` is negative, it will begin that many elements from the end of the array. (e.g., `-1` means the last element).
- `deleteCount` (Optional): The number of elements to remove from the array, starting at `start`.
  - If `deleteCount` is omitted or greater than or equal to the number of elements left in the array (starting at `start`), all elements from `start` to the end of the array will be deleted.
  - If `deleteCount` is `0` or negative, no elements are removed.
- `item1, item2, ..., itemN` (Optional): The elements to add to the array, beginning at `start`. If no elements are specified, `toSpliced()` only removes elements.

#### Return Value:

- A new `Array` instance containing the elements of the original array with the specified changes.

#### How it Works (Mental Model):

Imagine `toSpliced()` as a very precise editor for a copy of your list. You tell it: "take this part out (deleteCount from start), and put these new things in (items N)." It then hands you a _brand new list_ with those edits, leaving your original list completely untouched.

#### Key Features:

- **Non-mutating:** This is its defining characteristic. It never modifies the original array.
- **Returns a New Array:** Always creates and returns a completely new array instance.
- **Shallow Copy:** Like most array methods that return new arrays, it performs a shallow copy. If you insert objects or if the original elements are objects, the new array will contain references to the _same_ objects, not copies of them.
- **Combines Deletion and Insertion:** Can simultaneously remove existing elements and/or insert new ones.

##### 34. Remove 1 element starting at index 2 ('cherry').

```js
const originalFruits = ["apple", "banana", "cherry", "date", "elderberry"];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const fruitsAfterDelete = originalFruits.toSpliced(2, 1);
console.log(fruitsAfterDelete);
console.log(originalFruits);
```

</details>

###### Output:

```js
 ["apple", "banana", "date", "elderberry"]
 ---------------------------------------------
 ["apple", "banana", "cherry", "date", "elderberry"] (original unchanged)
```

##### 35. Remove 2 elements starting at index 1 ('banana', 'cherry').

```js
const originalFruits = ["apple", "banana", "cherry", "date", "elderberry"];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const fruitsAfterMultiDelete = originalFruits.toSpliced(1, 2);
console.log(fruitsAfterMultiDelete);
```

</details>

###### Output:

```js
["apple", "date", "elderberry"];
```

##### 36. Insert 3 and 4 at index 2 (between 2 and 5).

```js
const numbers = [1, 2, 5, 6];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const numbersAfterInsert = numbers.toSpliced(2, 0, 3, 4);
console.log(numbersAfterInsert);
console.log(numbers);
```

</details>

###### Output:

```js
[1, 2, 3, 4, 5, 6]
-----------------------------
[1, 2, 5, 6] (original unchanged)
```

##### 37. Replace 'green' and 'blue' (2 elements from index 1) with 'cyan' and 'magenta'.

```js
const colors = ["red", "green", "blue", "yellow"];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const colorsAfterReplace = colors.toSpliced(1, 2, "cyan", "magenta");
console.log(colorsAfterReplace);
console.log(colors);
```

</details>

###### Output:

```js
["red", "cyan", "magenta", "yellow"];
['red', 'green', 'blue', 'yellow'] (original unchanged)
```

##### 38. Remove the last element ('e')

```js
const letters = ["a", "b", "c", "d", "e"];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const noLastLetter = letters.toSpliced(-1, 1);
console.log(noLastLetter);
```

</details>

###### Output:

```js
["a", "b", "c", "d"];
```

##### 39. Insert 'x' and 'y' before the last element ('e').

```js
const letters = ["a", "b", "c", "d", "e"];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const beforeLastLetter = letters.toSpliced(-1, 0, "x", "y");
console.log(beforeLastLetter);
```

</details>

###### Output:

```js
["a", "b", "c", "d", "x", "y", "e"];
```

##### 40. Remove the last element ('e'). Using Negative `start` Index.

```js
const letters = ["a", "b", "c", "d", "e"];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const noLastLetter = letters.toSpliced(-1, 1);
console.log(noLastLetter);
```

</details>

###### Output:

```js
["a", "b", "c", "d"];
```

##### 41. Insert 'x' and 'y' before the last element ('e')

```js
const letters = ["a", "b", "c", "d", "e"];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const beforeLastLetter = letters.toSpliced(-1, 0, "x", "y");
console.log(beforeLastLetter);
```

</details>

###### Output:

```js
["a", "b", "c", "d", "x", "y", "e"];
```

##### 42. When You Need a Modified Copy, Preserving the Original Array. This is the primary and most common use case. In functional programming paradigms, or when working with state management (like in React or R

```js
const todoList = [
  { id: 1, task: "Buy groceries", completed: false },
  { id: 2, task: "Walk dog", completed: false },
  { id: 3, task: "Pay bills", completed: true },
];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const taskToUpdateIndex = todoList.findIndex((t) => t.id === 2);
if (taskToUpdateIndex !== -1) {
  const updatedTask = { ...todoList[taskToUpdateIndex], completed: true };
  const updatedTodoList = todoList.toSpliced(taskToUpdateIndex, 1, updatedTask);
  console.log("Updated Todo List:", updatedTodoList);
}
console.log("Original Todo List:", todoList); // Original is unchanged!
```

</details>

###### Output:

```js
Updated Todo List: [
  { id: 1, task: 'Buy groceries', completed: false },
  { id: 2, task: 'Walk dog', completed: true },
  { id: 3, task: 'Pay bills', completed: true }
]
Original Todo List: [
  { id: 1, task: 'Buy groceries', completed: false },
  { id: 2, task: 'Walk dog', completed: false },
  { id: 3, task: 'Pay bills', completed: true }
]
```

##### 43. Chaining Array Methods. Since `toSpliced()` returns a new array, you can directly chain other non-mutating array methods (`map`, `filter`, `reduce`, `slice`, `toReversed()`, `toSorted()`, etc.) onto its result without an intermediate step. This makes pipelines of operations cleaner.

```js
const shoppingCart = ["Milk", "Bread", "Eggs", "Cheese", "Milk"];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const finalCart = shoppingCart
  .toSpliced(shoppingCart.indexOf("Bread") + 1, 0, "Butter") // Adds 'Butter' at index 2
  // FIX: Add +1 to the index because 'Butter' pushed the rest of the array to the right
  .toSpliced(shoppingCart.lastIndexOf("Milk") + 1, 1)
  .toSorted()
  .filter((item, index, arr) => arr.indexOf(item) === index);

console.log("Final Cart:", finalCart);
console.log("Original Cart:", shoppingCart);
```

</details>

###### Output:

```js
["Bread", "Butter", "Cheese", "Eggs", "Milk"][
  ("Milk", "Bread", "Eggs", "Cheese", "Milk")
];
```

##### 44. Readability and Clarity. The method name `toSpliced()` clearly communicates that a _new_, modified array will be returned, making the code more self-documenting compared to `[...arr].splice(...)` (which is incorrect usage as `splice` mutates) or `arr.slice().splice(...)` (which still mutates the slice and requires a

```js
const pendingTasks = ["Write report", "Email client", "Call supplier"];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
// DO: If you want to permanently remove 'Email client'
pendingTasks.splice(1, 1);
console.log(pendingTasks);
```

</details>

###### Output:

```js
["Write report", "Call supplier"];
```

##### 45. When Browser Compatibility for Older Environments is a Concern (Without Polyfill). `toSpliced()` is an ES2023 feature. If you're targeting older browsers or environments that don't transpile newer JavaScript features, `toSpliced()` will not be available. In such cases, you'd typically use a combination of `slice()` and array spread syntax, or manual array reconstruction for immutable operations. Fallback for older environments (for removing elements).

```js
const myArr = [1, 2, 3, 4];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
    - **Fallback for older environments (for removing elements):**
      const myArr = [1, 2, 3, 4];
      const indexToRemove = 2; // Remove '3'
      const newArr = [
        ...myArr.slice(0, indexToRemove),
        ...myArr.slice(indexToRemove + 1),
      ];
      console.log(newArr); // Output: [1, 2, 4]
    -
    - **Fallback for older environments (for inserting elements):**
      const myArr = [1, 2, 4];
      const indexToInsert = 2; // Insert at index 2
      const itemsToInsert = [3];
      const newArrInsert = [
        ...myArr.slice(0, indexToInsert),
        ...itemsToInsert,
        ...myArr.slice(indexToInsert),
      ];
      console.log(newArrInsert); // Output: [1, 2, 3, 4]
```

</details>

###### Output:

```js

```

##### 46. Managing an Immutable Selection/Exclusion List. Imagine managing a list of selected items where adding/removing an item should create a new state without affecting the previous one.

```js
const currentSelection = ["apple", "banana", "orange"];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
function toggleSelection(item, selectedItems) {
  const itemIndex = selectedItems.indexOf(item);
  if (itemIndex !== -1) {
    // Item is currently selected, so remove it
    return selectedItems.toSpliced(itemIndex, 1);
  } else {
    // Item is not selected, so add it
    return selectedItems.toSpliced(selectedItems.length, 0, item);
  }
}

let userSelection = ["Product A", "Product C"];

userSelection = toggleSelection("Product B", userSelection);
console.log("After adding B:", userSelection); // Output: ["Product A", "Product C", "Product B"]

userSelection = toggleSelection("Product A", userSelection);
console.log("After removing A:", userSelection); // Output: ["Product C", "Product B"]

console.log(
  "Original selections are implicitly preserved due to immutability.",
);
```

</details>

###### Output:

```js

```

##### 47. Implementing Undo/Redo Operations on Text (Array of Characters/Words). For simple text editors, each edit operation can be a `toSpliced()` call that generates a new version of the text array, pushing it onto a history stack for undo/redo.

```js
let documentContent = ["This", "is", "a", "sample", "text."];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const history = [documentContent]; // Initial state

function applyEdit(contentArray, operation) {
  let newContent;
  if (operation.type === "insert") {
    newContent = contentArray.toSpliced(operation.index, 0, operation.value);
  } else if (operation.type === "delete") {
    newContent = contentArray.toSpliced(operation.index, operation.count);
  } else if (operation.type === "replace") {
    newContent = contentArray.toSpliced(
      operation.index,
      operation.count,
      operation.value,
    );
  }
  history.push(newContent);
  documentContent = newContent;
  console.log("Current content:", documentContent.join(" "));
}

applyEdit(documentContent, { type: "insert", index: 3, value: "new" });
// Output: This is a new sample text.
applyEdit(documentContent, { type: "delete", index: 4, count: 1 });
// Output: This is a new text.
applyEdit(documentContent, {
  type: "replace",
  index: 1,
  count: 1,
  value: "was",
});
// Output: This was a new text.

console.log(
  "\nFull history:",
  history.map((h) => h.join(" ")),
);
```

</details>

###### Output:

```js
This is a new sample text.
This is a new text.
This was a new text.
```

##### 48. Maintaining a Fixed-Size Cache or Buffer with Item Insertion/Removal. If you have a cache and you want to remove an old item and insert a new one at a specific position (e.g., least recently used, or based on priority) while keeping the cache immutable.

```js
const cache = ["itemA", "itemB", "itemC"];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const MAX_CACHE_SIZE = 3;

function updateCache(newEntry, currentCache) {
  const existingIndex = currentCache.indexOf(newEntry);
  let updatedCache;

  if (existingIndex !== -1) {
    // If already in cache, move it to the end (most recent)
    updatedCache = currentCache.toSpliced(existingIndex, 1);
    updatedCache = updatedCache.toSpliced(updatedCache.length, 0, newEntry);
  } else {
    // If new, add it to the end
    updatedCache = currentCache.toSpliced(currentCache.length, 0, newEntry);
    // If exceeds max size, remove the oldest (first)
    if (updatedCache.length > MAX_CACHE_SIZE) {
      updatedCache = updatedCache.toSpliced(0, 1);
    }
  }
  return updatedCache;
}

let myCache = ["File1", "File2", "File3"];
console.log("Initial cache:", myCache); // ['File1', 'File2', 'File3']

myCache = updateCache("File4", myCache);
console.log("After adding File4:", myCache); // ['File2', 'File3', 'File4'] (File1 removed)

myCache = updateCache("File2", myCache);
console.log("After accessing File2:", myCache); // ['File3', 'File4', 'File2'] (File2 moved to end)

console.log("Original cache state is unchanged:", ["File1", "File2", "File3"]);
```

</details>

###### Output:

```js

```

### The `with()` Method in JavaScript

#### It is a Non-Mutating Array Methods (ES2023 Additions)

Historically, updating an element at a specific index in an array (`arr[index] = newValue`) directly mutated the original array. To achieve this immutably, developers often had to use array spread syntax (`[...arr.slice(0, index), newValue, ...arr.slice(index + 1)]`) or `map()` if the transformation was across all elements. `with()` simplifies this specific use case: immutably replacing a single element at a known index.

#### Syntax:

```javascript
arr.with(index, value);
```

#### Parameters:

- `index` (Required): The zero-based index of the element to be replaced.
  - Can be a positive or negative integer. Negative indices count from the end of the array (e.g., `-1` for the last element).
- `value` (Required): The new value to place at the specified `index`.

#### Return Value:

- A new `Array` instance with the element at the specified `index` replaced by `value`.

#### How it Works (Mental Model):

Imagine `with()` as a "surgical copy machine" for lists. You give it a list, point to a specific spot (index), and hand it a new item. It then creates a _brand new list_ that is identical to the original, _except_ at that one spot, where it puts your new item. Your original list remains untouched.

#### Key Features:

- **Non-mutating:** This is its defining characteristic. It never modifies the original array.
- **Returns a New Array:** Always creates and returns a completely new array instance.
- **Shallow Copy:** Like most array methods that return new arrays, it performs a shallow copy. If the original elements are objects (and not the one being replaced), the new array will contain references to the _same_ objects.
- **Handles Negative Indices:** Like `at()`, it supports negative indices for convenience.
- **Throws `RangeError` for Out-of-Bounds Index:** Unlike `at()` (which returns `undefined`) or `arr[index] = value` (which silently fails to add to non-existent indices or creates sparse arrays), `with()` throws an error if the index is out of bounds, which can be useful for strict validation.

##### 49. Replacing an Element by Positive Index. Replace the element at index 2 (which is 3) with 10

```js
const originalNumbers = [1, 2, 3, 4, 5];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const numbersAfterReplace = originalNumbers.with(2, 10);
console.log(numbersAfterReplace);
console.log(originalNumbers);
```

</details>

###### Output:

```js
[1, 2, 10, 4, 5]
[1, 2, 3, 4, 5] (original is unchanged)
```

##### 50. Replacing an Element by Negative Index.

```js
const fruits = ["apple", "banana", "cherry", "date"];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
// Replace the last element ('date') with 'grape'
const fruitsAfterLastReplace = fruits.with(-1, "grape");
console.log(fruitsAfterLastReplace); // Output: ["apple", "banana", "cherry", "grape"]

// Replace the second-to-last element ('cherry') with 'kiwi'
const fruitsAfterSecondLastReplace = fruits.with(-2, "kiwi");
console.log(fruitsAfterSecondLastReplace); // Output: ["apple", "banana", "kiwi", "date"]
```

</details>

###### Output:

```js
["apple", "banana", "cherry", "grape"]
---------------------------------------------
[("apple", "banana", "kiwi", "date")];
```

##### 51. Throws `RangeError` for Out-of-Bounds.

```js
const data = [10, 20];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
try {
  data.with(2, 30); // Index 2 is out of bounds for an array of length 2
} catch (e) {
  console.error(e.name + ": " + e.message); // Output: RangeError: index out of bounds
}

try {
  data.with(-3, 5); // Index -3 is out of bounds
} catch (e) {
  console.error(e.name + ": " + e.message); // Output: RangeError: index out of bounds
}

console.log(data); // Original array remains unchanged: [10, 20]
```

</details>

###### Output:

```js

```

##### 52. When You Need to Update a Single Element Immutably at a Known Index. This is the primary and most common use case. In functional programming, React/Redux state updates, or any scenario where preserving the original array is critical.

```js
const userList = [
  { id: 1, name: "Alice", status: "active" },
  { id: 2, name: "Bob", status: "inactive" },
  { id: 3, name: "Charlie", status: "active" },
];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const bobIndex = userList.findIndex((user) => user.id === 2);

if (bobIndex !== -1) {
  // Create an updated user object (also immutably)
  const updatedBob = { ...userList[bobIndex], status: "active" };
  // Use `with()` to create a new userList with Bob's updated status
  const newUserList = userList.with(bobIndex, updatedBob);

  console.log("New User List:", newUserList);
  console.log("Original User List:", userList); // Original is unchanged!
}
```

</details>

###### Output:

```js

```

##### 53. Chaining Array Methods with Immutable Updates. Since `with()` returns a new array, you can directly chain other non-mutating array methods (`map`, `filter`, `reduce`, `slice`, `toReversed()`, `toSorted()`, `toSpliced()`, etc.) onto its result. This makes pipelines of operations cleaner and more expressive.

```js

```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const productPrices = [10, 20, 30, 40, 50];

// Scenario: Increase the price of the third item (index 2) by 5,
// then double the prices of all items, then filter out items below 50.
const finalPrices = productPrices
  .with(2, productPrices.at(2) + 5) // Immutably update 3rd item (30 -> 35)
  .map((price) => price * 2) // Double all prices
  .filter((price) => price >= 50); // Filter

console.log("Final Prices:", finalPrices); // Output: [20, 40, 70, 80, 100]
console.log("Original Prices:", productPrices); // Original is unchanged!
```

</details>

###### Output:

```js

```

##### 54. Readability and Clarity for Specific Element Replacement. When the goal is precisely "replace element at this index," `with()` is very clear compared to the spread syntax alternative, especially when dealing with negative indices.

```js

```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
// Less clear intention (requires knowing slice() behavior for replacement)
const oldWay = [
  ...myArray.slice(0, index),
  newValue,
  ...myArray.slice(index + 1),
];

// Clearer intention
const newWay = myArray.with(index, newValue);
```

</details>

###### Output:

```js

```

##### 55. When Browser Compatibility for Older Environments is a Concern (Without Polyfill). `with()` is an ES2023 feature. If you're targeting older browsers or environments that don't transpile newer JavaScript features, `with()` will not be available. In such cases, the array spread syntax pattern (`[...arr.slice(0, index), newValue, ...arr.slice(index + 1)]`) is the compatible solution.

```js
const myArr = [1, 2, 3];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
- **Fallback for older environments:**
  const myArr = [1, 2, 3];
  const indexToUpdate = 1;
  const newValue = 99;
  const newArr = [
    ...myArr.slice(0, indexToUpdate),
    newValue,
    ...myArr.slice(indexToUpdate + 1),
  ];
  console.log(newArr);
```

</details>

###### Output:

```js
// Output: [1, 99, 3]
```

##### 56. When Replacing Multiple Elements or Inserting/Deleting. with() is specifically for replacing a _single_ element. If you need to replace multiple elements, insert elements, or delete elements, `toSpliced()` is the immutable method for that.

```js

```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const items = ["a", "b", "c", "d"];
// DON'T: use `with` multiple times for complex changes (inefficient and verbose)
// DO: To replace 'b' and 'c' with 'x', 'y' (immutably)
const newItems = items.toSpliced(1, 2, "x", "y");
console.log(newItems);
```

</details>

###### Output:

```js
["a", "x", "y", "d"];
```

##### 57. When You Need to Transform All Elements. If the transformation applies to every element (e.g., doubling all numbers, capitalizing all strings), `map()` is the more appropriate and often more readable choice.

```js

```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const prices = [10, 20, 30];
// DON'T: prices.with(0, prices[0]*2).with(1, prices[1]*2)... (bad idea)
// DO:
const doubledPrices = prices.map((p) => p * 2);
console.log(doubledPrices);
```

</details>

###### Output:

```js
// Output: [20, 40, 60]
```

##### 58. Managing Form State in a Reactive UI (e.g., React, Vue). When handling arrays of input fields or options, `with()` can immutably update a single field's value.

```js

```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
let formFields = [
  { id: "name", value: "John Doe", type: "text" },
  { id: "email", value: "john@example.com", type: "email" },
  { id: "consent", value: false, type: "checkbox" },
];

function handleInputChange(fieldId, newValue) {
  const fieldIndex = formFields.findIndex((field) => field.id === fieldId);
  if (fieldIndex !== -1) {
    // Create an immutable copy of the field itself
    const updatedField = { ...formFields[fieldIndex], value: newValue };
    // Use `with()` to create a new array with the updated field
    formFields = formFields.with(fieldIndex, updatedField);
    console.log(`Field '${fieldId}' updated. New formFields:`, formFields);
  }
}

console.log("Initial formFields:", formFields);
handleInputChange("email", "john.doe@example.com");
handleInputChange("consent", true);
```

</details>

###### Output:

```js

```

##### 59. Implementing Immutable Board Game States. For turn-based games where modifying a board state must not affect previous states for undo/redo or AI exploration.

```js

```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const initialBoard = [
  [".", ".", "."],
  [".", "X", "."],
  [".", ".", "."],
];

function makeMove(currentBoard, row, col, player) {
  // Check if move is valid (within bounds, spot is empty)
  if (
    row < 0 ||
    row >= currentBoard.length ||
    col < 0 ||
    col >= currentBoard[row].length ||
    currentBoard.at(row).at(col) !== "."
  ) {
    console.error("Invalid move!");
    return currentBoard; // Return original board on invalid move
  }

  // First, immutably update the specific row
  const updatedRow = currentBoard[row].with(col, player);
  // Then, immutably update the board with the new row
  const newBoard = currentBoard.with(row, updatedRow);

  return newBoard;
}

let ticTacToeBoard = initialBoard;
console.log("--- Initial Board ---");
ticTacToeBoard.forEach((row) => console.log(row.join(" ")));

ticTacToeBoard = makeMove(ticTacToeBoard, 0, 0, "O");
console.log("\n--- After Player O Move (0,0) ---");
ticTacToeBoard.forEach((row) => console.log(row.join(" ")));

ticTacToeBoard = makeMove(ticTacToeBoard, 2, 2, "X");
console.log("\n--- After Player X Move (2,2) ---");
ticTacToeBoard.forEach((row) => console.log(row.join(" ")));

console.log("\nOriginal initialBoard is untouched:", initialBoard);
```

</details>

###### Output:

```js

```

##### 60. Simulating Versioning or Snapshots of Configurations. If you have an array representing a configuration (e.g., a sequence of steps, settings), and you need to generate new configurations based on small changes.

```js

```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const baseConfig = [
  { step: 1, action: "Initialize", status: "pending" },
  { step: 2, action: "Process Data", status: "pending" },
  { step: 3, action: "Generate Report", status: "pending" },
];

function updateStepStatus(config, stepNumber, newStatus) {
  const stepIndex = config.findIndex((s) => s.step === stepNumber);
  if (stepIndex !== -1) {
    const updatedStep = { ...config[stepIndex], status: newStatus };
    return config.with(stepIndex, updatedStep);
  }
  return config; // Return original if step not found
}

let currentConfig = baseConfig;
console.log("Base Config:", currentConfig);

currentConfig = updateStepStatus(currentConfig, 1, "completed");
console.log("\nConfig after step 1 complete:", currentConfig);

currentConfig = updateStepStatus(currentConfig, 2, "in-progress");
console.log("\nConfig after step 2 starts:", currentConfig);

console.log("\nBase config is still:", baseConfig);
```

</details>

###### Output:

```js

```
