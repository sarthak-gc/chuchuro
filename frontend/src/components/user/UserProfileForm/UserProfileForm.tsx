import React, { useState } from "react";
import { Upload, ArrowRight, ArrowLeft } from "lucide-react";
import {
  FormContainer,
  FormHeader,
  ProgressBar,
  ProgressFill,
  StepContainer,
  FormGroup,
  Label,
  Input,
  TextArea,
  Select,
  SkillTags,
  SkillTag,
  RemoveSkillButton,
  AddSkillInput,
  FileUploadArea,
  UploadIcon,
  ButtonGroup,
  Button,
} from "./UserProfileForm.styles";

const UserProfileForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState("");

  const totalSteps = 3;

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <FormContainer>
      <FormHeader>
        <h1>Complete Your Profile</h1>
        <ProgressBar>
          <ProgressFill width={(currentStep / totalSteps) * 100} />
        </ProgressBar>
        <span>
          Step {currentStep} of {totalSteps}
        </span>
      </FormHeader>

      <StepContainer>
        {currentStep === 1 && (
          <>
            <FormGroup>
              <Label>Skills</Label>
              <SkillTags>
                {skills.map((skill) => (
                  <SkillTag key={skill}>
                    {skill}
                    <RemoveSkillButton onClick={() => removeSkill(skill)}>
                      ×
                    </RemoveSkillButton>
                  </SkillTag>
                ))}
              </SkillTags>
              <AddSkillInput>
                <Input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="Add a skill..."
                  onKeyPress={(e) => e.key === "Enter" && addSkill()}
                />
                <Button onClick={addSkill} variant="secondary">
                  Add
                </Button>
              </AddSkillInput>
            </FormGroup>

            <FormGroup>
              <Label>Experience (Years)</Label>
              <Input type="number" min="0" max="50" placeholder="2" />
            </FormGroup>
          </>
        )}

        {currentStep === 2 && (
          <>
            <FormGroup>
              <Label>Preferred Job Type</Label>
              <Select>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
                <option value="remote">Remote</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Preferred Location</Label>
              <Input type="text" placeholder="City, Country" />
            </FormGroup>

            <FormGroup>
              <Label>Minimum Expected Salary ($)</Label>
              <Input type="number" placeholder="50000" />
            </FormGroup>
          </>
        )}

        {currentStep === 3 && (
          <>
            <FormGroup>
              <Label>Upload Resume (Optional)</Label>
              <FileUploadArea>
                <UploadIcon>
                  <Upload size={32} />
                </UploadIcon>
                <p>Drag & drop your resume here or click to browse</p>
                <span>PDF, DOC, DOCX up to 5MB</span>
                <Input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  style={{ display: "none" }}
                />
              </FileUploadArea>
            </FormGroup>

            <FormGroup>
              <Label>Additional Information</Label>
              <TextArea
                rows={4}
                placeholder="Tell us about your career goals, preferences, or any other relevant information..."
              />
            </FormGroup>
          </>
        )}
      </StepContainer>

      <ButtonGroup>
        <Button
          onClick={prevStep}
          variant="secondary"
          disabled={currentStep === 1}
        >
          <ArrowLeft size={18} />
          Back
        </Button>

        {currentStep === totalSteps ? (
          <Button onClick={() => console.log("Generate Resume")}>
            Generate Basic Resume
          </Button>
        ) : (
          <Button onClick={nextStep}>
            Next
            <ArrowRight size={18} />
          </Button>
        )}
      </ButtonGroup>
    </FormContainer>
  );
};

export default UserProfileForm;
