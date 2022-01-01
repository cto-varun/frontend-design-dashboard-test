import React from "react";
import tw from "tailwind-styled-components";
import styled from "styled-components";

export default function TimeCard() {
  return (
    <TimeWrapper>
      <SingleContainer>
        <DotContainer>
          <Dot color="#a0aa0a" />
          <TimeText>Completed</TimeText>
        </DotContainer>
        <TimeContainer>
          <TimeMag>20</TimeMag>
          <TimeUnit>hours</TimeUnit>
        </TimeContainer>
      </SingleContainer>
      <Divider />
      <SingleContainer>
        <DotContainer>
          <Dot color="#a0aa0a" />
          <TimeText>Left to go</TimeText>
        </DotContainer>
        <TimeContainer>
          <TimeMag>20</TimeMag>
          <TimeUnit>hours</TimeUnit>
        </TimeContainer>
      </SingleContainer>
    </TimeWrapper>
  );
}

const Dot = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background-color: #a0a;
  ${(p) => (p.color ? `background-color: ${p.color}` : "")}
`;

const TimeMag = styled.div`
  font-size: 45px;
  color: #ffffff;
  font-weight: bold;
  font-family: GILL;
  line-height: 45px;
`;

const TimeUnit = styled.div`
  font-size: 24px;
  color: #ffffff;
  font-weight: 600;
  font-family: GILL;
  line-height: 45px;
`;

const TimeContainer = tw.div`
  flex
  flex-row
  items-end
`;

const TimeWrapper = tw.div`
  flex
  flex-row
  justify-around
`;

const TimeText = styled.div`
  font-family: GILL;
  font-weight: 600;
  color: #ffffff;
`;

const DotContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const SingleContainer = styled.div``

const Divider = styled.div`
  border-right-width: 1px;
  border-style: solid;
  border-color: #ffffff;
`;
