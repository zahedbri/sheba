import Header from './Header/Header';
import Footer from './Footer/Footer';
import Copyright from './Footer/Copyright';

function Layout(props) {
  return (
    <div className="PageWrapper">
      <header className="Header">
        <Header />
      </header>

      <main className="Main">
        {props.children}
      </main>

      <footer className="Footer">
        <Footer />
        <Copyright />
      </footer>
    </div>
  );
}

export default Layout;