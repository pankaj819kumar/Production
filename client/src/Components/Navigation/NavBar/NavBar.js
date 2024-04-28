// Hooks
import { useState, useContext } from "react";
import { UserContext } from "../../../Context/userContext";
import { useNavigate } from "react-router-dom";

// MUI Components
import { Box, Stack, AppBar, Toolbar } from "@mui/material";
import { Typography, Button, Avatar } from "@mui/material";

// custom css
import "../Navigation.css";

// custom components
import NavMenu from "../NavMenu/NavMenu";

const NavTitle = () => {
  // calling hooks
  const navigate = useNavigate();
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      sx={{ cursor: "pointer", flexGrow: 1 }}
      onClick={() => navigate("/")}
    >
      <Avatar
        alt="IIIT Lucknow"
        src="/favicon.ico"
        sx={{ bgcolor: "white", height: 35, width: 35 }}
      />
      <Typography variant="body1" component="div" sx={{ flexGrow: 1, fontFamily: "nunito" }}>
        Placement Portal
      </Typography>
    </Stack>
  );
};

const NavBar = () => {
  // user context
  const [user, setUser] = useContext(UserContext);

  // calling hooks
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" className="NavBar">
      <Toolbar sx={{ height: 48 }}>
        <NavTitle />
        {user && <NavMenu />}
        {!user && (
          <Button className="NavBar-Login-Btn" onClick={() => navigate("/Login")}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
