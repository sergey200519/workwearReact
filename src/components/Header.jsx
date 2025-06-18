import { Link } from "react-router-dom";

const Header = ({ cartCount }) => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Каталог</Link>
        </li>
        <li>
          <Link to="/cart">
            Корзина {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </li>
        <li>
          <Link to="/about">О нас</Link>
        </li>
        <li>
          <Link to="/contacts">Контакты</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;