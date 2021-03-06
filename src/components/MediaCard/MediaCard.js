import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ShareIcon from "@material-ui/icons/Share";
import Heart from "react-animated-heart";



export function MediaCard({ url, description, image, name }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "100%",
      fontFamily: 'Arapey'
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
  }));
  const classes = useStyles();
  const [click, setClick] = useState(false);

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton
            aria-label="open new window"
            onClick={() => {
              window.open(url, "_blank");
            }}
          >
            shop
          </IconButton>
        }
        title={name}
      />
      <CardMedia className={classes.media} image={image} title={name} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Heart isClick={click} onClick={() => setClick(!click)} />
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
