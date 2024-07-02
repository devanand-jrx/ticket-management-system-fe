import { useState } from 'react';
const AgentForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <label className="block mb-2">
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 p-2 w-full"
        />
      </label>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Add Agent
      </button>
    </form>
  );
};

export default AgentForm;
