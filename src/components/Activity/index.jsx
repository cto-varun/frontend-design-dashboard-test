import React, { Fragment } from "react";
import ActivityCard from "./ActivityCard";
import Heading from "../Heading";

// logo imports
import EventsImg from "../../assets/images/icevents.png";
import AssImg from "../../assets/images/icassignment.png";
import FollImg from "../../assets/images/isfollowers.png";
import { Grid } from "@mui/material";

export default function Activity() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={12}>
        <Heading title="Activity" />
        <ActivityCard
          description="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem"
          title="You have new 5 followers including Kathryn Crawford and Piper Shaw"
          logo={FollImg}
        />
        <ActivityCard
          title="3 new events were added to your calendar"
          description="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem"
          logo={EventsImg}
        />
        <ActivityCard
          title="You have 3 pending readings to complete 🤓"
          description="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem"
          logo={AssImg}
        />
      </Grid>
    </Grid>
  );
}
