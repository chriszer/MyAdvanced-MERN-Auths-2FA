import mongoose, { Document } from "mongoose";
import { Schema } from "mongoose";
import { thiryDaysFromNow } from "../../common/utils/date-time";

export interface SessionDocument extends Document {
  userId: mongoose.Types.ObjectId;
  userAgent?: string;
  expireAt: Date;
  createdAt: Date;
}

const sessionSchema = new Schema<SessionDocument>({
  userId: {
    type: Schema.ObjectId,
    ref: "User",
    index: true,
    required: true,
  },
  userAgent: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
  expireAt: {
    type: Date,
    required: true,
    default: thiryDaysFromNow,
  },
});

const SessionModel = mongoose.model<SessionDocument>("Session", sessionSchema);
export default SessionModel;
