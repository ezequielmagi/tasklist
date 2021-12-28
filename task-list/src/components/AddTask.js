import { useState } from 'react'

export default function AddTask( { setTask } ) {


  const [inputValue, setInputValue] = useState('')

  const handleInputChange = ( e ) => {
    console.log(e.target.value)
    setInputValue( e.target.value )
  }

  const handleSubmit = ( e ) => {
    e.preventDefault();

    if ( inputValue.trim().length > 2 ){
      setTask ( taskies => [ ...taskies , inputValue ] )
      setInputValue('')
    }
    
  }

  return (
   <form onSubmit={ handleSubmit }>
     <input type="text"
     value={ inputValue }
     onChange={ handleInputChange }
      />
   </form>
  )
}
