import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const FeedContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${theme.spacing.lg};
  position: relative;
  min-height: 100vh;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);

  @media (max-width: 768px) {
    padding: ${theme.spacing.md};
    max-width: 100%;
  }

  @media (max-width: 480px) {
    padding: ${theme.spacing.sm};
  }
`;

export const PremiumBanner = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.lg};
  margin-bottom: ${theme.spacing.xl};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${theme.shadows.md};

  .premium-content {
    display: flex;
    align-items: center;
    gap: ${theme.spacing.sm};

    div {
      display: flex;
      flex-direction: column;

      strong {
        font-weight: 600;
      }

      span {
        font-size: 0.875rem;
        opacity: 0.9;
      }
    }
  }

  .upgrade-btn {
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    border-radius: ${theme.borderRadius.md};
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }

  @media (max-width: 768px) {
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    flex-direction: column;
    gap: ${theme.spacing.sm};
    text-align: center;
  }
`;

export const FeedHeader = styled.div`
  margin-bottom: ${theme.spacing.xl};

  .header-content {
    text-align: center;
    margin-bottom: ${theme.spacing.lg};

    h1 {
      color: ${theme.colors.text.primary};
      margin-bottom: ${theme.spacing.sm};
      font-size: 2.25rem;
      font-weight: 700;
      background: linear-gradient(135deg, #2d3748 0%, #667eea 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;

      @media (max-width: 768px) {
        font-size: 1.75rem;
      }
    }

    p {
      color: ${theme.colors.text.secondary};
      font-size: 1.1rem;

      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }
`;

export const StatsBar = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.md};
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 480px) {
    gap: ${theme.spacing.sm};
  }
`;

export const StatItem = styled.div`
  background: white;
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.lg};
  text-align: center;
  box-shadow: ${theme.shadows.sm};
  border: 1px solid ${theme.colors.border};

  strong {
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.xs};
  }

  span {
    font-size: 0.875rem;
    color: ${theme.colors.text.secondary};
    font-weight: 500;
  }
`;

export const FilterBar = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${theme.spacing.sm};
  }
`;

export const SearchContainer = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    left: ${theme.spacing.md};
    color: ${theme.colors.text.tertiary};
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: ${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.md} 3rem;
  border: 2px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.lg};
  font-size: 1rem;
  transition: all 0.2s ease;
  background: white;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px ${theme.colors.primary}20;
  }

  &::placeholder {
    color: ${theme.colors.text.tertiary};
  }
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  background: white;
  border: 2px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.lg};
  color: ${theme.colors.text.secondary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const QuickFilters = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.lg};
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: ${theme.spacing.xs};
  }
`;

export const QuickFilter = styled.button<{ active: boolean }>`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background: ${(props) => (props.active ? theme.colors.primary : "white")};
  color: ${(props) => (props.active ? "white" : theme.colors.text.secondary)};
  border: 1px solid
    ${(props) => (props.active ? theme.colors.primary : theme.colors.border)};
  border-radius: ${theme.borderRadius.full};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};

  span {
    font-size: 0.75rem;
    opacity: 0.8;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${theme.shadows.sm};
  }
`;

export const JobCount = styled.div`
  color: ${theme.colors.text.secondary};
  font-size: 0.875rem;
  margin-bottom: ${theme.spacing.md};
  text-align: center;
`;

export const FeedContent = styled.div`
  position: relative;
  min-height: 500px;
  margin-bottom: 120px;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: ${theme.spacing.xxl} ${theme.spacing.xl};
  color: ${theme.colors.text.secondary};
`;

export const EmptyStateIllustration = styled.div`
  max-width: 300px;
  margin: 0 auto;

  .illustration {
    font-size: 4rem;
    margin-bottom: ${theme.spacing.lg};
    opacity: 0.5;
  }

  h3 {
    margin-bottom: ${theme.spacing.sm};
    color: ${theme.colors.text.primary};
    font-size: 1.5rem;
  }

  p {
    margin-bottom: ${theme.spacing.lg};
    line-height: 1.6;
  }

  .reset-btn {
    background: ${theme.colors.primary};
    color: white;
    border: none;
    padding: ${theme.spacing.md} ${theme.spacing.lg};
    border-radius: ${theme.borderRadius.lg};
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      transform: translateY(-1px);
      box-shadow: ${theme.shadows.md};
    }
  }
`;

export const FloatingActions = styled.div`
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xl};
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  padding: ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows.xl};
  border: 1px solid rgba(255, 255, 255, 0.8);
  /* z-index: 1000; */

  .action-info {
    display: flex;
    justify-content: space-between;
    width: 120px;
    color: ${theme.colors.text.secondary};
    font-size: 0.875rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    bottom: 80px;
    gap: ${theme.spacing.lg};
    padding: ${theme.spacing.md};

    .action-info {
      width: 100px;
    }
  }
`;

export const FloatingButton = styled.button<{ variant: "accept" | "reject" }>`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  cursor: pointer;
  box-shadow: ${theme.shadows.lg};

  ${(props) =>
    props.variant === "accept"
      ? `
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: white;
    
    &:hover {
      transform: scale(1.15) rotate(5deg);
      box-shadow: 0 12px 30px rgba(16, 185, 129, 0.4);
    }

    &:active {
      transform: scale(1.05) rotate(0deg);
    }
  `
      : `
    background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
    color: white;
    
    &:hover {
      transform: scale(1.15) rotate(-5deg);
      box-shadow: 0 12px 30px rgba(239, 68, 68, 0.4);
    }

    &:active {
      transform: scale(1.05) rotate(0deg);
    }
  `}

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const NavigationBar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-top: 1px solid ${theme.colors.border};
  display: flex;
  justify-content: space-around;
  padding: ${theme.spacing.sm} 0;
  z-index: 1000;
`;

export const NavItem = styled.button<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  color: ${(props) =>
    props.active ? theme.colors.primary : theme.colors.text.secondary};
  padding: ${theme.spacing.sm};
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: ${theme.borderRadius.md};
  min-width: 60px;

  svg {
    stroke-width: ${(props) => (props.active ? "2.5" : "2")};
  }

  span {
    font-size: 0.75rem;
    font-weight: ${(props) => (props.active ? "600" : "500")};
  }

  &:hover {
    color: ${theme.colors.primary};
    background: rgba(102, 126, 234, 0.05);
  }
`;

export const LoadingState = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
  padding: ${theme.spacing.xl} 0;
`;

export const Shimmer = styled.div`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
  border-radius: ${theme.borderRadius.lg};
  height: 200px;

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;
