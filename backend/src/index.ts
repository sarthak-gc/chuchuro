import express, { Request, Response } from "express";
import session from "express-session";
import authRouter from "./auth";
import { dummyCompanyHR } from "./data/dummy.company";
import { dummyUsers } from "./data/dummy.user";
import { router } from "./routes";
import { matchUserToJobs } from "./test";
import {
  CompanyHR,
  RemotePreference,
  RequiredExperienceLevel,
  User,
} from "./types/user";
const app = express();
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

app.use(authRouter);
app.use(router);

app.get("/company", (req: Request, res: Response) => {
  res.json({
    jobs: dummyCompanyHR,
  });
});

app.get("/user", (req: Request, res: Response) => {
  res.json({
    user: dummyUsers,
  });
});

app.post("/apply/:jobId", async (req: Request, res: Response) => {
  const jobId = req.params.jobId;
  const job = dummyCompanyHR.job_postings.find((ji) => {
    jobId == ji.job_id;
  });
  if (!job) {
    res.json({ msg: "Invalid Request" });
    return;
  }
  // const prisma = new PrismaClient();
  // await prisma.user.findFirst({
  //   where: {},
  // });
});

// app.get("/apply", viewApplications);
app.get("/match", (req: Request, res: Response) => {
  // Find jobs that match the user
  const user: User = {
    user_id: "user123",
    name: "Alice Johnson",
    email: "alice.johnson@email.com",
    location: "New York",
    preferred_location: "New York", // Matching location
    preferred_job_type: "Full-time",
    skills: ["JavaScript", "React", "Node.js", "CSS", "HTML"], // Perfect skill match
    experience: {
      years_of_experience: 5, // Sufficient experience
      previous_roles: ["Frontend Developer", "Software Engineer"], // Relevant previous roles
      relevant_skills: ["JavaScript", "React", "Node.js", "CSS", "HTML"], // All required skills
      key_achievements: [
        "Developed a full-stack e-commerce platform",
        "Led a team of 5 developers",
      ], // Strong achievements
      certifications: ["AWS Certified Developer", "React.js Certification"], // Relevant certifications
      education: {
        degree: "B.Sc.",
        major: "Computer Science",
        institution: "XYZ University",
        graduation_year: 2018, // Relevant education background
      },
      internships: [
        {
          company: "Tech Innovators",
          role: "Intern Developer",
          duration_months: 6,
          responsibilities: [
            "Building front-end features",
            "Bug fixing",
            "Collaborating on UI design",
          ],
        },
      ], // Internship experience with relevant skills
      language_proficiency: [
        { language: "English", proficiency_level: "Fluent" }, // Perfect language proficiency
      ],
    },
    salary_expectations: {
      min_salary: 80000, // Salary expectations align with the job posting
    },
    job_preferences: {
      remote: RemotePreference.Onsite, // Prefers onsite work, matching the job
      salary: 85000,
      company_culture: "Innovative", // Aligned with company culture
    },
  };
  const hr: CompanyHR = {
    hr_id: 1,
    company_name: "Tech Innovators Inc.",
    industry: "Software Development",
    location: "New York",
    company_size: "150 employees",
    company_overview:
      "A fast-growing tech company specializing in e-commerce solutions.",
    company_mission:
      "To build scalable, innovative software that empowers businesses to thrive in the digital age.",
    leadership_style: "Empowerment-driven",
    employee_engagement_rating: 4.8,
    technology_stack: ["JavaScript", "React", "Node.js", "AWS", "CSS"],
    internal_mobility_opportunities: true,
    csr_initiatives: ["Community outreach", "Sustainability projects"],
    hr_preferences: {
      min_experience_years: 3, // Minimum 3 years of experience
      max_experience_years: 7, // Ideal experience range: 3-7 years
      preferred_degree: "B.Sc. in Computer Science",
      preferred_skills: ["JavaScript", "React", "Node.js", "CSS", "HTML"],
      preferred_qualitites: ["Team player", "Adaptability", "Problem-solving"],
      preferred_certifications: [
        "AWS Certified Developer",
        "React.js Certification",
      ],
      preferred_experience: {
        years_of_experience: 3,
        relevant_skills: ["JavaScript", "React", "Node.js"],
        key_achievements: [
          "Developed large-scale applications",
          "Led teams",
          "Innovative project solutions",
        ],
        certifications: ["AWS Certified Developer"],
      },
      preferred_work_life_balance: "Flexible",
      preferred_learning_focus: "Certifications, mentorship",
      values_alignment: ["Innovation", "Collaboration", "Integrity"],
    },
    job_postings: [
      {
        job_id: "123",
        job_title: "Frontend Developer",
        required_skills: ["JavaScript", "React", "Node.js", "CSS", "HTML"], // Perfect skill match
        experience_level: RequiredExperienceLevel.MidLevel, // Mid-Level, fits the candidate's experience
        salary_range: { min: 75000, max: 95000 },
        location: "New York", // Location matches
        remote: false, // Onsite role, matches user preference
        job_description:
          "Build user-facing features for our platform. Collaborate with a cross-functional team to design and implement scalable software.",
        job_type: "Full-time", // Full-time job, matches user preference
        team_culture: "Innovative, collaborative, fast-paced",
        work_schedule_flexibility: "Flexible", // Aligns with the user's flexible work preference
        career_growth_potential: "High",
        company_benefits: ["Health insurance", "Paid time off", "401k"],
        diversity_inclusion_statement:
          "We are committed to building an inclusive and diverse workforce.",
        work_environment: "Office",
        company_values: ["Innovation", "Integrity", "Collaboration"],
        travel_requirements: "None",
        preferred_soft_skills: [
          "Adaptability",
          "Problem-solving",
          "Team player",
        ], // Matches the user’s soft skills
        cultural_fit: ["Innovative", "Collaborative"], // Cultural fit matches the user's values
        ideal_candidate_profile:
          "A proactive developer who thrives in a fast-paced environment, passionate about building innovative solutions.",
        experience_requirements: {
          years_of_experience: 3,
          relevant_skills: ["JavaScript", "React", "Node.js"],
          key_achievements: [
            "Built scalable applications",
            "Led teams",
            "Developed innovative solutions",
          ],
          certifications: ["AWS Certified Developer"],
        },
      },
    ],
  };

  const matchedJobs = matchUserToJobs(user, hr.job_postings);
  res.json({
    matchedJobs,
  });
});

app.listen(3000);
