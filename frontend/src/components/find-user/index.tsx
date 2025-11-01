import React, { useState } from "react";
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
    transform: translateX(-30px);
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

// Styled Components
const Container = styled.div`
  display: flex;
  min-height: ${(props) => (props.isExpanded ? "700px" : "400px")};
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 20px;
  font-family: "Inter", sans-serif;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

const LeftPanel = styled.div`
  flex: ${(props) => (props.isExpanded ? "0.35" : "1")};
  padding: 30px;
  background: rgba(255, 255, 255, 0.98);
  display: flex;
  flex-direction: column;
  transition: all 0.4s ease;
  overflow-y: auto;
`;

const RightPanel = styled.div`
  flex: ${(props) => (props.isExpanded ? "0.65" : "1")};
  padding: ${(props) => (props.showResume ? "30px" : "40px")};
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: ${(props) => (props.showResume ? "flex-start" : "center")};
  justify-content: center;
  transition: all 0.4s ease;
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

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  font-size: 0.9rem;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
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
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-right: 8px;
  margin-bottom: 8px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
  }
`;

const ControlPanel = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  animation: ${slideIn} 0.3s ease-out;
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

const SectionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SectionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: #f8fafc;
  border-radius: 8px;
  border-left: 4px solid ${(props) => (props.active ? "#667eea" : "#e2e8f0")};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #f1f5f9;
    transform: translateX(5px);
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
  }
`;

const ResumeContainer = styled.div`
  width: 100%;
  max-width: 800px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  animation: ${fadeIn} 0.5s ease-out;
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
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: ${(props) => (props.primary ? "#5a6fd8" : "#f7fafc")};
    transform: translateY(-1px);
  }
`;

// Resume Template Components
const ModernResume = styled.div`
  padding: 40px;
  font-family: "Inter", sans-serif;
  min-height: 600px;
`;

const ModernHeader = styled.div`
  background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
  color: white;
  padding: 40px;
  border-radius: 0;
  margin: -40px -40px 40px -40px;
`;

const ModernName = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 8px;
  letter-spacing: -0.5px;
`;

const ModernTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 400;
  opacity: 0.9;
  margin-bottom: 20px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 10px;
  font-size: 0.9rem;
`;

const Section = styled.div`
  margin-bottom: 30px;
  animation: ${fadeIn} 0.5s ease-out;
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
  margin-top: 8px;
`;

const SkillTag = styled.span`
  background: #f7fafc;
  color: #4a5568;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;

  &:hover {
    background: #667eea;
    color: white;
    transform: translateY(-1px);
  }
`;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ExperienceItem = styled.div`
  border-left: 3px solid #667eea;
  padding-left: 20px;
  transition: all 0.3s ease;

  &:hover {
    border-left-color: #764ba2;
    transform: translateX(5px);
  }
`;

// Editable Components
const EditableField = styled.div`
  position: relative;
  cursor: ${(props) => (props.editing ? "text" : "pointer")};
  border-radius: 6px;
  transition: all 0.3s ease;
  padding: 4px 8px;
  margin: -4px -8px;

  &:hover {
    background: ${(props) =>
      props.editing ? "transparent" : "rgba(102, 126, 234, 0.08)"};
  }
`;

const EditInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 2px solid #667eea;
  border-radius: 6px;
  font-size: inherit;
  font-family: inherit;
  background: white;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const EditTextarea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #667eea;
  border-radius: 6px;
  font-size: inherit;
  font-family: inherit;
  background: white;
  outline: none;
  resize: vertical;
  min-height: 80px;
  line-height: 1.5;
  transition: all 0.3s ease;

  &:focus {
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const AddButton = styled.button`
  background: #48bb78;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;
  margin-top: 12px;
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
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 500;
  margin-left: 10px;
  transition: all 0.3s ease;

  &:hover {
    background: #c53030;
    transform: translateY(-1px);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.8s ease-out;
  width: 100%;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid white;
  border-radius: 50%;
  animation: ${pulse} 1.5s ease-in-out infinite;
  margin-bottom: 20px;
`;

const GitHubIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
  color: white;
  text-align: center;
`;

const FindUser = () => {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingField, setEditingField] = useState(null);

  // Enhanced resume data structure that will be populated from API
  const [resumeData, setResumeData] = useState({
    personal_info: {
      name: "",
      title: "Full Stack Developer",
      email: "",
      phone: "",
      location: "",
      website: "",
      linkedin: "",
      github: "",
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
      summary: "",
      experience: [],
      education: [],
      skills: {},
      projects: [],
      certifications: [],
    },
  });

  const fetchUser = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://recriminative-tattlingly-izola.ngrok-free.dev/analyze?u=${username}`
      );
      const data = await response.json();
      console.log("API Response:", data);

      // Transform API data to match our resume structure
      transformApiData(data.response);
    } catch (error) {
      console.error("Error fetching user data:", error);
      alert("Error fetching user data. Please try again.");
    } finally {
      setIsLoading(false);
      setShowResume(true);
    }
  };

  const transformApiData = (apiData) => {
    const { skills, details } = apiData;
    const { personal_info, education, projects } = details;

    // Transform personal info
    const transformedPersonalInfo = {
      name:
        personal_info.firstName && personal_info.lastName
          ? `${personal_info.firstName} ${personal_info.lastName}`
          : personal_info.firstName || personal_info.lastName || "GitHub User",
      title: "Full Stack Developer", // Default title
      email: personal_info.email || "Not provided",
      phone: personal_info.contact || "Not provided",
      location: personal_info.location || "Not provided",
      website: personal_info.personalWebsite || "",
      linkedin: personal_info.socials?.LinkedIn || "",
      github: personal_info.socials?.GitHub || `https://github.com/${username}`,
    };

    // Transform skills
    const transformedSkills = skills || {};

    // Transform projects
    const transformedProjects = (projects || []).map((project) => ({
      id: Date.now() + Math.random(),
      name: project.name || "Unnamed Project",
      description: project.description || "No description available",
      technologies: project.technologies || [],
      link: project.code || project.live || "",
    }));

    // Transform education
    const transformedEducation = (education || []).map((edu) => ({
      id: Date.now() + Math.random(),
      institution: edu.institution || "Unknown Institution",
      degree: edu.degree || "Unknown Degree",
      duration: edu.duration || "Not specified",
      grade: edu.grade || "",
    }));

    // Create default summary based on skills
    const skillCategories = Object.keys(transformedSkills);
    const topSkills = skillCategories.flatMap(
      (category) => transformedSkills[category]?.slice(0, 3) || []
    );

    const defaultSummary = `Experienced developer with expertise in ${topSkills
      .slice(0, 3)
      .join(", ")} and more. ${
      projects?.length
        ? `Has worked on ${projects.length} project${
            projects.length > 1 ? "s" : ""
          } including ${projects[0]?.name || "various applications"}.`
        : ""
    }`;

    setResumeData((prev) => ({
      ...prev,
      personal_info: transformedPersonalInfo,
      content: {
        ...prev.content,
        summary: defaultSummary,
        skills: transformedSkills,
        projects: transformedProjects,
        education: transformedEducation,
        experience: prev.content.experience, // Keep any existing experience
        certifications: prev.content.certifications, // Keep any existing certifications
      },
    }));
  };

  const handleNext = async () => {
    if (username.trim()) {
      setIsExpanded(true);
      await fetchUser();
    }
  };

  const handleReset = () => {
    setIsExpanded(false);
    setShowResume(false);
    setIsEditing(false);
    setUsername("");
    setEditingField(null);

    // Reset resume data
    setResumeData({
      personal_info: {
        name: "",
        title: "Full Stack Developer",
        email: "",
        phone: "",
        location: "",
        website: "",
        linkedin: "",
        github: "",
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
        summary: "",
        experience: [],
        education: [],
        skills: {},
        projects: [],
        certifications: [],
      },
    });
  };

  const handleSave = () => {
    console.log("Final Resume Data:", JSON.stringify(resumeData, null, 2));
    setIsEditing(false);
    setEditingField(null);
    alert("Resume saved successfully! Check console for data.");
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

  const startEditing = (fieldPath, value = "") => {
    setEditingField({ path: fieldPath, value });
  };

  const saveEdit = (newValue) => {
    if (editingField) {
      const path = editingField.path.split(".");
      setResumeData((prev) => {
        const updated = JSON.parse(JSON.stringify(prev));
        let current = updated;

        for (let i = 0; i < path.length - 1; i++) {
          current = current[path[i]];
        }
        current[path[path.length - 1]] = newValue;

        return updated;
      });
    }
    setEditingField(null);
  };

  const addItem = (arrayPath, template) => {
    const path = arrayPath.split(".");
    setResumeData((prev) => {
      const updated = JSON.parse(JSON.stringify(prev));
      let current = updated;

      for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]];
      }
      current[path[path.length - 1]].push({
        ...template,
        id: Date.now() + Math.random(),
      });

      return updated;
    });
  };

  const removeItem = (arrayPath, index) => {
    const path = arrayPath.split(".");
    setResumeData((prev) => {
      const updated = JSON.parse(JSON.stringify(prev));
      let current = updated;

      for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]];
      }
      current[path[path.length - 1]].splice(index, 1);

      return updated;
    });
  };

  const updateNestedField = (path, value) => {
    const pathArray = path.split(".");
    setResumeData((prev) => {
      const updated = JSON.parse(JSON.stringify(prev));
      let current = updated;

      for (let i = 0; i < pathArray.length - 1; i++) {
        current = current[pathArray[i]];
      }
      current[pathArray[pathArray.length - 1]] = value;

      return updated;
    });
  };

  const { personal_info, sections, content } = resumeData;

  // Render editor controls
  const renderEditorControls = () => {
    return (
      <>
        <ControlPanel>
          <ControlTitle>📑 Resume Sections</ControlTitle>
          <SectionList>
            {Object.entries(sections).map(([section, enabled]) => (
              <SectionItem
                key={section}
                active={enabled}
                onClick={() => toggleSection(section)}
              >
                <SectionName>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </SectionName>
                <ToggleSwitch>
                  <ToggleInput
                    type="checkbox"
                    checked={enabled}
                    onChange={() => {}}
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
            <EditableField
              editing={isEditing && editingField?.path === "content.summary"}
              onClick={() =>
                isEditing && startEditing("content.summary", content.summary)
              }
            >
              {editingField?.path === "content.summary" ? (
                <EditTextarea
                  value={editingField.value}
                  onChange={(e) =>
                    setEditingField({ ...editingField, value: e.target.value })
                  }
                  onBlur={() => saveEdit(editingField.value)}
                  autoFocus
                />
              ) : (
                <p style={{ color: "#4a5568", lineHeight: "1.6" }}>
                  {content.summary}
                </p>
              )}
            </EditableField>
          </ControlPanel>
        )}

        {sections.skills && Object.keys(content.skills).length > 0 && (
          <ControlPanel>
            <ControlTitle>🛠️ Skills & Technologies</ControlTitle>
            {Object.entries(content.skills).map(([category, skillList]) => (
              <div key={category} style={{ marginBottom: "20px" }}>
                <h4 style={{ color: "#2d3748", marginBottom: "10px" }}>
                  {category}
                </h4>
                <SkillList>
                  {skillList.map((skill, index) => (
                    <SkillTag key={index}>{skill}</SkillTag>
                  ))}
                </SkillList>
              </div>
            ))}
          </ControlPanel>
        )}

        {sections.projects && content.projects.length > 0 && (
          <ControlPanel>
            <ControlTitle>🚀 Projects</ControlTitle>
            {content.projects.map((project, index) => (
              <div
                key={project.id}
                style={{
                  marginBottom: "20px",
                  padding: "15px",
                  background: "#f8fafc",
                  borderRadius: "8px",
                }}
              >
                <h4 style={{ color: "#2d3748", marginBottom: "8px" }}>
                  {project.name}
                </h4>
                <p style={{ color: "#4a5568", marginBottom: "8px" }}>
                  {project.description}
                </p>
                {project.link && (
                  <p style={{ marginBottom: "8px" }}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#667eea" }}
                    >
                      View Project
                    </a>
                  </p>
                )}
                {project.technologies && project.technologies.length > 0 && (
                  <SkillList>
                    {project.technologies.map((tech, techIndex) => (
                      <SkillTag key={techIndex}>{tech}</SkillTag>
                    ))}
                  </SkillList>
                )}
              </div>
            ))}
          </ControlPanel>
        )}

        {sections.education && content.education.length > 0 && (
          <ControlPanel>
            <ControlTitle>🎓 Education</ControlTitle>
            {content.education.map((edu, index) => (
              <div
                key={edu.id}
                style={{
                  marginBottom: "15px",
                  padding: "12px",
                  background: "#f8fafc",
                  borderRadius: "6px",
                }}
              >
                <h4 style={{ color: "#2d3748", margin: "0 0 5px 0" }}>
                  {edu.institution}
                </h4>
                <p style={{ color: "#4a5568", margin: "0 0 5px 0" }}>
                  {edu.degree}
                </p>
                <p
                  style={{ color: "#718096", margin: "0", fontSize: "0.9rem" }}
                >
                  {edu.duration}
                </p>
                {edu.grade && (
                  <p
                    style={{
                      color: "#718096",
                      margin: "5px 0 0 0",
                      fontSize: "0.9rem",
                    }}
                  >
                    Grade: {edu.grade}
                  </p>
                )}
              </div>
            ))}
          </ControlPanel>
        )}

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginTop: "auto",
          }}
        >
          <Button onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? "👁️ Preview Mode" : "✏️ Edit Mode"}
          </Button>
          {isEditing && (
            <Button
              onClick={handleSave}
              style={{
                background: "linear-gradient(135deg, #48bb78, #38a169)",
              }}
            >
              💾 Save Resume
            </Button>
          )}
          <Button onClick={handleReset} variant="secondary">
            🔄 New Search
          </Button>
        </div>
      </>
    );
  };

  return (
    <Container isExpanded={isExpanded}>
      <LeftPanel isExpanded={isExpanded}>
        {!isExpanded ? (
          <>
            <Title>GitHub Resume Builder</Title>
            <p style={{ color: "#718096", marginBottom: "25px" }}>
              Enter a GitHub username to create a professional resume
            </p>

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
              {isLoading ? "Generating..." : "Generate Resume"}
            </Button>
          </>
        ) : (
          renderEditorControls()
        )}
      </LeftPanel>

      <RightPanel isExpanded={isExpanded} showResume={showResume}>
        {showResume ? (
          <ResumeContainer>
            <ResumeActions>
              {!isEditing ? (
                <ActionButton onClick={() => setIsEditing(true)}>
                  ✏️ Edit Resume
                </ActionButton>
              ) : (
                <ActionButton primary onClick={handleSave}>
                  💾 Save Changes
                </ActionButton>
              )}
            </ResumeActions>

            <ModernResume>
              <ModernHeader>
                <ModernName>{personal_info.name || "GitHub User"}</ModernName>
                <ModernTitle>{personal_info.title}</ModernTitle>
                <ContactInfo>
                  {personal_info.email &&
                    personal_info.email !== "Not provided" && (
                      <div>📧 {personal_info.email}</div>
                    )}
                  {personal_info.phone &&
                    personal_info.phone !== "Not provided" && (
                      <div>📱 {personal_info.phone}</div>
                    )}
                  {personal_info.location &&
                    personal_info.location !== "Not provided" && (
                      <div>📍 {personal_info.location}</div>
                    )}
                  {personal_info.website && (
                    <div>🌐 {personal_info.website}</div>
                  )}
                  {personal_info.linkedin && (
                    <div>💼 {personal_info.linkedin}</div>
                  )}
                  {personal_info.github && (
                    <div>
                      🐙{" "}
                      <a
                        href={personal_info.github}
                        style={{ color: "white" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </div>
                  )}
                </ContactInfo>
              </ModernHeader>

              {/* Summary Section */}
              {sections.summary && content.summary && (
                <Section>
                  <SectionTitle>Professional Summary</SectionTitle>
                  <p style={{ lineHeight: "1.6", color: "#4a5568" }}>
                    {content.summary}
                  </p>
                </Section>
              )}

              {/* Skills Section */}
              {sections.skills && Object.keys(content.skills).length > 0 && (
                <Section>
                  <SectionTitle>Skills & Technologies</SectionTitle>
                  <SkillsGrid>
                    {Object.entries(content.skills).map(
                      ([category, skillList]) => (
                        <SkillCategory key={category}>
                          <h4
                            style={{
                              margin: "0 0 12px 0",
                              color: "#2d3748",
                              fontSize: "1rem",
                            }}
                          >
                            {category}
                          </h4>
                          <SkillList>
                            {skillList.map((skill, index) => (
                              <SkillTag key={index}>{skill}</SkillTag>
                            ))}
                          </SkillList>
                        </SkillCategory>
                      )
                    )}
                  </SkillsGrid>
                </Section>
              )}

              {/* Projects Section */}
              {sections.projects && content.projects.length > 0 && (
                <Section>
                  <SectionTitle>Projects</SectionTitle>
                  <ExperienceList>
                    {content.projects.map((project) => (
                      <ExperienceItem key={project.id}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            marginBottom: "8px",
                          }}
                        >
                          <div style={{ flex: 1 }}>
                            <h4
                              style={{
                                margin: "0 0 4px 0",
                                color: "#2d3748",
                                fontSize: "1.1rem",
                              }}
                            >
                              {project.name}
                            </h4>
                            {project.link && (
                              <p
                                style={{
                                  margin: "0 0 4px 0",
                                  color: "#667eea",
                                  fontSize: "0.9rem",
                                }}
                              >
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  🔗 View Project
                                </a>
                              </p>
                            )}
                          </div>
                        </div>
                        <p
                          style={{
                            color: "#4a5568",
                            lineHeight: "1.6",
                            margin: "0 0 8px 0",
                          }}
                        >
                          {project.description}
                        </p>
                        {project.technologies &&
                          project.technologies.length > 0 && (
                            <SkillList>
                              {project.technologies.map((tech, techIndex) => (
                                <SkillTag key={techIndex}>{tech}</SkillTag>
                              ))}
                            </SkillList>
                          )}
                      </ExperienceItem>
                    ))}
                  </ExperienceList>
                </Section>
              )}

              {/* Education Section */}
              {sections.education && content.education.length > 0 && (
                <Section>
                  <SectionTitle>Education</SectionTitle>
                  <ExperienceList>
                    {content.education.map((edu) => (
                      <ExperienceItem key={edu.id}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                          }}
                        >
                          <div style={{ flex: 1 }}>
                            <h4
                              style={{
                                margin: "0 0 4px 0",
                                color: "#2d3748",
                                fontSize: "1.1rem",
                              }}
                            >
                              {edu.institution}
                            </h4>
                            <p
                              style={{ margin: "0 0 4px 0", color: "#4a5568" }}
                            >
                              {edu.degree}
                            </p>
                            <p
                              style={{
                                margin: "0",
                                color: "#718096",
                                fontSize: "0.9rem",
                              }}
                            >
                              {edu.duration}
                            </p>
                            {edu.grade && (
                              <p
                                style={{
                                  margin: "5px 0 0 0",
                                  color: "#718096",
                                  fontSize: "0.9rem",
                                }}
                              >
                                Grade: {edu.grade}
                              </p>
                            )}
                          </div>
                        </div>
                      </ExperienceItem>
                    ))}
                  </ExperienceList>
                </Section>
              )}
            </ModernResume>
          </ResumeContainer>
        ) : isLoading ? (
          <LoadingContainer>
            <GitHubIcon>
              <svg
                height="60"
                viewBox="0 0 16 16"
                width="60"
                fill="currentColor"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </GitHubIcon>
            <Spinner />
            <p
              style={{
                color: "white",
                fontSize: "1.2rem",
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              Building resume for <strong>@{username}</strong>
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "0.9rem",
                marginTop: "8px",
              }}
            >
              Analyzing GitHub profile and skills...
            </p>
          </LoadingContainer>
        ) : (
          <div style={{ textAlign: "center", color: "white" }}>
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
            <h3
              style={{
                margin: "20px 0 10px 0",
                fontSize: "1.5rem",
                fontWeight: "600",
              }}
            >
              GitHub Resume Builder
            </h3>
            <p style={{ opacity: 0.9, fontSize: "1rem" }}>
              Enter a GitHub username to create a professional resume
            </p>
          </div>
        )}
      </RightPanel>
    </Container>
  );
};

export default FindUser;
