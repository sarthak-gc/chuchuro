import { RemotePreference, User } from "../types/user";

export const dummyUsers: User[] = [
  {
    user_id: "U12345",
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    age: 28,
    location: "San Francisco, CA",
    preferred_location: "San Francisco, CA",
    preferred_job_type: "Full-time",
    preferred_industries: [
      "Technology",
      "Artificial Intelligence",
      "Software Development",
    ],
    skills: ["JavaScript", "React", "Node.js", "Python", "Machine Learning"],
    experience: {
      years_of_experience: 4,
      previous_roles: ["Frontend Developer", "Software Engineer"],
      relevant_skills: [
        "JavaScript",
        "React",
        "Node.js",
        "Problem Solving",
        "Machine Learning",
      ],
      key_achievements: [
        "Built a scalable e-commerce platform using React and Node.js",
        "Led a team of 3 engineers in a machine learning-based project to predict customer behavior",
        "Achieved 98% customer satisfaction rate on a project",
      ],
      certifications: [
        "AWS Certified Developer",
        "Certified Kubernetes Administrator",
      ],
      education: {
        degree: "B.Sc.",
        major: "Computer Science",
        institution: "University of California, Berkeley",
        graduation_year: 2019,
      },
      internships: [
        {
          company: "Tech Innovators Inc.",
          role: "Junior Developer",
          duration_months: 6,
          responsibilities: [
            "Collaborated on backend development using Node.js",
            "Assisted in creating automated testing for the application",
            "Developed internal tools for team collaboration",
          ],
        },
      ],
      language_proficiency: [
        {
          language: "English",
          proficiency_level: "Fluent",
        },
        {
          language: "Spanish",
          proficiency_level: "Intermediate",
        },
      ],
    },
    salary_expectations: {
      min_salary: 100000,
    },
    job_preferences: {
      remote: RemotePreference.Hybrid,
      salary: 120000,
      company_culture: "Collaborative and innovation-driven",
    },
  },
  {
    user_id: "U12346",
    name: "Michael Lee",
    email: "michael.lee@email.com",
    age: 32,
    location: "New York, NY",
    preferred_location: "New York, NY",
    preferred_job_type: "Full-time",
    preferred_industries: ["Finance", "Data Science", "Machine Learning"],
    skills: [
      "Python",
      "SQL",
      "Machine Learning",
      "Data Analysis",
      "Data Visualization",
    ],
    experience: {
      years_of_experience: 7,
      previous_roles: ["Data Scientist", "Machine Learning Engineer"],
      relevant_skills: [
        "Python",
        "SQL",
        "Machine Learning",
        "Data Visualization",
        "Deep Learning",
      ],
      key_achievements: [
        "Built a predictive model that increased sales by 25% for a major client",
        "Optimized machine learning pipelines, reducing model training time by 30%",
        "Published 2 papers on machine learning in top-tier journals",
      ],
      certifications: [
        "Google Data Engineer",
        "Deep Learning Specialization (Coursera)",
      ],
      education: {
        degree: "M.Sc.",
        major: "Data Science",
        institution: "New York University",
        graduation_year: 2016,
      },
      internships: [
        {
          company: "FinanceTech Corp",
          role: "Data Analyst Intern",
          duration_months: 6,
          responsibilities: [
            "Analyzed large financial datasets to uncover trends",
            "Built dashboards using Tableau to visualize key metrics",
            "Worked with data engineers to ensure data quality",
          ],
        },
      ],
      language_proficiency: [
        {
          language: "English",
          proficiency_level: "Fluent",
        },
        {
          language: "Mandarin",
          proficiency_level: "Intermediate",
        },
      ],
    },
    salary_expectations: {
      min_salary: 120000,
    },
    job_preferences: {
      remote: RemotePreference.Onsite,
      salary: 140000,
      company_culture: "Innovative, research-driven environment",
    },
  },
  {
    user_id: "U12347",
    name: "Jessica Brown",
    email: "jessica.brown@email.com",
    age: 26,
    location: "Los Angeles, CA",
    preferred_location: "Los Angeles, CA",
    preferred_job_type: "Part-time",
    preferred_industries: ["Marketing", "Advertising", "Content Creation"],
    skills: [
      "Content Writing",
      "SEO",
      "Social Media Marketing",
      "Google Analytics",
      "Brand Strategy",
    ],
    experience: {
      years_of_experience: 3,
      previous_roles: ["Content Strategist", "Marketing Associate"],
      relevant_skills: [
        "Content Creation",
        "SEO",
        "Social Media Management",
        "Google Analytics",
        "Copywriting",
      ],
      key_achievements: [
        "Increased website traffic by 50% through SEO optimization",
        "Developed social media campaigns that increased engagement by 35%",
        "Led a rebranding initiative that boosted sales by 20%",
      ],
      certifications: [
        "Google Analytics Certified",
        "HubSpot Content Marketing Certification",
      ],
      education: {
        degree: "B.A.",
        major: "Marketing",
        institution: "University of Southern California",
        graduation_year: 2018,
      },
      internships: [
        {
          company: "Social Media Masters",
          role: "Social Media Intern",
          duration_months: 6,
          responsibilities: [
            "Managed social media accounts and scheduled posts",
            "Collaborated with the content team to create engaging content",
            "Assisted in analyzing social media performance using analytics tools",
          ],
        },
      ],
      language_proficiency: [
        {
          language: "English",
          proficiency_level: "Fluent",
        },
        {
          language: "French",
          proficiency_level: "Beginner",
        },
      ],
    },
    salary_expectations: {
      min_salary: 60000,
    },
    job_preferences: {
      remote: RemotePreference.Remote,
      salary: 70000,
      company_culture: "Creative and flexible work environment",
    },
  },
  {
    user_id: "U12348",
    name: "David Smith",
    email: "david.smith@email.com",
    age: 38,
    location: "Austin, TX",
    preferred_location: "Austin, TX",
    preferred_job_type: "Contract",
    preferred_industries: ["Project Management", "Construction", "Consulting"],
    skills: [
      "Project Management",
      "Budgeting",
      "Risk Management",
      "Team Leadership",
      "Client Relations",
    ],
    experience: {
      years_of_experience: 12,
      previous_roles: ["Project Manager", "Construction Manager"],
      relevant_skills: [
        "Project Management",
        "Risk Management",
        "Client Communication",
        "Team Leadership",
      ],
      key_achievements: [
        "Successfully delivered 5 multimillion-dollar construction projects on time and under budget",
        "Reduced project risks by implementing proactive risk management strategies",
        "Improved team productivity by 20% through effective leadership and training",
      ],
      certifications: ["PMP", "LEED Accredited Professional"],
      education: {
        degree: "B.Sc.",
        major: "Civil Engineering",
        institution: "University of Texas at Austin",
        graduation_year: 2010,
      },
      internships: [
        {
          company: "BuildRight Construction",
          role: "Project Management Intern",
          duration_months: 6,
          responsibilities: [
            "Assisted in project planning and scheduling",
            "Coordinated with subcontractors and suppliers",
            "Performed site visits to ensure project progress",
          ],
        },
      ],
      language_proficiency: [
        {
          language: "English",
          proficiency_level: "Fluent",
        },
        {
          language: "German",
          proficiency_level: "Intermediate",
        },
      ],
    },
    salary_expectations: {
      min_salary: 110000,
    },
    job_preferences: {
      remote: RemotePreference.Onsite,
      salary: 130000,
      company_culture: "Results-driven, client-oriented",
    },
  },
];
