import { Request, Response, Router } from "express";
import analyzeGuestProfiles, {
  createJob,
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
router.post("/job", createJob);

router.post("/hr/signup", registerHandler);
router.post("/hr/login", loginHandler);
