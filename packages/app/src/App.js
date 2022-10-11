import {
  addOneWord,
  addTwoWords
} from '@my-local-scope/strings'
import {
  add42,
  minus42
} from '@my-local-scope/maths'
import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          Mono
          repository
        </h1>
      </header>
      <h2>Maths</h2>
      <p>
        add42(100) ={' '}
        {add42(100)}
      </p>
      <p>
        minus42(100)
        ={' '}
        {minus42(
          100
        )}
      </p>

      <h2>
        Strings
      </h2>
      <p>
        addOneWord('Test')
        ={' '}
        {addOneWord(
          'Test'
        )}
      </p>
      <p>
        addTwoWords('Test')
        ={' '}
        {addTwoWords(
          'Test'
        )}
      </p>
    </div>
  )
}

export default App
