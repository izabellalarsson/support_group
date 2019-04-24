import React from "react";
import styled from "styled-components";

const RedLineStyled = styled.div`
  height: 20px;
  ${props =>
    props.place ? "width: 65px; left: 16vw;" : "width: 72px; left: 68vw; "};
  transition: 0.3s linear;
  position: absolute;
  border-bottom: 4px solid var(--detail-red);
`;

const RedLine = ({ place }) => {
  return <RedLineStyled place={place} />;
};

export default RedLine;
