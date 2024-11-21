import React, { useState } from "react";
import JSONEditor from "./components/JSONEditor";
import FormRenderer from "./components/FormRenderer";
import "./styles/tailwind.css";

const defaultSchema = `{
  "formTitle": "Project Requirements Survey",
  "formDescription": "Please fill out this survey about your project needs",
  "fields": [
    {
      "id": "name",
      "type": "text",
      "label": "Full Name",
      "required": true,
      "placeholder": "Enter your full name"
    },
    {
      "id": "email",
      "type": "email",
      "label": "Email Address",
      "required": true,
      "placeholder": "you@example.com",
      "validation": {
        "pattern": "^[^\\\\s@]+@[^\\\\s@]+\\\\.[^\\\\s@]+$",
        "message": "Please enter a valid email address"
      }
    },
    {
      "id": "companySize",
      "type": "select",
      "label": "Company Size",
      "required": true,
      "options": [
        { "value": "1-50", "label": "1-50 employees" },
        { "value": "51-200", "label": "51-200 employees" },
        { "value": "201-1000", "label": "201-1000 employees" },
        { "value": "1000+", "label": "1000+ employees" }
      ]
    }
  ]
}`;

const App: React.FC = () => {
  const [jsonSchema, setJsonSchema] = useState<string>(defaultSchema);
  const [error, setError] = useState<string | null>(null);

  const handleSchemaChange = (newSchema: string) => {
    try {
      JSON.parse(newSchema);
      setError(null);
    } catch (err) {
      setError("Invalid JSON");
    }
    setJsonSchema(newSchema);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <div className="p-4 border-r">
        <JSONEditor schema={jsonSchema} onChange={handleSchemaChange} error={error} />
      </div>
      <div className="p-4">
        <FormRenderer schema={jsonSchema} />
      </div>
    </div>
  );
};

export default App;
