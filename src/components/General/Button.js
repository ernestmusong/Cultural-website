import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: ${(props) => (props.status === "open" ? "var(--mainYellow)" : "transparent")};
  border: 0.05rem solid var(--mainYellow);
  color: var(--mainYellow);
  border-color: var(--mainYellow);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: All 0.5s ease-in-out;
  &:hover {
    background-color:  var(--mainYellow);
    color: var(--clr-white);
  }
  &:focus {
    outline: none;
  }
`;