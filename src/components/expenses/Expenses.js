function Expenses(props) {
  return (
    <tr>
        <td>{props.title}</td>
        <td>${props.expenses}</td>
    </tr>
  );
}

export default Expenses;
