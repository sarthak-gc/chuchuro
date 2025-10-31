import React from "react";
import { X, Download, Upload, Mail, Phone, MapPin } from "lucide-react";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ResumeContent,
  ResumeSection,
  SectionTitle,
  PersonalInfo,
  InfoItem,
  SkillsList,
  SkillItem,
  ExperienceItem,
  ActionButtons,
  Button,
} from "./ResumeModal.styles";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  applicant: any | null;
}

const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  applicant,
}) => {
  if (!isOpen || !applicant) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{applicant.name}'s Resume</ModalTitle>
          <CloseButton onClick={onClose}>
            <X size={20} />
          </CloseButton>
        </ModalHeader>

        <ResumeContent>
          <ResumeSection>
            <SectionTitle>Personal Information</SectionTitle>
            <PersonalInfo>
              <InfoItem>
                <Mail size={16} />
                {applicant.email}
              </InfoItem>
              <InfoItem>
                <Phone size={16} />
                +1 (555) 123-4567
              </InfoItem>
              <InfoItem>
                <MapPin size={16} />
                San Francisco, CA
              </InfoItem>
            </PersonalInfo>
          </ResumeSection>

          <ResumeSection>
            <SectionTitle>Skills</SectionTitle>
            <SkillsList>
              {applicant.skills.map((skill: any) => (
                <SkillItem key={skill}>{skill}</SkillItem>
              ))}
            </SkillsList>
          </ResumeSection>

          <ResumeSection>
            <SectionTitle>Experience</SectionTitle>
            <ExperienceItem>
              <h4>Senior Developer</h4>
              <p>Tech Company • {applicant.experience} years</p>
              <ul>
                <li>Led frontend development for multiple projects</li>
                <li>Mentored junior developers</li>
                <li>Improved application performance by 40%</li>
              </ul>
            </ExperienceItem>
          </ResumeSection>

          <ResumeSection>
            <SectionTitle>Education</SectionTitle>
            <div>
              <h4>Bachelor of Computer Science</h4>
              <p>University of Technology • 2018-2022</p>
            </div>
          </ResumeSection>
        </ResumeContent>

        <ActionButtons>
          <Button variant="secondary">
            <Upload size={18} />
            Upload Custom CV
          </Button>
          <Button variant="primary">
            <Download size={18} />
            Download Resume
          </Button>
        </ActionButtons>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ResumeModal;
