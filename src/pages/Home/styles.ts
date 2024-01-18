import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
`;

export const Content = styled.div`
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: "#e9ecef";
  gap: 20px;
`;

export const Header = styled.div`
  height: 50px;
  background-color: "#FFF";
  border-radius: 0.75rem;
  box-shadow: rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem,
    rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem;

  margin-bottom: 20px;
  padding: 0 0 0 10px;

  display: flex;
  align-items: center;
`;
