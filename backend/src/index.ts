import express from "express";
import session from "express-session";
import router from "./auth";
const app = express();

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);
// app.get("/", async (req: Request, res: Response) => {
//   const username = req.body.username;

//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   const url = "testing.com/123";

//   await page.goto(url, {
//     waitUntil: "networkidle2",
//   });
//   page.evaluate((el) => {});
//   res.json({
//     msg: "k",
//   });
// });

app.use(router);
app.listen(3000);
