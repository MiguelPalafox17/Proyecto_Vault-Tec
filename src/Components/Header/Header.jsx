import './Header.css';
import Logo from '../../assets/Logo.png';
import LogoText from '../../assets/LogoText.png';
import SearchBar from '../Search_Bar/Search_Bar';

function Header() {
  return (
    <header className="header">
      <div className='Logo_Container'>
        <div className='Logo'>
          <img src={Logo} alt="" />
        </div>
        <div className='Title_Logo'>
          <img src={LogoText} alt="" />
        </div>
      </div>
      <div className='Search_Bar'>
        <SearchBar />
      </div>
      <div>ne2lf</div>
      <div>ne2lkf</div>
      <div>ke2fe</div>
      <div>kdn2e</div>
    </header>
  );
}

export default Header;