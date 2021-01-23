import { useState } from "react";
import { Drawer } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const SidePanel = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("#505050");

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        style={{
          width: "100%",
          height: "100%",
          cursor: "pointer",
          backgroundColor: color,
          color: "#D1D1D1",
          display: "flex",
          alignItems: "center",
        }}
        onMouseOver={() => setColor("#686868")}
        onMouseOut={() => setColor("#505050")}
      >
        <ArrowForwardIosIcon />
      </div>
      <Drawer anchor={"left"} open={open} onClose={() => setOpen(false)}>
        <div
          style={{
            backgroundColor: "#686868",
            color: "#D1D1D1",
            width: "200px",
            height: "100%",
            padding: "10px",
          }}
        >
          Here we will be able to control our heroes.
        </div>
      </Drawer>
    </>
  );
};

export default SidePanel;
