// // export default function ToDo(props,isDone){
// //     return  (
// //         <li>Task: {props.task}</li>
// //     )
// // }
// export default function ToDo({ task, isDone, time = 0 }) {
//     if (isDone === true) {
//         return <li>Done {task} duration:{time}</li>
//     } else {
//         return <li>do now: {task}</li>
//     }
// }
// consitional randering: 3 ternary
// condition ? true : false

// export default function ToDo({ task, isDone, time = 0 }) {
//     return isDone ? <li>Done:{task} time:{time}</li> : <li>Not Done:{task}</li>
// }

// coditional rendering : 4 && 

// export default function ToDo({ task, isDone, time = 0 }) {
//     return isDone && <li>done Tasks: {task} time:{time}</li>
// }
// coditional rendering : 5 || 
// export default function ToDo({ task, isDone, time = 0 }) {
//     return isDone || <li>Not done Tasks: {task} time:{time}</li>
// }
// coditional rendering : 6 use a variable

// export default function ToDo({ task, isDone, time = 0 }) {
//     if (isDone === true) {
//         return null
//     } else {
//         return <li>do now: {task}</li>
//     }
// }