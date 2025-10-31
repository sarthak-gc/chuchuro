import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows.md};
  padding: ${theme.spacing.xl};
`;

export const FormHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
  
  h1 {
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing.md};
  }
  
  span {
    color: ${theme.colors.text.secondary};
    font-size: 0.875rem;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: ${theme.colors.border};
  border-radius: 3px;
  margin: ${theme.spacing.lg} 0;
  overflow: hidden;
`;

export const ProgressFill = styled.div<{ width: number }>`
  width: ${props => props.width}%;
  height: 100%;
  background: ${theme.colors.primary};
  border-radius: 3px;
  transition: width 0.3s ease;
`;

export const StepContainer = styled.div`
  margin-bottom: ${theme.spacing.xl};
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

export const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.md};
`;

export const SkillTag = styled.span`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  background: ${theme.colors.primaryLight};
  color: white;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.lg};
  font-size: 0.875rem;
  font-weight: 500;
`;

export const RemoveSkillButton = styled.button`
  background: none;
  color: white;
  border: none;
  font-size: 1.125rem;
  line-height: 1;
  cursor: pointer;
  padding: 0;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    opacity: 0.8;
  }
`;

export const AddSkillInput = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
`;

export const FileUploadArea = styled.div`
  border: 2px dashed ${theme.colors.border};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  text-align: center;
  transition: border-color 0.2s ease, background-color 0.2s ease;
  cursor: pointer;
  
  &:hover {
    border-color: ${theme.colors.primary};
    background: ${theme.colors.background};
  }
  
  p {
    margin: ${theme.spacing.md} 0 ${theme.spacing.sm};
    color: ${theme.colors.text.primary};
    font-weight: 500;
  }
  
  span {
    color: ${theme.colors.text.secondary};
    font-size: 0.875rem;
  }
`;

export const UploadIcon = styled.div`
  color: ${theme.colors.text.light};
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${theme.spacing.md};
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.lg};
  font-weight: 600;
  transition: all 0.2s ease;
  
  ${props => props.variant === 'secondary' ? `
    background: ${theme.colors.background};
    color: ${theme.colors.text.primary};
    border: 1px solid ${theme.colors.border};
    
    &:hover:not(:disabled) {
      background: ${theme.colors.border};
    }
  ` : `
    background: ${theme.colors.primary};
    color: white;
    border: 1px solid ${theme.colors.primary};
    
    &:hover:not(:disabled) {
      background: ${theme.colors.primaryLight};
      transform: translateY(-1px);
      box-shadow: ${theme.shadows.lg};
    }
  `}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
  }
`;