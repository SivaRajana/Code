function customStringify(obj) {
  // Handling primitive data types
  if (typeof obj === "number" || typeof obj === "boolean" || obj === null) {
    return String(obj);
  }
  
  // Handling strings
  if (typeof obj === "string") {
    return `"${obj}"`;
  }

  // Handling arrays
  if (Array.isArray(obj)) {
    let arrayResult = obj.map(item => customStringify(item)).join(",");
    return `[${arrayResult}]`;
  }

  // Handling objects
  if (typeof obj === "object") {
    let objectResult = Object.keys(obj)
      .map(key => `"${key}":${customStringify(obj[key])}`)
      .join(",");
    return `{${objectResult}}`;
  }
}

// Example usage:
const obj = {
  name: "Siva",
  age: 28,
  isEmployed: true,
  address: {
    city: "Vizag",
    zip: "100001"
  },
  hobbies: ["vollyball", "badminton","bikeRiding"]
};

const jsonString = customStringify(obj);
console.log(jsonString);
