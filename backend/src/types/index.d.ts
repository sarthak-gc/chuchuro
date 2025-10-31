import "express-session";

declare module "express-session" {
  interface Session {
    access_token?: string;
    userName?: string;
  }
}
