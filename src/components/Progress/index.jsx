import React from "react";
import Grid from "@mui/material/Grid";
import tw from "tailwind-styled-components";
import styled from "styled-components";
import TimeCard from "./TimeCard";
import { PieChart, Pie, Cell, Label } from "recharts";
import Heading from "../Heading";
import StatCard from "./StatCard";
import OvalMask from "../../assets/svg/ovalmask.svg";

const data = [
  { name: "Group A", value: 60 },
  { name: "Group B", value: 40 },
];
const COLORS = ["#FF794F", "#FED200"];

const Stats = [
  {
    title: "Total",
    subtitle: "Webinars",
    value: "9",
  },
  {
    title: "Pending",
    subtitle: "Assignments",
    value: "0",
  },
  {
    title: "Total",
    subtitle: "Units",
    value: "5",
  },
  {
    title: "Total",
    subtitle: "Readings",
    value: "14",
  },
  {
    title: "Total",
    subtitle: "Videos",
    value: "5",
    active: true,
  },
];

export default function Progress() {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={4}>
        <CardCont style={{ background: "#1A2D7D" }}>
          <ProgTitle>Progress overview</ProgTitle>
          <ChartCont>
            <PieChart
              className="mx-auto relative"
              width={200}
              height={200}
              onMouseEnter={() => {}}
            >
              <Pie
                data={data}
                cx={100}
                cy={100}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="value"
              >
                <Label
                  value="40%"
                  position="center"
                  className="label-pie"
                  fontSize="45px"
                />
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ChartCont>
          <StatWrap>
            <TimeCard />
          </StatWrap>
        </CardCont>
      </Grid>
      <Grid item xs={12} md={8}>
        <Heading title="Progress" />
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {Stats?.map((stat, index) => {
            return (
              <Grid item xs={12} md={4} key={index}>
                <StatCard
                  title={stat.title}
                  subtitle={stat.subtitle}
                  value={stat.value}
                  active={stat.active}
                />
              </Grid>
            );
          })}
          <Grid item xs={12}>
            <Banner className="bottom-banner">
              <Title>Confirm your account details</Title>
              <Desc>Please confirm your email and phone number. 😰</Desc>
            </Banner>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const ChartCont = tw.div`
    w-full
    items-center
    justify-center
    mx-auto
`;

const CardCont = tw.div`
    flex
    flex-col
    rounded-md
    px-4
    py-10
`;

const ProgTitle = styled.div`
  text-align: center;
  color: #ffffff;
  font-family: GM;
  font-size: 30px;
`;

const StatWrap = styled.div`
  background-color: #c6c6cd33;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 20px;
`;

const Banner = tw.div`
    w-full
    rounded-md
    flex
    flex-col
    items-center
    justify-center
    md:flex-row
    p-3
    mt-5
`;

const Title = styled.div`
  font-family: NB;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
`;
const Desc = styled.div`
  font-family: NR;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
`;
