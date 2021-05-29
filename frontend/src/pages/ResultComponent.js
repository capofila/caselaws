import React from 'react'
import { Route, Switch } from "react-router";

import Judgement from './Judgement'
import './style.css'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

// This component is used by Browse action
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1280,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const Test = () => {
    <>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    </>
}


export default function ResultComponent({ judgementData }) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root} >
            <CardHeader
                // avatar={
                //     <Avatar aria-label="recipe" className={classes.avatar}>
                //         {judgementData.court_name.split(' ')[0].split('')[0]}
                // </Avatar>
                // }

                title={<h1>{judgementData.case_title}</h1>}
                subheader={<h2>{judgementData.court_name + ' By : ' + judgementData.judge_name}</h2>}
            />
            {/* <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
                title="Paella dish"
            /> */}
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <h3> Petitioner : {judgementData.petitioner_name} </h3>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <h3> Respondent : {judgementData.respondent_name} </h3>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <h4> Date of Judgement : {judgementData.date_of_judgement}</h4>
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {/* <Typography className={classes.root}>
                    <Link href={'/judgement/' + judgementData.case_title.replace(/\s+/g, '-').toLowerCase()} color="inherit">Read More</Link>
                </Typography> */}

                <Link component={RouterLink} to={'/judgement/' + judgementData.court_name.replace(/\s+/g, '-').toLowerCase() + '/' + judgementData.case_title.replace(/\s+/g, '-').toLowerCase()}>
                    {/* Read More */}
              </Link>
                
                <Switch>
                    <Route exact path={'/judgement/' + judgementData.court_name.replace(/\s+/g, '-').toLowerCase() +'/'+ judgementData.case_title.replace(/\s+/g, '-').toLowerCase()}
                        component={() => (<Test></Test>)}>                        
                    </Route>
                </Switch>

                {/* <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton> */}
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        <div dangerouslySetInnerHTML={{ __html: judgementData.judgement_html }} />
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}