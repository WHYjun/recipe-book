import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  font-size: 28px;
  justify-content: center;
  margin-top: 20px;
`;

const Loader = () => <Container>Loading...</Container>;

export default Loader;
