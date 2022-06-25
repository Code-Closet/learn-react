import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses(props) {
    //const expenses = props.expenses;

    return (
        <div className="expenses">
            {props.expenses.map(e => <ExpenseItem title={e.title} amount={e.amount} date={e.date}/>)}            
        </div>
    )
}

export default Expenses;