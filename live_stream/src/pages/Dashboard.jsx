import React from "react";
import styled from "styled-components";
import PodcastCard from "../components/PodcastCard";
import { Link } from "react-router-dom";

const DashboradMain = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: scroll;
  overflow-x: hidden;
  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`;
const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.bg};
`;
const Topic = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
const Podcasts = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  padding: 18px 6px;
  @media (max-width: 550px) {
    justify-content: center;
  }
`;
const Span = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Dashboard = ({setVideoId}) => {

  return (
    <DashboradMain>
      <FilterContainer>
        <Topic>
          Most Popular
          <Link to="/showpodcasts/mostpopular" className=" no-underline">
            <Span>Show All</Span>
          </Link>
        </Topic>
        <Podcasts>
          <Link to='/video'>
          <PodcastCard onClick={setVideoId("pondi")}/>
          </Link>
          <Link to='/video'>
          <PodcastCard onClick={setVideoId("pondi")}/>
          </Link>
        </Podcasts>
      </FilterContainer>
      <FilterContainer>
        <Topic>
          Comedy
          <Link to="/showpodcasts/comedy" className=" no-underline">
            <Span>Show All</Span>
          </Link>
        </Topic>
        <Podcasts>
        <Link onClick={setVideoId("pondi")} to='/video'>
          <PodcastCard />
          </Link>
        <Link onClick={setVideoId("pondi")} to='/video'>
          <PodcastCard />
          </Link>
        </Podcasts>
      </FilterContainer>
    </DashboradMain>
  );
};

export default Dashboard;
