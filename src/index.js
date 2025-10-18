/**
 * Custom tree logging function that displays data in a tree like structure cause it looks good
 * @param {any} data - The data to display as a tree
 * @param {Object} options - Configuration options
 * @param {string} options.indent - Custom indent character (default: '  ')
 * @param {boolean} options.colors - Enable colors (default: true)
 * @param {number} options.maxDepth - Maximum depth to display (default: 10)
 */
function tree(data, options = {}) {
  const { indent = "  ", colors = true, maxDepth = 10 } = options;

  // ANSI color codes
  const colors_ansi = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
  };

  const colorize = (text, color) =>
    colors ? `${colors_ansi[color]}${text}${colors_ansi.reset}` : text;

  // Tree characters
  const treeChars = {
    last: "└── ",
    branch: "├── ",
    vertical: "│   ",
    space: "    ",
  };

  function formatValue(value, depth = 0) {
    if (depth > maxDepth) {
      return colorize("...", "dim");
    }

    if (value === null) {
      return colorize("null", "red");
    }

    if (value === undefined) {
      return colorize("undefined", "red");
    }

    if (Array.isArray(value)) {
      if (value.length === 0) {
        return colorize("[]", "dim");
      }

      let result = colorize("[", "dim") + "\n";
      value.forEach((item, index) => {
        const isLast = index === value.length - 1;
        const prefix = isLast ? treeChars.last : treeChars.branch;

        result +=
          indent.repeat(depth) + prefix + formatValue(item, depth + 1) + "\n";
      });
      result += indent.repeat(depth) + colorize("]", "dim");
      return result;
    }

    switch (typeof value) {
      case "function":
        return colorize("function", "magenta");
      case "object":
        const keys = Object.keys(value);
        if (keys.length === 0) {
          return colorize("{}", "dim");
        }

        let result = colorize("{", "dim") + "\n";
        keys.forEach((key, index) => {
          const isLast = index === keys.length - 1;
          const prefix = isLast ? treeChars.last : treeChars.branch;

          const formattedKey = colorize(key, "cyan") + colorize(":", "dim");
          const formattedValue = formatValue(value[key], depth + 1);

          result +=
            indent.repeat(depth) +
            prefix +
            formattedKey +
            " " +
            formattedValue +
            "\n";
        });
        result += indent.repeat(depth) + colorize("}", "dim");
        return result;
      case "number":
        return colorize(value.toString(), "blue");
      case "string":
        return colorize(`"${value}"`, "green");
      case "boolean":
        return colorize(value.toString(), "yellow");
      default:
        return colorize(String(value), "white");
    }
  }

  if (typeof data === "object" && data !== null && !Array.isArray(data)) {
    const keys = Object.keys(data);
    if (keys.length === 0) {
      console.log(colorize("(empty object)", "dim"));
    } else {
      keys.forEach((key, index) => {
        const isLast = index === keys.length - 1;
        const prefix = isLast ? treeChars.last : treeChars.branch;

        const formattedKey = colorize(key, "cyan") + colorize(":", "dim");
        const formattedValue = formatValue(data[key], 1);

        console.log(prefix + formattedKey + " " + formattedValue);
      });
    }
  } else {
    console.log(formatValue(data));
  }
}

export default tree;
