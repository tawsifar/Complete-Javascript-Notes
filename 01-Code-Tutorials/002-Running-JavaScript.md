# Running JavaScript

JavaScript can run in different environments. The most common environments are web browsers and JavaScript runtimes such as Node.js.

## 1. Browser Console

The easiest way to run JavaScript is through the browser's Developer Console.

Open the browser:

1. Press `F12`
2. Open the `Console` tab
3. Write JavaScript code

Example:

```javascript
console.log("Hello, JavaScript!");
```

The result appears directly in the console.

## 2. Inline JavaScript

JavaScript can be written directly inside an HTML file using the `<script>` tag.

Example:

```html
<script>
  console.log("JavaScript is running");
</script>
```

## 3. External JavaScript

JavaScript is usually kept in a separate `.js` file and loaded with a script tag.

## 4. Node.js

JavaScript can also run outside the browser using Node.js.

```bash
node app.js
```

## Browser vs Node.js

Browser JavaScript can work with the DOM, events, forms, Web APIs, `fetch()`, and `localStorage`.

Node.js can work with files, servers, backend APIs, databases, CLI tools, and operating system features.

## Key Points

Browser Console: Quick JavaScript execution

HTML `<script>`: JavaScript inside an HTML file

External `.js` file: Separate JavaScript code

Node.js: Run JavaScript outside the browser
