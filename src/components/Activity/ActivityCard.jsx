// import React from "react";
// import styled from "styled-components";

// export default function ActivityCard(props) {
//   const { title, description, logo } = props;
//   return (
//     <Container $description={description?true:false}>
//       <LogoWrapper>
//         <Image src={logo} height="41" width="41" />
//       </LogoWrapper>
//       <Wrapper>
//         <Title>{title}</Title>
//         <Description>{description}</Description>
//       </Wrapper>
//     </Container>
//   );
// }

// const LogoWrapper = tw.div`

//   flex
// `;

// const Image = styled.img``;

// const Wrapper = tw.div``;

// const Container = tw.div`
//   py-6
//   md:py-4
//   bg-white
//   shadow-sm
//   rounded-md
//   px-10
//   flex
//   mb-4
//   ${(p) => (!p.$description && "items-center")}
// `;

import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import tw from "tailwind-styled-components";
import styledComp from "styled-components";
import Typography from "@mui/material/Typography";
import Arrow from "../../assets/images/arrowDown.png";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  marginBottom: "20px",
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<Image src={Arrow} height="10" width="10" />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  backgroundColor: '#ffffff',
  borderRaidus: '10px'
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(5),
}));

export default function ActivityCard(props) {
  const { title, description, logo } = props;
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Accordion onChange={handleChange("panel1")}>
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <TitleWrapper>
          <LogoWrapper>
            <Image src={logo} height="41" width="41" />
          </LogoWrapper>
          <Title>{title}</Title>
        </TitleWrapper>
      </AccordionSummary>
      {description ? (
        <AccordionDetails>
          <Description>{description}</Description>
        </AccordionDetails>
      ) : null}
    </Accordion>
  );
}

const Title = styledComp.div`
  font-family: NR;
  color: #9d9bb6;
  font-size: 16px;
  padding-left: 16px;
`;

const LogoWrapper = tw.div`
  flex
`;

const Image = tw.img`
  object-contain
`;

const TitleWrapper = tw.div`
  items-center
  flex
`;
const Description = styledComp.div`
  font-family: NR;
  color: #103460;
`;
