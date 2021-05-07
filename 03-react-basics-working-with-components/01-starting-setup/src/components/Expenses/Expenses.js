import React, { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [selected, setSelected] = useState("2021");

  const onChangeFilterHandler = (event) => {
    setSelected(event);
  };
  const expensesFilter = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selected;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          value={selected}
          onChangeFilter={onChangeFilterHandler}
        />
        <ExpensesList items={expensesFilter} />
      </Card>
    </li>
  );
};

export default Expenses;
