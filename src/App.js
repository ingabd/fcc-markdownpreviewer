import './App.css'
import { marked } from 'marked'
import { useState } from 'react'

function App() {
  const defRaw = `
  # Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  `

  const [raw, setRaw] = useState(defRaw)
  const [text, setText] = useState(marked.parse(defRaw))

  const handleChange = (event) => {
    setRaw(event.target.value)
  }

  return (
    <div className="App">
      <textarea id="editor" value={raw} onChange={handleChange}></textarea>
      <div id="preview">
        {marked.parse(raw)}
      </div>
    </div>
  );
}

export default App
