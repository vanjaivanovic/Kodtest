import React, { Component } from 'react';

const Textarea = ({textareaValue, handleComment, handleChangeTextarea}) => (
	
	<div className="pa4-l">
	  <form className="bg-blue mw7 center pa4 br2-ns ba b--black-10" 
	  	onSubmit={(event) => handleComment(event)}>
	    <fieldset className="cf bn ma0 pa0">
	      <legend className="pa0 f5 f4-ns mb3 black-80">Lägg till kommentar till din uppgift</legend>
	      <div className="cf">
	        <textarea className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 br2-ns br--left-ns" 
	        	placeholder="Din kommentar" 
	        	type="text" name="textarea" 
	        	value={textareaValue} id="comment" 
	        	onChange={(event) => handleChangeTextarea(event)}/>
	        <input className="f6 f5-l pv3 fr mt2 tc bn bg-green hover-bg-green white pointer w-100 w-25-m w-25-l br-pill" 
	        	type="submit" 
	        	value="Lägg till"/>
	      </div>
	    </fieldset>
	  </form>
	</div>
)

export default Textarea;