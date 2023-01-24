import Header from "../components/Header";
import { about_author } from "../author";

const AuthorPage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="inner-container">
          <h1 className="page-title">{about_author.author_1.title}</h1>

          <img
            src="./img/header.jpg"
            className="hero-image"
            alt="Author_Image"
            width=""
          />
          <p className="blog-text">{about_author.author_1.content}</p>
        </div>
      </div>
    </div>
  );
};

export default AuthorPage;
