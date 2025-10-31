// Experience export interface for a Candidate's Profile
export interface Experience {
  years_of_experience: number; // Total number of years the candidate has worked in relevant roles.
  previous_roles: string[]; // List of previous job titles the candidate has held.
  relevant_skills: string[]; // Skills that the candidate has demonstrated in their previous roles.
  key_achievements: string[]; // Notable achievements in previous roles (e.g., awards, projects, goals met).
  certifications: string[]; // List of relevant certifications (e.g., AWS Certified, PMP).
  education: {
    degree: string; // Highest degree obtained (e.g., B.Sc., M.Sc., PhD).
    major: string; // Major or field of study.
    institution: string; // Institution or university where the degree was earned.
    graduation_year: number; // Year of graduation.
  };
  internships?: {
    company: string; // Company or organization where the internship took place.
    role: string; // Role during the internship (e.g., Junior Developer, Marketing Intern).
    duration_months: number; // Duration of the internship (in months).
    responsibilities: string[]; // Key responsibilities during the internship.
  }[];
  language_proficiency?: {
    language: string;
    proficiency_level: "Beginner" | "Intermediate" | "Advanced" | "Fluent";
  }[];
}

// export export interface for Job Posting
export interface JobPosting {
  job_id: string;
  job_title: string;
  required_skills: string[];
  experience_level: RequiredExperienceLevel; // Enum: EntryLevel, MidLevel, SeniorLevel
  salary_range: SalaryRange;
  location: string;
  remote: boolean;
  job_description: string;
  job_type: "Full-time" | "Part-time" | "Contract" | "Internship";
  team_culture: string; // Description of team dynamics and values
  work_schedule_flexibility: string; // Flexible, standard, or shift work
  career_growth_potential: string; // Opportunities for advancement
  company_benefits: string[]; // List of company benefits
  diversity_inclusion_statement: string; // Statement on diversity and inclusion
  work_environment: string; // Office environment, remote work, hybrid, etc.
  company_values: string[]; // Core values of the company
  travel_requirements: string; // Whether travel is required for the role
  preferred_soft_skills: string[]; // Soft skills the ideal candidate should have
  cultural_fit: string[]; // Description of the cultural fit of the candidate
  ideal_candidate_profile: string; // Profile of the ideal candidate for the role
  experience_requirements: ExperienceRequirements; // Experience requirements specific to the job
}

export interface SalaryExpectations {
  min_salary: number;
}
// Enum for Remote Preference
export enum RemotePreference {
  Onsite = "Onsite", // Job requires the employee to work from the office.
  Hybrid = "Hybrid", // Job allows a mix of office and remote work.
  Remote = "Remote", // Job is fully remote, no office presence required.
}

export interface JobPreferences {
  remote: RemotePreference;
  salary: number;
  company_culture: string;
}

export interface User {
  user_id: string;
  name: string;
  email: string;
  age?: number;
  location?: string;
  preferred_location?: string;
  preferred_job_type?: string;
  preferred_industries?: string[];
  skills?: string[];
  experience?: Experience;
  salary_expectations?: SalaryExpectations;
  job_preferences?: JobPreferences;
}

// for company
export interface SalaryRange {
  min: number; // Minimum salary
  max: number; // Maximum salary
}

// Experience Requirements for a Job Posting
export interface ExperienceRequirements {
  years_of_experience: number; // Minimum years of experience required
  relevant_skills: string[]; // List of skills that are highly relevant to the job
  key_achievements: string[]; // Examples of achievements desired for the candidate
  certifications: string[]; // Certifications preferred for the job
}

// export interface for HR Preferences
export interface HRPreferences {
  min_experience_years: number; // Minimum years of experience required
  max_experience_years: number; // Maximum years of experience allowed
  preferred_degree: string; // Preferred degree or educational background
  preferred_skills: string[]; // Skills the HR prefers in candidates
  preferred_qualitites: string[]; // Soft skills the HR prefers in candidates (e.g., "adaptability", "team player")
  preferred_certifications?: string[]; // Optional: Preferred certifications for the candidate
  preferred_experience?: ExperienceRequirements; // Optional: Specific experience preferences for candidates
  preferred_work_life_balance:
    | "Flexible"
    | "Standard"
    | "Work-life integration"; // Desired balance
  preferred_learning_focus: string; // Learning and development focus, such as certifications or mentorship
  values_alignment: string[]; // Core values that align with the company culture
}

// Main Company HR export interface
export interface CompanyHR {
  hr_id: number;
  company_name: string;
  industry: string;
  location: string;
  company_size: string; // Company size (e.g., "100+ employees")
  company_overview: string; // Short description of the company
  company_mission: string; // Company mission statement
  leadership_style: string; // Style of leadership (e.g., "Empowerment-driven", "Hands-on")
  employee_engagement_rating: number; // Rating of employee engagement (e.g., 4.5/5)
  technology_stack: string[]; // Technologies used within the company
  internal_mobility_opportunities: boolean; // Whether internal mobility is supported
  csr_initiatives: string[]; // Corporate Social Responsibility initiatives (e.g., "Community outreach", "Green energy projects")
  hr_preferences: HRPreferences; // HR preferences for hiring
  job_postings: JobPosting[]; // List of job postings available in the company
}
// Enum for Experience Level in a Job Posting
export enum RequiredExperienceLevel {
  EntryLevel = "Entry-Level",
  MidLevel = "Mid-Level",
  SeniorLevel = "Senior-Level",
}
