const TaskCard = ({ task, index }) => {
    return (
      <div className="bg-white p-3 mb-2 rounded shadow">
        <h3 className="font-medium">{task.title}</h3>
        <p className="text-sm text-gray-600">{task.description}</p>
      </div>
    );
  };
  
  export default TaskCard;