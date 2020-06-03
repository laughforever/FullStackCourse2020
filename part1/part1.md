# FullStackCourse2020
深入浅出现代Web编程
https://fullstackopen.com/zh/
___
## <a name="part1a">a.React简介</a>
创建一个名为part1的react应用，并进入到它的目录：
```
npx create-react-app part1
cd part1
```
让应用运行起来：`npm start` 
默认情况下，应用在本地localhost，3000端口运行，地址为 http://localhost:3000   
应用的代码位于src 文件夹中。 让我们简化一下默认代码，将文件index.js 的内容改成: 
```javascript
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => (
  <div>
    <p>Hello world</p>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
```
文件index.js 定义了一个 React-组件component ，命名为App, React 组件名称必须大写。  

props：向组件传递数据,向Hello组件中传递参数  
```js
const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}
```

`<div></div>`元素可以用空元素`<></>`代替。  
