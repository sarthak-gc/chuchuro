import React, { useState } from "react";
import { Plus, Users, Briefcase, Filter } from "lucide-react";
import JobPostingModal from "../JobPostingModal/JobPostingModal";
import ApplicantsList from "../ApplicantsList/ApplicantsList";
import {
  DashboardContainer,
  Sidebar,
  SidebarItem,
  MainContent,
  ContentHeader,
  ActionButton,
  FilterSection,
  FilterButton,
} from "./HRDashboard.styles";

const HRDashboard: React.FC = () => {
  const hr = JSON.parse(localStorage.getItem("hr"));
  console.log({ hr });
  const [activeSection, setActiveSection] = useState<"jobs" | "applicants">(
    "applicants"
  );
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);

  return (
    <DashboardContainer>
      <Sidebar>
        <SidebarItem
          active={activeSection === "jobs"}
          onClick={() => setActiveSection("jobs")}
        >
          <Briefcase size={20} />
          Post Job
        </SidebarItem>
        <SidebarItem
          active={activeSection === "applicants"}
          onClick={() => setActiveSection("applicants")}
        >
          <Users size={20} />
          View Applicants
        </SidebarItem>
      </Sidebar>

      <MainContent>
        <ContentHeader>
          <div>
            <h1>{activeSection === "jobs" ? "Post New Job" : "Applicants"}</h1>
            <p>
              {activeSection === "jobs"
                ? "Create a new job posting"
                : "Manage and review job applicants"}
            </p>
          </div>

          <div style={{ display: "flex", gap: "12px" }}>
            {activeSection === "applicants" && (
              <FilterButton>
                <Filter size={18} />
                Filter
              </FilterButton>
            )}
            <ActionButton onClick={() => setIsJobModalOpen(true)}>
              <Plus size={18} />
              Post Job
            </ActionButton>
          </div>
        </ContentHeader>

        {activeSection === "applicants" && (
          <FilterSection>{/* Filter components would go here */}</FilterSection>
        )}

        {activeSection === "applicants" ? (
          <ApplicantsList />
        ) : (
          <div>
            {/* Job posting form or instructions would go here */}
            <p>Use the "Post Job" button to create a new job posting.</p>
          </div>
        )}
      </MainContent>

      <JobPostingModal
        isOpen={isJobModalOpen}
        onClose={() => setIsJobModalOpen(false)}
      />
    </DashboardContainer>
  );
};

export default HRDashboard;
