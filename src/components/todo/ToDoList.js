import ToDo from './ToDo';

function ToDoList(props) {
  return (
    <ul>
      {props.activities.map((activity) => (
        <ToDo
          key={activity.id}
          id={activity.id}
          selectedDay={props.selectedDay}
          title={activity.title}
          description={activity.description}
          address={activity.address}
          expenses={activity.expenses}
          links={activity.links}
          eventDate={activity.eventDate}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
