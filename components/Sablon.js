import Footer from "./Footer";
import Header from "./Header";

export default function Sablon({ children }) {
  return (
    <>
      <div className="container">
        <div className="row">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
