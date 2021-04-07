import styled from "styled-components";

const Button = styled.a`
  display: block;
  appearance: none;
  outline: 0;
  background-color: var(--deep-blue);
  border: 0;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  margin: 0.5rem auto;
  padding: 10px 15px;
  border-radius: 3px;
  width: fit-content;
  cursor: pointer;
  color: #fff;
  font-size: 1.4rem;
  transition-duration: 0.25s;
`;

export default Button;
