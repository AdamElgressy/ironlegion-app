import React, { useState } from 'react';
import styled from '@emotion/styled';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import {
  Drawer,
  TextField,
  Grid,
  Button,
} from '@material-ui/core';
import FreeMarkerPosition from '../FreeMarkerPosition';
import Avatars from './Avatars';
import { addAvatar } from '../../avatars/avatarsSlice';


const DrawerContentContainer = styled.div`
  color: gray;
  display: flex;
  flex-direction: row;
  height: 25vh;
  margin: 15px;
  box-sizing: border-box;
  overflow-y: none;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
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
    <Drawer open={isBottomPanelOpen} variant={'persistent'} anchor={'bottom'}>
      <DrawerContentContainer>
      <Grid container style={{height: "100%" }}>
        <Grid item xs={2} style={{height: "100%" }}>
          <StyledForm autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              name="name"
              label="Name"
              required
              inputRef={register({ required: true, maxLength: 20 })}
            />
            <FreeMarkerPosition />
            <Button type="submit">Add</Button>
          </StyledForm>
        </Grid>

        <Grid item xs={10} style={{
          overflowY: 'hidden',
          overflowX: 'auto',
          height: '100%',
          padding: '10px'
        }}>
          <Avatars defaultType={type} setType={setType} />
        </Grid>
      </Grid>


      </DrawerContentContainer>
    </Drawer>
  );
};

export default SidePanel;
