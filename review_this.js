function processUserData() {
  const unusedVariable = "This is unused";
  console.log("This might trigger no-console warning");

  someUndefinedVariable = "This will cause an error";
  let userInput = prompt("Enter something: ");

  // Security issue: SQL Injection vulnerability
  const dbQuery = `SELECT * FROM users WHERE username = '${userInput}'`;
  db.execute(dbQuery);

  // Syntax error: missing parentheses
  if x == 5 {
    // some code
  }

  // Dangerous eval usage
  eval("alert('XSS')");

  // Insecure HTTP request (no SSL/TLS)
  fetch("http://example.com/api/data");

  // Storing sensitive data in localStorage
  localStorage.setItem("password", "supersecretpassword");
  const apiKey = "sk_live_abcdef123456";

  // Insecure file operation (not recommended in browsers, just for example)
  const fs = require('fs');
  fs.writeFileSync("config.txt", `API Key: ${apiKey}`);

  // Missing exception handling
  try {
    let result = 10 / 0;
  } catch (e) {}

  // Insecure redirect with user input
  let redirectUrl = `http://example.com?redirect=${userInput}`;

  // Undefined function or object
  database.query(req.body.userInput);

  return "Data processed";
}
