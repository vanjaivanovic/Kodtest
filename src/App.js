import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Todos from './components/Todos';
import Todo from './components/Todo';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
     todos: [],
     todo: {},
     textareaValue: "",
     comment: "",
     showComment: false
    }
  }

  methods = {

  fetchTodos: () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data =>
      this.setState({
        todos: data
      })
    )
  },

  fetchTodo: (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response => response.json())
    .then(data =>
      this.setState({
        todo: data
      })
    )
  },

  handleComment: (event) => {
    event.preventDefault();
    const { value } =  event.target.textarea;

    this.setState({
      textareaValue: "",
      comment: value,
      showComment: true
    })
    
  },

  handleChangeTextarea: (event) => {
    const { value } =  event.target;

    this.setState({textareaValue: value})
  },

  deleteComment: () => {
    this.setState({showComment: false})
  }

  }

  componentDidMount() {
    this.methods.fetchTodos()
  }

  render(){
      return (
        <Router>
          <div className="App">
          <Header />
            <Route exact path="/" render={() => <Home />} />
            <Route path="/todos" render={() => <Todos {...this.state} {...this.methods} />} />
            <Route path="/todo" render={() => <Todo {...this.state} {...this.methods}/>} />
            <Footer />
          </div>
      </Router>
    );
  }
}

export default App;

