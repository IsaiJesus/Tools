import { connect, connection } from "mongoose";

const conn = {
  isConnected: false,
};

export async function dbConnect() {
  if (conn.isConnected) return;

  const db = await connect("mongodb+srv://Isai:isai23_@cluster0.mo5xfu3.mongodb.net/tools?retryWrites=true&w=majority");
  conn.isConnected = db.connections[0].readyState;

  console.log(db.connection.db.databaseName);
}

connection.on("connected", () => {
  console.log("Mongodb is connected");
});

connection.on("error", (err) => {
  console.log(err);
});
