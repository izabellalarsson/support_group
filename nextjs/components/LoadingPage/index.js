import React, { Component } from "react";
import styled from "styled-components";

const LoadingPageStyled = styled.div`
  background: red;
`;
class LoadingPage extends Component {
  render() {
    return (
      <LoadingPageStyled>
        <h2>Hej</h2>
        <h2>Hej</h2>
      </LoadingPageStyled>
    );
  }
}

export default LoadingPage;
