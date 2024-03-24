import Cors from "cors";
import initMiddleware from "@helpers/init-middleware";
import { NextApiRequest, NextApiResponse } from "next";

const cors = initMiddleware(
  Cors({
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    origin: "todo-2-five.vercel.app",
    credentials: true,
  })
);

export default async function corsHandler(req, res) {
  try {
    await cors(req, res);

    res.status(200).json({ message: "Hello from the API!" });
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
