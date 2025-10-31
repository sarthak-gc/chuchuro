import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: ${theme.colors.background};
`;

export const Sidebar = styled.div`
  width: 250px;
  background: ${theme.colors.surface};
  border-right: 1px solid ${theme.colors.border};
  padding: ${theme.spacing.lg} 0;
`;

export const SidebarItem = styled.button<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  width: 100%;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  background: ${props => props.active ? theme.colors.primary : 'transparent'};
  color: ${props => props.active ? 'white' : theme.colors.text.primary};
  border: none;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.active ? theme.colors.primary : theme.colors.background};
  }
`;

export const MainContent = styled.div`
  flex: 1;
  padding: ${theme.spacing.xl};
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${theme.spacing.xl};
  
  h1 {
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing.xs};
  }
  
  p {
    color: ${theme.colors.text.secondary};
  }
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  background: ${theme.colors.primary};
  color: white;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.lg};
  font-weight: 600;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${theme.colors.primaryLight};
    transform: translateY(-1px);
    box-shadow: ${theme.shadows.lg};
  }
`;

export const FilterSection = styled.div`
  background: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.sm};
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  background: ${theme.colors.background};
  color: ${theme.colors.text.primary};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.lg};
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${theme.colors.border};
  }
`;