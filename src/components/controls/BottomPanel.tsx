import styled from "@emotion/styled";
import Avatar from "./../avatars/Avatar";
import { Drawer } from "@material-ui/core";
import Remove from "@material-ui/icons/Remove";

const BottomPanel = (props: {
  avatars: Avatar[];
  open: boolean;
  name: string;
  close: Function;
}) => {
  const { avatars, open, name, close } = props;

  const nameMatch = (nameToCheck: string) => nameToCheck === name;

  const avatar = avatars.find((avatar) => nameMatch(avatar.name));

  if (!avatar) {
    return (
      <Drawer open={open} variant={"persistent"} anchor={"bottom"}>
        <Container>
          No avatar chosen.
          <Remove onClick={() => close()} />
        </Container>
      </Drawer>
    );
  }

  return (
    <Drawer open={open} variant={"persistent"} anchor={"bottom"}>
      <Container>
        <Remove onClick={() => close()} />
        <br />
        <StyledImage src={avatar.img} alt={avatar.name} />
        <h1>{avatar.name}</h1>
      </Container>
    </Drawer>
  );
};

const Container = styled.div`
  height: 300px;
  width: 100%;
`;

const StyledImage = styled.img`
  height: 60%;
  width: "auto";
`;

export default BottomPanel;
