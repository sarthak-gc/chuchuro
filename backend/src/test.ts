import { JobPosting, User } from "./types/user";

function calculateMatchPercentage(user: User, job: JobPosting): number {
  let matchPoint = 0;

  if (user.skills && job.required_skills) {
    const matchedSkills = user.skills.filter((skill) =>
      job.required_skills.includes(
        skill.toLowerCase().replace(/[^a-z0-9 ]/g, "")
      )
    );

    const requiredSkillsLength = job.required_skills.length;
    if (requiredSkillsLength > 0) {
      const matchedSkillsLength = matchedSkills.length;
      matchPoint = (matchedSkillsLength / requiredSkillsLength) * 100;
    }
  }

  if (user.preferred_location && job.location) {
    const normalizedUserLocation = user.preferred_location
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, "");
    const normalizedJobLocation = job.location
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, "");

    if (normalizedUserLocation === normalizedJobLocation) {
      matchPoint += 10;
    }
  }

  if (user.experience?.internships) {
    const relevantInternships = user.experience.internships.filter(
      (internship) => internship.duration_months > 3
    );

    if (relevantInternships.length > 0) {
      matchPoint += 5;
    }
  }

  if (
    user.experience?.years_of_experience &&
    job.experience_requirements.years_of_experience
  ) {
    if (
      user.experience.years_of_experience >=
      job.experience_requirements.years_of_experience
    ) {
      matchPoint += 10;
    }
  }

  return Math.min(matchPoint, 100);
}

export function matchUserToJobs(user: User, jobs: JobPosting[]): JobPosting[] {
  const filteredJobs = jobs.filter((job) => {
    const matchPercentage = calculateMatchPercentage(user, job);
    console.log(matchPercentage);
    return matchPercentage >= 0;
  });

  return filteredJobs;
}
