import React, { useState } from "react";

export interface ButtonProps {
  idTest?: string;
}

const Button: React.FC<ButtonProps> = ({
  idTest
}) => {
  const [value, setValue] = useState('')

  return (
    <input id={idTest} value={value} onChange={(ev) => setValue(ev.target?.value)} />
  );
};

export default Button;