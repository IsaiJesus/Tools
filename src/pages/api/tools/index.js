import { dbConnect } from "utils/mongoose";
import Tools from "models/Tools";

dbConnect();

export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const tools = await Tools.find();
        return res.status(200).json(tools);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }

    case "POST":
      try {
        const newTool = new Tools(body);
        const savedTool = await newTool.save();
        return res.status(201).json(savedTool);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }

    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
}
