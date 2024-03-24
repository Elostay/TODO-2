import Cors from "cors";

const cors = Cors({
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  origin: "todo-2-five.vercel.app",
  //   origin: "http://localhost:3000",
  credentials: true,
});

export default function initMiddleware(handler) {
  return (req, res) => {
    return new Promise((resolve, reject) => {
      cors(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    })
      .then(() => handler(req, res))
      .catch((error) => {
        console.error("Error initializing middleware:", error);
        res.status(500).json({ message: "Internal server error" });
      });
  };
}
