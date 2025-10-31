import type { Request, Response } from "express";
import express from "express";
import puppeteer from "puppeteer-core";
const app = express();

app.get("/", async (req: Request, res: Response) => {
  const username = req.body.username;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = "testing.com/123";

  await page.goto(url, {
    waitUntil: "networkidle2",
  });
  page.evaluate(() => {});
  res.json({
    msg: "k",
  });
});

app.listen(1234);
