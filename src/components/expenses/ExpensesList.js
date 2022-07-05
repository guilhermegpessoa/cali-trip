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
          <Expenses
            key="total"
            id="tota"
            title="Total"
            expenses={totalExpenses}
          />
        </tbody>
      </table>
    </div>
  );

  // return (
  //   <>
  //     <h2>Gastos</h2>
  //     <ul>
  //       {props.expenses.map((expense) => (
  //         <Expenses
  //           key={expense.id}
  //           id={expense.id}
  //           title={expense.title}
  //           expenses={expense.expenses}
  //         />
  //       ))}
  //       <Expenses
  //         key="total"
  //         id="tota"
  //         title="Total"
  //         expenses={totalExpenses}
  //       />
  //     </ul>
  //   </>
  // );
}

export default ExpensesList;