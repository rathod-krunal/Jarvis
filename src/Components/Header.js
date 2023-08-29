import { Nav_Logo_Url } from "../Utils/Constance";
import { AiOutlineShoppingCart } from "react-icons/AI";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Nav_Logo_Url} alt="" />{" "}
      </div>
      <div className="nav-links">
        <ul>
          <li> Home</li>

          <li> About</li>

          <li> Sign in</li>
          <li>
            <AiOutlineShoppingCart /> Cart{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
