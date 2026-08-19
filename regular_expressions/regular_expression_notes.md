Regular Expressions (often abbreviated as **Regex** or **RegExp**) are one of the most powerful—and notoriously cryptic—tools in software engineering.

A regular expression is simply a sequence of characters that forms a search pattern. You use them to check if a string contains a specific pattern, to extract data from a giant wall of text, or to find and replace specific words.

Because you spend a lot of time working across full-stack JavaScript and managing terminal configurations, Regex is going to be your best friend. It is the exact same engine running under the hood whether you are validating a user's email input in React, configuring Neovim search mappings, or scraping text streams in a shell script.

Here are your complete, definitive notes on Regular Expressions.

---

### 1. When to Use vs. When NOT to Use Regex

**When to USE Regex:**

- **Validation:** Checking if an email, phone number, or password meets specific formatting rules.
- **Extraction:** Pulling a specific ID out of a long URL, or scraping timestamps from a server log.
- **Mass Refactoring:** Finding and replacing variable names or string patterns across thousands of files in your code editor.

**When NOT to USE Regex:**

- **Parsing HTML/XML:** Never use Regex to parse HTML. HTML is not strictly structured, and nested tags will break your regex and cause catastrophic backtracking. Use a proper DOM parser.
- **Complex Math/Logic:** Regex cannot do math. It cannot check if a number is "greater than 100", it can only check if a string of characters happens to look like "101".
- **When standard string methods work:** If you just need to know if a string contains the word "apple", use native JavaScript like `string.includes("apple")`. It is significantly faster and easier to read than Regex.

---

### 2. The Core Syntax (The Cheat Sheet)

Regex looks like gibberish because every symbol has a specific mathematical meaning. Think of it as a microscopic programming language.

Regex patterns are traditionally written between two forward slashes: `/pattern/`.

#### A. Anchors (Positioning)

These do not match characters; they match _positions_ in the text.

- **`^`** : Matches the **start** of a string. (e.g., `/^Hello/` matches "Hello world" but not "Say Hello").
- **`$`** : Matches the **end** of a string. (e.g., `/world$/` matches "Hello world" but not "world peace").
- **`\b`** : Matches a **word boundary** (the space before or after a word). (e.g., `/\bcat\b/` matches "the cat sat" but not "the catalog").

#### B. Character Classes (What to match)

- **`.`** : The wild card. Matches **ANY single character** except a line break.
- **`[abc]`** : Matches a single character that is **either** a, b, or c.
- **`[^abc]`** : The caret inside brackets means **NOT**. Matches any character that is _not_ a, b, or c.
- **`[a-z]`** : Matches any lowercase letter from a to z.
- **`[0-9]`** : Matches any single number.

#### C. Shorthand Classes (The shortcuts)

These are built-in shortcuts for the classes above.

- **`\w`** : Matches any **word character** (letters, digits, and underscores `[a-zA-Z0-9_]`).
- **`\W`** : Matches any **NON-word character** (spaces, punctuation).
- **`\d`** : Matches any **digit** (`[0-9]`).
- **`\D`** : Matches any **NON-digit**.
- **`\s`** : Matches any **whitespace** (spaces, tabs, line breaks).
- **`\S`** : Matches any **NON-whitespace**.

#### D. Quantifiers (How many to match)

Quantifiers apply to the _single character or group immediately before them_.

- **`*`** : Matches **0 or more** times. (e.g., `/ca*t/` matches "ct", "cat", "caaat").
- **`+`** : Matches **1 or more** times. (e.g., `/ca+t/` matches "cat", "caaat", but NOT "ct").
- **`?`** : Matches **0 or 1** time (makes something optional). (e.g., `/colou?r/` matches "color" or "colour").
- **`{n}`** : Matches exactly **n** times. (e.g., `/\d{4}/` matches a 4-digit number).
- **`{n,}`** : Matches **n or more** times.
- **`{n,m}`** : Matches between **n and m** times.

#### E. Groups and Alternation

- **`(abc)`** : **Capture Group**. Groups multiple characters together and "remembers" the match so you can extract it later.
- **`(?:abc)`** : **Non-capturing Group**. Groups characters for logic, but doesn't store the match in memory (better for performance).
- **`|`** : **OR**. (e.g., `/cat|dog/` matches "cat" OR "dog").
- **`\`** : **Escape Character**. If you actually want to search for a literal period `.`, you must escape its wildcard magic by writing `\.`.

---

### 3. Parameters / Flags (The Modifiers)

Flags sit at the very end of the regex, outside the closing slash (e.g., `/pattern/flags`). They change how the entire engine behaves.

| Flag    | Name             | What it does                                                                                                                          |
| ------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **`g`** | Global           | Don't stop after the first match. Keep searching the entire document and return _all_ matches.                                        |
| **`i`** | Case-Insensitive | Makes `/a/` match both "a" and "A".                                                                                                   |
| **`m`** | Multiline        | Makes the `^` and `$` anchors match the start/end of _each line_ in a text block, rather than just the start/end of the whole string. |

---

### 4. Basic Examples (Learning the logic)

**1. Matching a 5-digit US Zip Code**

- Regex: `/^\d{5}$/`
- _Translation:_ Start at the beginning of the string `^`, find exactly five digits `\d{5}`, and ensure the string immediately ends `$`. This prevents matching "123456" or "abc12345".

**2. Checking if a string contains a specific file extension**

- Regex: `/\.jsx?$/`
- _Translation:_ Look for a literal dot `\.`, followed by "js", followed by an optional "x" `x?`, right at the end of the string `$`. This successfully matches both "app.js" and "component.jsx".

---

### 5. Advanced Everyday Programming Examples

These are real-world patterns you will use in full-stack JavaScript and terminal scripting.

#### Example 1: Validating a Strong Password

**Requirement:** Minimum 8 characters, at least one uppercase letter, one lowercase letter, and one number.

```javascript
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

passwordRegex.test("weakpass"); // false
passwordRegex.test("StrongPass1"); // true
```

- _How it works:_ This uses an advanced concept called a **Positive Lookahead** `(?=...)`. It essentially tells the engine: "Before you start matching, look ahead and verify that somewhere in this string there is a lowercase letter `.*[a-z]`, an uppercase letter, and a digit. Once you verify those exist, ensure the whole string is at least 8 characters long `[a-zA-Z\d]{8,}`."

#### Example 2: Extracting Data from a URL (Routing)

**Requirement:** Pull the specific `userID` and `postID` out of a URL path like `/users/user-12/posts/99`.

```javascript
const url = "/users/user-12/posts/99";
const routeRegex = /\/users\/(user-\d+)\/posts\/(\d+)/;

const matches = url.match(routeRegex);
// matches[1] -> "user-12"
// matches[2] -> "99"
```

- _How it works:_ We use the **Capture Groups** `(...)`. The engine finds the literal text `/users/`, then captures `user-` followed by one or more digits `\d+` into the first group. It finds `/posts/`, and captures the digits into the second group. This is exactly how tools like React Router parse URLs under the hood.

#### Example 3: Parsing Log Streams (Terminal/Shell)

**Requirement:** You have an automated archiving script pulling in text streams, and you need to find every single timestamp and error code formatted like `[2026-04-12] ERROR: 404`.

- Regex: `/^\[(\d{4}-\d{2}-\d{2})\] ERROR: (\d{3})/gm`
- _How it works:_
- `^` (Start of line, because of the `m` multiline flag).
- `\[` (Escaped literal bracket).
- `(\d{4}-\d{2}-\d{2})` (Captures exactly four digits, a hyphen, two digits, a hyphen, two digits).
- `\] ERROR: ` (Literal text).
- `(\d{3})` (Captures a 3-digit error code).
- The `g` flag ensures it sweeps the entire text file, grabbing every single matching line.

Here are 5 practical JavaScript examples using only literal characters and anchors. You can copy and paste these directly into your browser console or run them using Bun to test exactly how the engine behaves.

### 1. Exact Match (`^` and `$`)

When validating input variables, you often need to ensure the string contains nothing but the exact required word. We use the JavaScript `.test()` method, which returns `true` or `false`.

```javascript
const regex = /^production$/;

const env1 = "production";
const env2 = "production-beta";
const env3 = "nonproduction";

console.log(regex.test(env1)); // true
console.log(regex.test(env2)); // false (fails because of "-beta" at the end)
console.log(regex.test(env3)); // false (fails because of "non" at the start)
```

### 2. Prefix Validation (`^`)

If you are writing a script to validate conventional commit messages before pushing to a Git repository, you only care about the absolute beginning of the string.

```javascript
const regex = /^fix:/;

const commit1 = "fix: resolved the crashing router";
const commit2 = "I need to fix: the router";

console.log(regex.test(commit1)); // true
console.log(regex.test(commit2)); // false (fails because "fix:" is not the very first word)
```

### 3. Suffix Validation (`$`)

If you are scanning through an array of server status messages, you might want to filter out only the lines that conclude with a specific status code.

```javascript
const regex = /FAILED$/;

const logs = [
  "Database connection FAILED",
  "The FAILED process was rebooted",
  "Network request FAILED",
];

// .filter() loops through the array and keeps items where .test() returns true
const criticalLogs = logs.filter((log) => regex.test(log));

console.log(criticalLogs);
// Output: [ 'Database connection FAILED', 'Network request FAILED' ]
```

### 4. Safe String Replacement (`\b`)

If you are building out your social media application and decide you want to rename your `post` variable to `article`, a standard string replace will ruin your other variables like `postList`. Using word boundaries (`\b`) prevents this.

```javascript
const regex = /\bpost\b/;

const myCode = "const postList = []; const post = {};";

// .replace() finds the regex match and swaps it with the new string
const updatedCode = myCode.replace(regex, "article");

console.log(updatedCode);
// Output: "const postList = []; const article = {};"
// Notice how postList was completely ignored!
```

### 5. Embedded Word Checking (`\B`)

Sometimes you want to find a sequence of letters, but only when they are fused to the inside or end of another word (like finding the "js" inside a frontend framework name).

```javascript
const regex = /\Bjs/;

const string1 = "I am learning reactjs today.";
const string2 = "I am learning js today.";

console.log(regex.test(string1)); // true ("js" is fused to "react")
console.log(regex.test(string2)); // false ("js" is separated by word boundaries)
```
