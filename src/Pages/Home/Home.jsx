import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Vault-Tec</h1>
      <p>Your journey to a better future starts here.</p>
      <div className="home-content">
        <img src="/path/to/vault-tec-image.jpg" alt="Vault-Tec" className="vault-tec-image" />
        <p>Explore our services and discover how we can help you prepare for the future.</p>
      </div>
    </div>
  );
}

export default Home;