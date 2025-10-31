import styled from "styled-components";
import { motion } from "framer-motion";

export const CardContainer = styled.div`
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  padding: 24px;
  position: relative;
  overflow: hidden;
  border: 1px solid #f1f5f9;
  transition: all 0.3s ease;
  margin-bottom: 14px;
  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 20px;
`;

export const CompanyLogo = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  flex-shrink: 0;
`;

export const CardContent = styled.div`
  margin-bottom: 20px;
`;

export const JobTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 4px;
  line-height: 1.3;
`;

export const CompanyName = styled.p`
  color: #64748b;
  font-weight: 500;
  font-size: 0.95rem;
`;

export const JobMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 16px;
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #64748b;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const SkillTags = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

export const SkillTag = styled(motion.span)`
  background: #f8fafc;
  color: #475569;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid #e2e8f0;
`;

export const JobBenefits = styled.div`
  margin-bottom: 16px;
`;

export const BenefitTag = styled(motion.span)`
  background: #f0fdf4;
  color: #166534;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 500;
  border: 1px solid #dcfce7;
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

export const ActionButton = styled(motion.button)<{
  variant: "accept" | "reject";
}>`
  flex: 1;
  padding: 20px;
  border-radius: 16px;
  font-size: 1.5rem;
  font-weight: 700;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  ${(props) =>
    props.variant === "accept"
      ? `
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
    
    &:hover {
      box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
    }
  `
      : `
    background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
    
    &:hover {
      box-shadow: 0 8px 25px rgba(239, 68, 68, 0.4);
    }
  `}
`;

export const SaveButton = styled(motion.button)<{ $isSaved: boolean }>`
  background: none;
  border: none;
  color: ${(props) => (props.$isSaved ? "#6366f1" : "#94a3b8")};
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: #f8fafc;
    color: #6366f1;
  }
`;

export const MatchBadge = styled.span<{ percentage: number }>`
  background: ${(props) =>
    props.percentage >= 90
      ? "#10b981"
      : props.percentage >= 80
      ? "#f59e0b"
      : "#ef4444"};
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;
`;

export const UrgencyIndicator = styled.span`
  background: #fef3c7;
  color: #92400e;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
`;
