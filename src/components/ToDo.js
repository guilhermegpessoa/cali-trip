function ToDo(props) {

  const selectedDay = props.selectedDay.getDate();
  const eventDate = props.eventDate.getDate();
  
  if (selectedDay === eventDate) { 
    return (
        <li>
            <div className="card">
            <h2>{props.title}</h2>
            <a href={props.links}>{props.links}</a>
            <p>{props.description}</p>
            <address>{props.address}</address>
            <p>{props.expenses}</p>
            </div>
        </li>
      );
  }
}

export default ToDo;
