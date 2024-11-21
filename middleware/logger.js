import colors from "colors";

// Middleware, it has access to the req and response

const logger = (req, res, next) => {
  const methodColor = {
    GET: "green",
    POST: "blue",
    PUT: "yellow",
    DELETE: "red",
  };
  const color = methodColor[req.method] || white;

  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`[
      color
    ]
  );
  next();
};

export default logger;
