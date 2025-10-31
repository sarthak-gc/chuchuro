import { config } from "dotenv";
import { Request, Response, Router } from "express";
config();

const authRouter = Router();
authRouter.get("/auth/github", (_: Request, res: Response) => {
  const redirectUrl = "http://localhost:3000/auth/github/callback";
  const clientId = process.env.GITHUB_CLIENT;
  const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=read:user,public_repo`;
  res.redirect(url);
});

authRouter.get("/auth/github/callback", async (req: Request, res: Response) => {
  const code = req.query.code as string;
  console.log(code);
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
    console.log(userProfileResponse);
    if (!userProfileResponse.ok) {
      res.status(500).json({ msg: "failed to get user acc" });
      return;
    }

    const userProfile = await userProfileResponse.json();

    const githubId = userProfile.id.toString();
    const userData = {
      id: userProfile.id,
      username: userProfile.login,
      name: userProfile.name,
      avatar: userProfile.avatar_url,
      bio: userProfile.bio,
      githubUrl: userProfile.html_url,
      company: userProfile.company,
      location: userProfile.location,
      followers: userProfile.followers,
      following: userProfile.following,
      public_repos: userProfile.public_repos,
      access_token,
      githubId,
    };

    req.session.access_token = access_token;
    res.redirect(
      `http://localhost:5173/jobs?query=${JSON.stringify(userData)}`
    );
  } catch (err) {
    console.error("something went wrong", err);
    return res.status(500).json({ msg: "something went wrong" });
  }
});
authRouter.get("/auth/github/successurl", () => {});

export default authRouter;
