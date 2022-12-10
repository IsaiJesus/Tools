import { dbConnect } from "utils/mongoose";
import Tools from "models/Tools";

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
        const tool = await Tools.findById(id);
        if (!tool) return res.status(404).json({ msg: "Tool not found" });
        return res.status(200).json(tool);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }

    case "PUT":
      try {
        const toolUpdate = await Tools.findByIdAndUpdate(id, body, {
          new: true
        })
        if(!toolUpdate) return res.status(404).json({msg: "Tool not found"})
        return res.status(200).json(toolUpdate)
      } catch (error) {
        return res.status(500).json({msg: error.message})
      }

    case "DELETE":
      try {
        const deletedTool = await Tools.findByIdAndDelete(id)
        if(!deletedTool) return res.status(400).json({msg: "Tool not found"})
        return res.status(200).json(deletedTool)
      } catch (error) {
        return res.status(400).json({msg: error.message})
      }

    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
}
