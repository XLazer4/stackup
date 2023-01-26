import Header from "../components/Header";
import Footer from "/home/xlazer/Documents/github/stackup/food-community-project/src/Footer.js";

const IndexPage = () => {
  return (
    <div>
      <Header />
      <div className="hero-container">
        <img src="./img/community.jpeg" className="hero-image" alt="" />
        <div className="inner-hero-container">
          <h1 className="hero-title">Foodary</h1>
          <p className="hero-content-paragraph">
            What would you do if you have a thousand receipes just right in your
            pocket?
          </p>
          <div className="hero-button-container">
            <button className="hero-button">Learn More</button>
            <button className="hero-button">Foodary Community</button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="inner-container">
          <div className="element-items">
            <img
              src="./img/Good_Food_Display_-_NCI_Visuals_Online.jpg"
              className="element-image"
              alt=""
            />
            <p className="element-paragraph">
              Contributed by an amazing community of foodies. With hundreds of
              cuisines curated and tens of recipes created each day, start
              cooking and experience what you can do with your kitchen!
            </p>
          </div>
          <div className="element-items">
            <p className="element-paragraph">
              Contributed by an amazing community of foodies. With hundreds of
              cuisines curated and tens of recipes created each day, start
              cooking and experience what you can do with your kitchen!
            </p>
            <img
              src="./img/Foods_(cropped).jpg"
              className="element-image"
              alt=""
            />
          </div>
          <div className="element-items">
            <img
              src="./img/Meatfoodgroup.jpg"
              className="element-image"
              alt=""
            />
            <p className="element-paragraph">
              Contributed by an amazing community of foodies. With hundreds of
              cuisines curated and tens of recipes created each day, start
              cooking and experience what you can do with your kitchen!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IndexPage;
