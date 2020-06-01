import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

//定义组件，组件的首字母必须大写
const Header = (props) => (
  <div>
    <p>
      课程的名字是{props.course}
    </p>
  </div>
)

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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content name={part1} num={exercises1}/>
      <Content name={part2} num={exercises2}/>
      <Content name={part3} num={exercises3}/>
      <Total num={exercises1+exercises2+exercises3}/>
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
