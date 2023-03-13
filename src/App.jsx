import { useState , useRef } from 'react'
import axios from "axios"

import './App.css'

function App() {

	const [quote, setquote] = useState("Made by Amil P A")

	const fetchResult = () => {
		const id = Math.floor((Math.random() * 200)+1)
		axios.get('https://api.adviceslip.com/'+'advice/'+id.toString())
			.then(response => {
				setquote(response.data.slip.advice)
		})
	}

	return (
		<div className='main-div'>
			<h1>Wanna get motivated?</h1>
			<p>{ quote }</p>
			<button onClick={ fetchResult }>Click here</button>
		</div>
	)

}

export default App
