import styled from "styled-components";
// import defaultImg from "../images/room-1.jpeg";

const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${(props) => props.bgImg}) center center/cover no-repeat;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default StyledHero;
