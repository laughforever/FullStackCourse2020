import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

//定义组件，组件的首字母必须大写
const Header = (props) => {
return <h1>{props.course}</h1>   

}

const Content = (props) => (
  <div>
    <p>
      课程：{props.name},练习题有{props.num}个。
    </p>
  </div>
)

const Total = (props) => (
  <div>
    <p>
      练习题总数为：{props.num}
    </p>
  </div>
)

const App = () => {
  const course = 'Full Stack application development'
  const part1 = {
    name:'Fundamentals of React',
    exercises:10
  }
  const part2 = {
    name:'Using props to pass data',
    exercises: 7
  }    
  const part3 = {
    name:'State of a component',
    exercises:14
  }

  return (
    <div>
      <Header course={course}/>
      <Content name={part1.name} num={part1.exercises}/>
      <Content name={part2.name} num={part2.exercises}/>
      <Content name={part3.name} num={part3.exercises}/>
      <Total num={part1.exercises+part2.exercises+part3.exercises}/>
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
