import React, { useState } from 'react';
import { X } from 'lucide-react';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  CloseButton,
  Form,
  FormGroup,
  Label,
  Input,
  TextArea,
  Select,
  SkillInput,
  AddSkillButton,
  ModalActions,
  Button
} from './JobPostingModal.styles';

interface JobPostingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const JobPostingModal: React.FC<JobPostingModalProps> = ({ isOpen, onClose }) => {
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState('');

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Post New Job</ModalTitle>
          <CloseButton onClick={onClose}>
            <X size={20} />
          </CloseButton>
        </ModalHeader>

        <Form>
          <FormGroup>
            <Label>Job Title</Label>
            <Input type="text" placeholder="e.g., Senior Frontend Developer" />
          </FormGroup>

          <FormGroup>
            <Label>Company</Label>
            <Input type="text" placeholder="Your company name" />
          </FormGroup>

          <FormGroup>
            <Label>Location</Label>
            <Input type="text" placeholder="e.g., Remote, San Francisco, CA" />
          </FormGroup>

          <FormGroup>
            <Label>Job Type</Label>
            <Select>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="contract">Contract</option>
              <option value="remote">Remote</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>Salary Range</Label>
            <div style={{ display: 'flex', gap: '12px' }}>
              <Input type="number" placeholder="Min salary" />
              <Input type="number" placeholder="Max salary" />
            </div>
          </FormGroup>

          <FormGroup>
            <Label>Required Skills</Label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
              {skills.map(skill => (
                <span
                  key={skill}
                  style={{
                    background: '#e0e7ff',
                    color: '#3730a3',
                    padding: '4px 12px',
                    borderRadius: '16px',
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  {skill}
                  <button
                    onClick={() => removeSkill(skill)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '16px',
                      lineHeight: 1
                    }}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <SkillInput>
              <Input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Add a required skill"
                onKeyPress={(e) => e.key === 'Enter' && addSkill()}
              />
              <AddSkillButton onClick={addSkill}>
                Add
              </AddSkillButton>
            </SkillInput>
          </FormGroup>

          <FormGroup>
            <Label>Job Description</Label>
            <TextArea rows={6} placeholder="Describe the job responsibilities, requirements, and what makes your company great..." />
          </FormGroup>
        </Form>

        <ModalActions>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary">
            Post Job
          </Button>
        </ModalActions>
      </ModalContent>
    </ModalOverlay>
  );
};

export default JobPostingModal;