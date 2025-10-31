import { config } from "dotenv";
import { Request, Response, Router } from "express";
config();

const router = Router();
router.get("/auth/github", (_: Request, res: Response) => {
  const redirectUrl = "http://localhost:3000/auth/github/callback";
  const clientId = process.env.GITHUB_CLIENT;
  console.log(clientId, "Client id");
  const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=read:user,public_repo`;
  res.redirect(url);
});

router.get("/auth/github/callback", async (req: Request, res: Response) => {
  const code = req.query.code as string;

  if (!code) {
    res.status(400).json({ msg: "code needed" });
    return;
  }

  try {
    const tokenResponse = await fetch(
      "https://github.com/login/oauth/access_token",
      {
        method: "POST",
        body: new URLSearchParams({
          code,
          client_id: process.env.GITHUB_CLIENT ?? "Ov23liOmYMytpZIvUcQk",
          client_secret:
            process.env.GITHUB_CLIENT_SECRET ??
            "881d0c8931a412c21b24553249d1131dcbbee927",
        }),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log(tokenResponse, "TOKEN RESOPNSE");

    if (!tokenResponse.ok) {
      res
        .status(500)
        .json({ msg: "something went wrong, while fetching user profile" });
      return;
    }

    const data = await tokenResponse.text();
    const params = new URLSearchParams(data);
    console.log(params, "Params");
    const access_token = params.get("access_token");
    console.log(access_token, "Github token");

    if (!access_token) {
      return res
        .status(400)
        .json({ data, msg: "access token not found.Try again" });
    }

    const userProfileResponse = await fetch("https://api.github.com/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (!userProfileResponse.ok) {
      res.status(500).json({ msg: "failed to get user acc" });
      return;
    }

    const userProfile = await userProfileResponse.json();
    const githubId = userProfile.id.toString();

    console.log(access_token);
    req.session.access_token = access_token;
    req.session.save();
    res.json({
      msg: "Authenticated",
      access_token,
      githubId,
    });
  } catch (err) {
    console.error("something went wrong", err);
    return res.status(500).json({ msg: "something went wrong" });
  }
});

export default router;
