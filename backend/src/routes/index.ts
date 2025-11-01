import { NextFunction, Request, Response, Router } from "express";
import jwt from "jsonwebtoken";
import analyzeGuestProfiles, {
  applyForJob,
  createJob,
  getAllHrJobApplicants,
  getApplicantsForJob,
  getAppliedJobs,
  getJobs,
  loginHandler,
  matchUserToExistingJobs,
  registerHandler,
} from "../utils/anlyze";
import prisma from "../utils/prisma";
export const router = Router();

router.get("/analyze", analyzeGuestProfiles);

router.get("/match-user/:userId", matchUserToExistingJobs);
router.get("/matches/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId as string;
  const matches = await prisma.matched.findMany({
    where: {
      userIds: {
        some: {
          userId: userId,
        },
      },
    },
    select: {
      job: true,
      userIds: {
        select: {
          userId: true,
          matchedPercentage: true,
        },
      },
    },
  });

  res.json({ matches });
});

const hrAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Unauthorized: No token provided" });
  }

  try {
    const decoded: any = jwt.verify(token, "your-secret-key");

    if (!req.hr) {
      req.hr = {};
    }

    req.hr.id = decoded.userId;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ msg: "Unauthorized: Invalid token" });
  }
};

const userAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Unauthorized: No token provided" });
  }

  try {
    const decoded: any = jwt.verify(token, "your-secret-key");

    if (!req.user) {
      req.user = {};
    }

    req.user.userId = decoded.userId;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ msg: "Unauthorized: Invalid token" });
  }
};

router.post("/jobs/apply/:jobId/user/:userId", applyForJob);
router.get("/jobs/applicants/:jobId", hrAuthMiddleware, getApplicantsForJob);
router.get("jobs/all/:hrId", hrAuthMiddleware, getAllHrJobApplicants);
router.get("/jobs/appplied/:userId", hrAuthMiddleware, getAppliedJobs);

router.post("/job", createJob);
router.get("/job", getJobs);

router.post("/hr/signup", registerHandler);
router.post("/hr/login", loginHandler);
