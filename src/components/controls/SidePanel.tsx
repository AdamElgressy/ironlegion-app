import { useState } from "react";
import { Drawer } from "@material-ui/core";
import ToggleControls from "./ToggleControls";
import HeroAdder from "./HeroAdder";

const SidePanel = (props: any) => {
  const { addHero } = props;

  const [open, setOpen] = useState(false);

  return (
    <>
      <ToggleControls openPanel={() => setOpen(true)} />

      <Drawer anchor={"left"} open={open} onClose={() => setOpen(false)}>
        <div
          style={{
            backgroundColor: "#686868",
            color: "#D1D1D1",
            width: "300px",
            height: "100%",
            padding: "10px",
          }}
        >
          <HeroAdder addHero={addHero} />
        </div>
      </Drawer>
    </>
  );
};

export default SidePanel;
