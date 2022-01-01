import styled from "styled-components";
import tw from "tailwind-styled-components";

export default function StatCard(props) {
  const { title, subtitle, value, active } = props;
  return (
    <Wrapper active={active}>
      <div>
        <Title active={active}>{title}</Title>
        <Title active={active}>{subtitle}</Title>
      </div>
      <Value active={active}>{value}</Value>
    </Wrapper>
  );
}

const StyledWrapper = styled.div`
  ${(p) =>
    p.active
      ? "background: #1884FF; box-shadow: 2px 10px 15px 4px rgba(24,132,255,1);  "
      : ""}
`;

const Wrapper = tw(StyledWrapper)`
    bg-white
    flex
    justify-between
    items-center
    p-4
    rounded-md
`;

const Title = styled.div`
  font-family: GB;
  color: #9c9ab5;
  font-family: 17px;
  ${(p) => (p.active ? "color: #ffffff" : "")}
`;

const Value = styled.div`
  font-family: GM;
  color: #103460;
  font-size: 40px;
  ${(p) => (p.active ? "color: #ffffff" : "")}
`;
