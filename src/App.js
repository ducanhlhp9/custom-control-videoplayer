import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ReactPlayer from 'react-player';
import PlayerControls from "./components/PlayerControls";

const useStyles = makeStyles({
    playerWrapper: {
        width: "100%",
        position: "relative",
    },
});


function App() {
    const classes = useStyles();
    const [anchorEl, , setAnchorEl] = React.useState(null);

    const handlePopover = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'playbackrate-popover' : undefined;
    return (
        <>
            <AppBar pposition={"fixed"}>
                <Toolbar>
                    <Typography>React video Player</Typography>
                </Toolbar>
            </AppBar>
            <Toolbar/>
            <Container maxWidth="md">
                <div className={classes.playerWrapper}>
                    <ReactPlayer
                        width={"100%"}
                        height={"100%"}
                        url="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                        muted={false}
                        playing={true}
                    />
                    <PlayerControls/>
                </div>
            </Container>
        </>
    );
}

export default App;
