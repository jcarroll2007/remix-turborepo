import React from "react";

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FunctionComponent<ButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>test</button>;
};

export { Button };
