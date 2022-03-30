import { useState, useContext } from "react";
import {
    TextField,
    Grid,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@material-ui/core";
import useStyles from "./style";
import { ExpenseTrackerContext } from "../../../context/context";
import { v4 as uuidv4 } from "uuid";
import {
    incomeCategories,
    expenseCategories,
} from "../../../constants/categories";
import formatDate from "../../../utils/formatDate";

const Form = () => {
    const inititalState = {
        amount: "",
        category: "",
        type: "Income",
        date: formatDate(new Date()),
    };
    const [formData, setFormData] = useState(inititalState);
    const { addTransaction } = useContext(ExpenseTrackerContext);

    const classes = useStyles();

    const handleChange = ({ target }) => {
        setFormData((prevState) => ({
            ...prevState,
            [target.id]: target.value,
        }));
    };

    const createTransaction = () => {
        const transaction = {
            ...formData,
            amount: Number(formData.amount),
            id: uuidv4(),
        };

        addTransaction(transaction);
        setFormData(inititalState);
    };

    const selectedCategories =
        formData.type === "Income" ? incomeCategories : expenseCategories;

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select
                        value={formData.type}
                        onChange={({ target }) =>
                            setFormData({ ...formData, type: target.value })
                        }
                    >
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select
                        id="category"
                        value={formData.category}
                        onChange={({ target }) =>
                            setFormData({ ...formData, category: target.value })
                        }
                    >
                        {selectedCategories.map((c) => (
                            <MenuItem key={c.type} value={c.type}>
                                {c.type}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    type="number"
                    label="Amount"
                    fullWidth
                    id="amount"
                    onChange={handleChange}
                    value={formData.amount}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    type="date"
                    label="Date"
                    fullWidth
                    id="date"
                    onChange={({ target }) =>
                        setFormData({
                            ...formData,
                            date: formatDate(target.value),
                        })
                    }
                    value={formData.date}
                />
            </Grid>
            <Button
                className={classes.button}
                variant="outlined"
                color="primary"
                fullWidth
                onClick={createTransaction}
            >
                Create
            </Button>
        </Grid>
    );
};

export default Form;
