import { useSession } from '../context/SessionContext';

function Dashboard() {
  const { user, logout } = useSession();

  return (
    <div>
      <h2>Welcome, {user?.name}</h2>
      <button onClick={logout}>Log out</button>
    </div>
  );
}
