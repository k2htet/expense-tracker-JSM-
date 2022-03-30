import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ExpenseTrackerProvider from "./context/context";

ReactDOM.render(
    <ExpenseTrackerProvider>
        <App />
    </ExpenseTrackerProvider>,
    document.getElementById("root")
);
