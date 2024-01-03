import React from "react";
import { Button, Popover, Tooltip } from "@mui/material/index";

interface PopoverButtonProps {
  icon: JSX.Element;
  content: JSX.Element;
  title: string;
}

const PopoverButton = ({ icon, content,title }: PopoverButtonProps) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  return (
    <>
      <Tooltip placement="bottom" title={title}>
        <Button
          color="inherit"
          variant="outlined"
          aria-owns={open ? "popover-filter" : undefined}
          onClick={handlePopoverOpen}
        >
          {icon}
        </Button>
      </Tooltip>
      <Popover
        id="popover-filter"
        anchorEl={anchorEl}
        open={open}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        {content}
      </Popover>
    </>
  );
};

export default PopoverButton;
