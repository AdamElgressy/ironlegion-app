import React, { useState } from 'react';
import styled from '@emotion/styled';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import {
  Drawer,
  TextField,
  Tooltip,
  Fab,
} from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import { openBottomPanel } from '../controlsSlice';
import FreeMarkerPosition from '../FreeMarkerPosition';
import Avatars from './Avatars';
import { addAvatar } from '../../avatars/avatarsSlice';



const DrawerContentContainer = styled.div`
  color: gray;
  background-color: #282828;
  display: flex;
  flex-direction: row;
  height: 25vh;
`;


const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25vh;
`;

const StyledFab = styled(Fab)`
  cursor: pointer;
  height: 60px;
  width: 60px;
`;

interface Input {
  name: string
}

const SidePanel = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();
  const freeMarkerPosition = useAppSelector(state => state.controls.freeMarkerPosition);
  const isBottomPanelOpen = useAppSelector(state => state.controls.isBottomPanelOpen);
  const [type, setType] = useState('THOR');

  const onSubmit = (input: Input) => {
    dispatch(addAvatar({
      uuid: uuidv4(),
      name: input.name,
      type: type,
      position: freeMarkerPosition
    }));
  };

  return (
    <>
      <Tooltip title="Add hero" aria-label="add-hero">
        <StyledFab onClick={() => dispatch(openBottomPanel())}>
          <Add />
        </StyledFab>
      </Tooltip>

      <Drawer open={isBottomPanelOpen} variant={'persistent'} anchor={'bottom'}>
        <DrawerContentContainer>
          <InputContainer>
            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
              <TextField name="name" label="Name" required inputRef={register({ required: true, maxLength: 20 })}/>
              <br/>
            <div>
              <FreeMarkerPosition />
            </div>
            <br/>
              <input type="submit" value="Add"/>
            </form>

          </InputContainer>
          <div style={{padding: "15px", flexGrow: 2}}>
            <Avatars defaultType={type} setType={setType} />
          </div>


        </DrawerContentContainer>
      </Drawer>
    </>
  );
};

export default SidePanel;
