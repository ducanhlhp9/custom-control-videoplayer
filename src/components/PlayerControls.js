import React from "react"
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import IconButton from "@material-ui/core/IconButton";
import FastRewindIcon from "@material-ui/icons/FastRewind";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FastForwardIcon from "@material-ui/icons/FastForward";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import Slider from "@material-ui/core/Slider";
import Popover from "@material-ui/core/Popover";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles({
    // playerWrapper: {
    //     width: "100%",
    //     position: "relative",
    // },
    controlsWrapper: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.6)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        zIndex: 1
    },
    controlIcons: {
        color: "#777",
        fontsize: 50,
        transform: "scale(0.9)",
        "$:hover": {
            color: "#fff",
            transform: "scale(1)"
        }
    },
    bottomIcons: {
        color: "#999",
        "&:hover": {
            color: "#fff"
        }
    },

    volumeSlider: {
        width: 100
    }
});

function ValueLabelComponent(props) {
    const {children, open, value} = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

// material slider
const PrettoSlider = withStyles({
    root: {
        color: '#52af77',
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);
export default ()=>{
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopover = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'playbackrate-popover' : undefined;
    return (
        <div className={classes.controlsWrapper}>
            <Grid container direction="row" alignItems={"center"} justify={"space-between"}
                  style={{padding: 16}}>
                <Grid item>
                    <Typography variant={"h5"} style={{color: "#fff"}}>Video title</Typography>
                </Grid>

                <Grid item>
                    <Button variant="contained"
                            color="primary"
                            startIcon={<BookmarkIcon/>}
                    >
                        Bookmark
                    </Button>
                </Grid>
            </Grid>
            {/*middle controls*/}
            <Grid container direction="row" alignItems="center" justify={"center"}>
                <IconButton className={classes.controlIcons} aria-label={"reqind"}>
                    <FastRewindIcon fontSize={"inherit"}/>
                </IconButton>
                <IconButton className={classes.controlIcons} aria-label={"reqind"}>
                    <PlayArrowIcon fontSize={"inherit"}/>
                </IconButton>
                <IconButton className={classes.controlIcons} aria-label={"reqind"}>
                    <FastForwardIcon fontSize={"inherit"}/>
                </IconButton>
            </Grid>
            {/*bottom control*/}
            <Grid
                container direction={"row"}
                justify={"space-between"}
                alignItems={"center"}
                style={{padding: 16}}>
                <Grid item xs={12}>
                    <PrettoSlider min={0} max={100} defaultValue={20}
                                  ValueLabelComponent={ValueLabelComponent}/>
                </Grid>
                <Grid item>
                    <Grid container alignItems={"center"} direction={"row"}>
                        <IconButton className={classes.bottomIcons}>
                            <PlayArrowIcon fontSize={"large"}/>
                        </IconButton>
                        <IconButton className={classes.bottomIcons}>
                            <VolumeUpIcon fontSize={"large"}/>
                        </IconButton>

                        <Slider
                            min={0}
                            max={100}
                            defaultValue={100} className={classes.volumeSlider}/>

                        <Button
                            variant={"text"}
                            style={{color: "#fff", marginLeft: 16}}>
                            <Typography>05:05</Typography>
                        </Button>
                    </Grid>

                </Grid>
                <Grid item>
                    <Button onClick={handlePopover} variant={"text"} className={classes.bottomIcons}>
                        <Typography>1X</Typography>
                    </Button>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                    >
                        <Grid container direction={"column reverse"}>
                            {[0.5, 1, 1.5, 2].map(rate => (<Button variant={"text"}>
                                <Typography color={"secondary"}>{rate}</Typography>
                            </Button>))}
                        </Grid>
                    </Popover>
                    <IconButton className={classes.bottomIcons}>
                        <FullscreenIcon fontSize={"large"}/>
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    )

}