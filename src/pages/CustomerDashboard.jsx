import TicketList from '../components/TicketList';
import TicketForm from '../components/TicketForm';

const CustomerDashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Customer Dashboard</h1>
      <TicketForm />
      <TicketList />
    </div>
  );
};

export default CustomerDashboard;
