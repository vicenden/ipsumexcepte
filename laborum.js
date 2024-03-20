// Assuming 'timestamp' is a string containing a numerical value
// representing a Unix timestamp, let's convert it to an integer.
function convertTimestampToInteger(timestamp) {
  return parseInt(timestamp, 10);
}

// Example usage:
const timestampString = "1647457794"; // Replace with your actual timestamp
const integerTimestamp = convertTimestampToInteger(timestampString);
console.log(`Converted timestamp: ${integerTimestamp}`);
