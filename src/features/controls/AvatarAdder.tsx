import React, { useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { v4 as uuidv4 } from 'uuid';
import styled from '@emotion/styled';
import { Dialog } from '@material-ui/core';
import { avatarImages } from '../avatars/avatarImages';
import { addAvatar } from '../avatars/avatarsSlice';
import { Tooltip, Fab } from '@material-ui/core';
import Add from '@material-ui/icons/Add';


const AvatarChoicesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 500px;
`;

const AvatarImage = styled.img`
  height: 120px;
  width: auto;
  padding: 5px;
  cursor: pointer;
`;

const StyledFab = styled(Fab)`
  cursor: pointer;
  height: 60px;
  width: 60px;
`;


const AvatarAdder = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const avatarChoices = Object.keys(avatarImages).map((type) => <AvatarImage
    src={avatarImages[type]}
    onClick={() => {
      setOpen(false);
      dispatch(addAvatar({
        uuid: uuidv4(),
        name: 'New Avatar',
        type,
        position: { lat: 50, lng: 50}
      }));
    }}
    key={type}
  />)

  return (
    <>
      <Tooltip title="Add hero" aria-label="add-hero">
        <StyledFab onClick={() => setOpen(true)}>
          <Add />
        </StyledFab>
      </Tooltip>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <AvatarChoicesContainer>{avatarChoices}</AvatarChoicesContainer>
      </Dialog>
    </>
  );
};


export default AvatarAdder;
