import { CompanyHR, RequiredExperienceLevel } from "../types/user";

export const dummyCompanyHR: CompanyHR = {
  hr_id: 1,
  company_name: "Tech Innovators Inc.",
  industry: "Technology",
  location: "San Francisco, CA",
  company_size: "500+ employees",
  company_overview:
    "Tech Innovators Inc. is a leading software development company specializing in AI-powered solutions for enterprises.",
  company_mission:
    "To revolutionize the tech industry with cutting-edge innovations in AI and machine learning.",
  leadership_style: "Empowerment-driven",
  employee_engagement_rating: 4.6,
  technology_stack: [
    "React",
    "Node.js",
    "AWS",
    "Python",
    "Docker",
    "Kubernetes",
    "Machine Learning",
    "TensorFlow",
  ],
  internal_mobility_opportunities: true,
  csr_initiatives: [
    "Community outreach",
    "Green energy projects",
    "Digital literacy programs",
  ],
  hr_preferences: {
    min_experience_years: 2,
    max_experience_years: 8,
    preferred_degree: "B.Sc. in Computer Science",
    preferred_skills: [
      "JavaScript",
      "Python",
      "Cloud Computing",
      "AI/ML",
      "Problem Solving",
      "Leadership",
    ],
    preferred_qualitites: [
      "Adaptability",
      "Team Player",
      "Innovation",
      "Attention to Detail",
    ],
    preferred_certifications: [
      "AWS Certified Solutions Architect",
      "PMP",
      "Certified Kubernetes Administrator",
    ],
    preferred_experience: {
      years_of_experience: 4,
      relevant_skills: [
        "Cloud Computing",
        "Software Development",
        "Machine Learning",
        "DevOps",
      ],
      key_achievements: [
        "Led a cross-functional team to develop an AI-driven product",
        "Improved software deployment speed by 40%",
      ],
      certifications: [
        "AWS Certified Solutions Architect",
        "Certified Kubernetes Administrator",
      ],
    },
    preferred_work_life_balance: "Flexible",
    preferred_learning_focus:
      "Advanced cloud technologies, leadership development",
    values_alignment: ["Innovation", "Collaboration", "Sustainability"],
  },
  job_postings: [
    {
      job_id: "101",
      job_title: "Senior AI Engineer",
      required_skills: [
        "Python",
        "Machine Learning",
        "Deep Learning",
        "AI Research",
      ],
      experience_level: RequiredExperienceLevel.SeniorLevel,
      salary_range: { min: 130000, max: 180000 },
      location: "San Francisco, CA",
      remote: false,
      job_description:
        "Lead the development of AI-driven solutions. Work with cross-functional teams to implement machine learning models and algorithms.",
      job_type: "Full-time",
      team_culture:
        "Collaborative, high-performance environment with a focus on continuous learning.",
      work_schedule_flexibility: "Flexible",
      career_growth_potential: "Opportunity to become a team lead or manager.",
      company_benefits: [
        "Health Insurance",
        "401(k)",
        "Stock Options",
        "Paid Time Off",
        "Learning Stipend",
      ],
      diversity_inclusion_statement:
        "We are committed to fostering an inclusive environment for all employees.",
      work_environment: "Hybrid",
      company_values: ["Innovation", "Collaboration", "Sustainability"],
      travel_requirements: "Occasional travel to client sites.",
      preferred_soft_skills: ["Leadership", "Problem-Solving", "Collaboration"],
      cultural_fit: [
        "Innovative thinkers",
        "Team-oriented",
        "Adaptable to change",
      ],
      ideal_candidate_profile:
        "A self-starter with a passion for AI and machine learning. Strong experience in developing and deploying AI solutions.",
      experience_requirements: {
        years_of_experience: 5,
        relevant_skills: [
          "Machine Learning",
          "Deep Learning",
          "Python",
          "AI Research",
          "Cloud Computing",
        ],
        key_achievements: [
          "Led a project that deployed machine learning models at scale",
          "Published research in top AI conferences",
        ],
        certifications: [
          "AWS Certified Solutions Architect",
          "Deep Learning Specialization",
        ],
      },
    },
    {
      job_id: "1234",
      job_title: "Junior Frontend Developer",
      required_skills: ["JavaScript", "React", "CSS", "HTML"],
      experience_level: RequiredExperienceLevel.EntryLevel,
      salary_range: { min: 60000, max: 85000 },
      location: "San Francisco, CA",
      remote: true,
      job_description:
        "Join a dynamic team and work on developing user interfaces for cutting-edge AI solutions.",
      job_type: "Full-time",
      team_culture:
        "Fast-paced and collaborative, with an emphasis on creativity and experimentation.",
      work_schedule_flexibility: "Flexible",
      career_growth_potential:
        "Fast track to senior roles based on performance.",
      company_benefits: [
        "Health Insurance",
        "401(k)",
        "Stock Options",
        "Paid Time Off",
        "Learning Stipend",
      ],
      diversity_inclusion_statement:
        "We value diversity and are committed to creating an inclusive work environment.",
      work_environment: "Remote",
      company_values: ["Innovation", "Collaboration", "Sustainability"],
      travel_requirements: "No travel required.",
      preferred_soft_skills: ["Team Player", "Problem-Solving", "Creativity"],
      cultural_fit: ["Eager to learn", "Innovative", "Collaborative"],
      ideal_candidate_profile:
        "A recent graduate with strong JavaScript skills and a passion for frontend development.",
      experience_requirements: {
        years_of_experience: 0,
        relevant_skills: ["JavaScript", "React", "HTML", "CSS"],
        key_achievements: [
          "Completed a personal project using React",
          "Built a portfolio website",
        ],
        certifications: [],
      },
    },
  ],
};
