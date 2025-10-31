import React from "react";
import { LoaderContainer, SpinningLoader } from "./Loader.styles";

interface LoaderProps {
  size?: number;
  color?: string;
}

const Loader: React.FC<LoaderProps> = ({ size = 32, color }) => {
  return (
    <LoaderContainer>
      <SpinningLoader size={size} color={color} />
    </LoaderContainer>
  );
};

export default Loader;
