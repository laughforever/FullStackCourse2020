## <a name="a">React简介</a>
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

 

## <a name ="b">Javascript</a>

#### 变量 Variables

在 JavaScript 中有以下几种定义变量的方法:  `const`定义了一个*常量*，也就是其值不能再更改了。`let`定义了一个普通变量。

```js
const x = 1
let y = 5

console.log(x, y)   // 1, 5 are printed
y += 10
console.log(x, y)   // 1, 15 are printed
y = 'sometext'
console.log(x, y)   // 1, sometext are printed
x = 4               // causes an error
```

#### 数组 Arrays

```js
const t = [1, -1, 3]

t.push(5)

console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed

t.forEach(value => {
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each to own line
}) 
```

即使将数组用` const` 定义，也可以修改该数组中的内容,遍历元素的一种方法是使用 *forEach* ， *forEach* 接收一个函数作为入参，这个函数用到了箭头语法。forEach 为数组中的每个元素调用了这个函数。  

 在使用 React 时，经常使用函数式编程的技巧。 函数编程范型的一个特点，就是使用不可变的数据结构。 在React代码中，最好使用[concat](https://developer.mozilla.org/en-us/docs/web/javascript/reference/global_objects/array/concat)方法 ，因为它不向数组中添加元素，而是创建一个新数组，新数组中包含了旧数组和新的元素。

```js
const t = [1, -1, 3]

const t2 = t.concat(5)

console.log(t)  // [1, -1, 3] is printed
console.log(t2) // [1, -1, 3, 5] is printed
```

[map](https://developer.mozilla.org/en-us/docs/web/javascript/reference/global_objects/array/map)方法

```js
const t = [1, 2, 3]

const m1 = t.map(value => value * 2)
console.log(m1)   // [2, 4, 6] is printed
```

```js
const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)  
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed
```

[解构赋值]()

```js
const t = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t

console.log(first, second)  // 1, 2 is printed
console.log(rest)          // [3, 4 ,5] is printed
```

#### 对象 Objects

定义  用[对象字面量](https://developer.mozilla.org/en-us/docs/web/javascript/guide/grammar_and_types#object_literals) ，就是通过在大括号中列出它的属性来实现

```js
const object1 = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
}

const object2 = {
  name: 'Full Stack web application development',
  level: 'intermediate studies',
  size: 5,
}

const object3 = {
  name: {
    first: 'Dan',
    last: 'Abramov',
  },
  grades: [2, 3, 5, 3],
  department: 'Stanford University',
}
```

对象的属性可以使用  .  句点或 [ ] 方括号进行引用:

```js
console.log(object1.name)         // Arto Hellas is printed
const fieldName = 'age' 
console.log(object1[fieldName])    // 35 is printed
```

使用句点符号 或 方括号 来动态地往对象中添加属性:

```js
object1.address = 'Helsinki'
object1['secret number'] = 12341
```

后面的那个属性的添加必须通过使用中括号来完成，因为在使用点符号的话，带空格的*secret number*并不是一个合法的属性名。

#### 函数 Function

箭头函数

```js
const sum = (p1, p2) => {
  console.log(p1)
  console.log(p2)
  return p1 + p2
}

const result = sum(1, 5)
console.log(result)

//只有一个参数
const square = p => p * p

//操作数组的时候，使用map方法
const t = [1, 2, 3]
const tSquared = t.map(p => p * p)
// tSquared is now [1, 4, 9]

```

定义函数function

```js
//函数声明
function product(a, b) {
  return a * b
}

const result = product(2, 6)
// result is now 12


//函数表达式
const average = function(a, b) {
  return (a + b) / 2
}

const result = average(2, 5)
// result is now 3.5
```

#### 对象方法以及“this”关键字 Object methods and "this"


