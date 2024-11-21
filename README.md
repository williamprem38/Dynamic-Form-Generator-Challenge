Dynamic Form Generator

A React-based web application that generates dynamic forms in real-time from a JSON schema. 
The application features a JSON editor with real-time validation on the left and a form preview on the right.

Features

Main Interface
Split-screen layout:
Left side: JSON editor with syntax highlighting and validation.
Right side: Real-time preview of the generated form.
Responsive design: Stacks the editor and preview on smaller screens.
Dynamic Form
Supports text, email, select, radio, and textarea fields.
Handles form validation with error messages.
Displays success message on successful submission.
Submits data to the console.
Additional Features
Mobile responsive layout.
Graceful error handling for invalid JSON.
Styled using Tailwind CSS for consistency.
Bonus Features
"Copy Form JSON" button for copying the schema (optional).
Dark mode support (optional).
Download form submissions as JSON (optional).
JSON Schema Example

{
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
        "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
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
}
Technologies Used

React 18+ for building the interface.
TypeScript for type safety and scalability.
Tailwind CSS for responsive and consistent styling.
React Hook Form for managing form state and validation.
Jest for unit testing.
Playwright for end-to-end (E2E) testing.
Getting Started

Prerequisites
Make sure you have the following installed:

Node.js (v16+)
npm or yarn
Installation
Clone the repository:
git clone https://github.com/your-username/dynamic-form-generator.git
cd dynamic-form-generator
Install dependencies:
npm install
Start the development server:
npm start
The application will run on http://localhost:3000.

Testing

Unit Tests
Run Jest unit tests:

npm run test
E2E Tests
Run Playwright end-to-end tests:

npx playwright test
Deployment

Deploy to Vercel
Build the project:
npm run build
Deploy using Vercel:
npx vercel deploy
Provide the deployment link.
Example Screenshots

JSON Editor and Form Preview
Mobile Layout
Future Enhancements

Add dark mode toggle.
Implement form validation preview in the editor.
Enable form submissions to be downloaded as JSON.
Add more field types (e.g., checkbox, date picker).
License

This project is licensed under the MIT License. See the LICENSE file for details.

Author
William Prem
https://github.com/williamprem38
