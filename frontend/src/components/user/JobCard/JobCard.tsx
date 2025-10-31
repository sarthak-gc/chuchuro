import React from "react";
import { MapPin, DollarSign, Clock } from "lucide-react";
import { motion } from "framer-motion";
import {
  CardContainer,
  CompanyLogo,
  CardContent,
  JobTitle,
  CompanyName,
  JobMeta,
  MetaItem,
  SkillTags,
  SkillTag,
  CardActions,
  ActionButton,
} from "./JobCard.styles";

interface JobCardProps {
  job: any;
  onSwipe: (direction: "left" | "right") => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onSwipe }) => {
  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(_, info) => {
        if (info.offset.x > 100) {
          onSwipe("right");
        } else if (info.offset.x < -100) {
          onSwipe("left");
        }
      }}
    >
      <CardContainer>
        <CompanyLogo>
          {job.logo ? (
            <img src={job.logo} alt={job.company} />
          ) : (
            <div>{job.company.charAt(0)}</div>
          )}
        </CompanyLogo>

        <CardContent>
          <JobTitle>{job.title}</JobTitle>
          <CompanyName>{job.company}</CompanyName>

          <JobMeta>
            <MetaItem>
              <MapPin size={16} />
              {job.location}
            </MetaItem>
            <MetaItem>
              <DollarSign size={16} />${job.salaryRange.min.toLocaleString()} -
              ${job.salaryRange.max.toLocaleString()}
            </MetaItem>
            <MetaItem>
              <Clock size={16} />
              {job.jobType}
            </MetaItem>
          </JobMeta>

          <SkillTags>
            {job.skills.slice(0, 4).map((skill: any) => (
              <SkillTag key={skill}>{skill}</SkillTag>
            ))}
            {job.skills.length > 4 && (
              <SkillTag>+{job.skills.length - 4}</SkillTag>
            )}
          </SkillTags>

          <p>{job.description.slice(0, 120)}...</p>
        </CardContent>

        <CardActions>
          <ActionButton variant="reject" onClick={() => onSwipe("left")}>
            ✕
          </ActionButton>
          <ActionButton variant="accept" onClick={() => onSwipe("right")}>
            ✓
          </ActionButton>
        </CardActions>
      </CardContainer>
    </motion.div>
  );
};

export default JobCard;
