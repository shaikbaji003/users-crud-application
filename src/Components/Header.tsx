import React, { useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import GroupSharpIcon from "@mui/icons-material/GroupSharp";
import "./Header.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Header: React.FunctionComponent<{
  data: any;
  setFilterdata: any;
  add: any;
  setAdd: any;
}> = ({ data, setFilterdata, add, setAdd }) => {
  const [search, setSearch] = React.useState("");

  const searchfunction = () => {
    setFilterdata(
      data.filter((e: any) =>
        e.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  };
  useEffect(() => {
    searchfunction();
  }, [search]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className="appbar">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            className="logo"
          >
            <GroupSharpIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Users Data
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </Search>
          <Button
            variant="contained"
            color="success"
            className="btn_add"
            onClick={() => {
              setAdd(!add);
            }}
          >
            Add
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
