// export default function ToDo({task}) {
//   return (
//     <li>task: {task}</li>
//   );
// }

// export default function toDo({ task, isDone }) {
//   if (isDone === true){
//     return <li>Done: {task}</li>
//   } else{
//     return <li>do now : {task}</li>
//   }
// }

export default function toDo({ task, isDone }) {
  if (isDone === true) {
    return <li>Done: {task}</li>
  }
  return <li>do now : {task}</li>

}