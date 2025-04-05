import { Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';

const Column = ({ provided, columnId, tasks }) => {
  return (
    <div
      {...provided.droppableProps}
      ref={provided.innerRef}
      className="bg-gray-100 p-4 rounded w-64"
    >
      <h2 className="font-bold mb-2">{columnId}</h2>
      {tasks.map((task, index) => (
        <TaskCard key={task.id} task={task} index={index} />
      ))}
      {provided.placeholder}
    </div>
  );
};

export default Column;