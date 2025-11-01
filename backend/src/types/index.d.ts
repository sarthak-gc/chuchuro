import "express-session";
import { HR, User } from "../../generated/prisma";

declare module "express-session" {
  interface Session {
    access_token?: string;
    userName?: string;
  }
}

// Extending the Express Request interface
declare global {
  namespace Express {
    interface Request {
      user?: User | {};
      hr?: HR | {};
      id?: string;
    }
  }
}
