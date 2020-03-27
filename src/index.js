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
    setPersons(persons.concat(nameObject))
    setNewName('')
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