const HomePage = () => {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Ticket Management System</h1>
        <p className="text-lg">
          Please navigate to the appropriate section based on your role:
        </p>
        <ul className="mt-4 list-disc pl-5">
          <li><a href="/admin" className="text-blue-500">Admin Dashboard</a></li>
          <li><a href="/agent" className="text-blue-500">Agent Dashboard</a></li>
          <li><a href="/customer" className="text-blue-500">Customer Dashboard</a></li>
          <div className="mt-5">
          </div>
        </ul>
      </div>
    );
  };
  
  export default HomePage;
  