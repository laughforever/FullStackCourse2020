import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

//定义组件，组件的首字母必须大写
const Header = (props) => {
return <h1>{props.course}</h1>   
}

const Content = (props) => {
    return  (
      <div>
      <p>{props.parts[0].name},{props.parts[0].exercises}</p>
      <p>{props.parts[1].name},{props.parts[1].exercises}</p>
      <p>{props.parts[2].name},{props.parts[2].exercises}</p>
      </div>
    )
}

const Total = (props) => (
  <div>
    <p>
      练习题总数为：{props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}
    </p>
  </div>
)

const App = () => {
  const course = 'Full Stack application development'
  const parts = [
  {
    name:'Fundamentals of React',
    exercises:10
  },
  {
    name:'Using props to pass data',
    exercises: 7
  },
  {
    name:'State of a component',
    exercises:14
  }
]
  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


