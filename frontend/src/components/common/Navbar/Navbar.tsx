import React, { useState } from "react";
import {
  Briefcase,
  Home,
  FileText,
  User,
  Settings,
  LogOut,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import {
  NavbarContainer,
  NavbarContent,
  Logo,
  NavLinks,
  NavLink,
  ProfileSection,
  Avatar,
  DropdownMenu,
  DropdownItem,
  MobileMenuButton,
  MobileMenu,
  MobileNavLink,
  Overlay,
} from "./Navbar.styles";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavLinkClick = () => {
    closeMobileMenu();
  };
  const navigate = useNavigate();
  return (
    <>
      <NavbarContainer>
        <NavbarContent>
          <Logo>
            <Briefcase size={24} />
            <span>JobMatch</span>
          </Logo>

          {/* Desktop Navigation */}
          <NavLinks>
            <NavLink href="/jobs" onClick={handleNavLinkClick}>
              <Home size={18} />
              Home
            </NavLink>
            <NavLink href="/jobs" onClick={handleNavLinkClick}>
              <FileText size={18} />
              Jobs
            </NavLink>
            <NavLink href="/applications" onClick={handleNavLinkClick}>
              <FileText size={18} />
              Applications
            </NavLink>
            <NavLink href="/profile" onClick={handleNavLinkClick}>
              <User size={18} />
              Profile
            </NavLink>
          </NavLinks>

          {/* Desktop Profile Section */}
          <ProfileSection>
            <Avatar onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <User size={20} />
              <ChevronDown size={16} />
            </Avatar>

            {isDropdownOpen && (
              <DropdownMenu>
                <DropdownItem>
                  <Settings size={16} />
                  Settings
                </DropdownItem>
                <DropdownItem>
                  <LogOut size={16} />
                  Logout
                </DropdownItem>
              </DropdownMenu>
            )}
          </ProfileSection>

          {/* Mobile Menu Button */}
          <MobileMenuButton onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>
        </NavbarContent>
      </NavbarContainer>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && <Overlay onClick={closeMobileMenu} />}

      {/* Mobile Menu */}
      <MobileMenu $isOpen={isMobileMenuOpen}>
        <MobileNavLink href="/jobs" onClick={handleNavLinkClick}>
          <Home size={20} />
          <span>Home</span>
        </MobileNavLink>
        <MobileNavLink href="/jobs" onClick={handleNavLinkClick}>
          <FileText size={20} />
          <span>Jobs</span>
        </MobileNavLink>
        <MobileNavLink href="/applications" onClick={handleNavLinkClick}>
          <FileText size={20} />
          <span>Applications</span>
        </MobileNavLink>
        <MobileNavLink href="/profile" onClick={handleNavLinkClick}>
          <User size={20} />
          <span>Profile</span>
        </MobileNavLink>

        {/* Mobile Profile Options */}
        <div className="mobile-profile-section">
          <MobileNavLink href="/settings" onClick={handleNavLinkClick}>
            <Settings size={20} />
            <span>Settings</span>
          </MobileNavLink>
          <MobileNavLink
            onClick={(e) => {
              e.preventDefault();
              console.log("hello");
              localStorage.removeItem("user");
              navigate("/sign-up/user");
            }}
          >
            <LogOut size={20} />
            <span>Logout</span>
          </MobileNavLink>
        </div>
      </MobileMenu>
    </>
  );
};

export default Navbar;
