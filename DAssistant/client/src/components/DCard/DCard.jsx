import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "../Card/Card.jsx";
import CardBody from "../Card/CardBody.jsx";
import Button from "../CustomButtons/Button.jsx";

import imagesStyles from "../../assets/jss/material-kit-react/imagesStyles.jsx";

import { cardTitle } from "../../assets/jss/material-kit-react.jsx";

const style = {
    ...imagesStyles,
    cardTitle,
};

class Cards extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Card style={{width: "20rem"}}>
                <img
                    style={{height: "180px", width: "100%", display: "block"}}
                    className={classes.imgCardTop}
                    src={this.props.animalImg}
                    alt="Card-img-cap"
                />
                <CardBody>
                    <Button color="primary">{this.props.animal}</Button>
                </CardBody>
            </Card>
        );
    }
}

export default withStyles(style)(Cards);