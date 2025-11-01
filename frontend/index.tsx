import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const bounceIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.3) translateX(50px);
  }
  50% {
    opacity: 1;
    transform: scale(1.05) translateX(-10px);
  }
  70% {
    transform: scale(0.9) translateX(5px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateX(0);
  }
`;

// Styled Components
const Container = styled.div`
  display: flex;
  min-height: ${(props) => (props.isExpanded ? "700px" : "400px")};
  height: ${(props) => (props.isExpanded ? "auto" : "400px")};
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;

const LeftPanel = styled.div`
  flex: ${(props) => (props.isExpanded ? "0.4" : "1")};
  padding: 30px;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  flex-direction: column;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: auto;
  max-height: ${(props) => (props.isExpanded ? "100vh" : "none")};
`;

const RightPanel = styled.div`
  flex: ${(props) => (props.isExpanded ? "0.6" : "1")};
  padding: ${(props) => (props.showResume ? "20px" : "40px")};
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: ${(props) => (props.showResume ? "flex-start" : "center")};
  justify-content: center;
  min-height: ${(props) => (props.isExpanded ? "660px" : "300px")};
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: auto;
`;

const Title = styled.h1`
  color: #2d3748;
  font-size: 2rem;
  margin-bottom: 10px;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  color: #718096;
  font-size: 0.9rem;
  margin-bottom: 25px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  font-size: 0.9rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease;
  background: white;
  margin-bottom: 20px;

  &:focus {
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
  background: ${(props) =>
    props.variant === "secondary"
      ? "linear-gradient(135deg, #718096, #4a5568)"
      : "linear-gradient(135deg, #667eea, #764ba2)"};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-right: 8px;
  margin-bottom: 8px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${bounceIn} 0.8s ease-out;
  width: 100%;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid white;
  border-radius: 50%;
  animation: ${pulse} 1.5s ease-in-out infinite;
  margin-bottom: 15px;
`;

const LoadingText = styled.p`
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
  margin: 0;
`;

const LoadingDots = styled.span`
  &::after {
    content: "";
    animation: dots 1.5s steps(5, end) infinite;
  }

  @keyframes dots {
    0%,
    20% {
      content: ".";
    }
    40% {
      content: "..";
    }
    60%,
    100% {
      content: "...";
    }
  }
`;

const GitHubIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: white;
  text-align: center;
`;

// Control Panel Components
const ControlPanel = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: ${slideIn} 0.5s ease-out;
`;

const ControlTitle = styled.h3`
  color: #2d3748;
  font-size: 1.1rem;
  margin-bottom: 15px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TemplateGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 15px;
`;

const TemplateCard = styled.div`
  border: 2px solid ${(props) => (props.active ? "#667eea" : "#e2e8f0")};
  border-radius: 8px;
  padding: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${(props) => (props.active ? "#f7fafc" : "white")};

  &:hover {
    border-color: #667eea;
    transform: translateY(-2px);
  }
`;

const TemplateName = styled.div`
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 5px;
`;

const TemplateDesc = styled.div`
  font-size: 0.8rem;
  color: #718096;
`;

const SectionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SectionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: #f8fafc;
  border-radius: 8px;
  border-left: 4px solid ${(props) => (props.active ? "#667eea" : "#e2e8f0")};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #f1f5f9;
    transform: translateX(4px);
  }
`;

const SectionName = styled.span`
  font-weight: 500;
  color: #2d3748;
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #667eea;
  }

  &:checked + span:before {
    transform: translateX(20px);
  }
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #cbd5e0;
  transition: 0.4s;
  border-radius: 24px;

  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

// Resume Container
const ResumeContainer = styled.div`
  width: 100%;
  max-width: 800px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.6s ease-out;
  position: relative;
  overflow: hidden;
`;

const ResumeActions = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 10px;
  z-index: 10;
`;

const ActionButton = styled.button`
  padding: 8px 16px;
  background: ${(props) =>
    props.primary ? "#667eea" : "rgba(255, 255, 255, 0.95)"};
  color: ${(props) => (props.primary ? "white" : "#2d3748")};
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background: ${(props) => (props.primary ? "#5a6fd8" : "#f7fafc")};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

// Field Editor Components
const FieldEditor = styled.div`
  margin-bottom: 20px;
`;

const FieldLabel = styled.label`
  display: block;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 8px;
  font-size: 0.9rem;
`;

const FieldInput = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 2px solid #e2e8f0;
  border-radius: 6px;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:focus {
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    outline: none;
  }
`;

const FieldTextarea = styled.textarea`
  width: 100%;
  padding: 10px 12px;
  border: 2px solid #e2e8f0;
  border-radius: 6px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 80px;
  font-family: inherit;

  &:focus {
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    outline: none;
  }
`;

const AddButton = styled.button`
  background: #48bb78;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.8rem;
  margin-top: 10px;
  transition: all 0.3s ease;

  &:hover {
    background: #38a169;
    transform: translateY(-1px);
  }
`;

const RemoveButton = styled.button`
  background: #e53e3e;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.7rem;
  margin-left: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: #c53030;
  }
`;

// Resume Template Components

// Modern Template
const ModernResume = styled.div`
  padding: 40px;
  font-family: "Segoe UI", sans-serif;
  min-height: 600px;
`;

const ModernHeader = styled.div`
  background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
  color: white;
  padding: 40px;
  border-radius: 12px 12px 0 0;
  margin: -40px -40px 40px -40px;
`;

const ModernName = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 5px;
`;

const ModernTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.9;
  margin-bottom: 20px;
`;

const ModernContact = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 10px;
  font-size: 0.9rem;
`;

const ModernSocial = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
`;

// Professional Template
const ProfessionalResume = styled.div`
  padding: 40px;
  font-family: "Georgia", serif;
  min-height: 600px;
`;

const ProfessionalHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 2px solid #2d3748;
`;

const ProfessionalName = styled.h1`
  font-size: 2.8rem;
  font-weight: 300;
  margin-bottom: 10px;
  color: #2d3748;
`;

const ProfessionalTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 400;
  color: #667eea;
  margin-bottom: 20px;
`;

// Creative Template
const CreativeResume = styled.div`
  padding: 40px;
  font-family: "Arial", sans-serif;
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
  min-height: 600px;
`;

const CreativeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 3px solid #667eea;
`;

const CreativeName = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0;
`;

const CreativeTitle = styled.h2`
  font-size: 1.1rem;
  color: #718096;
  margin: 5px 0 0 0;
  font-weight: 400;
`;

// Common Resume Components
const Section = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  color: #2d3748;
  margin-bottom: 15px;
  padding-bottom: 8px;
  border-bottom: 2px solid #667eea;
  font-weight: 600;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const SkillCategory = styled.div`
  margin-bottom: 15px;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SkillTag = styled.span`
  background: #f7fafc;
  color: #4a5568;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  border: 1px solid #e2e8f0;
`;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ExperienceItem = styled.div`
  border-left: 3px solid #667eea;
  padding-left: 20px;
`;

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const UserInfo = styled.div`
  text-align: center;
  color: white;
`;
// Add this styled component after the existing Button component
const NextButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const FindUser = () => {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showRightPanel, setShowRightPanel] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTemplate, setActiveTemplate] = useState("modern");

  // Resume data state with all customizable fields
  const [resumeData, setResumeData] = useState({
    personal_info: {
      name: "Sarthak GC",
      title: "Full Stack Developer",
      email: "sarthakgc.np@gmail.com",
      phone: "+977 9841234567",
      location: "Kathmandu, Nepal",
      website: "https://sarthakgc.com.np",
      linkedin: "https://linkedin.com/in/sarthak-gc",
      github: "https://github.com/sarthak-gc",
    },
    sections: {
      summary: true,
      experience: true,
      education: true,
      skills: true,
      projects: true,
      certifications: false,
    },
    content: {
      summary:
        "Experienced full-stack developer with expertise in modern web technologies including React, Node.js, and PostgreSQL. Passionate about creating efficient and scalable solutions.",
      experience: [
        {
          title: "Full Stack Developer",
          company: "Tech Solutions Inc.",
          duration: "2022-Present",
          description:
            "Developed and maintained web applications using React, Node.js, and PostgreSQL. Implemented CI/CD pipelines and improved application performance by 40%.",
        },
        {
          title: "Frontend Developer",
          company: "Digital Innovations",
          duration: "2020-2022",
          description:
            "Built responsive user interfaces with React and TypeScript. Collaborated with design team to implement pixel-perfect designs.",
        },
      ],
      education: [
        {
          institution: "Patan Multiple Campus",
          degree: "Bachelor of Computer Application",
          duration: "2023-Present",
          details: "Focus on Software Engineering and Web Technologies",
        },
      ],
      skills: {
        "Frontend Technologies": [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Next.js",
        ],
        "Backend Technologies": ["Node.js", "Express", "PostgreSQL", "MongoDB"],
        "Tools & Platforms": ["Git", "Docker", "AWS", "Jenkins"],
      },
      projects: [
        {
          name: "Real-time Chat Application",
          description:
            "A scalable chat application built with Socket.io and React",
          technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
          link: "https://github.com/sarthak-gc/chat-app",
        },
      ],
      certifications: [
        {
          name: "AWS Certified Developer",
          issuer: "Amazon Web Services",
          date: "2023",
        },
      ],
    },
    styling: {
      primaryColor: "#667eea",
      secondaryColor: "#2d3748",
      fontFamily: "Segoe UI, sans-serif",
      layout: "modern",
    },
  });

  const handleNext = () => {
    if (username.trim()) {
      setIsLoading(true);
      setShowRightPanel(true);
      setIsExpanded(true);

      setTimeout(() => {
        setIsLoading(false);
        setShowResume(true);
      }, 2000);
    }
  };

  const handleReset = () => {
    setIsExpanded(false);
    setShowRightPanel(false);
    setShowResume(false);
    setIsEditing(false);
    setUsername("");
  };

  const handleSave = () => {
    console.log("Final Resume Data:", JSON.stringify(resumeData, null, 2));
    setIsEditing(false);
    alert("Resume saved! Check console for data.");
  };

  const toggleSection = (section) => {
    setResumeData((prev) => ({
      ...prev,
      sections: {
        ...prev.sections,
        [section]: !prev.sections[section],
      },
    }));
  };

  const updateField = (path, value) => {
    const paths = path.split(".");
    setResumeData((prev) => {
      const updated = JSON.parse(JSON.stringify(prev));
      let current = updated;

      for (let i = 0; i < paths.length - 1; i++) {
        current = current[paths[i]];
      }
      current[paths[paths.length - 1]] = value;

      return updated;
    });
  };

  const addArrayItem = (path, template) => {
    const paths = path.split(".");
    setResumeData((prev) => {
      const updated = JSON.parse(JSON.stringify(prev));
      let current = updated;

      for (let i = 0; i < paths.length - 1; i++) {
        current = current[paths[i]];
      }
      current[paths[paths.length - 1]].push(template);

      return updated;
    });
  };

  const removeArrayItem = (path, index) => {
    const paths = path.split(".");
    setResumeData((prev) => {
      const updated = JSON.parse(JSON.stringify(prev));
      let current = updated;

      for (let i = 0; i < paths.length - 1; i++) {
        current = current[paths[i]];
      }
      current[paths[paths.length - 1]] = current[
        paths[paths.length - 1]
      ].filter((_, i) => i !== index);

      return updated;
    });
  };

  const addSkill = (category) => {
    setResumeData((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        skills: {
          ...prev.content.skills,
          [category]: [...(prev.content.skills[category] || []), "New Skill"],
        },
      },
    }));
  };

  const removeSkill = (category, index) => {
    setResumeData((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        skills: {
          ...prev.content.skills,
          [category]: prev.content.skills[category].filter(
            (_, i) => i !== index
          ),
        },
      },
    }));
  };

  const updateSkill = (category, index, value) => {
    setResumeData((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        skills: {
          ...prev.content.skills,
          [category]: prev.content.skills[category].map((skill, i) =>
            i === index ? value : skill
          ),
        },
      },
    }));
  };

  const { personal_info, sections, content, styling } = resumeData;

  // Render editing controls for the left panel
  const renderEditorControls = () => {
    return (
      <>
        <ControlPanel>
          <ControlTitle>🎨 Resume Templates</ControlTitle>
          <TemplateGrid>
            <TemplateCard
              active={activeTemplate === "modern"}
              onClick={() => setActiveTemplate("modern")}
            >
              <TemplateName>Modern</TemplateName>
              <TemplateDesc>Clean and professional</TemplateDesc>
            </TemplateCard>
            <TemplateCard
              active={activeTemplate === "professional"}
              onClick={() => setActiveTemplate("professional")}
            >
              <TemplateName>Professional</TemplateName>
              <TemplateDesc>Traditional layout</TemplateDesc>
            </TemplateCard>
            <TemplateCard
              active={activeTemplate === "creative"}
              onClick={() => setActiveTemplate("creative")}
            >
              <TemplateName>Creative</TemplateName>
              <TemplateDesc>Modern with colors</TemplateDesc>
            </TemplateCard>
          </TemplateGrid>
        </ControlPanel>

        <ControlPanel>
          <ControlTitle>📝 Personal Information</ControlTitle>
          {Object.entries(personal_info).map(([key, value]) => (
            <FieldEditor key={key}>
              <FieldLabel>
                {key.charAt(0).toUpperCase() + key.slice(1).replace("_", " ")}
              </FieldLabel>
              <FieldInput
                type="text"
                value={value}
                onChange={(e) =>
                  updateField(`personal_info.${key}`, e.target.value)
                }
                placeholder={`Enter ${key.replace("_", " ")}`}
              />
            </FieldEditor>
          ))}
        </ControlPanel>

        <ControlPanel>
          <ControlTitle>📑 Resume Sections</ControlTitle>
          <SectionList>
            {Object.entries(sections).map(([section, enabled]) => (
              <SectionItem key={section} active={enabled}>
                <SectionName>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </SectionName>
                <ToggleSwitch>
                  <ToggleInput
                    type="checkbox"
                    checked={enabled}
                    onChange={() => toggleSection(section)}
                  />
                  <ToggleSlider />
                </ToggleSwitch>
              </SectionItem>
            ))}
          </SectionList>
        </ControlPanel>

        {sections.summary && (
          <ControlPanel>
            <ControlTitle>💼 Professional Summary</ControlTitle>
            <FieldTextarea
              value={content.summary}
              onChange={(e) => updateField("content.summary", e.target.value)}
              placeholder="Write your professional summary..."
            />
          </ControlPanel>
        )}

        {sections.experience && (
          <ControlPanel>
            <ControlTitle>💼 Work Experience</ControlTitle>
            {content.experience.map((exp, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "20px",
                  padding: "15px",
                  background: "#f8fafc",
                  borderRadius: "8px",
                }}
              >
                <FieldEditor>
                  <FieldLabel>Job Title</FieldLabel>
                  <FieldInput
                    value={exp.title}
                    onChange={(e) =>
                      updateField(
                        `content.experience.${index}.title`,
                        e.target.value
                      )
                    }
                  />
                </FieldEditor>
                <FieldEditor>
                  <FieldLabel>Company</FieldLabel>
                  <FieldInput
                    value={exp.company}
                    onChange={(e) =>
                      updateField(
                        `content.experience.${index}.company`,
                        e.target.value
                      )
                    }
                  />
                </FieldEditor>
                <FieldEditor>
                  <FieldLabel>Duration</FieldLabel>
                  <FieldInput
                    value={exp.duration}
                    onChange={(e) =>
                      updateField(
                        `content.experience.${index}.duration`,
                        e.target.value
                      )
                    }
                  />
                </FieldEditor>
                <FieldEditor>
                  <FieldLabel>Description</FieldLabel>
                  <FieldTextarea
                    value={exp.description}
                    onChange={(e) =>
                      updateField(
                        `content.experience.${index}.description`,
                        e.target.value
                      )
                    }
                  />
                </FieldEditor>
                <RemoveButton
                  onClick={() => removeArrayItem("content.experience", index)}
                >
                  Remove Experience
                </RemoveButton>
              </div>
            ))}
            <AddButton
              onClick={() =>
                addArrayItem("content.experience", {
                  title: "New Position",
                  company: "Company Name",
                  duration: "2023-Present",
                  description: "Job description here...",
                })
              }
            >
              + Add Experience
            </AddButton>
          </ControlPanel>
        )}

        {sections.skills && (
          <ControlPanel>
            <ControlTitle>🛠️ Skills</ControlTitle>
            {Object.entries(content.skills).map(([category, skills]) => (
              <div key={category} style={{ marginBottom: "20px" }}>
                <FieldEditor>
                  <FieldLabel>Category</FieldLabel>
                  <FieldInput
                    value={category}
                    onChange={(e) => {
                      const newSkills = { ...content.skills };
                      delete newSkills[category];
                      newSkills[e.target.value] = skills;
                      updateField("content.skills", newSkills);
                    }}
                  />
                </FieldEditor>
                <FieldLabel>Skills</FieldLabel>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        gap: "8px",
                        alignItems: "center",
                      }}
                    >
                      <FieldInput
                        value={skill}
                        onChange={(e) =>
                          updateSkill(category, index, e.target.value)
                        }
                      />
                      <RemoveButton
                        onClick={() => removeSkill(category, index)}
                      >
                        Remove
                      </RemoveButton>
                    </div>
                  ))}
                </div>
                <AddButton onClick={() => addSkill(category)}>
                  + Add Skill to {category}
                </AddButton>
              </div>
            ))}
            <AddButton
              onClick={() => {
                const newCategory = "New Category";
                updateField("content.skills", {
                  ...content.skills,
                  [newCategory]: ["New Skill"],
                });
              }}
            >
              + Add New Category
            </AddButton>
          </ControlPanel>
        )}

        {sections.education && (
          <ControlPanel>
            <ControlTitle>🎓 Education</ControlTitle>
            {content.education.map((edu, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "20px",
                  padding: "15px",
                  background: "#f8fafc",
                  borderRadius: "8px",
                }}
              >
                <FieldEditor>
                  <FieldLabel>Institution</FieldLabel>
                  <FieldInput
                    value={edu.institution}
                    onChange={(e) =>
                      updateField(
                        `content.education.${index}.institution`,
                        e.target.value
                      )
                    }
                  />
                </FieldEditor>
                <FieldEditor>
                  <FieldLabel>Degree</FieldLabel>
                  <FieldInput
                    value={edu.degree}
                    onChange={(e) =>
                      updateField(
                        `content.education.${index}.degree`,
                        e.target.value
                      )
                    }
                  />
                </FieldEditor>
                <FieldEditor>
                  <FieldLabel>Duration</FieldLabel>
                  <FieldInput
                    value={edu.duration}
                    onChange={(e) =>
                      updateField(
                        `content.education.${index}.duration`,
                        e.target.value
                      )
                    }
                  />
                </FieldEditor>
                <FieldEditor>
                  <FieldLabel>Details</FieldLabel>
                  <FieldInput
                    value={edu.details || ""}
                    onChange={(e) =>
                      updateField(
                        `content.education.${index}.details`,
                        e.target.value
                      )
                    }
                  />
                </FieldEditor>
                <RemoveButton
                  onClick={() => removeArrayItem("content.education", index)}
                >
                  Remove Education
                </RemoveButton>
              </div>
            ))}
            <AddButton
              onClick={() =>
                addArrayItem("content.education", {
                  institution: "University Name",
                  degree: "Degree Name",
                  duration: "2020-2024",
                  details: "Additional details",
                })
              }
            >
              + Add Education
            </AddButton>
          </ControlPanel>
        )}
      </>
    );
  };

  // Common resume content component
  const ResumeContent = () => (
    <>
      {sections.summary && (
        <Section>
          <SectionTitle>Professional Summary</SectionTitle>
          <p>{content.summary}</p>
        </Section>
      )}

      {sections.experience && content.experience.length > 0 && (
        <Section>
          <SectionTitle>Work Experience</SectionTitle>
          <ExperienceList>
            {content.experience.map((exp, index) => (
              <ExperienceItem key={index}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                    marginBottom: "8px",
                  }}
                >
                  <div>
                    <h4 style={{ margin: "0 0 5px 0", color: "#2d3748" }}>
                      {exp.title}
                    </h4>
                    <p
                      style={{
                        margin: "0 0 5px 0",
                        color: "#667eea",
                        fontWeight: "500",
                      }}
                    >
                      {exp.company}
                    </p>
                  </div>
                  <span style={{ color: "#718096", fontSize: "0.9rem" }}>
                    {exp.duration}
                  </span>
                </div>
                <p style={{ color: "#4a5568", lineHeight: "1.6", margin: 0 }}>
                  {exp.description}
                </p>
              </ExperienceItem>
            ))}
          </ExperienceList>
        </Section>
      )}

      {sections.skills && (
        <Section>
          <SectionTitle>Skills</SectionTitle>
          <SkillsGrid>
            {Object.entries(content.skills).map(([category, skillList]) => (
              <SkillCategory key={category}>
                <h4 style={{ margin: "0 0 10px 0", color: "#2d3748" }}>
                  {category}
                </h4>
                <SkillList>
                  {skillList.map((skill, index) => (
                    <SkillTag key={index}>{skill}</SkillTag>
                  ))}
                </SkillList>
              </SkillCategory>
            ))}
          </SkillsGrid>
        </Section>
      )}

      {sections.education && content.education.length > 0 && (
        <Section>
          <SectionTitle>Education</SectionTitle>
          <EducationList>
            {content.education.map((edu, index) => (
              <div key={index} style={{ marginBottom: "15px" }}>
                <h4 style={{ margin: "0 0 5px 0", color: "#2d3748" }}>
                  {edu.institution}
                </h4>
                <p
                  style={{
                    margin: "0 0 5px 0",
                    color: "#4a5568",
                    fontWeight: "500",
                  }}
                >
                  {edu.degree}
                </p>
                <p
                  style={{
                    margin: "0 0 5px 0",
                    color: "#718096",
                    fontSize: "0.9rem",
                  }}
                >
                  {edu.duration}
                </p>
                {edu.details && (
                  <p
                    style={{
                      margin: "0",
                      color: "#4a5568",
                      fontSize: "0.9rem",
                    }}
                  >
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </EducationList>
        </Section>
      )}
    </>
  );

  // Render the selected resume template
  const renderResume = () => {
    switch (activeTemplate) {
      case "professional":
        return (
          <ProfessionalResume>
            <ProfessionalHeader>
              <ProfessionalName>{personal_info.name}</ProfessionalName>
              <ProfessionalTitle>{personal_info.title}</ProfessionalTitle>
              <ModernContact style={{ justifyContent: "center", gap: "30px" }}>
                <div>{personal_info.email}</div>
                <div>{personal_info.phone}</div>
                <div>{personal_info.location}</div>
              </ModernContact>
            </ProfessionalHeader>
            <ResumeContent />
          </ProfessionalResume>
        );

      case "creative":
        return (
          <CreativeResume>
            <CreativeHeader>
              <div>
                <CreativeName>{personal_info.name}</CreativeName>
                <CreativeTitle>{personal_info.title}</CreativeTitle>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "0.9rem", color: "#4a5568" }}>
                  {personal_info.email}
                </div>
                <div style={{ fontSize: "0.9rem", color: "#4a5568" }}>
                  {personal_info.phone}
                </div>
                <div style={{ fontSize: "0.9rem", color: "#4a5568" }}>
                  {personal_info.location}
                </div>
              </div>
            </CreativeHeader>
            <ResumeContent />
          </CreativeResume>
        );

      default: // modern
        return (
          <ModernResume>
            <ModernHeader>
              <ModernName>{personal_info.name}</ModernName>
              <ModernTitle>{personal_info.title}</ModernTitle>
              <ModernContact>
                <div>{personal_info.email}</div>
                <div>{personal_info.phone}</div>
                <div>{personal_info.location}</div>
                {personal_info.website && <div>{personal_info.website}</div>}
              </ModernContact>
              <ModernSocial>
                {personal_info.linkedin && (
                  <a
                    href={personal_info.linkedin}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    LinkedIn
                  </a>
                )}
                {personal_info.github && (
                  <a
                    href={personal_info.github}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    GitHub
                  </a>
                )}
              </ModernSocial>
            </ModernHeader>
            <ResumeContent />
          </ModernResume>
        );
    }
  };

  return (
    <Container isExpanded={isExpanded}>
      <LeftPanel isExpanded={isExpanded}>
        {!isExpanded ? (
          <>
            <Title>Find GitHub User</Title>
            <Subtitle>
              Enter a GitHub username to generate a professional resume
            </Subtitle>

            <Input
              type="text"
              placeholder="Enter GitHub username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleNext()}
              disabled={isLoading}
            />

            <Button
              onClick={handleNext}
              disabled={!username.trim() || isLoading}
            >
              {isLoading ? "Searching..." : "Find User"}
            </Button>
          </>
        ) : (
          <>
            {renderEditorControls()}

            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                marginTop: "20px",
              }}
            >
              <Button onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? "Preview Mode" : "Edit Mode"}
              </Button>
              {isEditing && (
                <Button onClick={handleSave} primary>
                  Save Resume
                </Button>
              )}
              <Button onClick={handleReset} variant="secondary">
                New Search
              </Button>
            </div>
          </>
        )}
      </LeftPanel>

      <RightPanel isExpanded={isExpanded} showResume={showResume}>
        {showResume ? (
          <ResumeContainer>
            <ResumeActions>
              {!isEditing ? (
                <ActionButton onClick={() => setIsEditing(true)}>
                  Edit Resume
                </ActionButton>
              ) : (
                <ActionButton primary onClick={handleSave}>
                  Save Changes
                </ActionButton>
              )}
            </ResumeActions>

            {renderResume()}
          </ResumeContainer>
        ) : showRightPanel ? (
          <LoadingContainer>
            <GitHubIcon>
              <svg
                height="50"
                viewBox="0 0 16 16"
                width="50"
                fill="currentColor"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </GitHubIcon>
            <Spinner />
            <LoadingText>
              Searching for <strong>@{username}</strong>
              <LoadingDots />
            </LoadingText>
          </LoadingContainer>
        ) : (
          <UserInfo>
            <GitHubIcon>
              <svg
                height="80"
                viewBox="0 0 16 16"
                width="80"
                fill="currentColor"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </GitHubIcon>
            <h3 style={{ margin: "20px 0 10px 0", fontSize: "1.5rem" }}>
              Ready to Explore
            </h3>
            <p style={{ opacity: 0.8, fontSize: "1rem" }}>
              Enter a GitHub username to get started
            </p>
          </UserInfo>
        )}
      </RightPanel>
    </Container>
  );
};

export default FindUser;
