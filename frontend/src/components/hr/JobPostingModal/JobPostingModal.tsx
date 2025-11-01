import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
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
  ModalActions,
  Button,
} from "./JobPostingModal.styles";

interface JobPostingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const JobPostingModal: React.FC<JobPostingModalProps> = ({
  isOpen,
  onClose,
}) => {
  const hr = JSON.parse(localStorage.getItem("hr"));
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    salary: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchJobs = async () => {
      await fetch("http://localhost:3000/jobs").then((res) => {
        console.log(res);
      });
    };
    fetchJobs();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/job`, {
        method: "POST",
        headers: {
          Authorization: hr.token, // Fixed typo
          "Content-Type": "application/json", // Added content type
        },
        body: JSON.stringify(formData), // Fixed typo and added JSON stringify
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Job posted successfully:", result);

      onClose();
    } catch (error) {
      console.error("Error posting job:", error);
      // Handle error (show error message to user)
    }
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

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Job Title</Label>
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="e.g., Senior Frontend Developer"
            />
          </FormGroup>

          <FormGroup>
            <Label>Description</Label>
            <TextArea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={6}
              placeholder="Describe the job responsibilities, requirements, and what makes your company great..."
            />
          </FormGroup>

          <FormGroup>
            <Label>Salary</Label>
            <Input
              type="text"
              name="salary"
              value={formData.salary}
              onChange={handleInputChange}
              placeholder="e.g., $80,000 - $120,000 per year"
            />
          </FormGroup>

          <ModalActions>
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Post Job
            </Button>
          </ModalActions>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default JobPostingModal;
