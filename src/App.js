import './App.css'
import ReactMarkdown from 'react-markdown'
import { useState } from 'react'

function App() {
  const defRaw = `
  # Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  `

  const [raw, setRaw] = useState(defRaw)

  const handleChange = (event) => {
    setRaw(event.target.value)
  }

  return (
    <div className="App">
      <textarea id="editor" value={raw} onChange={handleChange}></textarea>
      <div id="preview">
        <ReactMarkdown>{raw}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App
