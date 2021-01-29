import { Tooltip, Fab } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";

const ToggleControls = (props: any) => {
  const { openPanel } = props;
  const [color, setColor] = useState("gray");

  return (
    <div>
      <Tooltip title="Controls" aria-label="controls">
        <Fab
          onClick={() => openPanel()}
          onMouseOver={() => setColor("white")}
          onMouseOut={() => setColor("gray")}
          style={{
            cursor: "pointer",
            height: "60px",
            width: "60px",
            color: color,
          }}
        >
          <MenuIcon style={{ fontSize: "40px" }} />
        </Fab>
      </Tooltip>
    </div>
  );
};

export default ToggleControls;
