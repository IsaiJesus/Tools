import { dbConnect } from "utils/mongoose";
import Topics from "models/Topics";

dbConnect();

export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const topics = await Topics.find();
        return res.status(200).json(topics);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }

    case "POST":
      try {
        const newTopic = new Topics(body);
        const savedTopic = await newTopic.save();
        return res.status(201).json(savedTopic);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }

    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
}
