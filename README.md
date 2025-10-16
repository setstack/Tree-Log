# 🌳 Tree Log

A beautiful, customizable tree logging function that displays data in a tree structure similar to `npm list`. Perfect for debugging, data visualization, and making your console output look amazing!

## ✨ Features

- 🌲 **Tree Structure**: Displays objects and arrays in a clean tree format
- 🎨 **Color Support**: Beautiful ANSI colors for different data types
- ⚙️ **Customizable**: Configurable indentation, colors, and depth limits
- 📦 **Lightweight**: Zero dependencies, pure JavaScript
- 🔧 **Type Support**: Handles all JavaScript data types (objects, arrays, primitives)

## 🚀 Installation

```bash
npm install tree-log
```

Or simply copy the `src/index.js` file to your project.

## 📖 Usage

### Basic Usage

```javascript
const tree = require('tree-log');

// Simple object
tree({
  name: 'my-app',
  version: '1.0.0',
  dependencies: {
    express: '^4.18.0',
    lodash: '^4.17.21'
  }
});
```

### Advanced Usage

```javascript
const tree = require('tree-log');

// With options
tree(data, {
  indent: '  ',      // Custom indent (default: '  ')
  colors: true,      // Enable colors (default: true)
  maxDepth: 10       // Maximum depth (default: 10)
});

// Without colors
tree(data, { colors: false });

// Custom indent
tree(data, { indent: '    ' });
```

## 🎯 Examples

### Package.json Structure
```javascript
const table = {
  name: 'tree-log',
  version: '1.0.0',
  dependencies: {
    express: '^4.18.0',
    lodash: '^4.17.21'
  },
  devDependencies: {
    jest: '^29.0.0',
    eslint: '^8.0.0'
  },
  config: {
    port: 3000,
    features: {
      logging: true,
      monitoring: false
    }
  }
};

tree(table);
```

**Output:**
```
Tree Log:
──────────────────────────────────────────────────
├── name: "tree-log"
├── version: "1.0.0"
├── dependencies: {
│   ├── express: "^4.18.0"
│   └── lodash: "^4.17.21"
│ }
├── devDependencies: {
│   ├── jest: "^29.0.0"
│   └── eslint: "^8.0.0"
│ }
└── config: {
    ├── port: 3000
    └── features: {
        ├── logging: true
        └── monitoring: false
        }
    }
──────────────────────────────────────────────────
```

### Array Data
```javascript
tree(['apple', 'banana', 'cherry']);
```

### Mixed Data Types
```javascript
tree({
  string: 'hello world',
  number: 42,
  boolean: true,
  nullValue: null,
  array: [1, 2, 3],
  nested: {
    level1: {
      level2: 'deep value'
    }
  }
});
```

## 🎨 Color Coding

- **Strings**: Green (`"text"`)
- **Numbers**: Blue (`42`)
- **Booleans**: Yellow (`true`/`false`)
- **Null/Undefined**: Red (`null`/`undefined`)
- **Object Keys**: Cyan (`key:`)
- **Brackets/Braces**: Dim (`{`, `}`, `[`, `]`)

## ⚙️ Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `indent` | string | `'  '` | Custom indent character(s) |
| `colors` | boolean | `true` | Enable/disable ANSI colors |
| `maxDepth` | number | `10` | Maximum nesting depth to display |

## 🔧 API Reference

### `tree(data, options)`

**Parameters:**
- `data` (any): The data to display as a tree
- `options` (Object, optional): Configuration options
  - `indent` (string): Custom indent character (default: `'  '`)
  - `colors` (boolean): Enable colors (default: `true`)
  - `maxDepth` (number): Maximum depth to display (default: `10`)

**Returns:** `undefined` (logs to console)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.