import { useState, useEffect } from 'react';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { User, ShoppingBag, Settings, LogOut, Edit } from 'lucide-react';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([
    { id: 1, date: '2023-06-01', total: 99.99, status: 'Delivered' },
    { id: 2, date: '2023-06-15', total: 149.99, status: 'Shipped' },
  ]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          name: currentUser.displayName || 'User',
          email: currentUser.email,
          avatar: currentUser.photoURL || './assets/avatar.png'
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Please log in to view your profile</h2>
        <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">Your Profile</h1>
      
      <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="relative mb-4 md:mb-0 md:mr-8">
            <img src={user.avatar} alt={user.name} className="w-32 h-32 rounded-full border-4 border-blue-500" />
            <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
              <Edit size={16} />
            </button>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-blue-800">{user.name}</h2>
            <p className="text-gray-600 mb-2">{user.email}</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <Link to="/edit-profile" className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-300">
                <Settings size={18} className="mr-1" /> Edit Profile
              </Link>
              <Link to="/logout" className="flex items-center text-red-500 hover:text-red-600 transition-colors duration-300">
                <LogOut size={18} className="mr-1" /> Logout
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-8">
        <h3 className="text-2xl font-semibold mb-6 text-blue-800">Recent Orders</h3>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-4 py-2 text-left">Order ID</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Total</th>
                <th className="px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">{order.id}</td>
                  <td className="px-4 py-3">{order.date}</td>
                  <td className="px-4 py-3">${order.total.toFixed(2)}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      order.status === 'Delivered' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-center">
          <Link to="/orders" className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-300">
            <ShoppingBag size={18} className="mr-2" /> View All Orders
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;


