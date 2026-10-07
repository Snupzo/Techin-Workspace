/*
## 💡 What is `map()` in JavaScript?

`map()` is a **built-in method** in JavaScript arrays that lets you **transform each item** in a list (an array) into a **new item**, and returns a **new array** with those transformed items — *without changing the original array*.

---

### 🔍 Key Idea

- You have a list of things (like numbers, names, objects).
- You want to **do something to each item** (e.g., add a message, change a value, format it).
- `map()` does that automatically — one after another — and gives you a **new list** with the changes.

✅ The original list stays **unchanged** — it’s like copying a list and editing only the copy.

---

### 🎯 Real-World Example: Names → Greetings

Suppose you have an array of names:

```javascript
const names = ["Alice", "Bob", "Charlie"];
```

You want to turn each name into a greeting like `"Hello, Alice!"`.

You can use `map()`:

```javascript
const greetings = names.map(name => "Hello, " + name + "!");
```

👉 Result:
```javascript
["Hello, Alice!", "Hello, Bob!", "Hello, Charlie!"]
```

✅ Original: `["Alice", "Bob", "Charlie"]` — unchanged  
✅ New list: `["Hello, Alice!", ...]` — created by `map()`

---

### 🚀 Example 2: Numbers → Doubled

Convert numbers in an array to their double:

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2);
```

👉 Output:
```javascript
[2, 4, 6, 8, 10]
```

Perfect — you didn’t need a loop, and it’s clean and readable.

---

### 📚 Example 3: Objects → New Format

Say you have a list of objects:

```javascript
const users = [
  { name: "Anna", age: 25 },
  { name: "Ben", age: 30 },
  { name: "Claire", age: 35 }
];
```

You want to make a new list where each user has a formatted message:

```javascript
const messages = users.map(user => 
  `Hi ${user.name}, you're ${user.age} years old!`
);
```

👉 Result:
```javascript
[
  "Hi Anna, you're 25 years old!",
  "Hi Ben, you're 30 years old!",
  "Hi Claire, you're 35 years old!"
]
```

✅ Again — original array unchanged.

---

### ✅ Key Rules of `map()`

| Rule | Meaning |
|------|--------|
| **Input**: Takes an array | Your list of items |
| **Operation**: Runs a function on each item | What you do to each item |
| **Output**: Returns a new array | With transformed items |
| **Does NOT change the original** | Keeps your original list safe |
| **Returns only new values** | No deletions, no additions (unless you include them in the function) |

---

### 🚫 What `map()` Does NOT Do

❌ It does **not**:
- Change the original array
- Add or remove items from the list
- Sort or filter items
- Replace the list with a new one (it only transforms)

👉 To do those, you’d use:
- `filter()` → to keep only certain items
- `sort()` → to order items
- `reduce()` → to combine items into a single value

---

### 📝 Code Structure

```javascript
arrayName.map(item => {
  return transformedItem;
});
```

- `item` = each value in the array
- `transformedItem` = what you want to create from that item

---

### 🎯 When to Use `map()`?

Use `map()` when:
- You want to **turn every item** into a new version.
- You want to **keep the original list** intact.
- You’re working with **lists of data** like names, numbers, objects.
- You want **clean, readable, functional code** without loops.

🧠 Think of it as:
> A **magic machine** that takes each item, applies a rule, and gives you back a new one — all in a row.

---

### 💡 Summary

| Feature | Explanation |
|--------|-------------|
| `map()` | Transforms every item in an array into a new one |
| Output | A new array (original stays the same) |
| Use case | Turn names to greetings, numbers to doubles, objects to messages |
| Safety | Doesn't modify the original — perfect for data pipelines |

*/
