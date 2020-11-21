import React, { useContext } from "react";
import "./Header.css";
import { Button, Menu } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import { auth } from "../../Firebase";
import ProfileContext from "../../contexts/ProfileContext";
import DarkToggle from "./DarkToggle";

function Sidebar() {
  const profileinfo = useContext(ProfileContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className="Header_Sidebar">
      <DarkToggle />
      {profileinfo ? (
        <div>


          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <span className="LoggedIn_Info">Profile</span>
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>{profileinfo.displayName}</MenuItem>
            <MenuItem onClick={() => auth.signOut()}>Logout</MenuItem>
          </Menu>
        </div>
      ) : (
          <></>
        )}
    </div>
  );
}

export default Sidebar;
