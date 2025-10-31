import styled from "styled-components";
import { motion } from "framer-motion";

export const SignupContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  margin-top: -30px;
  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const SignupCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 600px;
  min-height: auto;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 24px;
    max-width: 450px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    max-width: 100%;
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 12px;
  color: #6366f1;
  font-size: 1.25rem;
  font-weight: 700;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 6px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 1.375rem;
  }
`;

export const Subtitle = styled.p`
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0;
`;

export const FormContainer = styled.div`
  .form-step {
    margin-bottom: 20px;
  }

  .form-actions {
    margin-top: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const InputGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  color: #374151;
  font-weight: 600;
  font-size: 0.8rem;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 40px 12px 40px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  background: white;
  height: 44px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
    font-size: 0.85rem;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;

  ${Input}:focus + & {
    color: #6366f1;
  }
`;

export const PasswordToggle = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  padding: 0;

  &:hover {
    color: #6366f1;
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 8px 0;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;
  color: #374151;
  font-size: 0.8rem;
  line-height: 1.3;

  a {
    color: #6366f1;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Checkbox = styled.input`
  display: none;
`;

export const CustomCheckbox = styled.div<{ checked: boolean }>`
  width: 16px;
  height: 16px;
  border: 2px solid ${(props) => (props.checked ? "#6366f1" : "#d1d5db")};
  border-radius: 4px;
  background: ${(props) => (props.checked ? "#6366f1" : "white")};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
  transition: all 0.2s ease;
  margin-top: 1px;

  ${Checkbox}:focus + ${CheckboxLabel} & {
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
`;

export const SubmitButton = styled.button<{
  variant?: "primary" | "secondary";
  disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease;
  height: 42px;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  ${(props) =>
    props.variant === "secondary"
      ? `
    background: #f8fafc;
    color: #374151;
    border: 2px solid #e2e8f0;

    &:hover:not(:disabled) {
      background: #f1f5f9;
      border-color: #cbd5e1;
    }
  `
      : `
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    color: white;

    &:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
    }
  `}

  &:disabled {
    transform: none !important;
    box-shadow: none !important;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  color: #64748b;
  font-size: 0.8rem;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #e2e8f0;
  }

  span {
    padding: 0 10px;
  }
`;

export const SocialLogin = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
`;

export const SocialButton = styled.button<{ type: "google" | "linkedin" }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 12px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  background: white;
  color: #374151;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.85rem;
  height: 40px;

  &:hover {
    border-color: #6366f1;
    transform: translateY(-1px);
  }

  svg {
    flex-shrink: 0;
  }
`;

export const LoginLink = styled.div`
  text-align: center;
  color: #64748b;
  font-size: 0.8rem;

  a {
    color: #6366f1;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  margin: 16px 0 20px 0;
`;

export const StepIndicator = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;

  span {
    font-size: 0.75rem;
    color: #64748b;
    font-weight: 500;
  }

  strong {
    font-size: 0.8rem;
    color: #374151;
    font-weight: 600;
  }
`;

export const ProgressFill = styled.div<{ width: number }>`
  width: ${(props) => props.width}%;
  height: 3px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  border-radius: 2px;
  transition: width 0.3s ease;
`;
