import React from 'react';
import styled from '@emotion/styled';
import { useAppDispatch } from '../../../store/hooks';
import { Tooltip, Fab } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import { openBottomPanel } from '../controlsSlice';


const StyledFab = styled(Fab)`
  cursor: pointer;
  height: 60px;
  width: 60px;
`;


const TogglePanel = () => {
  const dispatch = useAppDispatch();

  return (
    <Tooltip title="Add avatar" aria-label="add-avatar">
      <StyledFab onClick={() => dispatch(openBottomPanel())}>
        <Add />
      </StyledFab>
    </Tooltip>
  );
}


export default TogglePanel;
