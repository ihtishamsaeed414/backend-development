// argv property
// console.log(process.argv);

// process.env

// console.log(process.env);
console.log(process.pid);
console.log(process.cwd());
console.log(process.title);
console.log(process.memoryUsage());
console.log(process.uptime());
// process.exit(0);
console.log("Will not run");
process.on("exit", (code) => {
  console.log(`About to exit with code: ${code}`);
});
