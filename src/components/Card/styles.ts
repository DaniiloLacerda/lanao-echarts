import styled from "styled-components";

export const Container = styled.div`
  height: 105px;
  width: 244px;
  background-color: "#FFF";
  border-radius: 0.75rem;
  box-shadow: rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem,
    rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem;
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  padding: 0 10px;
  
  &:hover {
    cursor: pointer;
    opacity: 0.5;
    transition: 2ms;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 16px;
  color: #232D42;
  font-weight: 600;
`;
