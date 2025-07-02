import './Header.css';
import Logo from '../../assets/Logo.png';

function Header() {
  return (
    <header className="header">
      <div className='Logo_Container'>
        <div className='Logo'>
          <img src={Logo} alt="" />
          <p>Vault-Tec</p>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </header>
  );
}

export default Header;