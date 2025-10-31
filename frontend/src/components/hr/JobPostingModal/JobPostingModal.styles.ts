import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${theme.spacing.lg};
`;

export const ModalContent = styled.div`
  background: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows.lg};
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacing.xl};
  border-bottom: 1px solid ${theme.colors.border};
`;

export const ModalTitle = styled.h2`
  color: ${theme.colors.text.primary};
  font-size: 1.5rem;
  font-weight: 700;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.text.secondary};
  cursor: pointer;
  padding: ${theme.spacing.xs};
  border-radius: ${theme.borderRadius.sm};

  &:hover {
    background: ${theme.colors.background};
  }
`;

export const Form = styled.div`
  padding: ${theme.spacing.xl};
`;

export const FormGroup = styled.div`
  margin-bottom: ${theme.spacing.lg};
`;

export const Label = styled.label`
  display: block;
  margin-bottom: ${theme.spacing.sm};
  font-weight: 600;
  color: ${theme.colors.text.primary};
`;

export const Input = styled.input`
  width: 100%;
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.lg};
  font-size: 1rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px ${theme.colors.primaryLight}20;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.lg};
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px ${theme.colors.primaryLight}20;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.lg};
  font-size: 1rem;
  background: white;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px ${theme.colors.primaryLight}20;
  }
`;

export const SkillInput = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
`;

export const AddSkillButton = styled.button`
  background: ${theme.colors.primary};
  color: white;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border: none;
  border-radius: ${theme.borderRadius.lg};
  font-weight: 600;
  white-space: nowrap;
  transition: background-color 0.2s ease;

  &:hover {
    background: ${theme.colors.primaryLight};
  }
`;

export const ModalActions = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  justify-content: flex-end;
  padding: ${theme.spacing.xl};
  border-top: 1px solid ${theme.colors.border};
`;

export const Button = styled.button<{ variant: "primary" | "secondary" }>`
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.lg};
  font-weight: 600;
  transition: all 0.2s ease;

  ${(props) =>
    props.variant === "secondary"
      ? `
    background: ${theme.colors.background};
    color: ${theme.colors.text.primary};
    border: 1px solid ${theme.colors.border};
    
    &:hover {
      background: ${theme.colors.border};
    }
  `
      : `
    background: ${theme.colors.primary};
    color: white;
    border: 1px solid ${theme.colors.primary};
    
    &:hover {
      background: ${theme.colors.primaryLight};
      transform: translateY(-1px);
    }
  `}
`;
