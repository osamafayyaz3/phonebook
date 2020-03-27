import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Directory = ({ dir }) => {
  return (
    dir.map(dirs => <div>{dirs.name} {dirs.phone}</div>)
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '090078601' }
  ])

  const [newName, setNewName] = useState('')
  const [newPhone, setPhone] = useState('')
  
 
  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      phone: newPhone
    }
    const result = persons.filter(person => person.name === newName)
    console.log(result)
    if (result.length === 0) {
      setPersons(persons.concat(nameObject))
      setNewName('')
      setPhone('')
    } else {
      alert(`${newName} is already in PhoneBook`)
      setNewName('')
      setPhone('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setPhone(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>phone: <input value={newPhone} onChange={handlePhoneChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Directory dir={persons} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))