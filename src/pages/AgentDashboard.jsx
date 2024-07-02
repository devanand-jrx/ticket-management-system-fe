import TicketList from '../components/TicketList';
import CustomerList from '../components/CustomerList';
import TicketForm from '../components/TicketForm';

const AgentDashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Agent Dashboard</h1>
      <TicketForm               />
      <TicketList />
      <CustomerList />
    </div>
  );
};

export default AgentDashboard;
