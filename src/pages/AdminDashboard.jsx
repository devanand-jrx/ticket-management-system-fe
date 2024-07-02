import AgentList from '../components/AgentList';
import AgentForm from '../components/AgentForm';

const AdminDashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold mb-4">Admin Dashboard</h1>
      <AgentForm />
      <AgentList />
    </div>
  );
};

export default AdminDashboard;
