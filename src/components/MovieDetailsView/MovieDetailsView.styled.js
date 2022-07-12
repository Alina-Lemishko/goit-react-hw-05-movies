import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin-bottom: 10px;
  text-align: center;
  font-size: 18px;
  border: 1px solid orangered;
  min-width: 150px;
  margin-right: 15px;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const LinkWrap = styled.div`
  display: flex;
  width: 150px;
`;

export const DetailWrap = styled.div`
  display: flex;
  padding: 10px;
`;

export const DescrWrap = styled.div`
  padding: 10px 30px;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 15px;
  text-transform: uppercase;
`;

export const AfterTitle = styled.p`
  display: block;
  text-align: center;
  background-color: #eee;
  padding: 10px;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const DescrTitle = styled.h3`
  font-weight: 500;
  font-size: 25px;
  text-align: center;
  border: 1px solid orangered;
  border-radius: 4px;
  margin-bottom: 15px;
`;

export const OverviewTitle = styled.p`
  display: block;
  background-color: #eee;
  padding: 20px;
  font-size: 20px;
  margin-bottom: 15px;
`;
