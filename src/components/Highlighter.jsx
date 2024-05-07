import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
const Highlighter = () => {
  const [code, setCode] = useState("");

  return (
    <div className="flex w-full h-screen justify-center items-center space-x-4 ">
      <textarea
        className="outline-none h-96 w-96 border px-1 py-2 rounded-md"
        placeholder="write your code here."
        onChange={(e) => setCode(e.target.value)}
      ></textarea>
      <div className="w-full max-w-lg h-96 overflow-y-auto max-h-96 bg-[#3a4043] shadow-md rounded-md">
        <SyntaxHighlighter
          customStyle={{ padding: "25px" }}
          language="javascript"
          style={dracula}
          startingLineNumber
          lineNumberStyle={dracula}
          showLineNumbers={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Highlighter;
