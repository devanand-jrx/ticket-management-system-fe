const TicketList = () => {
  // Fetch tickets from API

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Tickets</h2>
      <ul className="list-disc pl-5">
        {/* Map through tickets and display them */}
        <li>Ticket 1</li>
        <li>Ticket 2</li>
        {/* ... */}
      </ul>
    </div>
  );
};

export default TicketList;
