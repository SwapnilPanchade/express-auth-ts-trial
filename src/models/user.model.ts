import { timeStamp } from "console";
import { Schema, model, Document, models } from "mongoose";

export interface IUser extends Document {
  username: string;
  password: string;
  role: "free" | "pro" | "admin";
}

const UserSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["free", "pro", "admin"],
      default: "free",
    },
  },
  {
    timestamps: true,
  }
);

export default model<IUser>("User", UserSchema);
