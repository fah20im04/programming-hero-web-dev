import './App.css'
// import ToDo from './to-do'
import Actor from './Actor'

function App() {
  const actors = ['bappa raj', 'omar sani', 'salman shah']

  return (
    <>
      <h1>React Core Concept</h1>
      {
        actors.map(actor => <Actor key={actor} name={actor} />)
      }
    </>
  )
}

export default App



{/* <ToDo task='Learn React' isDone={true} time={time}></ToDo>
      <ToDo task='revise JS' isDone={false}></ToDo>
      <ToDo task='take a shower in React' isDone={true} time='100'></ToDo>

      <Person></Person>
      
      <Developer name= "hello" tech='js'></Developer>
      <Developer name='sabana' tech='python'></Developer>
      <Player name ='tamim' runs='5000'></Player>
      <Player name ='msuhi' runs='5000'></Player> */}


// function Player({ name, runs }) {
//   return (
//     <div className='student'>
//       <h3>name: {name} </h3>
//       <h3>Runs: {runs} </h3>
//     </div>
//   )
// }
// //const {name,tech} = {name:"hello",tech:'js'}

// function Developer(props) {
//   console.log(props)
//   return (
//     <div style={{
//       border: "2px solid green",
//       borderRadius: '20px'
//     }}>
//       <h3>Developer: {props.name}</h3>
//       <h3>Technology: {props.tech}</h3>
//     </div>
//   )
// }
// function Student() {
//   return (
//     <div className='student'>
//       <p>name:</p>
//       <p>department:</p>
//     </div>
//   )
// }
// function Person() {
//   const age = 17;
//   const name = 'Jolil'
//   const personsstyle = {
//     color: 'red',
//     fontSize: '30px',
//     textAlign: 'left'
//   }
//   return (
//     <p style={personsstyle}>i am a person {name} {age}</p>
//   )
// }
// function Sports() {
//   return (
//     <div>
//       <h3>I love cricket</h3>
//       <p>playing d loosing</p>
//     </div>
//   )
// }

