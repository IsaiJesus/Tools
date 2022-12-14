import { dbConnect } from "utils/mongoose";
import Topics from "models/Topics";

dbConnect();

export default async function handler(req, res) {
  const {
    method,
    body,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      try {
        const topic = await Topics.findById(id);
        if (!topic) return res.status(404).json({ msg: "Topic not found" });
        return res.status(200).json(topic);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }

    case "PUT":
      try {
        const topicUpdate = await Topics.findByIdAndUpdate(id, body, {
          new: true
        })
        if(!topicUpdate) return res.status(404).json({msg: "Topic not found"})
        return res.status(200).json(topicUpdate)
      } catch (error) {
        return res.status(500).json({msg: error.message})
      }

    case "DELETE":
      try {
        const deletedTopic = await Topics.findByIdAndDelete(id)
        if(!deletedTopic) return res.status(400).json({msg: "Topic not found"})
        return res.status(200).json(deletedTopic)
      } catch (error) {
        return res.status(400).json({msg: error.message})
      }

    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
}
