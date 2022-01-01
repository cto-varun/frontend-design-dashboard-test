import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import styledComponents from "styled-components";
import Logo from "../assets/svg/logo.svg";
import Profile from "../assets/svg/profile.svg";
import tw from "tailwind-styled-components";
import MenuIcon from '../assets/svg/menu.svg';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  background: "#ffffff",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `100%`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Appbar(props) {
  const { open, setOpen } = props;
  return (
    <AppBar position="absolute" open={open}>
      <Toolbar
        sx={{
          pr: "24px",
        }}
      >
        <Wrapper>
          <Left>
            <IconButton
              edge="start"
              aria-label="open drawer"
              onClick={() => {
                setOpen();
              }}
            >
              {/* <MenuIcon /> */}
              <LogoImg src={MenuIcon} height="30" width="30"/>
            </IconButton>
          </Left>
          <Center>
            <LogoImg src={Logo} />
          </Center>
          <Right>
            <LogoImg src={Profile} />
            {/* <IconButton color="primary">
              <Badge badgeContent={4} color="primary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
          </Right>
        </Wrapper>
      </Toolbar>
    </AppBar>
  );
}

const LogoImg = styledComponents.img``;
const Wrapper = tw.div`
    flex
    justify-between
    w-full
`;

const Left = tw.div``;
const Center = tw.div``;
const Right = tw.div`
    flex
`;
