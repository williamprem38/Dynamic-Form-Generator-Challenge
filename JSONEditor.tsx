import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface JSONEditorProps {
  schema: string;
  onChange: (schema: string) => void;
  error: string | null;
}

const JSONEditor: React.FC<JSONEditorProps> = ({ schema, onChange, error }) => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">JSON Editor</h2>
      <textarea
        value={schema}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-96 p-4 border rounded"
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <SyntaxHighlighter language="json" style={dracula}>
        {schema}
      </SyntaxHighlighter>
    </div>
  );
};

export default JSONEditor;
