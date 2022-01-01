import { useRef } from "react";
import Grid from "@mui/material/Grid";
import Heading from "../Heading";
import tw from "tailwind-styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import LeftArrow from "../../assets/svg/leftarrow.svg";
import RightArrow from "../../assets/svg/rightarrow.svg";
import styled from "styled-components";
import EventCard from "./EventCard";
import Thumbnail from "../../assets/svg/thumbnail.svg";

export default function Event() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={8}>
        <Heading title="Events" />

        <Swiper
          spaceBetween={50}
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          className="relative"
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {[1, 2, 3]?.map((id) => {
            return (
              <SwiperSlide key={id}>
                <BannerContainer className="event-banner">
                  <Text>
                    <div className="text-center">Youth Talent & Education</div>
                    <div className="text-center">May, 20</div>
                  </Text>
                </BannerContainer>
              </SwiperSlide>
            );
          })}
          <NavCont ref={prevRef} style={{ top: "45%" }}>
            <img src={LeftArrow} width="15" height="15" />
          </NavCont>
          <NextNavCont ref={nextRef} style={{ top: "45%" }}>
            <img src={RightArrow} width="15" height="15" />
          </NextNavCont>
        </Swiper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid container className="mt-0 md:mt-14">
          <Grid item xs={12}>
            <div className="mt-0 md:mt-4">
              <Heading title="EVENTS TODAY" small />
            </div>
          </Grid>
          <Grid item xs={6} md={12}>
            <EventCard
              img={Thumbnail}
              time="10:30AM"
              desc="Webinar: the basics of…"
            />
          </Grid>
          <Grid item xs={6} md={12}>
            <EventCard
              img={Thumbnail}
              time="2:15 PM"
              desc="Team Building Activity 🔥"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const Banner = tw.img`
    py-10
`;

const NavCont = tw.div`
    bg-white
    p-2
    px-4
    absolute	
    z-40
    rounded-md
    cursor-pointer
    left-0
    ml-4
`;

const NextNavCont = tw(NavCont)`
    ml-0
    mr-4
    right-0
    left-auto
`;

const BannerContainer = styled.div`
  height: 280px;
`;

const StyledText = styled.div`
  font-family: GM;
  font-size: 40px;
`;

const Text = tw(StyledText)`
    text-white
    w-full
    flex
    justify-center
    flex-col
    h-full
`;
