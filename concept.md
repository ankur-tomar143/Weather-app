# Async and Sync JavaScript

**Synchronous JavaScript** executes code line by line, waiting for each operation to finish before moving to the next. This can cause delays if a task takes a long time, as everything else must wait (one after another).

**Example:**  
a = 5 (first)  
b = 4 (second)  
c = 1 (third)  
**Total Time:** 10

**Asynchronous JavaScript** allows certain operations to run in the background. This means the rest of the code can continue executing without waiting for those operations to complete. Asynchronous code is often handled using callbacks, promises, or `async/await`.

- (All together, whichever finishes first, its result will be stored.) When we depend on another server, we wait for a response to display the result. In this condition, async is preferred.

**Example:**  
a = 5  
b = 4  
c = 1 (all together)  
**Total Time:** 5

---

# Async JS (async/await, promises, callback functions, setTimeout)

- <!--
    setTimeout(function(){
            console.log("Async JS");
    }, 2000) -->

- Synchronous code -> main stack (gives output)
- Asynchronous code -> side stack (processing but not output)
- Whenever the main stack is empty, then code from the side stack comes in and executes.
- mainStack -> EVENT-LOOP -> sideStack
- JS is synchronous and single-threaded.

# Request Send (fetch/axios/promises/setTimeout/setInterval)

# Handle Response (then/catch, callbacks, async/await) -> run the answer of the request

# Callback - it is always a function

- Runs after async code executes
- fetch().then(callbackFunction)

# Promises

- When we send a request to another server, there are two possibilities: the request will be resolved or rejected. To handle this, we use promises.
- `.then()` is used only if the promise is resolved.
- `.catch()` is used if the promise is rejected.

```js
const ans = new Promise((res, rej) => {
    if (true) {
        return res();
    } else {
        return rej();
    }
});

ans
    .then(function () {
        console.log("Resolved");
    })
    .catch(function () {
        console.log("Rejected");
    });
```

# Promise Example

```js
const ans = new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 10);

    if (num < 5) {
        return resolve();
    } else {
        return reject();
    }
});

ans.then(() => {
    console.log("Success: Number is less than 5");
})
.catch(() => {
    console.log("Error: Number is greater than or equal to 5");
});
```

# High-Level Work of Promises -> Control which statement will execute

```js
const ans = new Promise((res, rej) => {
    res("first");
});

const p2 = ans.then((data) => {
    console.log(data);
    return new Promise((res, rej) => res("second"));
});

const p3 = p2.then((data) => {
    console.log(data);
    return new Promise((res, rej) => res("third"));
});

p3.then((data) => {
    console.log(data);
});
```

# Async/Await

- When we use fetch, we usually use `.then()` to handle the resolved response. But to make the code cleaner and easier to read, we can use async and await. We place `await` before fetch to wait for the response, and then we can directly get the data from it.

# Example with .then():

```js
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
```

# Example with async/await:

```js
async function getData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
}
getData();
```
