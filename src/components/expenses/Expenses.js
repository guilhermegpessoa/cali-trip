function Expenses(props) {
  return (
    <tr>
        <td>{props.title}</td>
        <td>${props.expenses}</td>
    </tr>
  );
  // return (
  //   <li>
  //     <div className="card">
  //       <h4>{props.title}</h4>
  //       <p>${props.expenses}</p>
  //     </div>
  //   </li>
  // );
}

export default Expenses;
