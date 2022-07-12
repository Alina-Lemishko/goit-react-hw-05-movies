import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 10px;
  padding-bottom: 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-right: -32px;
  margin-bottom: -32px;
  margin-right: -16px;
`;

export const Card = styled.li`
  position: relative;
  padding-bottom: 10px;
  border-radius: 5px;
  overflow: hidden;
  transition: transform 0.5s linear;
  width: calc(100% / 3 - 16px);
  margin-right: 16px;
  margin-bottom: 10px;
`;

export const Img = styled.img`
  width: 395px;
  height: 574px;
  overflow: hidden;
  border-radius: 5px;
`;

export const Title = styled.h2`
  margin-top: 5px;
  font-size: 20px;
  line-height: 1.2;
`;
