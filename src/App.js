import logo from './logo.svg';
import './App.css';
import React from 'react';

//function App(props) {
// console.log("props value: +props.color")
function App() {
/*  let firstVariable=3;
  console.log("firstVariable:" +firstVariable)
  firstVariable=5;
  console.log("firstVariable:"+firstVariable)

  var secondVariable=8;
  console.log("secondVariable:" +secondVariable)
  firstVariable=9;
  console.log("secondVariable:"+secondVariable)

  const thirdVariable=7;
  console.log("thirdVariable:" +thirdVariable)
  firstVariable=4;
  console.log("firstVariable:"+thirdVariable) */




 /* let sayhello=()=>console.log("hello, how are you")
  console.log(sayhello());
  setTimeout(sayhello,2000) */


  class Student{
    Name 
    Id
    Branch
    constructor(Name,Id,Branch){
      this.Name=Name
      this.Id=Id
      this.Branch=Branch
      //this.print()
    }
   /* print()
    {
      console.log("Name" +this.Name)
      }*/

 /* let N=new Student();
  N.Name="Shailendralodhi"
  console.log("name:" +N.name)
  N.print()*/

printStudent()
{
console.log("name is "+this.Name);
console.log("id is "+this.Id);
console.log("branch "+this.Branch);
  }
 }
class Moniter extends Student{
Batch
College
constructor(Name,Id,Branch,College,Batch){
  super(Name,Id,Branch)
  this.Batch=Batch
  this.College=College
}
printMoniter(){
  super.printStudent()
  console.log("batch is "+this.Batch);
  console.log("college is "+this.College);
}
}
let moniter = new Moniter("shailendra",1,"mech","patelclg","React")
moniter.printMoniter()



/*const myComponent = () => {
  return <h1>hello SSi digital</h1>
}
return myComponent();

class Myclasscomponent extends React.Component {
  render() {
    return <h1>The render function is called</h1>
  }
}
const classcomponent = new Myclasscomponent();
return classcomponent.render();


return React.createElement (
  "div",
  null,
  React.createElement("h1",null, "This is a heading "),
  React.createElement("u1",null, "This is a unorderd list"),
  React.createElement("p",null, "This is a paragraph"),
  React.createElement("li",null, "This is orderd list"),
);



return(
  <div>
    <button onClick={props.clickEvent} >click me </button>
  </div>
);
class App extends React.Component{
  state={counter:0}
  constructor(props) {
    super(props)
    console.log("i am inside constructor")
  }
  static getderivedStateFromProps(){
    console.log(" i am inside getDerivedStateFromProps")
    return true
  }
  shouldComponentUpdate()
  {
    console.log("Inside the shouldComponentUpdate")
    return true
  }
  incrementCounter = () =>
  {
    this.setState({counter:this.state.counter+1})
  }
  render()
  {
    console.log("inside render ")
    console.log(this.props)
    return(
    <div>
      <button onClick={this.incrementCounter} >clickme</button>
      <br/>
      counter:{this.state.counter}
    </div>
    )
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("insite snapshot")
    console.log("prev props")
    console.log(prevProps)
    console.log("prevState")
    console.log(prevState)
    console.log("update props")
    console.log(this.props)
    console.log("update state")
    console.log(this.state)
    return true
  }
  componentDidMount(){
    console.log("i am inside componentDidMount")
  }
}*/
}
export default App;




  
/*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
