/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import styled from "styled-components";
import { ButtonProps } from ".";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: 10px;
  color: #000;
  background-color: red;
  border: 1px solid #000;
`;

export {StyledButton}