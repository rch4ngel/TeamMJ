import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import CustomTabs from "../CustomTabs/CustomTabs.jsx";

const styles = {
    textCenter: {
        textAlign: "center"
    }
};

class Tabs extends React.Component{
    render(){
        const { classes } = this.props;
        return (
            <div>
                <CustomTabs
                    headerColor="primary"
                    tabs={[
                        {
                            tabName: "Games",
                            tabContent: (
                                <p className={classes.textCenter}>
                                    Placeholder: Game instructions
                                </p>
                            )
                        },
                        {
                            tabName: "About DAssistant",
                            tabContent: (
                                <p className={classes.textCenter}>
                                    Placeholder: About DAssistant
                                </p>
                            )
                        }
                    ]}
                />
            </div>
        );
    }
}

export default withStyles(styles)(Tabs);