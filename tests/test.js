import tree from "../src/index.js";

const packageJson = {
  name: "tree-log",
  version: "1.0.0",
  dependencies: {
    express: "^4.18.0",
    lodash: "^4.17.21",
    moment: "^2.29.0",
  },
  devDependencies: {
    jest: "^29.0.0",
    eslint: "^8.0.0",
    nodemon: "^2.0.0",
  },
  scripts: ["start", "test", "build", "dev"],
  config: {
    port: 3000,
    env: "development",
    features: {
      logging: true,
      monitoring: false,
      caching: {
        redis: true,
        memory: false,
      },
    },
    database: {
      host: "localhost",
      port: 5432,
      tables: ["users", "posts", "comments"],
    },
  },
  metadata: {
    author: "Utils",
    license: "ISC",
  },
};

// Test 1: Full object tree
console.log("1. Package data tree:");
tree(packageJson);

// Test 2: Simple object
console.log("2. Simple object:");
tree({ a: 1, b: "hello", c: true });

// Test 3: Array
console.log("3. Array data:");
tree(["apple", "banana", "cherry"]);

// Test 4: Nested arrays
console.log("4. Nested arrays:");
tree([["a", "b"], ["c", "d", "e"], ["f"]]);

// Test 5: Mixed data types
console.log("5. Mixed data types:");
tree({
  string: "hello world",
  number: 42,
  boolean: true,
  nullValue: null,
  undefinedValue: undefined,
  array: [1, 2, 3],
  nested: {
    level1: {
      level2: "deep value",
    },
  },
});

// Test 6: Without colors
console.log("6. Without colors:");
tree({ test: "no colors" }, { colors: false });

// Test 7: Custom indent
console.log("7. Custom indent:");
tree({ test: "custom indent" }, { indent: "    " });

// Test 8: Functions as values
console.log("8. Functions as values:");
tree({
  function: function () {
    return "hello world";
  },
  object: {
    function: function () {
      return "hello world";
    },
  },
});

// Test 9: User data
console.log("9. User data:");
tree({
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
  phone: [
    { type: "home", number: "123-456-7890" },
    { type: "work", number: "098-765-4321" },
  ],
});
