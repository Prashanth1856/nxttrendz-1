// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navbar-container">
    <div className="inner-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="brand-logo"
      />
      <ul className="navbar-menu">
        <li>
          <Link to="/" className="navbar-item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="navbar-item">
            Products
          </Link>
        </li>
        <li>
          <Link to="/cart" className="navbar-item">
            Cart
          </Link>
        </li>
      </ul>
      <button type="button" className="logout-btn-desktop">
        Logout
      </button>
      <button type="button" className="logout-btn-mobile">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="logout-icon"
        />
      </button>
    </div>
  </nav>
)

export default Header
