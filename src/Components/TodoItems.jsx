import ToDoItem from "./TodoItem";
const TodoItems = ({ items }) => {
  return (
    <div className="items-container">
      {items.map((i) => (
        <ToDoItem key={i} todoName={i.task} todoDate={i.date}></ToDoItem>
      ))}
    </div>
  );
};

export default TodoItems;
