import styled from '@emotion/styled';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { Drawer } from '@material-ui/core';
import Remove from '@material-ui/icons/Remove';
import { unSelectAvatar } from './controlsSlice';
import MissionAdder from './MissionAdder';


const Container = styled.div`
  height: 200px;
  width: 100%;
`;

// const StyledImage = styled.img`
//   height: 60%;
//   width: 'auto';
// `;


const BottomPanel = () => {
 // const avatars = useAppSelector(state => state.avatars);
  const selectedAvatar = useAppSelector(state => state.controls.selectedAvatar);
  const dispatch = useAppDispatch();

  const open = selectedAvatar ? true: false;

  return (
    <Drawer open={open} variant={'persistent'} anchor={'bottom'}>
      <Container>
        <Remove onClick={() => dispatch(unSelectAvatar())} />
        <MissionAdder />
      </Container>
    </Drawer>
  );
};

export default BottomPanel;
