import { dbConnect } from "utils/mongoose";
import Tools from "models/Tools";

dbConnect();

export default async function handler(req, res) {
  const {
    method,
    body,
    query: { slug },
  } = req;

  switch (method) {
    case "GET":
      try {
        const tool = await Tools.findOne({slug});
        if (!tool) return res.status(404).json({ msg: "Tool not found" });
        return res.status(200).json(tool);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }

    case "PUT":
      try {
        const toolUpdate = await Tools.findOneAndUpdate({slug}, body, {
          new: true
        })
        if(!toolUpdate) return res.status(404).json({msg: "Tool not found"})
        return res.status(200).json(toolUpdate)
      } catch (error) {
        return res.status(500).json({msg: error.message})
      }

    case "DELETE":
      try {
        const deletedTool = await Tools.findOneAndDelete({slug})
        if(!deletedTool) return res.status(400).json({msg: "Tool not found"})
        return res.status(200).json(deletedTool)
      } catch (error) {
        return res.status(400).json({msg: error.message})
      }

    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
}
