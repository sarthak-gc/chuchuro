import "express-session";

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
      user?: User;
      id?: string;
    }
  }
}
