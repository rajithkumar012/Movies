import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-600 p-4">
    <Link className="text-white mr-4" to="/">Movies</Link>
    <Link className="text-white" to="/booking-history">Booking History</Link>
  </nav>
);

export default Navbar;
