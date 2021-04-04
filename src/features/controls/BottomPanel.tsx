import React from 'react';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  Drawer,
  TextField,
  Tooltip,
  Fab,
} from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import { openBottomPanel } from './controlsSlice';
import FreeMarkerPosition from './FreeMarkerPosition';


const Container = styled.div`
  height: 20vh;
  width: auto;
  padding: 15px;
`;

const StyledFab = styled(Fab)`
  cursor: pointer;
  height: 60px;
  width: 60px;
`;

// const AvatarImage = styled.img`
//   height: 120px;
//   width: auto;
//   padding: 5px;
//   cursor: pointer;
// `;


const SidePanel = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();
  const isBottomPanelOpen = useAppSelector(state => state.controls.isBottomPanelOpen);

  const onSubmit = () => {};

  return (
    <>
      <Tooltip title="Add hero" aria-label="add-hero">
        <StyledFab onClick={() => dispatch(openBottomPanel())}>
          <Add />
        </StyledFab>
      </Tooltip>

      <Drawer open={isBottomPanelOpen} variant={'persistent'} anchor={'bottom'}>
        <Container>
          Add Avatar
          <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <TextField name="Name" label="Name" inputRef={register({ required: true })}/>
          </form>
          <br/>
          <FreeMarkerPosition />
        </Container>
      </Drawer>
    </>
  );
};

export default SidePanel;
