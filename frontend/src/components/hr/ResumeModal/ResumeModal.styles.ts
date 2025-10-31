import styled from 'styled-components';
import { theme } from '../../../styles/theme';

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
  max-width: 800px;
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

export const ResumeContent = styled.div`
  padding: ${theme.spacing.xl};
`;

export const ResumeSection = styled.div`
  margin-bottom: ${theme.spacing.xl};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h3`
  color: ${theme.colors.text.primary};
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: ${theme.spacing.md};
  padding-bottom: ${theme.spacing.sm};
  border-bottom: 2px solid ${theme.colors.primaryLight};
`;

export const PersonalInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.lg};
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  color: ${theme.colors.text.secondary};
`;

export const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
`;

export const SkillItem = styled.span`
  background: ${theme.colors.background};
  color: ${theme.colors.text.primary};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.lg};
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid ${theme.colors.border};
`;

export const ExperienceItem = styled.div`
  margin-bottom: ${theme.spacing.lg};
  
  h4 {
    color: ${theme.colors.text.primary};
    font-weight: 600;
    margin-bottom: ${theme.spacing.xs};
  }
  
  p {
    color: ${theme.colors.text.secondary};
    margin-bottom: ${theme.spacing.sm};
  }
  
  ul {
    color: ${theme.colors.text.primary};
    padding-left: ${theme.spacing.lg};
    
    li {
      margin-bottom: ${theme.spacing.xs};
    }
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  justify-content: flex-end;
  padding: ${theme.spacing.xl};
  border-top: 1px solid ${theme.colors.border};
`;

export const Button = styled.button<{ variant: 'primary' | 'secondary' }>`
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
    
    &:hover {
      background: ${theme.colors.border};
    }
  ` : `
    background: ${theme.colors.primary};
    color: white;
    border: 1px solid ${theme.colors.primary};
    
    &:hover {
      background: ${theme.colors.primaryLight};
      transform: translateY(-1px);
    }
  `}
`;