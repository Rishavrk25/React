function TodoItem({todoName,todoDate,handleDelete}){
  return(
    <div className="w-full flex justify-around text-2xl">
          <div className="w-40 ">
            <h1 className="text-center">{todoName}</h1>
          </div>
          <div className="w-40 ">
            <h1 className="text-center">{todoDate}</h1>
          </div>
          <div className="w-20 text-center ">
            <button className="bg-red-600 p-1 rounded text-white text-xl w-20" onClick={()=>handleDelete(todoName)}>Delete</button>
          </div>
        </div>
  );
}
export default TodoItem;