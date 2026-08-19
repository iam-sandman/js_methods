Here is the completely updated reference guide for all eight Regular Expression methods, now including the exact syntax and parameter fields for each one.

### Family 1: The RegExp Methods

These methods belong directly to the Regular Expression object.

**1. `test()**`

- **Syntax:** `regex.test(str)`
- **Parameters:**
- `str` (String): The target text you want to evaluate against the regex.

- **What it does:** It asks a simple Yes/No question: "Does this pattern exist in this string?"
- **Returns:** A boolean (`true` or `false`).
- **When to use:** Form validation (e.g., checking if an email is valid before submitting).

```javascript
const regex = /^admin/;
console.log(regex.test("admin_user")); // true
```

**2. `exec()**`

- **Syntax:** `regex.exec(str)`
- **Parameters:**
- `str` (String): The text you want to search and extract data from.

- **What it does:** It acts like an investigator. It finds the match and returns a detailed dossier about it, including the exact index where it was found and any Capture Groups you specified.
- **Returns:** An Array with match details, or `null` if no match is found.
- **When to use:** When you need to extract specific pieces of a match (like pulling an ID out of a URL) and want deep programmatic control.

```javascript
const regex = /user-(\d+)/;
const result = regex.exec("/api/user-99/profile");

console.log(result[0]); // "user-99" (The full match)
console.log(result[1]); // "99" (The captured group)
console.log(result.index); // 5 (Where the match started)
```

---

### Family 2: The String Methods

These methods are attached to standard JavaScript strings, but they are specifically designed to accept a Regex as their argument.

**3. `match()**`

- **Syntax:** `str.match(regex)`
- **Parameters:**
- `regex` (RegExp): The regular expression pattern to search for inside the string.

- **What it does:** It extracts the matches from the string. If you don't use the global `g` flag, it acts exactly like `exec()`. If you DO use the `g` flag, it returns a clean array of every match it found.
- **Returns:** An Array of matches, or `null`.
- **When to use:** When you want a quick list of all matches in a document.

```javascript
const text = "apple, banana, apricot";
const regex = /a\w+/g;

console.log(text.match(regex)); // [ 'apple', 'anana', 'apricot' ]
```

**4. `matchAll()**`

- **Syntax:** `str.matchAll(regex)`
- **Parameters:**
- `regex` (RegExp): The regular expression pattern to search for (must include the global `g` flag).

- **What it does:** It is the heavy-duty version of `match()`. It returns every single match _along with all their capture group details_.
- **Returns:** An Iterator (which you usually convert to an Array using the spread operator `[...]`).
- **When to use:** When you are scraping complex data logs and need multiple capture groups from multiple lines.

```javascript
const text = "ID: 123, ID: 456";
const regex = /ID: (\d+)/g;

const results = [...text.matchAll(regex)];
console.log(results[0][1]); // "123"
console.log(results[1][1]); // "456"
```

**5. `replace()**`

- **Syntax:** `str.replace(regex, replacement)`
- **Parameters:**
- `regex` (RegExp): The pattern you want to find.
- `replacement` (String or Function): The new text to insert in place of the match.

- **What it does:** It finds a match and swaps it out for new text.
- **Returns:** A brand new string.
- **When to use:** Masking profanity, formatting phone numbers, or code refactoring.

```javascript
const text = "Hello world";
const regex = /world/;

console.log(text.replace(regex, "React")); // "Hello React"
```

**6. `replaceAll()**`

- **Syntax:** `str.replaceAll(regex, replacement)`
- **Parameters:**
- `regex` (RegExp): The pattern to find (must include the global `g` flag).
- `replacement` (String or Function): The new text to insert in place of the matches.

- **What it does:** Exactly the same as `replace()`, but forces the replacement of _every_ instance.
- **Returns:** A brand new string.
- **When to use:** When you need to guarantee every single instance of a word is changed across a massive text block.

**7. `search()**`

- **Syntax:** `str.search(regex)`
- **Parameters:**
- `regex` (RegExp): The pattern you want to locate within the string.

- **What it does:** It is the Regex equivalent of `indexOf()`. It scans the string and tells you the exact character position where the match begins.
- **Returns:** A Number (the index). Returns `-1` if not found.
- **When to use:** When you just need to know _where_ a pattern starts, without needing to extract the actual text.

```javascript
const text = "Error: Invalid credentials";
const regex = /Invalid/;

console.log(text.search(regex)); // 7 (Starts at the 7th character)
```

**8. `split()**`

- **Syntax:** `str.split(regex, limit)`
- **Parameters:**
- `regex` (RegExp): The pattern describing where each split should occur.
- `limit` (Number, Optional): A cap on the number of splits to be found.

- **What it does:** It chops a string into an array of smaller strings, using the regex as the blade to cut it apart.
- **Returns:** An Array of strings.
- **When to use:** When processing messy user input, like a comma-separated list where some users used spaces, some used commas, and some used both.

```javascript
const messyInput = "apple, banana; orange   grape";
const regex = /[,\s;]+/; // Split by any comma, space, or semicolon

console.log(messyInput.split(regex));
// [ 'apple', 'banana', 'orange', 'grape' ]
```
