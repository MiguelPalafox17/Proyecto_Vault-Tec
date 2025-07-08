import Card_Prod from "../../Components/Card/Card_Prod";
import "./Home.css";

function Home() {
  return (
    <div className="home_Container">
      <div className="Home_Title">
        <h1>Mira nuestros productos con descuentos</h1>
      </div>
      <div className="Home_Products">
        <Card_Prod />
        <Card_Prod />
        <Card_Prod />
        <Card_Prod />
      </div>
      <h1>Welcome to Vault-Tec</h1>
      <p>Your journey to a better future starts here.</p>
      <p>
        Explore our services and discover how we can help you thrive in the
        Wasteland.
      </p>
      <p>Join us today and become part of the Vault-Tec family!</p>
      <p>
        For more information, visit our{" "}
        <a href="https://www.vault-tec.com">official website</a>.
      </p>
    </div>
  );
}

export default Home;
