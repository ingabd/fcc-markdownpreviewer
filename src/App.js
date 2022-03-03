import './App.css'
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import { useEffect, useState } from 'react'
import defaultText from './defaultText.txt'

function App() {
  const chunk1 = `
  # Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:

  `
  const chunk2 = "Heres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\nif (firstLine == '```' && lastLine == '```') {\nreturn multiLineCode;\n}\n}\n```"
  const chunk3 = `
    
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.

  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!

  And if you want to get really crazy, even tables:

  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.

  - And of course there are lists.
    - Some are bulleted.
      - With different indentation levels.
          - That look like this.


  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:

  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `

  const [raw, setRaw] = useState(chunk1+chunk2+chunk3)

  const handleChange = (event) => {
    setRaw(event.target.value)
  }

  return (
    <div className="App">
      <textarea id="editor" value={raw} onChange={handleChange}></textarea>
      <div id="preview">
        <ReactMarkdown remarkPlugins={[remarkBreaks]}>{raw}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App
