import React, { Component } from 'react';
import Comment from './Comment';
import Textarea from './Textarea';


const Todo = ({ todo, ...props }) => (

	<div>
		<ul className="list pl0 measure center tc ttu">
			<li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30 blue b">{todo.completed ? 'Klar' : 'Att göra'}</li>
			<li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">användarens id - {todo.userId}</li>
			<li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">uppgiftens id - {todo.id}</li>
			<li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">{todo.title}</li>
		</ul>

		<Comment {...props} />
		<Textarea {...props} />
	</div>
)


export default Todo;

