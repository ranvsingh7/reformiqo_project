import React, { useState } from 'react';
import "./OffCanvasExample.scss";

function OffCanvasExample({form}) {
	
  function showMenu () 
  {
		var m = document.querySelector('.menu1');
		m.classList.add('smenu');
	}
	function closeMenu () 
	{
		  var m = document.querySelector('.menu1');
		  m.classList.remove('smenu');
	  }
  
	return (

<>     
			{/* <span className='ticon' onClick={showMenu}>&#9776;</span> */}
			<div className='menu1'>
				<span className='close' onClick={closeMenu}>&times;</span>

				{form}
			</div>
  
</>


	)
}
export default OffCanvasExample
