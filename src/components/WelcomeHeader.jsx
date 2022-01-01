import React from "react";
import WelcomeManImg from "../assets/svg/welcomeman.svg";
import tw from "tailwind-styled-components";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Heading from "./Heading";

export default function WelcomeHeader() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={12}>
        <Heading title="Dashboard" />
        <HeaderWrapper className="welcome-header">
          <WelcomeManBg src={WelcomeManImg} height={"200"} width="230" />
          <ContentWrapper>
            <WelcomeText>Welcome back, Clarence</WelcomeText>
            <WelcomeDesc>Ta-da! You’re up to date. 🥳</WelcomeDesc>
          </ContentWrapper>
        </HeaderWrapper>
      </Grid>
    </Grid>
  );
}

const WelcomeT = styled.div`
  color: #f5f5fb;
  font-size: 30px;
  font-family: GM;
`;

const WelcomeText = tw(WelcomeT)`
    md:text-start
    text-center
`;

const WelcomeDesc = styled.div`
  color: #ffffff;
  font-family: NSB;
`;

const HeaderWrapper = tw.div`
    relative
    w-full
    py-6
    lg:py-10
    flex
    justify-end
    flex-col
    lg:flex-row
    items-center
    lg:items-start
    mt-0
    lg:mt-10
    mb-8
`;

const WelcomeManBg = tw.img`
    object-contain
    lg:absolute
    bottom-0
    z-9999
    left-0
    mb-6
    lg:mb-0
`;

const ContentWrapper = tw.div`
    flex
    flex-col
    justify-center
    h-full
    w-full
    lg:w-5/6
    pl-0
    lg:pl-8
    lg:items-start
    items-center
`;
