import NavBar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
import "./index.css";

function Contact() {
  return (
        /* Background */
      <div
        className="relative w-screen h-screen bg-cover bg-center flex flex-col"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black"></div>

        {/* Navbar */}
        <div className="relative z-10">
          <NavBar></NavBar>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex-grow">
        </div>

        {/* Footer */}
        <div className="relative z-10 mt-auto">
          <Footer></Footer>
        </div>
      </div>
  );
}

export default Contact;