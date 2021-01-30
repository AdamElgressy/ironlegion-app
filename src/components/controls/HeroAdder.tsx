import styled from "@emotion/styled";
import { useState } from "react";
import { Dialog } from "@material-ui/core";
import ToggleControls from "./ToggleControls";
import Avatar from "../avatars/Avatar";
import IronMan from "../avatars/IronMan";
import Thor from "../avatars/Thor";
import Adam from "../avatars/Adam";

const heroes = [IronMan, Thor, Adam];

const HeroAdder = (props: { addHero: Function }) => {
  const { addHero } = props;
  const [open, setOpen] = useState(false);

  const avatarChoices = heroes.map((hero: Avatar) => (
    <AvatarImage
      src={hero.img}
      onClick={() => {
        addHero(hero.avatar);
        setOpen(false);
      }}
    />
  ));

  return (
    <>
      <ToggleControls openPanel={() => setOpen(true)} />
      <Dialog open={open} onClose={() => setOpen(false)}>
        <AvatarChoicesContainer>{avatarChoices}</AvatarChoicesContainer>
      </Dialog>
    </>
  );
};

const AvatarImage = styled.img`
  height: 120px;
  width: auto;
  padding: 5px;
  cursor: pointer;
`;

const AvatarChoicesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 500px;
`;

export default HeroAdder;
