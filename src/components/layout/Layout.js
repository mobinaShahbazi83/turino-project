import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="max-w-[1440px] m-auto ">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
