import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const ListContainer = styled.div`
  background: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows.sm};
  overflow: hidden;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacing.lg};
  border-bottom: 1px solid ${theme.colors.border};
  background: ${theme.colors.background};
`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  background: white;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  flex: 1;
  max-width: 400px;

  input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 1rem;

    &::placeholder {
      color: ${theme.colors.text.light};
    }
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  background: white;
  color: ${theme.colors.text.primary};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.lg};
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: ${theme.colors.background};
  }
`;

export const Table = styled.div`
  width: 100%;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr 1fr 1fr;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.lg};
  background: ${theme.colors.background};
  font-weight: 600;
  color: ${theme.colors.text.primary};
  border-bottom: 1px solid ${theme.colors.border};
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr 1fr 1fr;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.lg};
  border-bottom: 1px solid ${theme.colors.border};
  transition: background-color 0.2s ease;

  &:hover {
    background: ${theme.colors.background};
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const TableCell = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;

    strong {
      color: ${theme.colors.text.primary};
      margin-bottom: 2px;
    }

    span {
      color: ${theme.colors.text.secondary};
      font-size: 0.875rem;
    }
  }
`;

export const MatchBadge = styled.span<{ percentage: number }>`
  background: ${(props) =>
    props.percentage >= 90
      ? theme.colors.success
      : props.percentage >= 70
      ? theme.colors.warning
      : theme.colors.error};
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
`;

export const ViewButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  background: ${theme.colors.primary};
  color: white;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border: none;
  border-radius: ${theme.borderRadius.lg};
  font-size: 0.875rem;
  font-weight: 500;
  transition: background-color 0.2s ease;

  &:hover {
    background: ${theme.colors.primaryLight};
  }
`;
