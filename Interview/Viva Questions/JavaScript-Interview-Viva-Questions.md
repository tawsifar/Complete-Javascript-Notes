# JavaScript Interview and Viva Questions

This file contains common, frequently asked, practical, and interview-relevant JavaScript questions. It also covers important questions that commonly come up in university viva, project discussions, frontend interviews, backend JavaScript interviews, and JavaScript fundamentals.

## 1. JavaScript Fundamentals

### 1. What is JavaScript?

JavaScript is a high-level, dynamically typed, multi-paradigm programming language used to build interactive web applications and many other types of software.

### 2. Is JavaScript the same as Java?

No. JavaScript and Java are different programming languages with different syntax, runtimes, ecosystems, and use cases.

### 3. Why is JavaScript called a scripting language?

Historically, JavaScript was designed to be embedded in host environments such as web browsers and used to control application behavior through scripts.

### 4. Where can JavaScript run?

JavaScript can run in browsers and in non-browser runtimes such as Node.js.

### 5. What are common uses of JavaScript?

- Frontend web applications
- Backend APIs and servers
- Browser automation
- CLI applications
- Desktop applications
- Mobile applications
- Serverless functions

### 6. What is ECMAScript?

ECMAScript is the language specification that defines the core features of JavaScript.

### 7. What is an ECMAScript version?

It is a standardized edition of the ECMAScript specification. Modern JavaScript features are commonly associated with yearly ECMAScript releases.

### 8. Is JavaScript compiled or interpreted?

Modern JavaScript engines use a combination of interpretation, compilation, optimization, and just-in-time compilation techniques.

### 9. What is a JavaScript engine?

A JavaScript engine executes JavaScript code.

Examples:
- V8
- SpiderMonkey
- JavaScriptCore

### 10. What is V8?

V8 is Google's JavaScript engine used by Chrome and Node.js.

---

## 2. Variables and Data Types

### 11. What is a variable?

A variable is a named binding used to reference a value.

### 12. What is the difference between let, const, and var?

- let: block-scoped and can be reassigned
- const: block-scoped and cannot be reassigned
- var: function-scoped and has older hoisting behavior

### 13. Which should you normally use: let or const?

Use const by default. Use let when reassignment is required.

### 14. Can a const object be modified?

Yes. const prevents reassignment of the binding, not mutation of the object's properties.

### 15. What are JavaScript primitive types?

- string
- number
- bigint
- boolean
- undefined
- symbol
- null

### 16. What is a reference value?

Objects, arrays, and functions are non-primitive values that are accessed through references.

### 17. What is the difference between primitive and reference values?

Primitive values are immutable values. Objects and other reference values can be mutated through their references.

### 18. What is undefined?

undefined normally means that a value has not been assigned or a requested property does not exist.

### 19. What is null?

null represents an intentional absence of a value.

### 20. Why does typeof null return "object"?

It is a long-standing historical behavior in JavaScript and is kept for compatibility.

### 21. What does typeof do?

typeof returns a string describing the type category of a value.

### 22. What is NaN?

NaN means "Not-a-Number". It represents an invalid numeric result.

### 23. Is NaN equal to itself?

No.

```js
NaN === NaN // false
```

Use Number.isNaN() to test for NaN.

### 24. What is Infinity?

Infinity represents a numeric value greater than every finite number.

### 25. What is BigInt?

BigInt is a primitive type used for integers larger than the safe integer range of Number.

### 26. What is Symbol?

Symbol is a primitive type used to create unique identifiers.

---

## 3. Type Conversion and Coercion

### 27. What is type coercion?

Type coercion is the automatic or explicit conversion of one type into another.

### 28. What is the difference between == and ===?

== allows type coercion before comparison.

=== compares without performing type coercion and is generally preferred.

### 29. What is the difference between != and !==?

!= allows type coercion.

!== compares both value and type without coercion.

### 30. What does Boolean(value) do?

It explicitly converts a value into a boolean.

### 31. What are falsy values?

Common falsy values include:

- false
- 0
- -0
- 0n
- ""
- null
- undefined
- NaN

### 32. What are truthy values?

Values that become true when converted to Boolean.

### 33. What does Number("42") return?

42.

### 34. What does Number("hello") return?

NaN.

### 35. What is the difference between parseInt() and Number()?

Number() attempts to convert the entire value into a number.

parseInt() parses an integer from the beginning of a string.

### 36. What is implicit coercion?

It is type conversion performed automatically by JavaScript.

---

## 4. Operators

### 37. What are arithmetic operators?

+, -, *, /, %, **

### 38. What does % do?

It returns the remainder of a division.

### 39. What does ** do?

It performs exponentiation.

### 40. What is the ternary operator?

It is a compact conditional expression.

```js
const result = age >= 18 ? "Adult" : "Minor";
```

### 41. What is the difference between || and ???

|| uses the right side when the left side is falsy.

?? uses the right side only when the left side is null or undefined.

### 42. What is optional chaining?

Optional chaining uses ?. to safely access properties or call methods when an intermediate value may be null or undefined.

### 43. What is short-circuit evaluation?

JavaScript may stop evaluating an expression once its result is already determined.

---

## 5. Scope and Hoisting

### 44. What is scope?

Scope determines where a variable can be accessed.

### 45. What types of scope are important in JavaScript?

- Global scope
- Function scope
- Block scope
- Module scope

### 46. What is block scope?

A variable declared with let or const inside a block is available only within that block.

### 47. What is function scope?

A var variable declared inside a function is scoped to that function.

### 48. What is hoisting?

Hoisting describes how JavaScript declarations are processed before code execution within their scope.

### 49. Are let and const hoisted?

Their declarations are processed, but they cannot be accessed before initialization because they are in the Temporal Dead Zone.

### 50. What is the Temporal Dead Zone?

The Temporal Dead Zone is the period between entering a scope and initializing a let, const, or class binding.

### 51. Is a function declaration hoisted?

Yes. Function declarations can generally be called before their declaration in the same scope.

### 52. Is a function expression hoisted the same way?

No. The variable binding and the function value have different initialization behavior.

---

## 6. Functions

### 53. What is a function?

A function is a reusable block of code that can receive inputs and produce a result.

### 54. What is a function declaration?

```js
function add(a, b) {
  return a + b;
}
```

### 55. What is a function expression?

```js
const add = function (a, b) {
  return a + b;
};
```

### 56. What is an arrow function?

An arrow function is a shorter function syntax with important differences in this behavior.

### 57. What is a callback function?

A callback is a function passed to another function to be called later.

### 58. What is a higher-order function?

A higher-order function accepts a function, returns a function, or both.

### 59. What are default parameters?

Default parameters provide a value when an argument is undefined.

### 60. What are rest parameters?

Rest parameters collect remaining arguments into an array.

### 61. What is the difference between arguments and parameters?

Parameters are variables defined in a function declaration.

Arguments are the actual values passed to the function.

### 62. What does return do?

return sends a value back from a function and stops execution of that function.

---

## 7. Closures and this

### 63. What is a closure?

A closure is a function together with access to variables from its surrounding lexical environment.

### 64. Why are closures useful?

Closures are useful for data privacy, factories, callbacks, state preservation, and functional patterns.

### 65. What is lexical scope?

Lexical scope means variable accessibility is determined by where code is written.

### 66. What is this?

this is a special value whose meaning depends on how a function is called.

### 67. Does an arrow function have its own this?

No. Arrow functions capture this from their surrounding lexical scope.

### 68. What does call() do?

call() invokes a function with a specified this value and individual arguments.

### 69. What does apply() do?

apply() invokes a function with a specified this value and arguments supplied as an array-like value.

### 70. What does bind() do?

bind() creates a new function with a chosen this value and optionally pre-filled arguments.

### 71. What is an IIFE?

An Immediately Invoked Function Expression is a function expression that is executed immediately after being created.

---

## 8. Arrays

### 72. What is an array?

An array is an ordered collection of values.

### 73. Are JavaScript arrays fixed-size?

No. JavaScript arrays can dynamically change length.

### 74. What does push() do?

Adds one or more elements to the end of an array.

### 75. What does pop() do?

Removes and returns the last element.

### 76. What does shift() do?

Removes and returns the first element.

### 77. What does unshift() do?

Adds elements to the beginning.

### 78. What is the difference between slice() and splice()?

slice() returns a portion without modifying the original array.

splice() can add, remove, or replace elements and mutates the original array.

### 79. What does map() do?

map() creates a new array by transforming each element.

### 80. What does filter() do?

filter() creates a new array containing elements that pass a condition.

### 81. What does reduce() do?

reduce() combines array elements into a single accumulated result.

### 82. What is the difference between map() and forEach()?

map() returns a new array.

forEach() is mainly used for performing an action for each element and does not create a transformed array.

### 83. What does find() return?

The first element that satisfies the condition, or undefined if none is found.

### 84. What does findIndex() return?

The index of the first matching element, or -1.

### 85. What do some() and every() do?

some() checks whether at least one element passes a condition.

every() checks whether all elements pass a condition.

### 86. What is array destructuring?

It extracts values from an array into variables.

### 87. What is the spread operator with arrays?

It expands iterable values into individual elements.

### 88. What is Array.from()?

Array.from() creates an array from an iterable or array-like value.

---

## 9. Objects

### 89. What is an object?

An object is a collection of key-value properties.

### 90. How do you access an object property?

Using dot notation or bracket notation.

```js
user.name;
user["name"];
```

### 91. What is an object method?

A function stored as an object property.

### 92. What is object destructuring?

It extracts properties from an object into variables.

### 93. What is object spread?

It copies enumerable own properties into a new object.

### 94. What is a shallow copy?

A shallow copy copies the top-level properties but keeps references to nested objects.

### 95. What is a deep copy?

A deep copy recursively creates independent copies of nested data where supported.

### 96. What is structuredClone()?

structuredClone() creates a deep structured clone for supported JavaScript values.

### 97. What is Object.assign()?

Object.assign() copies enumerable own properties from source objects into a target object.

### 98. What is Object.keys()?

Returns an array of an object's own enumerable property names.

### 99. What is Object.values()?

Returns an array of an object's own enumerable property values.

### 100. What is Object.entries()?

Returns an array of key-value pairs.

### 101. What is Object.hasOwn()?

It checks whether an object directly owns a property.

### 102. What is the in operator?

It checks whether a property exists on an object or anywhere in its prototype chain.

---

## 10. Prototypes and Classes

### 103. What is a prototype?

A prototype is an object from which another object can inherit properties and methods.

### 104. What is the prototype chain?

It is the chain JavaScript follows when looking for a property or method that is not found directly on an object.

### 105. What is prototypal inheritance?

Objects can inherit behavior through their prototype chain.

### 106. What is a constructor function?

A constructor function is traditionally used with new to create objects and establish prototype relationships.

### 107. What does new do?

new creates a new object, connects it to the constructor's prototype, calls the constructor with that object as this, and returns the object unless the constructor explicitly returns another object.

### 108. What is a class?

A class is syntax for defining constructor behavior and methods using JavaScript's prototype-based object model.

### 109. What is class inheritance?

A class can extend another class using extends.

### 110. What does super() do?

super() calls the parent class constructor from a derived class constructor.

### 111. What are static methods?

Static methods belong to the class itself rather than individual instances.

### 112. What are private class fields?

Private fields use # and can only be accessed from within the class that declares them.

### 113. What is instanceof?

instanceof checks whether an object's prototype chain contains a constructor's prototype.

---

## 11. Map, Set, WeakMap, WeakSet

### 114. What is Map?

Map is a collection of key-value pairs where keys can be values of any type.

### 115. Map vs Object?

Map is designed specifically for key-value collections and provides methods such as set(), get(), has(), and delete().

Objects are general-purpose structured values.

### 116. What is Set?

Set is a collection of unique values.

### 117. What is WeakMap?

WeakMap stores object keys weakly and is not directly iterable.

### 118. What is WeakSet?

WeakSet stores objects weakly and is not directly iterable.

---

## 12. Strings, Numbers, Date, Math, JSON, Regex

### 119. Are strings mutable?

No. JavaScript strings are immutable.

### 120. What is the difference between slice() and substring() for strings?

Both extract parts of strings, but they have different handling for negative and reversed indexes.

### 121. What does split() do?

It converts a string into an array using a separator.

### 122. What does includes() do?

It checks whether a string or array contains a specified value.

### 123. What is a regular expression?

A regular expression is a pattern used to search, match, validate, or replace text.

### 124. What does regex test() do?

It checks whether a regular expression matches a string and returns a boolean.

### 125. What is JSON?

JSON is a text-based data format commonly used for exchanging structured data.

### 126. What does JSON.stringify() do?

It converts a JavaScript value into a JSON string.

### 127. What does JSON.parse() do?

It converts valid JSON text into a JavaScript value.

### 128. What is Date?

Date is a built-in object for representing dates and times.

### 129. What is Math.random()?

It returns a pseudo-random number greater than or equal to 0 and less than 1.

### 130. What is Intl?

Intl provides internationalization features such as locale-aware number, date, and string formatting.

---

## 13. DOM

### 131. What is the DOM?

The Document Object Model represents an HTML document as a tree of objects that JavaScript can read and modify.

### 132. How do you select an element by ID?

```js
document.getElementById("title");
```

### 133. What is querySelector()?

It returns the first element matching a CSS selector.

### 134. What is querySelectorAll()?

It returns a collection of all elements matching a CSS selector.

### 135. What is the difference between textContent and innerHTML?

textContent treats content as text.

innerHTML parses content as HTML.

### 136. Why can innerHTML be dangerous?

Using untrusted input with innerHTML can introduce cross-site scripting vulnerabilities.

### 137. How do you change an element's class?

Use classList methods such as add(), remove(), toggle(), and contains().

### 138. How do you create a DOM element?

Use document.createElement().

### 139. How do you remove a DOM element?

Use element.remove().

---

## 14. Events

### 140. What is an event?

An event represents something that happens in the browser, such as a click, key press, or form submission.

### 141. What is addEventListener()?

It registers a function to run when a specified event occurs.

### 142. What is the event object?

The event object contains information about the event and provides methods for controlling event behavior.

### 143. What is event bubbling?

An event can propagate from a target element upward through its ancestors.

### 144. What is event capturing?

Capturing is the phase where an event travels from outer ancestors toward the target.

### 145. What is event delegation?

Event delegation uses a parent listener to handle events from child elements.

### 146. What does preventDefault() do?

It prevents the browser's default action for an event.

### 147. What is stopPropagation()?

It prevents an event from continuing through propagation.

### 148. What is a custom event?

A custom event is an application-defined event created with APIs such as CustomEvent.

---

## 15. Asynchronous JavaScript

### 149. What is synchronous code?

Synchronous code executes in order and normally waits for the current operation to finish before continuing.

### 150. What is asynchronous code?

Asynchronous code allows an operation to complete later without blocking the entire JavaScript execution flow.

### 151. What is a callback?

A callback is a function passed to another function to be executed later.

### 152. What is callback hell?

Callback hell is deeply nested callback-based asynchronous code that becomes difficult to read and maintain.

### 153. What is a Promise?

A Promise represents the eventual result of an asynchronous operation.

### 154. What are the states of a Promise?

- pending
- fulfilled
- rejected

### 155. What is promise chaining?

Promise chaining connects multiple asynchronous operations using then().

### 156. What does catch() do?

catch() handles rejected promises in a promise chain.

### 157. What does finally() do?

finally() runs after a Promise settles regardless of whether it was fulfilled or rejected.

### 158. What does Promise.resolve() do?

It returns a fulfilled Promise for a value, or adopts the state of a Promise-like value.

### 159. What does Promise.reject() do?

It returns a rejected Promise.

### 160. What does Promise.all() do?

It waits for all supplied promises to fulfill and rejects when any one rejects.

### 161. What does Promise.allSettled() do?

It waits for all promises to settle and returns the status and result of each.

### 162. What does Promise.race() do?

It settles with the first promise that settles.

### 163. What does Promise.any() do?

It fulfills when the first promise fulfills and rejects only when all supplied promises reject.

### 164. What is async?

async makes a function return a Promise and allows await inside that function.

### 165. What is await?

await pauses the execution of an async function until a Promise settles.

### 166. Can await be used outside an async function?

It can be used at the top level in environments and modules that support top-level await.

---

## 16. Event Loop

### 167. What is the event loop?

The event loop coordinates synchronous JavaScript execution with asynchronous callbacks and tasks.

### 168. What is the call stack?

The call stack tracks currently executing function calls.

### 169. What is a task or macrotask?

Examples include timer callbacks and certain browser event callbacks.

### 170. What is a microtask?

Promise callbacks and queueMicrotask() callbacks are common examples of microtasks.

### 171. Which runs first: a Promise callback or a zero-delay setTimeout callback?

After the current synchronous code finishes, the Promise microtask normally runs before the timer task.

### 172. Does setTimeout(fn, 0) run immediately?

No. It schedules a callback for a later task after the current execution and relevant microtasks have completed.

---

## 17. Fetch and APIs

### 173. What is fetch()?

fetch() is a Web API used to make HTTP requests.

### 174. Does fetch() reject for HTTP 404 or 500?

Normally no. fetch() rejects for network-level failures, while HTTP error status must usually be checked with response.ok or response.status.

### 175. What is response.ok?

It indicates whether the HTTP response status is in the successful range.

### 176. How do you parse a JSON response?

Use response.json(), which returns a Promise.

### 177. How do you send a POST request with JSON?

```js
fetch("/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Tawsif",
  }),
});
```

### 178. What are HTTP request headers?

Headers provide metadata about a request or response, such as content type or authorization information.

### 179. What is URLSearchParams?

It provides a convenient API for creating and working with URL query parameters.

### 180. What is AbortController?

AbortController can signal cancellation of operations such as fetch requests.

### 181. How should an API request be handled safely?

A practical pattern is:

1. Start the request
2. Handle network errors
3. Check response.ok
4. Parse the expected response format
5. Validate external data
6. Handle application-specific errors

---

## 18. Modules

### 182. What is a JavaScript module?

A module is a separate JavaScript file with its own scope that can export and import values.

### 183. What is a named export?

A named export exports a value by its declared name.

### 184. What is a default export?

A module can have one default export that can be imported with a chosen local name.

### 185. Named export vs default export?

A module can have multiple named exports but only one default export.

### 186. What is dynamic import?

dynamic import() loads a module asynchronously when needed.

### 187. What is top-level await?

It allows await at the top level of supported JavaScript modules.

### 188. What is strict mode?

Strict mode enables a stricter set of JavaScript rules and catches certain problematic behavior.

### 189. What is the difference between ES Modules and CommonJS?

ES Modules use import/export.

CommonJS commonly uses require() and module.exports.

---

## 19. Browser Storage

### 190. What is localStorage?

localStorage stores string key-value data that persists across browser sessions.

### 191. What is sessionStorage?

sessionStorage stores string key-value data for the current browser tab session.

### 192. localStorage vs sessionStorage?

localStorage generally persists until explicitly removed.

sessionStorage is associated with the current page session and is cleared when the tab or window session ends.

### 193. Can localStorage store objects directly?

No. Values are strings, so JSON.stringify() and JSON.parse() are commonly used.

### 194. What are cookies?

Cookies are small pieces of data associated with web requests and can be configured with attributes such as expiration, path, Secure, and HttpOnly.

### 195. Why should sensitive authentication data be handled carefully in browser storage?

JavaScript-accessible storage can be exposed if an attacker successfully executes malicious JavaScript in the page. Authentication architecture should consider XSS, CSRF, cookie flags, token lifetime, and server-side validation.

---

## 20. Security

### 196. What is XSS?

Cross-Site Scripting is a vulnerability where attacker-controlled content is executed as JavaScript in another user's browser.

### 197. How can DOM-based XSS be reduced?

- Avoid inserting untrusted content with innerHTML
- Prefer textContent for plain text
- Sanitize HTML when HTML is genuinely required
- Validate and encode data appropriately
- Use a strong Content Security Policy where appropriate

### 198. What is CSRF?

Cross-Site Request Forgery tricks a user's browser into making an unwanted authenticated request.

### 199. Is frontend validation enough for security?

No. Frontend validation improves user experience but can be bypassed. Important validation and authorization must also happen on the server.

### 200. Should API keys be placed directly in frontend JavaScript?

Secrets should not be exposed in browser-delivered code. Public client-side configuration and true secrets must be distinguished carefully.

---

## 21. Iterators and Generators

### 201. What is an iterable?

An iterable is a value that can provide an iterator through Symbol.iterator.

### 202. What is an iterator?

An iterator provides a next() method that returns objects containing value and done.

### 203. What is a generator?

A generator is a special function declared with function* that can pause and resume execution using yield.

### 204. What does yield do?

yield pauses a generator and produces a value to the caller.

### 205. What does yield* do?

yield* delegates iteration to another iterable or generator.

### 206. What is an async generator?

An async generator can yield values asynchronously and can be consumed with for await...of.

---

## 22. Performance and Common Patterns

### 207. What is debouncing?

Debouncing delays execution until calls stop for a specified period.

Common use: search input.

### 208. What is throttling?

Throttling limits how frequently a function can execute.

Common use: scroll and resize events.

### 209. Debounce vs throttle?

Debounce waits for a pause.

Throttle allows execution at a controlled maximum frequency.

### 210. What is memoization?

Memoization caches function results so repeated calls with the same input can avoid repeated computation.

### 211. What is a pure function?

A pure function produces the same output for the same inputs and does not cause observable side effects.

### 212. What is an impure function?

An impure function can depend on or modify external state or cause side effects.

### 213. Why should unnecessary global variables be avoided?

Global state can cause naming conflicts, hidden dependencies, difficult debugging, and unpredictable interactions between parts of an application.

---

## 23. Common Tricky Questions

### 214. What is the output?

```js
console.log(typeof null);
```

Answer:

```
"object"
```

### 215. What is the output?

```js
console.log(typeof NaN);
```

Answer:

```
"number"
```

### 216. What is the output?

```js
console.log(0.1 + 0.2 === 0.3);
```

Answer:

```
false
```

This happens because floating-point numbers use binary representation and some decimal fractions cannot be represented exactly.

### 217. What is the output?

```js
console.log([] == false);
```

Answer:

```
true
```

This is a consequence of JavaScript's abstract equality coercion rules.

### 218. What is the output?

```js
console.log([] === false);
```

Answer:

```
false
```

Strict equality does not coerce the types.

### 219. What is the output?

```js
console.log(null == undefined);
console.log(null === undefined);
```

Answer:

```
true
false
```

### 220. What is the output?

```js
console.log("5" + 2);
```

Answer:

```
"52"
```

### 221. What is the output?

```js
console.log("5" - 2);
```

Answer:

```
3
```

The subtraction operation converts the string to a number.

### 222. What is the output?

```js
console.log(1 + "2" + 3);
```

Answer:

```
"123"
```

### 223. What is the output?

```js
console.log(1 + 2 + "3");
```

Answer:

```
"33"
```

### 224. What is the output?

```js
console.log(Boolean("false"));
```

Answer:

```
true
```

A non-empty string is truthy.

---

## 24. Closure and Scope Questions

### 225. What is the output?

```js
function outer() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = outer();

console.log(counter());
console.log(counter());
```

Answer:

```
1
2
```

The returned function closes over count.

### 226. Why does the counter remember its value?

Because the closure preserves access to the lexical environment containing count.

### 227. Can closures cause memory problems?

A closure can keep referenced data alive while the closure remains reachable. Poorly managed long-lived closures can therefore contribute to memory usage.

---

## 25. Async and Promise Questions

### 228. What is the output?

```js
console.log("A");

Promise.resolve().then(() => {
  console.log("B");
});

console.log("C");
```

Answer:

```
A
C
B
```

The Promise callback runs as a microtask after synchronous code.

### 229. What is the output?

```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");
```

Answer:

```
A
D
C
B
```

### 230. Why does Promise.all() fail when one Promise rejects?

Promise.all() rejects as soon as one input Promise rejects.

### 231. When would you use Promise.allSettled()?

Use it when every operation should be allowed to finish and you need the outcome of each operation, including failures.

### 232. When would you use Promise.all()?

Use it when all operations are required for the overall operation to succeed.

### 233. When would you use Promise.race()?

Use it when the first settled result should determine the outcome.

### 234. When would you use Promise.any()?

Use it when the first successful result is useful and individual failures can be ignored unless all operations fail.

---

## 26. Frontend and Project Questions

### 235. What happens when a user clicks a button in a web application?

A typical flow is:

1. Browser detects the click
2. Event propagation occurs
3. Registered event listeners execute
4. JavaScript updates application state or the DOM
5. The browser renders the resulting changes

### 236. How does a frontend communicate with a backend?

Usually through HTTP requests such as GET, POST, PUT, PATCH, and DELETE using APIs.

### 237. What is REST?

REST is an architectural style commonly used for designing networked APIs around resources and HTTP methods.

### 238. What is JSON commonly used for?

JSON is commonly used to exchange structured data between clients and servers.

### 239. What is CORS?

Cross-Origin Resource Sharing is a browser security mechanism that controls whether a web page can make requests to a different origin.

### 240. What is an origin?

An origin is defined by scheme, host, and port.

### 241. Why can a frontend request fail even when the backend is running?

Possible reasons include:

- Wrong URL
- Wrong HTTP method
- CORS restrictions
- Authentication failure
- Invalid request body
- Server error
- Network failure
- Incorrect headers

---

## 27. Practical JavaScript Interview Questions

### 242. How would you validate an API response?

Check the HTTP status, expected response format, required fields, data types, and application-specific constraints before using the data.

### 243. How would you handle an API failure?

Use try/catch for async operations, check response.ok, provide useful error information, and decide whether to retry, show a fallback, or propagate the error.

### 244. How would you prevent duplicate API requests from a search box?

Use debouncing and optionally cancel stale requests with AbortController.

### 245. How would you improve a slow JavaScript application?

Investigate the actual bottleneck first. Common improvements include reducing unnecessary work, avoiding excessive DOM operations, debouncing expensive events, memoizing suitable calculations, splitting code, and reducing unnecessary network requests.

### 246. How would you protect a frontend application from XSS?

Treat external data as untrusted, prefer textContent, avoid unsafe HTML insertion, sanitize required HTML, and use appropriate browser security policies.

### 247. How would you structure JavaScript code in a large project?

Separate responsibilities into modules, keep functions focused, avoid unnecessary global state, use clear naming, isolate API logic, and establish consistent error-handling patterns.

### 248. How do you debug JavaScript?

Common tools include:

- console.log()
- console.error()
- Browser DevTools
- Breakpoints
- Network tab
- Sources panel
- Performance tools
- Stack traces

### 249. What is a stack trace?

A stack trace shows the sequence of function calls leading to an error.

### 250. What is a runtime error?

An error that occurs while the program is executing.

---

## 28. Viva Rapid-Fire Questions

### 251. What is JavaScript?
A programming language used for application logic and interactivity.

### 252. What is Node.js?
A JavaScript runtime that allows JavaScript to run outside the browser.

### 253. What is npm?
A package manager and ecosystem commonly used with Node.js projects.

### 254. What is npx?
A tool commonly used to execute packages without requiring a permanent global installation.

### 255. What is DOM?
A programmable representation of an HTML document.

### 256. What is BOM?
The Browser Object Model refers to browser-provided objects such as window, location, history, and navigator.

### 257. What is an API?
An interface that allows software components to communicate.

### 258. What is an HTTP method?
A method describing the intended operation of an HTTP request.

### 259. What is GET?
An HTTP method commonly used to retrieve data.

### 260. What is POST?
An HTTP method commonly used to submit data or create a resource.

### 261. What is PUT?
An HTTP method commonly used to replace a resource.

### 262. What is PATCH?
An HTTP method commonly used to partially update a resource.

### 263. What is DELETE?
An HTTP method commonly used to delete a resource.

### 264. What is status code 200?
A successful HTTP response.

### 265. What is status code 201?
A successful resource creation response.

### 266. What is status code 400?
Bad Request.

### 267. What is status code 401?
Unauthorized, commonly meaning authentication is required or invalid.

### 268. What is status code 403?
Forbidden.

### 269. What is status code 404?
Not Found.

### 270. What is status code 500?
Internal Server Error.

---

## 29. Questions About JavaScript in Modern Development

### 271. Why is TypeScript used with JavaScript?

TypeScript adds static type checking and other development features while compiling to JavaScript.

### 272. JavaScript vs TypeScript?

JavaScript is the runtime language.

TypeScript is a superset of JavaScript that adds a type system and compiles to JavaScript.

### 273. Why use TypeScript in large projects?

It can catch many type-related mistakes during development, improve editor tooling, make APIs clearer, and improve maintainability.

### 274. What is transpilation?

Transpilation converts source code from one language or language version into another compatible form.

### 275. What is bundling?

Bundling combines and processes application modules and assets into files optimized for delivery.

### 276. What is tree shaking?

Tree shaking removes unused statically analyzable code from bundles.

### 277. What is code splitting?

Code splitting divides application code into smaller chunks that can be loaded when needed.

### 278. What is lazy loading?

Lazy loading delays loading a resource until it is needed.

---

## 30. Frequently Asked "Explain the Difference" Questions

### 279. let vs const vs var

let and const are block-scoped.

var is function-scoped.

const cannot be reassigned.

let can be reassigned.

### 280. == vs ===

== allows coercion.

=== does not perform type coercion.

### 281. null vs undefined

null usually represents intentional absence.

undefined commonly represents an unassigned or missing value.

### 282. map vs filter

map transforms every element.

filter selects elements that satisfy a condition.

### 283. map vs forEach

map returns a new array.

forEach is mainly for side effects.

### 284. slice vs splice

slice does not mutate the original array.

splice mutates the original array.

### 285. find vs filter

find returns the first matching element.

filter returns all matching elements in a new array.

### 286. for...of vs for...in

for...of iterates over values of an iterable.

for...in iterates over enumerable property keys.

### 287. function vs arrow function

Arrow functions have lexical this and do not have their own arguments object.

Regular functions have their own this depending on invocation and can be used as constructors.

### 288. Promise vs async/await

Promises are the underlying asynchronous abstraction.

async/await is syntax that makes Promise-based code easier to read.

### 289. localStorage vs sessionStorage

localStorage persists until removed.

sessionStorage is associated with a page session.

### 290. shallow copy vs deep copy

A shallow copy does not recursively copy nested references.

A deep copy creates independent nested structures where supported.

---

## 31. Interview Questions Based on Real Project Work

### 291. Why did you choose JavaScript for your project?

A good answer should mention the project's requirements, browser support, ecosystem, available libraries, API integration, and development speed.

### 292. How did you handle API errors?

Explain the actual approach used in the project: checking response status, handling network failures, showing user-friendly errors, and logging useful debugging information.

### 293. How did you manage asynchronous operations?

Explain whether the project used Promises, async/await, fetch, loading states, error states, and cancellation where appropriate.

### 294. How did you protect user input?

Explain validation, safe DOM handling, backend validation, sanitization where needed, and avoiding unsafe HTML insertion.

### 295. How did you structure your frontend JavaScript?

Explain components or modules, API utilities, state management, reusable functions, and separation of responsibilities.

### 296. How did you debug a difficult JavaScript bug?

Give a real example. Explain how you reproduced the issue, inspected the stack trace, used DevTools or logs, identified the root cause, and verified the fix.

### 297. How did you integrate a third-party API?

A strong answer should cover authentication, request construction, headers, parameters, response parsing, error handling, rate limits, and secret management.

### 298. How did you handle loading states?

Explain how the UI communicates that asynchronous work is in progress and how success and failure states are handled.

### 299. How did you prevent unnecessary requests?

Possible techniques include caching, debouncing, throttling, request deduplication, and conditional fetching.

### 300. What part of your JavaScript project did you understand most deeply?

Answer honestly and explain the architecture, trade-offs, debugging process, and implementation details instead of claiming knowledge you cannot demonstrate.

---

## 32. Final Interview Checklist

Before a JavaScript interview or viva, make sure you can explain without memorizing:

- Variables and scope
- let, const, and var
- Primitive and reference values
- Type coercion
- == vs ===
- Truthy and falsy values
- Functions
- Arrow functions
- Callbacks
- Higher-order functions
- Closures
- this
- call, apply, bind
- Arrays and array methods
- Objects and destructuring
- Spread and rest
- Shallow vs deep copy
- Prototypes
- Classes
- Map and Set
- DOM
- Events
- Event propagation
- Event delegation
- Promises
- async/await
- Promise combinators
- Event loop
- Microtasks and tasks
- fetch
- HTTP status handling
- Modules
- localStorage and sessionStorage
- XSS and basic web security
- Iterators and generators
- Debouncing and throttling
- Error handling
- API integration
- Debugging
- JavaScript vs TypeScript
- JavaScript vs Node.js
- Your own project's JavaScript architecture

The most important rule for an interview is: do not memorize definitions only. Be able to explain a concept, write a small example, predict its output, and explain why the output occurs.
