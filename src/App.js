import "./cube.scss";
import "./themes.scss";
import Cube from "./Cube";
import { marked } from "marked";
import { useState, useEffect } from "react";

function App() {
  let defaultText = `# Welcome to my React Markdown Previewer!
  ## This is a sub-heading...
  This is how you make text **bold**
  And this is how you make it _italic_ or **_italic bold_** if you want
  You can also ~cross stuffs out~
  There's also a way to make a [link](https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley)
  ### [**_~Or you can just go crazy and combine it all~_**](https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley)
  Apart from those, you can also make an inline code: \`<div></div>\`
  Or a code block:
  \`\`\`
  let x = 1;
  let y = 2;
  let z = x + y;
  \`\`\`
  > Or a Block Quote
  
  You can also make a list:
  - list 1
  - list 2
  - list 3
  
  Or even a table:
  
  Table 1 | Table 2 | Table 3
  ------------ | ------------- | -------------
  Content 1 | Content 2 | Content 3
  Content 1.1 | Content 2.1 | Content 3.1
  
  ![Sample Image](https://icon-library.com/images/react-icon/react-icon-13.jpg) **And lastly, an Image!**`;
  const [text, setText] = useState(defaultText);

  const [colorTheme, setColorTheme] = useState("");

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("theme-color");
    if (currentThemeColor) {
      setColorTheme(currentThemeColor);
    }

    const currentText = localStorage.getItem("text");
    if (currentText) {
      setText(currentText);
    }
  }, []);

  const handleChange = (theme) => {
    setColorTheme(theme);
    localStorage.setItem("theme-color", theme);
  };

  const handleText = (text) => {
    setText(text);
    localStorage.setItem("text", text);
  };

  const reset = () => {
    setText(defaultText);
    setColorTheme("palenight");
    localStorage.clear();
  };

  const markdown = marked(text, { breaks: true });

  return (
    <div
      className={`App w-screen h-screen bg-red-200 flex justify-center items-center text-red-900 ${colorTheme}`}
    >
      {/* container */}
      <div
        id="container"
        className=" w-11/12 sm:w-9/12 h-5/6 bg-red-500 rounded overflow-hidden flex flex-col items-stretch"
      >
        {/* title-header */}
        <div
          id="title-header"
          className="bg-red-100 w-full h-6 flex justify-between text-[10px] font-bold sm:text-xs"
        >
          <div className="flex items-center">
            <div
              onClick={() => {
                reset();
              }}
              className="w-3.5 h-3.5 bg-red-300 rounded-full ml-2 border-2 border-red-300 cursor-pointer hover:border-gray-200"
            ></div>
            <div className="w-3.5 h-3.5 bg-amber-300 rounded-full ml-2 border-2 border-amber-500"></div>
            <div className="w-3.5 h-3.5 bg-lime-300 rounded-full ml-2 mr-2 border-2 border-lime-500"></div>
            <i className="ml-1 fa-solid fa-laptop-code"></i>
            <code className="ml-1">markdown prviewr</code>
          </div>
          <div className="m-1 px-1">
            <i className="fa-solid fa-palette mx-1"></i>
            <select
              name="themes"
              id="themes"
              defaultValue="none"
              className="font-semibold bg-transparent"
              onChange={(e) => {
                handleChange(e.target.value);
              }}
            >
              <option value="none" disabled hidden>
                Color Themes
              </option>
              <option value="red">Red(Default)</option>
              <option value="orange">Tangerine</option>
              <option value="amber">Amber</option>
              <option value="green">Forest</option>
              <option value="sky">Sky</option>
              <option value="fuchsia">Fuchsia</option>
              <option value="playful">Playful</option>
            </select>
          </div>
        </div>
        {/* header */}
        <div id="header" className="grid grid-cols-2 h-7 text-xs">
          <code className="bg-red-400 w-1/2 flex items-center justify-center font-semibold">
            <i className="fa-solid fa-pen-to-square mr-1 w-4 h-4 hidden sm:block"></i>
            editor.md
          </code>
          <code className="bg-red-400 w-1/2 flex items-center justify-center font-semibold">
            <i className="fa-solid fa-eye mr-1 w-4 h-4 hidden sm:block"></i>
            preview.md
          </code>
        </div>
        {/* body */}
        <div
          id="body"
          className="grid grid-cols-2 items-stretch grow h-[calc(100%_-_5rem)]"
        >
          <div className="flex items-stretch ">
            {/* editor */}
            <textarea
              className="bg-red-400 w-full sm:w-10/12 resize-none text-xs h-full overflow-x-hidden p-1 focus:outline-none"
              name="editor"
              id="editor"
              value={text}
              onChange={(event) => handleText(event.target.value)}
            ></textarea>
            {/* minimap */}
            <textarea
              className="bg-red-300 grow text-[6px] resize-none overflow-x-hidden hidden sm:p-1 sm:block"
              name="editor"
              id="minimap"
              value={text}
              disabled
            ></textarea>
          </div>
          {/* preview */}
          <div
            className="bg-red-400 break-words overflow-scroll overflow-x-hidden p-1"
            dangerouslySetInnerHTML={{ __html: markdown }}
            id="preview"
          ></div>
        </div>
        {/* footer */}
        <div
          id="footer"
          className="bg-red-500 w-full h-7 flex items-center justify-between text-[10px] sm:text-xs"
        >
          <code className="mx-2">
            <i className="fa-solid fa-cube hidden sm:inline"></i>{" "}
            markdown-preview-enhanced.md
          </code>
          <code className="mx-2">
            prepared by sera{" "}
            <a
              href="https://github.com/da3ker"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github-alt w-3 h-3 hover:text-gray-100 hidden sm:inline"></i>
            </a>
          </code>
        </div>
      </div>
      <Cube />
    </div>
  );
}

export default App;
