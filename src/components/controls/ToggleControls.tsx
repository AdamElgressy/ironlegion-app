import styled from "@emotion/styled";
import { Tooltip, Fab } from "@material-ui/core";
import Add from "@material-ui/icons/Add";

const ToggleControls = (props: any) => {
  const { openPanel } = props;

  return (
    <Tooltip title="Add hero" aria-label="add-hero">
      <StyledFab onClick={() => openPanel()}>
        <Add />
      </StyledFab>
    </Tooltip>
  );
};

const StyledFab = styled(Fab)`
  cursor: pointer;
  height: 60px;
  width: 60px;
`;

export default ToggleControls;
