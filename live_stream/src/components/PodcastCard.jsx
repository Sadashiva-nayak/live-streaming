import React from "react";
import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";

const PlayIcon = styled.div`
  padding: 10px;
  border-radius: 50%;
  z-index: 100;
  display: flex;
  align-items: center;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  position: relative;
  color: white !important;
  background: #9000ff !important;
  top: -65%;
  right: -35%;
  display: none;
  transition: all 0.4s ease-in-out;
  box-shadow: 0 0 16px 4px #9000ff50 !important;
`;

const Card = styled.div`
  position: relative;
  text-decoration: none;
  background-color: ${({ theme }) => theme.card};
  max-width: 220px;
  height: 325px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 16px;
  border-radius: 6px;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    cursor: pointer;
    transform: translateY(-8px);
    transition: all 0.4s ease-in-out;
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);
    filter: brightness(1.1);
  }
  &:hover ${PlayIcon} {
    display: flex;
  }
`;
const Favorite = styled(IconButton)`
  color: white;
  color: white !important;
  top: 8px;
  right: 6px;
  padding: 6px !important;
  border-radius: 50%;
  z-index: 100;
  display: flex;
  align-items: center;
  position: absolute !important;
  backdrop-filter: blur(4px);
  box-shadow: 0 0 16px 6px #222423 !important;
  background: ${({ theme }) => theme.text_secondary + 95};
`;
const Top = styled.div`
  display: flex;
  height: 150px;
  align-items: flex-start;
  justify-content: center;
  position: relative;
`;
const CardImage = styled.img`
  object-fit: cover;
  height: 140px;
  width: 220px;
  border-radius: 6px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  &:hover {
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  }
`;
const CardInformation = styled.div`
  display: flex;
  align-items: flex-end;
  font-weight: 450;
  padding: 14px 0px 0px 0px;
  width: 100%;
`;
const MainInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 4px;
  flex-direction: column;
  width: 100%;
`;
const Title = styled.div`
  max-width: 100%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_primary};
`;
const Description = styled.div`
  max-width: 100%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 12px;
`;
const CreatorsInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-top: 6px;
  align-items: center;
`;
const Creator = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
const CreatorName = styled.div`
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  font-size: 12px;
  white-space: nowrap;
`;
const Views = styled.div`
  color: ${({ theme }) => theme.text_secondary};
  width: max-content;
  font-size: 10px;
`;

const PodcastCard = () => {
  return (
    <Card>
      <div>
        <Top>
          <Favorite>
            <FavoriteIcon className=" w-4 h-4 " />
          </Favorite>
          <CardImage src="https://i.scdn.co/image/1b5af843be11feb6c563e0d95f5fe0dad659b757" />
        </Top>
        <CardInformation>
          <MainInfo>
            <Title>The Kapil Sharma Show</Title>
            <Description>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              magnam, architecto sequi omnis accusantium aliquam cupiditate
              veniam veritatis officiis, vitae repellat laudantium. Quis nulla
              eius cupiditate quia sapiente nemo sint iure eaque maiores.
              Ducimus ullam officia, reiciendis inventore recusandae tempore.
            </Description>
            <CreatorsInfo>
              <Creator>
                <Avatar>R</Avatar>
                <CreatorName>Kapil Sharma</CreatorName>
              </Creator>
              <Views>* 12 Views</Views>
            </CreatorsInfo>
          </MainInfo>
        </CardInformation>
      </div>
      <PlayIcon>
        {"video" === "video" ? (
          <PlayArrowIcon className=" w-7 h-7" />
        ) : (
          <HeadphonesIcon className=" w-7 h-7" />
        )}
      </PlayIcon>
    </Card>
  );
};

export default PodcastCard;
