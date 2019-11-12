import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Todos = ({todos, fetchTodo}) => (
	<div className="pa3 pa5-ns">
		<ul className="list pl0 measure center">
			{todos.map(todo => (
				<Link to="/todo" className="link ttu blue underline-hover">
					<li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30" 
						onClick={() => fetchTodo(todo.id)}>{todo.title}
					</li>
				</Link>
				))}
		</ul>
	</div>
)


export default Todos;
