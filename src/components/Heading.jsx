import React from "react";
import styled from "styled-components";

export default function Heading(props) {
  const { title = "", small } = props;
  return <Head small={small}>{title}</Head>;
}

const Head = styled.div`
  font-size: 30px;
  color: #103460;
  font-family: GM;
  margin-top: 10px;
  margin-bottom: 10px;
  ${p=>p.small && 'font-size: 15px'}
`;
