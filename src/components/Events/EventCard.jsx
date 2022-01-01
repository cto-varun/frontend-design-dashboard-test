import tw from "tailwind-styled-components";
import styled from "styled-components";

export default function EventCard(props) {
  const { img, time, desc } = props;
  return (
    <Wrapper>
      <EventImage src={img} />
      <EventDetails>
        <EventTime>{time}</EventTime>
        <EventDesc>{desc}</EventDesc>
      </EventDetails>
    </Wrapper>
  );
}

const EventImage = tw.img``;

const Wrapper = tw.div`
  flex
  items-center
  bg-white
  rounded-md
  py-6
  px-6
  mb-4
`;

const EventTime = styled.div`
  color: #9D9BB6;
  font-family: GB;
`;
const EventDesc = styled.div`
  color: #192452;
  font-family: GB;
`;
const EventDetails = tw.div`
  ml-3
`;
