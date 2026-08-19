##### 1. Sort the following array in Ascending/ Descending order.

```js
const numbers = [40, 100, 1, 5, 25, 10];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const ascNumbers = numbers.sort((a, b) => a - b);
console.log(ascNumbers);

const desNumbers = numbers.sort((a, b) => b - a);
console.log(desNumbers);
```

</details>

###### Output:

```js
[ 1, 5, 10, 25, 40, 100 ] // Ascending
----------------------------------------
[ 100, 40, 25, 10, 5, 1 ] // Descending
```

##### 2. Sort the following array in alphabetical order with and without locale method.

```js
const fruits = ["Banana", "apple", "Cherry"];
```

<details>
  <summary>Solution</summary>

```javascript
// with localecompare
console.log(fruits.sort((a, b) => a.localeCompare(b)));

// without localecompare
console.log(
  fruits.sort((a, b) => {
    // 1. Create temporary lowercase versions
    const lowerA = a.toLowerCase();
    const lowerB = b.toLowerCase();

    // 2. Compare the lowercase versions
    if (lowerA < lowerB) return -1; // "apple" comes before "banana" -> put 'a' first
    if (lowerA > lowerB) return 1; // "cherry" comes after "banana" -> put 'b' first

    // 3. They are equal
    return 0;
  }),
);
```

</details>

###### Output:

```js
["apple", "Banana", "Cherry"];
```

##### 3. Sort the following array according to strict ASCII code.

```js
const letters = ["d", "a", "C"];
```

<details>
  <summary>Solution</summary>

```javascript
letters.sort((a, b) => {
  if (a < b) return -1; // a is "smaller" (lower ASCII), put it first
  if (a > b) return 1; // a is "bigger", put it second
  return 0;
});
```

</details>

###### Output:

```js
["C", "a", "d"];
```

##### 4. Sort the following array on basis of age ascending order.

```js
const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];
```

<details>
  <summary>Solution</summary>

```javascript
users.sort((a, b) => a.age - b.age);
console.log(users);
```

</details>

###### Output:

_Output: on based of ascending order._

```js
[
  { name: "Bob", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Charlie", age: 35 },
];
```

##### 5. Sort the array in alphabetical (case-insenstive) order.

```js
const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];
```

<details>
  <summary>Solution</summary>

```javascript
users.sort((a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});
console.log(users);
```

</details>

###### Output:

```js
[
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];
```

##### 6. Sort with age and when age is equal sort with name.

###### Preserve the original order when age is equal.

```js
const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 20 },
  { name: "Peter", age: 25 },
  { name: "Charlie", age: 25 },
];
```

<details>
  <summary>Solution</summary>
    Original order is preserve by default in ES2022.

```javascript
users.sort((a, b) => {
  // 1. Primary Sort: Age
  const ageDiff = a.age - b.age;

  // If ageDiff is NOT 0, the ages are different. Return that result.
  if (ageDiff !== 0) return ageDiff;

  // 2. Secondary Sort: Name (Only happens if ages are equal)
  return a.name.localeCompare(b.name);
});
```

</details>

##### 7. Sort the following items based on price in ascending order.

```js
const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Keyboard", price: 75 },
  { id: 3, name: "Mouse", price: 25 },
];
```

<details>
  <summary>Solution</summary>

```javascript
products.sort((a, b) => a.price - b.price); // Sort by price, cheapest first
console.log(products);
```

</details>

###### Output:

```js
[
  { id: 3, name: "Mouse", price: 25 },
  { id: 2, name: "Keyboard", price: 75 },
  { id: 1, name: "Laptop", price: 1200 },
];
```

##### 8. Sort alphabetically case-insensitively.

```js
const items = ["apple", "Banana", "Orange", "grape"];
```

<details>
  <summary>Solution</summary>

```javascript
items.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
console.log(items);
```

</details>

###### Output:

```js
["apple", "Banana", "grape", "Orange"];
```

##### 9. Sort following array first by category (alphabetical), then by price (ascending)

```js
const products = [
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Mouse", category: "Electronics", price: 25 },
  { name: "Desk Chair", category: "Furniture", price: 300 },
  { name: "Headphones", category: "Electronics", price: 25 }, // Same price as mouse
];
```

<details>
  <summary>Solution</summary>

```javascript
products.sort((a, b) => {
  // Primary sort: by category
  const categoryComparison = a.category.localeCompare(b.category);
  if (categoryComparison !== 0) {
    return categoryComparison;
  }
  // Secondary sort: if categories are equal, sort by price
  return a.price - b.price;
});

console.log(products);
```

</details>

###### Output:

```js
[
  { name: "Headphones", category: "Electronics", price: 25 }, // Came before Mouse due to original order, now stable
  { name: "Mouse", category: "Electronics", price: 25 },
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Desk Chair", category: "Furniture", price: 300 },
];
```

##### 10. Sort following array according to date.

```js
const events = [
  { name: "Meeting", date: new Date("2025-07-28") },
  { name: "Presentation", date: new Date("2025-07-26") },
  { name: "Workshop", date: new Date("2025-07-27") },
];
```

<details>
  <summary>Solution</summary>

```javascript
events.sort((a, b) => a.date - b.date);

// Create a temporary view for printing
const formattedOutput = events.map((event) => ({
  name: event.name,
  date: event.date.toDateString(), // Converts to "Sat Jul 26 2025" format
}));

console.log(formattedOutput);
```

</details>

###### Output:

```js
[
  { name: "Presentation", date: "Sat Jul 26 2025" },
  { name: "Workshop", date: "Sun Jul 27 2025" },
  { name: "Meeting", date: "Mon Jul 28 2025" },
];
```

use `console.table` automatically formats data into a readable grid, which is often much easier to read than the raw array dump.

<details>
  <summary>Solution</summary>

```javascript
events.sort((a, b) => a.date - b.date);

// Log it as a table
console.table(events.map((e) => ({ ...e, date: e.date.toDateString() })));
```

</details>

###### Output:

```js
┌─────────┬────────────────┬───────────────────┐
│ (index) │ name           │ date              │
├─────────┼────────────────┼───────────────────┤
│ 0       │ 'Presentation' │ 'Sat Jul 26 2025' │
│ 1       │ 'Workshop'     │ 'Sun Jul 27 2025' │
│ 2       │ 'Meeting'      │ 'Mon Jul 28 2025' │
└─────────┴────────────────┴───────────────────┘
```

##### 11. Custom sort order (sort the days array according to dayOrder array and then in reverse dayorder)

```js
const days = ["Tuesday", "Monday", "Thursday", "Wednesday"];
const dayOrder = {
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
  Sunday: 7,
};
```

<details>
  <summary>Solution</summary>

```javascript
days.sort((a, b) => dayOrder[a] - dayOrder[b]);
console.log(days);
```

</details>

###### Output:

```js
Output: ["Monday", "Tuesday", "Wednesday", "Thursday"];
```

###### If your array contains a typo (e.g., "Monday" or "Funday") that doesn't exist in your `dayOrder` object, `dayOrder[a]` will be `undefined`. create algorithim that can handle that.

```js
const mixedDays = ["Tuesday", "Funday", "Monday", "Thursday"];
```

<details>
  <summary>Solution</summary>

```javascript
mixedDays.sort((a, b) => {
  // Try to get the value. If undefined, default to Infinity.
  const valA = dayOrder[a] !== undefined ? dayOrder[a] : Infinity;
  const valB = dayOrder[b] !== undefined ? dayOrder[b] : Infinity;

  return valA - valB;
});

console.log(mixedDays);
onsole.log(days);
```

</details>

###### Output:

```js
Output: ["Monday", "Tuesday", "Thursday", "Funday"];
```

##### 12. Create a helper function sortByCustomOrder

```js
const priorities = {
  Critical: 1,
  High: 2,
  Medium: 3,
  Low: 4,
};

const bugs = ["Low", "Critical", "Unknown-Status", "High"];
```

<details>
  <summary>Solution</summary>

```javascript
const sortByCustomOrder = (items, orderMap) => {
  // 1. Create a copy using [...items] to avoid mutating the original
  return [...items].sort((a, b) => {
    // 2. Get values, defaulting to Infinity if the item isn't found
    const valA = orderMap[a] !== undefined ? orderMap[a] : Infinity;
    const valB = orderMap[b] !== undefined ? orderMap[b] : Infinity;

    // 3. Compare
    return valA - valB;
  });
};

const sortedBugs = sortByCustomOrder(bugs, priorities);

console.log(sortedBugs);
```

</details>

###### Output:

```js
Output: ["Critical", "High", "Low", "Unknown-Status"];
```

##### 13. Shuffling an Array (Fisher-Yates Shuffle):\*\*

```js
const deck = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
```

<details>
  <summary>Solution</summary>

```javascript
deck.sort(() => Math.random() - 0.5);
console.log(deck);
```

</details>

###### Output:

```js
Output: (A randomly shuffled array)
```

##### 14. Sort the following dates.

```js
const dates = ["2023-01-01", "2025-01-01"];
```

<details>
  <summary>Solution</summary>

```javascript
// If you have strings, you must convert them to dates _inside_ the sort function:
const dates = ["2023-01-01", "2025-01-01"];
dates.sort((a, b) => new Date(a) - new Date(b));
console.log(dates);

// otherwise you can go like this
const dates = [new Date("2023-01-01"), new Date("2025-01-01")];
dates.sort((a, b) => a - b);
console.log(dates);
```

</details>

###### Output:

```js
["2023-01-01", "2025-01-01"];

// second method output
[ 2023-01-01T00:00:00.000Z, 2025-01-01T00:00:00.000Z ]
```

##### 15. Suppose you are stuck with "DD-MM-YYYY" strings, you cannot use simple string sort. You must manually parse them so the sort function sees the Year first.

```js
const dates = ["01-01-2025", "31-12-1990"];
```

<details>
  <summary>Solution</summary>

```javascript
dates.sort((a, b) => {
  // 1. Split the string by "-" to get parts
  // "01-01-2025" -> ["01", "01", "2025"]
  const partsA = a.split("-");
  const partsB = b.split("-");

  // 2. Reassemble into ISO format (YYYYMMDD) for comparison
  // We put Year first, then Month, then Day
  const dateA = partsA[2] + partsA[1] + partsA[0]; // "20250101"
  const dateB = partsB[2] + partsB[1] + partsB[0]; // "19901231"

  // 3. Compare the new strings
  return dateA.localeCompare(dateB);
});

console.log(dates);
```

</details>

###### Output:

```js
["31-12-1990", "01-01-2025"] -> Correct!
```

##### 16. Suppose you are stuck with "DD-MM-YYYY HH:mm" strings, you cannot use simple string sort. You must manually parse them so the sort function sees the Year first.

```js
const meetings = [
  "01-01-2025 14:30", // Jan 1st, 2:30 PM
  "01-01-2025 09:00", // Jan 1st, 9:00 AM  <-- Should be first
  "31-12-2024 23:59", // Dec 31st, 11:59 PM <-- Should be very first
];
```

<details>
  <summary>Solution</summary>

```javascript
const meetings = [
  "01-01-2025 14:30", // Jan 1st, 2:30 PM
  "01-01-2025 09:00", // Jan 1st, 9:00 AM  <-- Should be first
  "31-12-2024 23:59", // Dec 31st, 11:59 PM <-- Should be very first
];

meetings.sort((a, b) => {
  // Helper function to turn string into Date object
  const parseDateTime = (dateTimeStr) => {
    // 1. Split date and time: "01-01-2025 14:30" -> ["01-01-2025", "14:30"]
    const [datePart, timePart] = dateTimeStr.split(" ");

    // 2. Split date parts: "01-01-2025" -> ["01", "01", "2025"]
    const [day, month, year] = datePart.split("-");

    // 3. Split time parts: "14:30" -> ["14", "30"]
    const [hours, minutes] = timePart.split(":");

    // 4. Create Date (Remember: month - 1)
    return new Date(year, month - 1, day, hours, minutes);
  };

  const dateA = parseDateTime(a);
  const dateB = parseDateTime(b);

  // Subtracting date objects returns difference in milliseconds
  return dateA - dateB;
});

console.log(meetings);
```

</details>

###### Output:

```js
["31-12-2024 23:59", "01-01-2025 09:00", "01-01-2025 14:30"];
```

##### 17. If you try to run complex logic (like `split` or `new Date`) on a `null` or empty string, your code will **crash** with an error like `Cannot read properties of null. To fix this, you use **"Guard Clauses"** at the very top of your sort function. The "Nulls Last" Strategy. This strategy pushes any invalid data (null, undefined, or empty strings) to the bottom of the list, keeping the clean data at the top.

```js
const names = ["Alice", "", "Charlie", null, "Bob", undefined];
```

<details>
  <summary>Solution</summary>

```javascript
names.sort((a, b) => {
  // 1. Check if 'a' is "falsy" (null, undefined, or "")
  // If 'a' is bad and 'b' is good, 'a' should go LAST (return 1)
  if (!a && b) return 1;

  // 2. Check if 'b' is "falsy"
  // If 'b' is bad and 'a' is good, 'a' should go FIRST (return -1)
  if (a && !b) return -1;

  // 3. If both are bad, keep them together (return 0)
  if (!a && !b) return 0;

  // 4. Now we know both are valid strings. Safe to compare!
  return a.localeCompare(b);
});

console.log(names);
```

</details>

###### Output:

```js
["Alice", "Bob", "Charlie", "", null, undefined];
```

###### Here is how you combine this with the complex Date logic we discussed earlier. This is **production-ready code**:

```js
const dates = ["01-01-2025", null, "01-01-2023", ""];
```

<details>
  <summary>Solution</summary>

```javascript
dates.sort((a, b) => {
  // --- GUARD CLAUSES (The Safety Net) ---
  if (!a && b) return 1; // Push 'a' to end
  if (a && !b) return -1; // Keep 'a' at start
  if (!a && !b) return 0; // Both empty? Don't move them

  // --- ACTUAL LOGIC (Only runs if a and b exist) ---
  // Now it is safe to assume 'a' and 'b' are strings
  const partsA = a.split("-"); // Won't crash!
  const partsB = b.split("-");

  const dateA = new Date(partsA[2], partsA[1] - 1, partsA[0]);
  const dateB = new Date(partsB[2], partsB[1] - 1, partsB[0]);

  return dateA - dateB;
});

console.log(dates);
```

</details>

###### Output:

```js
["01-01-2023", "01-01-2025", null, ""];
```

##### 18. Create a final "Master Function" that combines all these techniques into one reusable utility block you can copy-paste into your project?

1. **Custom Order:** Using a lookup object (the "Monday" example).
2. **Safety Defaults:** Using `Infinity` to handle unknown categories.
3. **Complex Data:** Splitting strings and rebuilding them (for Dates/Time).
4. **Guard Clauses:** Handling `null` values so your app doesn't crash.

###### What it should do.

1. **Extraction:** It doesn't care if you give it a flat array `["A", "B"]` or an object array `[{val: "A"}, {val: "B"}]`. It normalizes them first.
2. **Guards:** It filters out the "junk" (nulls) before doing any math. This prevents crashes.
3. **Transformation:** It converts data types (Days -> Numbers, DateStrings -> DateObjects) locally within the sort loop.
4. **Immutability:** It uses `[...data]` so it returns a **new** sorted array, leaving your original data safe.

###### Use it in 3 scenarios

###### Scenario 1: The "Days of the Week" (Custom Order)

```javascript
const days = ["Tuesday", "Funday", null, "Monday"];
const dayMap = { Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5 };

const sorted = universalSort(days, {
  customOrder: dayMap,
});

console.log(sorted);
// Output: ["Monday", "Tuesday", "Funday", null]
```

###### Scenario 2: The "DD-MM-YYYY" Dates (Date Parsing)

```javascript
const dates = ["01-01-2025", "31-12-1990", ""];

const sorted = universalSort(dates, {
  isDate: true,
  desc: true, // Let's try descending (Newest first)
});

console.log(sorted);
// Output: ["01-01-2025", "31-12-1990", ""]
```

###### Scenario 3: Complex Objects (Key Extraction)

Imagine sorting a list of users by their role priority.

```javascript
const users = [
  { name: "Alice", role: "Admin" },
  { name: "Bob", role: "Guest" },
  { name: "Charlie", role: "Editor" },
];

const rolePriority = { Admin: 1, Editor: 2, Guest: 3 };

const sortedUsers = universalSort(users, {
  key: "role", // Look inside the object for "role"
  customOrder: rolePriority,
});

console.log(sortedUsers);
// Output: Alice (Admin), Charlie (Editor), Bob (Guest)
```

```js
const names = ["Alice", "", "Charlie", null, "Bob", undefined];
```

<details>
  <summary>Solution</summary>

```javascript
/**
 * Universal Sort Function
 * @param {Array} data - The array to sort
 * @param {Object} options - Configuration options
 * @param {string} [options.key] - If sorting objects, which property to use?
 * @param {Object} [options.customOrder] - Key-value map (e.g., { "Monday": 1 })
 * @param {boolean} [options.isDate] - Set to true if sorting "DD-MM-YYYY" strings
 * @param {boolean} [options.desc] - Set to true for descending order
 */
function universalSort(
  data,
  { key = null, customOrder = null, isDate = false, desc = false } = {},
) {
  // Create a copy to avoid mutating the original array
  return [...data].sort((a, b) => {
    // 1. EXTRACT VALUES
    // If it's an object, grab the property (e.g., user.role). If not, use the item itself.
    let valA = key ? a[key] : a;
    let valB = key ? b[key] : b;

    // 2. GUARD CLAUSES (The "Nulls Last" Safety Net)
    // We treat null, undefined, and "" as "invalid" and push them to the bottom.
    const isBadA = valA === null || valA === undefined || valA === "";
    const isBadB = valB === null || valB === undefined || valB === "";

    if (isBadA && !isBadB) return 1; // Bad 'a' goes to end
    if (!isBadA && isBadB) return -1; // Bad 'b' goes to end
    if (isBadA && isBadB) return 0; // Both bad? Keep relative order

    // 3. TRANSFORMATION LAYER
    // If we have a custom map (like Days of Week), transform string -> number
    if (customOrder) {
      valA = customOrder[valA] !== undefined ? customOrder[valA] : Infinity;
      valB = customOrder[valB] !== undefined ? customOrder[valB] : Infinity;
    }
    // Or, if it's a generic "DD-MM-YYYY" date, transform string -> Date object
    else if (isDate && typeof valA === "string") {
      const parse = (str) => {
        const [d, m, y] = str.split("-");
        return new Date(y, m - 1, d);
      };
      valA = parse(valA);
      valB = parse(valB);
    }

    // 4. COMPARISON
    // Handle standard string vs number comparison
    let result;
    if (typeof valA === "string" && typeof valB === "string") {
      result = valA.localeCompare(valB);
    } else {
      result = valA - valB;
    }

    // 5. DIRECTION (Flip result if descending)
    return desc ? -result : result;
  });
}
```

###### The TypeScript "Universal Sorter"

```typescript
type SortOptions<T> = {
  key?: keyof T; // Ensures you can only pass keys that actually exist on T
  customOrder?: Record<string, number>; // A simple map like { "Monday": 1 }
  isDate?: boolean;
  desc?: boolean;
};

export const universalSort = <T>(
  data: T[],
  { key, customOrder, isDate = false, desc = false }: SortOptions<T> = {},
): T[] => {
  return [...data].sort((a, b) => {
    // 1. EXTRACT VALUES
    // We cast to 'any' here for flexibility, as T could be a primitive or an object
    let valA: any = key ? a[key] : a;
    let valB: any = key ? b[key] : b;

    // 2. GUARD CLAUSES (Null Safety)
    const isBadA = valA === null || valA === undefined || valA === "";
    const isBadB = valB === null || valB === undefined || valB === "";

    if (isBadA && !isBadB) return 1;
    if (!isBadA && isBadB) return -1;
    if (isBadA && isBadB) return 0;

    // 3. TRANSFORMATION LAYER
    if (customOrder) {
      // If the value isn't in the map, default to Infinity (push to end)
      const rankA = customOrder[String(valA)];
      const rankB = customOrder[String(valB)];
      valA = rankA !== undefined ? rankA : Infinity;
      valB = rankB !== undefined ? rankB : Infinity;
    } else if (isDate && typeof valA === "string" && typeof valB === "string") {
      const parse = (str: string) => {
        const [d, m, y] = str.split("-");
        return new Date(Number(y), Number(m) - 1, Number(d)).getTime();
      };
      valA = parse(valA);
      valB = parse(valB);
    }

    // 4. COMPARISON
    let result = 0;
    if (typeof valA === "string" && typeof valB === "string") {
      result = valA.localeCompare(valB);
    } else if (typeof valA === "number" && typeof valB === "number") {
      result = valA - valB;
    }

    // 5. DIRECTION
    return desc ? -result : result;
  });
};
```

</details>

###### How TypeScript Protects You

The biggest benefit here is the `key` check. If you try to sort by a property that doesn't exist, TypeScript will yell at you immediately (before you even run the code).

###### Example 1: Sorting Primitives (Strings)

```typescript
const days = ["Tuesday", "Monday", "Funday"];
const dayMap = { Monday: 1, Tuesday: 2 };

// TS knows 'days' is string[], so we don't pass a 'key'.
const sorted = universalSort(days, { customOrder: dayMap });
```

###### Example 2: Sorting Objects (Typed)

This is where the magic happens.

```typescript
interface User {
  id: number;
  name: string;
  role: "Admin" | "Editor" | "Viewer";
}

const users: User[] = [
  { id: 1, name: "Alice", role: "Viewer" },
  { id: 2, name: "Bob", role: "Admin" },
];

const rolePriority = { Admin: 1, Editor: 2, Viewer: 3 };

// ✅ VALID
const sortedUsers = universalSort(users, {
  key: "role", // TS allows this because "role" exists on User
  customOrder: rolePriority,
});

// ❌ ERROR: TypeScript will block this!
/*
universalSort(users, {
  key: "email", // Error: Type '"email"' is not assignable to type 'keyof User'.
});
*/
```

###### Key Changes from JS to TS

1. **`<T>` Generic:** The function captures the type of the array you pass in. If you pass `User[]`, `T` becomes `User`.
2. **`keyof T`:** The `key` option is strictly limited to properties of `T`. You can't typo the key name anymore.
3. **`Record<string, number>`:** This strictly defines that your `customOrder` map must use Strings for keys and Numbers for values (ranks).
4. **`String(valA)`:** In the transformation step, we explicitly convert the value to a string before looking it up in `customOrder` to prevent type mismatches.

#### For more code diving into typescript and reactjs see the ../iteration-looping-4.md file.

### The `toSorted()` Method in JavaScript

#### It is a Non-Mutating Array Methods (ES2023 Additions)

Historically, sorting an array (`Array.prototype.sort()`) directly mutated the original array. This often led to scenarios where developers had to create a copy first (`[...arr].sort()` or `arr.slice().sort()`) if they needed to preserve the original array. `toSorted()` directly addresses this by always returning a brand new, sorted array.

#### Syntax:

```javascript
arr.toSorted(compareFn);
```

#### Parameters:

- `compareFn` (Optional): A function that defines the sort order.
  - If omitted, the elements are converted to strings and sorted according to their Unicode code points (lexical ascending order).
  - If provided, it should accept two arguments (`a`, `b`) and return:
    - A negative value if `a` should come before `b`.
    - A positive value if `a` should come after `b`.
    - `0` if `a` and `b` are considered equal for sorting purposes.

#### Return Value:

- A new `Array` instance with the elements of the original array sorted.

#### How it Works (Mental Model):

Imagine `toSorted()` as a smart copy machine that also sorts. You feed it a messy list, and it spits out a _new_, neatly sorted list based on rules you provide (or default alphabetical rules), leaving your original messy list exactly as it was.

#### Key Features:

- **Non-mutating:** This is its defining characteristic. It never modifies the original array.
- **Returns a New Array:** Always creates and returns a completely new array instance.
- **Shallow Copy:** Like most array methods that return new arrays, it performs a shallow copy. If your array contains objects, the new array will contain references to the _same_ objects, not copies of them. Modifying a nested object in the sorted array will still affect the original object.
- **Readability:** Clearly indicates that the original array is not being changed.
- **Stable Sort:** Guarantees that the relative order of equal elements (as determined by `compareFn`) is preserved.

##### 19.Default Lexical Sort (Strings).

```js
const fruits = ["banana", "apple", "cherry", "date"];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const sortedFruits = fruits.toSorted();
console.log(sortedFruits);
console.log(fruits);
```

</details>

###### Output:

```js
["apple", "banana", "cherry", "date"]
["banana", "apple", "cherry", "date"] (original is unchanged)
```

##### 20. Numeric sorting (Ascending)

```js
const originalNumbers = [1, 10, 5, 2, 20];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const sortedNumbersAsc = originalNumbers.toSorted((a, b) => a - b);
console.log(sortedNumbersAsc);
console.log(originalNumbers);
```

</details>

###### Output:

```js
 [1, 2, 5, 10, 20]
 [1, 10, 5, 2, 20] (original is unchanged)
```

##### 21. Numeric Sort (Descending).

```js
const scores = [85, 92, 78, 95, 88];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const sortedScoresDesc = scores.toSorted((a, b) => b - a);
console.log(sortedScoresDesc);
```

</details>

###### Output:

```js
Output: [95, 92, 88, 85, 78];
```

##### 22. Sorting Objects by a Property.

```js
const users = [
  { name: "Bob", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Charlie", age: 35 },
];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const sortedUsersByAge = users.toSorted((a, b) => a.age - b.age);
console.log(sortedUsersByAge);
```

</details>

###### Output:

```js
[
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
```

##### 23. When You Need a Sorted Copy, Preserving the Original Array. This is the primary and most common use case. In functional programming paradigms, or when working with state management (like in React or Redux), immutability is crucial. `toSorted()` perfectly fits this need.

```js
const originalPosts = [
  { id: 1, title: "Intro to JS", likes: 10 },
  { id: 2, title: "Advanced CSS", likes: 50 },
  { id: 3, title: "React Basics", likes: 30 },
];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
// For a "Most Liked" section on a UI, without affecting the original order
const mostLikedPosts = originalPosts.toSorted((a, b) => b.likes - a.likes);

console.log("Most Liked:", mostLikedPosts);
console.log("Original Posts:", originalPosts); // Original order preserved
```

</details>

###### Output:

```js
Most Liked: [
  { id: 2, title: 'Advanced CSS', likes: 50 },
  { id: 3, title: 'React Basics', likes: 30 },
  { id: 1, title: 'Intro to JS', likes: 10 }
]
Original Posts: [
  { id: 1, title: 'Intro to JS', likes: 10 },
  { id: 2, title: 'Advanced CSS', likes: 50 },
  { id: 3, title: 'React Basics', likes: 30 }
]
```

##### 24. Chaining Array Methods. Since `toSorted()` returns a new array, you can directly chain other non-mutating array methods (`map`, `filter`, `reduce`, `slice`, `toReversed()`, etc.) onto its result without an intermediate step.

```js
const products = [
  { name: "Laptop", price: 1200, category: "Electronics" },
  { name: "Keyboard", price: 75, category: "Electronics" },
  { name: "Mouse", price: 25, category: "Electronics" },
  { name: "Book", price: 15, category: "Books" },
];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
// Get the names of the 2 most expensive electronics products
const expensiveElectronicsNames = products
  .filter((p) => p.category === "Electronics") // Filter first
  .toSorted((a, b) => b.price - a.price) // Sort descending by price
  .slice(0, 2) // Take top 2
  .map((p) => p.name); // Get names

console.log(expensiveElectronicsNames);
console.log(products);
```

</details>

###### Output:

```js
["Laptop", "Keyboard"]
----------------------------------------------
[
  ({ name: "Laptop", price: 1200, category: "Electronics" },
  { name: "Keyboard", price: 75, category: "Electronics" },
  { name: "Mouse", price: 25, category: "Electronics" },
  { name: "Book", price: 15, category: "Books" })
];
```

##### 25. Readability and Clarity. The method name `toSorted()` clearly communicates that a _new_, sorted array will be returned, making the code more self-documenting compared to `arr.slice().sort()`.

```js
// Less clear intention (requires knowing slice() makes a copy)
const oldWay = myArray.slice().sort((a, b) => a - b);

// Clearer intention
const newWay = myArray.toSorted((a, b) => a - b);
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript

```

</details>

###### Output:

```js

```

##### 26. When Browser Compatibility for Older Environments is a Concern (Without Polyfill). `toSorted()` is an ES2023 feature. If you're targeting older browsers or environments that don't transpile newer JavaScript features, `toSorted()` will not be available. In such cases, the `[...arr].sort()` or `arr.slice().sort()` pattern is the compatible solution.

```js
const myArr = [1, 3, 2];
const sortedCopy = [...myArr].sort(); // Works universally
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript

```

</details>

###### Output:

```js

```

##### 27. Sorting by Multiple Criteria (Chained/Nested Sort). You can create a `compareFn` that handles multiple sorting levels, for example, sorting by category, then by price within each category.

```js
const products = [
  { name: "Banana", category: "Fruit", price: 1.0 },
  { name: "Apple", category: "Fruit", price: 1.5 },
  { name: "Milk", category: "Dairy", price: 3.0 },
  { name: "Cheese", category: "Dairy", price: 5.0 },
  { name: "Bread", category: "Bakery", price: 2.5 },
];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
// Sort first by category (alphabetical), then by price (ascending)
const sortedProducts = products.toSorted((a, b) => {
  if (a.category < b.category) return -1;
  if (a.category > b.category) return 1;
  // If categories are the same, sort by price
  return a.price - b.price;
});

console.log(sortedProducts);
```

</details>

###### Output:

```js
[
  { name: "Bread", category: "Bakery", price: 2.5 },
  { name: "Cheese", category: "Dairy", price: 5 },
  { name: "Milk", category: "Dairy", price: 3 },
  { name: "Apple", category: "Fruit", price: 1.5 },
  { name: "Banana", category: "Fruit", price: 1 },
];
```

##### 28. Sorting Mixed Data Types with Custom Logic. If your array contains mixed data types and you need a specific, robust sorting order.

```js
const mixedItems = [
  10,
  "apple",
  null,
  undefined,
  5,
  "banana",
  true,
  { id: 1 },
  false,
];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
const customSortedItems = mixedItems.toSorted((a, b) => {
  const typeA = typeof a;
  const typeB = typeof b;

  // Define a custom order for types
  const typeOrder = {
    undefined: 0,
    object: 1,
    boolean: 2,
    number: 3,
    string: 4,
    function: 5,
  };

  const orderA = typeOrder[typeA] ?? 99; // Default for unknown types
  const orderB = typeOrder[typeB] ?? 99;

  if (orderA !== orderB) {
    return orderA - orderB; // Sort by type first
  }

  // If types are the same, apply secondary sort (e.g., natural string or numeric)
  if (typeA === "number") return a - b;
  if (typeA === "string") return a.localeCompare(b);
  if (typeA === "boolean") return a === b ? 0 : a ? -1 : 1; // true before false
  // For objects, fall back to default comparison or more specific ID comparison
  if (typeA === "object" && a && b && "id" in a && "id" in b)
    return a.id - b.id;
  return 0; // Maintain original order for other types or equal values
});

console.log(customSortedItems);
```

</details>

###### Output:

```js
[
  null,      { id: 1 },
  true,      false,
  5,         10,
  'apple',   'banana',
  undefined
]
------------------------------------------
[
  undefined,
  null,          // typeof null is 'object', comes after undefined due to typeOrder
  { id: 1 },
  false,
  true,
  5,
  10,
  'apple',
  'banana'
]
```

##### 29. Sorting by a Derived or Computed Property. Sorting based on a value that isn't directly present but can be computed from the object.

```js
const items = [
  { name: "FileA.txt", sizeKB: 100 },
  { name: "ImageB.jpg", sizeKB: 1024 }, // 1MB
  { name: "ReportC.pdf", sizeKB: 500 },
];
```

<details>
  <summary style="color: #30A46C">Solution</summary>

```javascript
// Sort items by a computed size (e.g., megabytes), descending
const sortedBySizeMB = items.toSorted((a, b) => {
  const sizeAMB = a.sizeKB / 1024;
  const sizeBMB = b.sizeKB / 1024;
  return sizeBMB - sizeAMB; // Descending
});

console.log(sortedBySizeMB);
```

</details>

###### Output:

```js
[
  { name: "ImageB.jpg", sizeKB: 1024 },
  { name: "ReportC.pdf", sizeKB: 500 },
  { name: "FileA.txt", sizeKB: 100 },
];
```
