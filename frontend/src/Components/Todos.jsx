/* eslint-disable react/prop-types */
function Todos({todos}){

    return(
        <div>
           {todos.map(function(todo, index){
            return (
                <div key={index} style={{ padding:10,}}>
                    <h2>{todo.title}</h2>
                    <h3>{todo.description}</h3>
                    <button>{todo.completed ? "Completed": "Mark as Complete"}</button>
                </div>
            )
           })}
        </div>
    )
}

export {Todos}