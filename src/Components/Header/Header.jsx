import "./Header.css";
import Logo from "../../assets/Logo.png";
import LogoText from "../../assets/LogoText.png";
import userIcon from "../../assets/userIcon.png";
import cartIcon from "../../assets/cartIcon.png";
import videocamIcon from "../../assets/videocamIcon.png";
import Pc_Icon from "../../assets/Pc_Icon.png";
import CameraSecurity_Icon from "../../assets/CameraSecurity_Icon.png";
import SmartPhone_Icon from "../../assets/SmartPhone_Icon.png";
import Game_Icon from "../../assets/Game_Icon.png";
import SearchBar from "../Search_Bar/Search_Bar";

function Header() {
  return (
    <header className="header">
      <div className="Options_Container">
        <div className="Logo_Container">
          <div className="Logo">
            <img src={Logo} alt="" />
          </div>
          <div className="Title_Logo">
            <img src={LogoText} alt="" />
          </div>
        </div>
        <div className="Search_Bar">
          <SearchBar />
        </div>
        <div className="Login_Container">
          <div className="Login">
            <a href="/login">Iniciar Sesion</a>
            <div className="User_Icon">
              <img src={userIcon} alt="User Icon" />
            </div>
          </div>
        </div>
        <div className="Cart_Container">
          <div className="Cart">
            <a href="/cart">Carrito</a>
            <div className="Cart_Icon">
              <img src={cartIcon} alt="Cart Icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="Categories_Container">
        <div className="Categorie">
          <a href="/category/1">Categoria 1</a>
          <div className="Icon_Container">
            <img src={videocamIcon} alt="" />
          </div>
        </div>
        <div className="Categorie">
          <a href="/category/2">Categoria 2</a>
          <div className="Icon_Container">
            <img src={Pc_Icon} alt="" />
          </div>
        </div>
        <div className="Categorie">
          <a href="/category/3">Categoria 3</a>
          
          <div className="Icon_Container">
            <img src={CameraSecurity_Icon} alt="" />
          </div>

        </div>
        <div className="Categorie">
          <a href="/category/3">Categoria 4</a>
          <div className="Icon_Container">
            <img src={SmartPhone_Icon} alt="" />
          </div>
        </div>
        <div className="Categorie">
          <a href="/category/3">Categoria 4</a>
          <div className="Icon_Container">
            <img src={Game_Icon} alt="" />
          </div>
        </div>
        <div className="Categorie">
          <a href="/category/3">Categoria 4</a>
          <div className="Icon_Container">
            <img src={Game_Icon} alt="" />
          </div>
        </div>
      </div>
      
    </header>
  );
}

export default Header;
