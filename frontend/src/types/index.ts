export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    skills: string[];
    experience: number;
    preferences: JobPreferences;
  }
  
  export interface JobPreferences {
    location: string;
    minSalary: number;
    jobType: 'full-time' | 'part-time' | 'contract' | 'remote';
    industries: string[];
  }
  
  export interface Job {
    id: string;
    title: string;
    company: string;
    logo?: string;
    location: string;
    salaryRange: {
      min: number;
      max: number;
    };
    skills: string[];
    description: string;
    jobType: string;
    matchPercentage: number;
  }
  
  export interface Applicant {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    skills: string[];
    experience: number;
    matchPercentage: number;
    appliedAt: string;
  }
  
  export interface Toast {
    id: string;
    type: 'success' | 'error' | 'warning' | 'info';
    message: string;
    duration?: number;
  }