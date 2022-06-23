import "./PersonListItem.css";

const PersonListItem = props => {
  return (
    <li
      className={`PersonListItem ${props.isSelected && "selected"}`}
      onClick={() => props.onListItemClick(props.personIndex)}
    >
      {props.name}
    </li>
  );
};

export default PersonListItem;
