import  { useState } from 'react';

const universities = [
  { id: 1, name: "Harvard University", questions: ["What is AI?", "Explain Quantum Computing"] },
  { id: 2, name: "MIT", questions: ["Define Machine Learning", "What is Neural Network?"] },
  { id: 3, name: "Stanford University", questions: ["Explain Big Data", "What is Cloud Computing?"] },
];

const SampleQuestions = () => {
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Sample Questions</h1>
        <select
          className="w-full p-3 border rounded-lg mb-4"
          onChange={(e) => setSelectedUniversity(universities.find(u => u.id === parseInt(e.target.value)))}
        >
          <option value="">Select a University</option>
          {universities.map((university) => (
            <option key={university.id} value={university.id}>{university.name}</option>
          ))}
        </select>
        {selectedUniversity && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-700">{selectedUniversity.name}</h2>
            <ul className="mt-2 list-disc list-inside">
              {selectedUniversity.questions.map((question, index) => (
                <li key={index} className="text-gray-600">{question}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SampleQuestions;
