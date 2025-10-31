import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const NavbarContainer = styled.nav`
  background: ${theme.colors.surface};
  box-shadow: ${theme.shadows.sm};
  padding: 0 ${theme.spacing.lg};
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0 ${theme.spacing.md};
  }
`;

export const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  height: 64px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-size: 1.25rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  z-index: 1001;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xl};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  text-decoration: none;
  color: ${theme.colors.text.secondary};
  font-weight: 500;
  transition: color 0.2s ease;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};

  &:hover {
    color: ${theme.colors.primary};
    background: ${theme.colors.background};
  }

  &.active {
    color: ${theme.colors.primary};
    background: ${theme.colors.background};
  }
`;

export const ProfileSection = styled.div`
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Avatar = styled.button`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  background: ${theme.colors.background};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: ${theme.colors.primaryLight};
    color: white;
    border-color: ${theme.colors.primaryLight};
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: ${theme.spacing.sm};
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  box-shadow: ${theme.shadows.lg};
  min-width: 160px;
  z-index: 1000;
  animation: slideDown 0.2s ease-out;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const DropdownItem = styled.button`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  width: 100%;
  padding: ${theme.spacing.md};
  background: none;
  border: none;
  text-align: left;
  transition: background-color 0.2s ease;
  cursor: pointer;
  color: ${theme.colors.text.primary};
  z-index: 999999999999999;
  &:hover {
    background: ${theme.colors.background};
  }

  &:first-child {
    border-radius: ${theme.borderRadius.md} ${theme.borderRadius.md} 0 0;
  }

  &:last-child {
    border-radius: 0 0 ${theme.borderRadius.md} ${theme.borderRadius.md};
  }
`;

// Mobile Styles
export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${theme.colors.text.secondary};
  cursor: pointer;
  padding: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.md};
  transition: all 0.2s ease;
  z-index: 1001;

  &:hover {
    background: ${theme.colors.background};
    color: ${theme.colors.primary};
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 64px;
  right: 0;
  width: 280px;
  height: calc(100vh - 64px);
  background: ${theme.colors.surface};
  border-left: 1px solid ${theme.colors.border};
  box-shadow: ${theme.shadows.lg};
  transform: translateX(${(props) => (props.isOpen ? "0" : "100%")});
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.lg};
  overflow-y: auto;

  @media (min-width: 769px) {
    display: none;
  }

  .mobile-profile-section {
    margin-top: auto;
    padding-top: ${theme.spacing.xl};
    border-top: 1px solid ${theme.colors.border};
  }
`;

export const MobileNavLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  text-decoration: none;
  color: ${theme.colors.text.primary};
  font-weight: 500;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.md};
  transition: all 0.2s ease;
  margin-bottom: ${theme.spacing.xs};

  &:hover {
    background: ${theme.colors.background};
    color: ${theme.colors.primary};
  }

  &.active {
    background: ${theme.colors.primary};
    color: white;
  }

  span {
    font-size: 1rem;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  backdrop-filter: blur(4px);

  @media (min-width: 769px) {
    display: none;
  }
`;
