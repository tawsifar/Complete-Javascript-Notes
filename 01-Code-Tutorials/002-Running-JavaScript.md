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
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript</title>
</head>
<body>

    <h1>Hello</h1>

    <script>
        console.log("JavaScript is running");
    </script>

</body>
</html>
```

## 3. External JavaScript

JavaScript is usually kept in a separate `.js` file.

HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript</title>
</head>
<body>

    <h1>Hello</h1>

    <script src="script.js"></script>
</body>
</html>
```

JavaScript:

```javascript
console.log("JavaScript is running from an external file");
```

Keeping JavaScript in separate files makes projects easier to organize and maintain.

## 4. Node.js

JavaScript can also run outside the browser using Node.js.

Create a file named:

```text
app.js
```

Write:

```javascript
console.log("Hello from Node.js");
```

Run it from the terminal:

```bash
node app.js
```

## Browser JavaScript vs Node.js

### Browser

JavaScript in the browser can work with:

- DOM
- Events
- Forms
- Web APIs
- `fetch()`
- `localStorage`

### Node.js

Node.js can work with:

- File system
- Servers
- Backend APIs
- Databases
- CLI tools
- Process and operating system features

The available APIs depend on the environment where JavaScript is running.

## JavaScript Runtime

A JavaScript runtime is an environment that provides everything needed to execute JavaScript code.

A runtime generally includes:

- JavaScript engine
- APIs provided by the environment
- Memory management
- Execution mechanisms

For example:

```text
Browser runtime
JavaScript engine + Browser APIs

Node.js runtime
JavaScript engine + Node.js APIs
```

## Common JavaScript Engines

Different environments use different JavaScript engines.

- Chrome: V8
- Firefox: SpiderMonkey
- Safari: JavaScriptCore

Node.js also uses the V8 engine.

## Basic Practice

Try these examples in the browser console:

```javascript
console.log("Hello");
```

```javascript
console.log(10 + 20);
```

```javascript
console.log("JavaScript" + " " + "is fun");
```

## Key Points

```text
Browser Console: Quick JavaScript execution

HTML <script>: JavaScript inside an HTML file

External .js file: Separate JavaScript code

Node.js: Run JavaScript outside the browser

Runtime: Environment that executes JavaScript
```

JavaScript itself is the programming language. Node.js, browsers, and other environments provide runtimes and APIs that allow JavaScript to perform different tasks.
