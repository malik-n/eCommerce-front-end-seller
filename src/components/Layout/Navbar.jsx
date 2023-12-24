import * as React from "react";
//MUI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

//   let location = useLocation(false);

//   return (
//     <nav>
//       <div className="logo">
//         <StorefrontIcon />
//       </div>
//       <h1>Dashboard</h1>
//       <button></button>
//       {location.state?.isLoggedIn ? (
//         <Link to="/login">
//           <Stack spacing={2} direction="row">
//             <Button variant="contained">Add Product</Button>
//           </Stack>
//         </Link>
//       ) : (
//         <>
//           <Link to="/login">
//             <button>Login</button>
//           </Link>
//           <Link to="/signup">
//             <button>SignUp</button>
//           </Link>
//         </>
//       )}
//     </nav>

//   );
// };

// export default Navigation;

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
            {/*Add logo here*/}

            <Link to={"/"}>Go to Dashboard</Link>
            <Link to={"/addproduct"}>Add Product</Link>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={handleOpenMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
              >
                <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
                <MenuItem onClick={handleCloseMenu}>Account</MenuItem>
                <MenuItem onClick={handleCloseMenu}>Logout</MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
        <Link to="/login">
          <Button variant="contained">Login</Button>
        </Link>
        <Link to="/signup">
          <Button variant="contained">SignUp</Button>
        </Link>
      </AppBar>
    </>
  );
}

export default Navbar;
