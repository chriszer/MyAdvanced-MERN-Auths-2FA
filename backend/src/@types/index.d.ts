import { SessionDocument } from "../database/models/session.model";
import { UserDocument } from "../database/models/user.model";
import { Request } from "express";

declare global {
  namespace Express {
    interface User extends UserDocument {}
    interface Request {
      sessionId?: string;
    }
  }
}
