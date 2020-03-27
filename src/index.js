import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const Directory = ({dir}) => {
  return (
    dir.map(dirs => <div>{dirs.name}</div>)
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas'}
  ])

  const [newName, setNewName] = useState('')


  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
        name: newName
    }
    const result = persons.filter(person => person.name === newName)
    console.log(result)
    if (result.length === 0) {
    setPersons(persons.concat(nameObject))
    setNewName('')
    } else {
      alert(`${newName} is already in PhoneBook`)
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Directory dir={persons}/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))