import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function greetHandler(Pname) {
  console.log("Hello world", Pname);
}
function goodbyeHandler(name) {
  console.log("Goodbye World", name);
}

// Register event listeners
myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodbyeHandler);

// Emit events
myEmitter.emit("greet", "ihtisham");
myEmitter.emit("goodbye", "sam");

// Error habdling, giving errors in stack trace
myEmitter.on("error", (err) => {
  console.log("An Error is occured", err);
});

// Simulate error
myEmitter.emit("error", new Error("Something went wrong"));
