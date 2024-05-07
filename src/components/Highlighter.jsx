import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
const Highlighter = () => {
  const code = `const data = [
    {
        question: "Hello?",
        id: 1,
        option1: "op-1",
        option2: "op-2",
        option3: "op-3",
        option4: "op-4"
    },{
        question: "Tets?",
        id: 1,
        option1: "op-5",
        option2: "op-6",
        option3: "op-7",
        option4: "op-8"
    }
    ]
    
const newFormat = data.map((item, index) => ({
    question: item.question,
    id: item.id,
    choices: [
        { isSelected: false, option_1: item.option_1,option_1_is_correct:false },
        { isSelected: false, option_2: item.option_2,option_1_is_correct:false },
        { isSelected: false, option: item.option3 },
        { isSelected: false, option: item.option4 }
    ]
}));
console.log(JSON.stringify(newFormat, null, 3));`;
  return (
    <div className="flex w-full h-screen justify-center items-center  ">
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
