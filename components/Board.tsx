import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { moveTask } from '../store/tasksSlice';
import Column from './Column';

const Board = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    if (!result.destination) return;
    dispatch(
      moveTask({
        taskId: result.draggableId,
        fromColumn: result.source.droppableId,
        toColumn: result.destination.droppableId,
        newIndex: result.destination.index,
      })
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex gap-4 p-4">
        {['To Do', 'In Progress', 'Done'].map((columnId) => (
          <Droppable key={columnId} droppableId={columnId}>
            {(provided) => (
              <Column
                provided={provided}
                columnId={columnId}
                tasks={tasks[columnId]}
              />
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Board;