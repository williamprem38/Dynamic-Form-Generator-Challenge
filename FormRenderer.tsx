import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface Field {
  id: string;
  type: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: { pattern: string; message: string };
}

interface Schema {
  formTitle: string;
  formDescription: string;
  fields: Field[];
}

const FormRenderer: React.FC<{ schema: string }> = ({ schema }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const parsedSchema: Schema | null = (() => {
    try {
      return JSON.parse(schema);
    } catch {
      return null;
    }
  })();

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log("Submitted Data:", data);
    alert("Form submitted successfully!");
  };

  if (!parsedSchema) {
    return <p className="text-red-500">Invalid JSON Schema</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold">{parsedSchema.formTitle}</h2>
      <p className="mb-4">{parsedSchema.formDescription}</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {parsedSchema.fields.map((field) => (
          <div key={field.id}>
            <label className="block mb-2 font-semibold">{field.label}</label>
            {field.type === "text" && (
              <input
                {...register(field.id, { required: field.required })}
                type="text"
                placeholder={field.placeholder}
                className="w-full p-2 border rounded"
              />
            )}
            {field.type === "select" && (
              <select
                {...register(field.id, { required: field.required })}
                className="w-full p-2 border rounded"
              >
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
            {errors[field.id] && <p className="text-red-500">This field is required</p>}
          </div>
        ))}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormRenderer;
