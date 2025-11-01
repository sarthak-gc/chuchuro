import React, { useState } from "react";
import { Heart, X, Star, Filter, Search, Bookmark, Share2 } from "lucide-react";
import JobCard from "../JobCard/JobCard";
import {
  FeedContainer,
  FeedHeader,
  FeedContent,
  EmptyState,
  FloatingActions,
  FloatingButton,
  StatsBar,
  StatItem,
  FilterBar,
  SearchContainer,
  SearchInput,
  FilterButton,
  JobCount,
  QuickFilters,
  QuickFilter,
  PremiumBanner,
  EmptyStateIllustration,
  NavigationBar,
  NavItem,
  LoadingState,
  Shimmer,
} from "./JobFeed.styles";
import { useLocation, useNavigate } from "react-router-dom";

const mockJobs = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    salaryRange: { min: 120000, max: 160000 },
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    description:
      "Join our core product team to build scalable web applications used by millions of users. We're looking for someone passionate about modern frontend technologies and user experience.",
    jobType: "full-time",
    matchPercentage: 92,
    postedDate: "2 hours ago",
    isRemote: true,
    companyLogo: "🏢",
    benefits: [
      "Health Insurance",
      "Flexible PTO",
      "Stock Options",
      "Learning Budget",
    ],
    applicants: 24,
    urgency: "high",
  },
  {
    id: "2",
    title: "UX/UI Designer",
    company: "DesignStudio",
    location: "Remote",
    salaryRange: { min: 85000, max: 110000 },
    skills: [
      "Figma",
      "UI/UX",
      "Prototyping",
      "User Research",
      "Design Systems",
    ],
    description:
      "Create beautiful and intuitive user experiences for our SaaS platform. Work closely with product managers and developers to deliver exceptional design solutions.",
    jobType: "remote",
    matchPercentage: 88,
    postedDate: "1 day ago",
    isRemote: true,
    companyLogo: "🎨",
    benefits: ["Remote First", "Wellness Stipend", "Conference Budget"],
    applicants: 18,
    urgency: "medium",
  },
  {
    id: "3",
    title: "Full Stack Engineer",
    company: "StartupXYZ",
    location: "New York, NY",
    salaryRange: { min: 100000, max: 140000 },
    skills: ["Node.js", "React", "PostgreSQL", "AWS", "GraphQL"],
    description:
      "We're a fast-growing startup looking for a versatile full-stack engineer to help build our platform from the ground up. Early employee opportunity with significant equity.",
    jobType: "full-time",
    matchPercentage: 95,
    postedDate: "3 hours ago",
    isRemote: false,
    companyLogo: "🚀",
    benefits: ["Equity", "Health Insurance", "Flexible Hours"],
    applicants: 32,
    urgency: "high",
  },
  {
    id: "4",
    title: "Product Manager",
    company: "ProductLabs",
    location: "Austin, TX",
    salaryRange: { min: 110000, max: 150000 },
    skills: ["Product Strategy", "Agile", "Data Analysis", "User Stories"],
    description:
      "Lead product development for our enterprise software suite. Define product vision, work with cross-functional teams, and drive product success metrics.",
    jobType: "full-time",
    matchPercentage: 78,
    postedDate: "2 days ago",
    isRemote: true,
    companyLogo: "📊",
    benefits: ["Health Insurance", "401k Matching", "Professional Development"],
    applicants: 15,
    urgency: "medium",
  },
  {
    id: "5",
    title: "DevOps Engineer",
    company: "CloudSystems",
    location: "Remote",
    salaryRange: { min: 130000, max: 170000 },
    skills: ["Kubernetes", "Docker", "AWS", "Terraform", "CI/CD"],
    description:
      "Build and maintain our cloud infrastructure supporting millions of users. Focus on scalability, reliability, and security of our platform.",
    jobType: "remote",
    matchPercentage: 91,
    postedDate: "5 hours ago",
    isRemote: true,
    companyLogo: "☁️",
    benefits: ["Remote Work", "Hardware Budget", "Certification Support"],
    applicants: 21,
    urgency: "high",
  },
];

const JobFeed: React.FC = () => {
  const location = useLocation();

  const params = new URLSearchParams(location.search);

  const queryParam = params.get("query");

  let queryData = null;
  try {
    if (queryParam) {
      queryData = JSON.parse(decodeURIComponent(queryParam));
    }
  } catch (error) {
    console.error("Invalid JSON in query param:", error);
  }
  localStorage.setItem("user", JSON.stringify(queryData));

  const [jobs, setJobs] = useState<any[]>(mockJobs);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [savedJobs, setSavedJobs] = useState<string[]>([]);

  const handleSwipe = (jobId: string, direction: "left" | "right") => {
    console.log(`Swiped ${direction} on job ${jobId}`);

    if (direction === "right") {
      // Auto-apply logic would go here
      console.log("Applied to job:", jobId);
      // Show success feedback
    }

    // Remove the swiped job from the list
    setJobs(jobs.filter((job) => job.id !== jobId));
  };

  const handleSwipeAction = (direction: "left" | "right") => {
    if (jobs.length > 0) {
      handleSwipe(jobs[0].id, direction);
    }
  };

  const handleSaveJob = (jobId: string) => {
    setSavedJobs((prev) =>
      prev.includes(jobId)
        ? prev.filter((id) => id !== jobId)
        : [...prev, jobId]
    );
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some((skill: string) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );

    if (activeFilter === "remote") return matchesSearch && job.isRemote;
    if (activeFilter === "high-salary")
      return matchesSearch && job.salaryRange.min >= 100000;
    if (activeFilter === "high-match")
      return matchesSearch && job.matchPercentage >= 90;

    return matchesSearch;
  });

  const quickFilters = [
    { id: "all", label: "All Jobs", count: jobs.length },
    {
      id: "remote",
      label: "Remote",
      count: jobs.filter((j) => j.isRemote).length,
    },
    {
      id: "high-salary",
      label: "High Salary",
      count: jobs.filter((j) => j.salaryRange.min >= 100000).length,
    },
    {
      id: "high-match",
      label: "High Match",
      count: jobs.filter((j) => j.matchPercentage >= 90).length,
    },
  ];

  if (isLoading) {
    return (
      <FeedContainer>
        <LoadingState>
          <Shimmer />
          <Shimmer />
          <Shimmer />
        </LoadingState>
      </FeedContainer>
    );
  }
  const navigate = useNavigate();
  return (
    <FeedContainer>
      {/* Premium Banner */}
      <PremiumBanner>
        <div className="premium-content">
          <Star size={20} fill="currentColor" />
          <div>
            <strong>Go Premium</strong>
            <span>See who viewed your profile & get featured</span>
          </div>
        </div>
        <button className="upgrade-btn">Upgrade</button>
      </PremiumBanner>

      <FeedHeader>
        <div className="header-content">
          <h1>Discover Opportunities</h1>
          <p>
            Swipe right to apply, left to skip • {jobs.length} jobs matched your
            profile
          </p>
        </div>

        {/* Stats Bar */}
        <StatsBar>
          <StatItem>
            <strong>
              {jobs.filter((j) => j.matchPercentage >= 90).length}
            </strong>
            <span>High Match</span>
          </StatItem>
          <StatItem>
            <strong>{jobs.filter((j) => j.isRemote).length}</strong>
            <span>Remote</span>
          </StatItem>
          <StatItem>
            <strong>{jobs.filter((j) => j.urgency === "high").length}</strong>
            <span>Urgent</span>
          </StatItem>
        </StatsBar>
      </FeedHeader>

      {/* Filter Bar */}
      <FilterBar>
        <SearchContainer>
          <Search size={20} />
          <SearchInput
            placeholder="Search jobs, companies, or skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>

        <FilterButton>
          <Filter size={18} />
          Filters
        </FilterButton>
      </FilterBar>

      {/* Quick Filters */}
      <QuickFilters>
        {quickFilters.map((filter) => (
          <QuickFilter
            key={filter.id}
            active={activeFilter === filter.id}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
            <span>({filter.count})</span>
          </QuickFilter>
        ))}
      </QuickFilters>

      {/* Job Count */}
      <JobCount>
        Showing {filteredJobs.length} of {jobs.length} jobs
      </JobCount>

      <FeedContent>
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onSwipe={(direction) => handleSwipe(job.id, direction)}
              onSave={() => handleSaveJob(job.id)}
              isSaved={savedJobs.includes(job.id)}
            />
          ))
        ) : (
          <EmptyState>
            <EmptyStateIllustration>
              <div className="illustration">🔍</div>
              <h3>No jobs found</h3>
              <p>
                Try adjusting your search or filters to see more opportunities
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveFilter("all");
                }}
                className="reset-btn"
              >
                Reset Filters
              </button>
            </EmptyStateIllustration>
          </EmptyState>
        )}
      </FeedContent>

      {filteredJobs.length > 0 && (
        <>
          <FloatingActions>
            <FloatingButton
              variant="reject"
              onClick={() => handleSwipeAction("left")}
              aria-label="Skip job"
            >
              <X size={24} />
            </FloatingButton>

            <div className="action-info">
              <span>Skip</span>
              <span>Apply</span>
            </div>

            <FloatingButton
              variant="accept"
              onClick={() => handleSwipeAction("right")}
              aria-label="Apply to job"
            >
              <Heart size={24} />
            </FloatingButton>
          </FloatingActions>

          {/* Bottom Navigation */}
          <NavigationBar>
            <NavItem
              active={true}
              onClick={() => {
                navigate("/discover");
              }}
            >
              <Heart size={20} />
              <span>Discover</span>
            </NavItem>
            <NavItem
              onClick={() => {
                navigate("/saved");
              }}
            >
              <Bookmark size={20} />
              <span>Saved</span>
            </NavItem>
            <NavItem
              onClick={() => {
                navigate("/applied");
              }}
            >
              <Share2 size={20} />
              <span>Applied</span>
            </NavItem>
          </NavigationBar>
        </>
      )}
    </FeedContainer>
  );
};

export default JobFeed;
