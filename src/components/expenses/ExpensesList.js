import Expenses from './Expenses';
import classes from './ExpensesList.module.css';

function ExpensesList(props) {
  let totalExpenses = 0;
  props.expenses.map(
    (expense) => (totalExpenses = totalExpenses + expense.expenses)
  );

  return (
    <div className={classes.expensetable}>
      <table>
        <tbody>
          <tr>
            <th>Descrição</th>
            <th>Valor</th>
          </tr>
          {props.expenses.map((expense) => (
            <Expenses
              key={expense.id}
              id={expense.id}
              title={expense.title}
              expenses={expense.expenses}
            />
          ))}
          <tr>
            <td className={classes.total}>Total</td>
            <td className={classes.total}>${totalExpenses}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ExpensesList;
