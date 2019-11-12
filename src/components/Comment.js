import React, { Component } from 'react';

const Comment = ({comment, showComment, deleteComment}) => (

	<article 
		style={{display: showComment ? "block" : "none"}} 
		className="mw7 center ph3 ph5-ns tc br2 pv5 bg-washed-green dark-green mb5">
		<p className="fw1 f5 mt0 mb3">{comment}</p>
		<div>
		  <button 
		  	className="f5 br-pill bg-blue white no-underline ba b--blue grow pv3 ph4 dib mr3 mt4" 
		  	onClick={() => deleteComment()}>
		   	Ta bort kommentar
		  </button>
		</div>
	</article>
)

export default Comment;