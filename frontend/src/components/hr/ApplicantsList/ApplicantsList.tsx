import React, { useEffect, useState } from "react";
import { Search, Filter, Download, Eye } from "lucide-react";
import ResumeModal from "../ResumeModal/ResumeModal";
import {
  ListContainer,
  SearchBar,
  SearchInput,
  ActionButtons,
  ActionButton,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  MatchBadge,
  ViewButton,
} from "./ApplicantsList.styles";

const mockApplicants: any[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    skills: ["React", "TypeScript", "Node.js"],
    experience: 3,
    matchPercentage: 92,
    appliedAt: "2024-01-15",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    skills: ["Python", "Django", "PostgreSQL"],
    experience: 5,
    matchPercentage: 78,
    appliedAt: "2024-01-14",
  },
];

const ApplicantsList: React.FC = () => {
  const hr = JSON.parse(localStorage.getItem("hr"));
  const [applicants] = useState<any[]>(mockApplicants);
  const [selectedApplicant, setSelectedApplicant] = useState<any | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const openResumeModal = (applicant: any) => {
    setSelectedApplicant(applicant);
    setIsResumeModalOpen(true);
  };

  const fetchApplicants = async () => {
    await fetch(`http://localhost:3000/jobs/all/${hr.id}`).then((res) =>
      console.log(res)
    );
  };
  useEffect(() => {
    fetchApplicants();
  }, []);
  return (
    <ListContainer>
      <SearchBar>
        <SearchInput>
          <Search size={20} />
          <input type="text" placeholder="Search applicants..." />
        </SearchInput>
        <ActionButtons>
          <ActionButton>
            <Filter size={18} />
            Filter
          </ActionButton>
          <ActionButton>
            <Download size={18} />
            Export
          </ActionButton>
        </ActionButtons>
      </SearchBar>

      <Table>
        <TableHeader>
          <TableCell>Name</TableCell>
          <TableCell>Skills</TableCell>
          <TableCell>Experience</TableCell>
          <TableCell>Match</TableCell>
          <TableCell>Applied</TableCell>
          <TableCell>Actions</TableCell>
        </TableHeader>

        {applicants.map((applicant) => (
          <TableRow key={applicant.id}>
            <TableCell>
              <div>
                <strong>{applicant.name}</strong>
                <span>{applicant.email}</span>
              </div>
            </TableCell>
            <TableCell>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                {applicant.skills.slice(0, 3).map((skill: any) => (
                  <span
                    key={skill}
                    style={{
                      background: "#f1f5f9",
                      color: "#475569",
                      padding: "2px 8px",
                      borderRadius: "12px",
                      fontSize: "12px",
                    }}
                  >
                    {skill}
                  </span>
                ))}
                {applicant.skills.length > 3 && (
                  <span style={{ color: "#64748b", fontSize: "12px" }}>
                    +{applicant.skills.length - 3}
                  </span>
                )}
              </div>
            </TableCell>
            <TableCell>{applicant.experience} years</TableCell>
            <TableCell>
              <MatchBadge percentage={applicant.matchPercentage}>
                {applicant.matchPercentage}%
              </MatchBadge>
            </TableCell>
            <TableCell>
              {new Date(applicant.appliedAt).toLocaleDateString()}
            </TableCell>
            <TableCell>
              <ViewButton onClick={() => openResumeModal(applicant)}>
                <Eye size={16} />
                View
              </ViewButton>
            </TableCell>
          </TableRow>
        ))}
      </Table>

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        applicant={selectedApplicant}
      />
    </ListContainer>
  );
};

export default ApplicantsList;
