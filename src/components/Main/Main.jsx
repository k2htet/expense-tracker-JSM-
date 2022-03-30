import {
    Card,
    CardHeader,
    CardContent,
    Typography,
    Grid,
    Divider,
} from "@material-ui/core";
import Form from "./Form/Form";
import List from "./List/List";
import useStyles from "./style";
import { useContext } from "react";
import { ExpenseTrackerContext } from "../../context/context";

const Main = () => {
    const { balance } = useContext(ExpenseTrackerContext);
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Power by speechly" />
            <CardContent>
                <Typography align="center" variant="h5">
                    Total Balance ${balance}
                </Typography>
                <Divider className={classes.divider} />
                <Form />
            </CardContent>
            <CardContent className={classes.CardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default Main;
