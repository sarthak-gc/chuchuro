import styled, { keyframes } from "styled-components";
import { Loader2 } from "lucide-react";
import { theme } from "../../../styles/theme";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.xl};
`;

export const SpinningLoader = styled(Loader2)`
  animation: ${spin} 1s linear infinite;
  color: ${(props) => props.color || theme.colors.primary};
`;
