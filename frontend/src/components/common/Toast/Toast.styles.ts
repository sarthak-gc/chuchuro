import styled from 'styled-components';
import { theme } from '../../../styles/theme';

interface ToastContainerProps {
  type: 'success' | 'error' | 'warning' | 'info';
}

const getBackgroundColor = (type: string) => {
  switch (type) {
    case 'success':
      return theme.colors.success;
    case 'error':
      return theme.colors.error;
    case 'warning':
      return theme.colors.warning;
    case 'info':
      return theme.colors.primary;
    default:
      return theme.colors.primary;
  }
};

export const ToastContainer = styled.div<ToastContainerProps>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  background: ${props => getBackgroundColor(props.type)};
  color: white;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.lg};
  margin-bottom: ${theme.spacing.md};
  min-width: 300px;
  max-width: 400px;
`;

export const ToastMessage = styled.span`
  flex: 1;
  font-weight: 500;
`;

export const CloseButton = styled.button`
  background: none;
  color: white;
  opacity: 0.8;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 1;
  }
`;