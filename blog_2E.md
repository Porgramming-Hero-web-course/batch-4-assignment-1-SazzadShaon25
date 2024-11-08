# Assignment-1
# How to handle asynchronous operations using async/await over callback/promise TypeScript. 
Asynchronous operations are very essential in JavaScript and TypeScript to handle multiple operations at once for a smooth user experience. Asynchronous operations can be handled by callbacks, promises, and async/await.

**Callback Function**: Callback functions are a type of function that are passed as an argument of another function and executed after completing an operation.

**Promise**: Promises give us a way to handle asynchronous operations by using `.then()` and `.catch()` methods, which makes code less nested but still makes code lengthy and complex.

Both are ways to handle asynchronous operations, but they can make code complex, nested, and hard to follow. To solve this problem, `async/await` is introduced with a simpler and more straightforward syntax. TypeScript fully supports `async/await`, which adds type safety, reduces runtime errors, and improves developer productivity.

**Why async/await is the Preferred Approach**:
1. It makes code more clear and simple and enables a linear structure. We can write asynchronous operations that look synchronous by using it.
2. `Async/await` allows error handling with `try/catch` blocks, making it easier to handle errors than with callbacks and promises.
3. `async/await` is compatible with TypeScript’s existing type system and integrates properly with APIs that return promises.

Below, I am showing the same code first by using callbacks, then promises, and finally async/await to demonstrate why async/await is better.

---

### 1. Callback Example

```typescript

type Callback<T> = (error: Error | null, data: T | null) => void;

// Function to fetch data with a callback
function fetchData<T>(url: string, callback: Callback<T>): void {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => callback(null, data))
    .catch((error) => callback(error, null));
}

const url = "https://api.example.com/data";
fetchData<any>(url, (error, data) => {
  if (error) {
    console.error("Fetch error:", error);
  } else {
    console.log("Fetched data:", data);
  }
});
```

### 2. Promises Example

```typescript

function fetchData<T>(url: string): Promise<T> {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return response.json();
    });
}


const url = "https://api.example.com/data";
fetchData<any>(url)
  .then((data) => {
    console.log("Fetched data:", data);
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });

```
### 3. Async/await Example

```typescript

async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data = await response.json();
  return data;
}


const url = "https://api.example.com/data";

(async () => {
  try {
    const data = await fetchData<any>(url);
    console.log("Fetched data:", data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
})();
```typescript
 We can see that aync/await gives more easy readability code that's why is better to write and handle than callback and promises

