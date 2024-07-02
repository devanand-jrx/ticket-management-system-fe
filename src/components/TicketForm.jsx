import { useState } from 'react';

const TicketForm = () => {
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <label className="block mb-2">
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 p-2 w-full"
        />
      </label>
      <button type="submit" className="bg-blue-500 ml-12 text-white py-2 px-4 rounded">
        Add Ticket
      </button>
    </form>
  );
};

export default TicketForm;
