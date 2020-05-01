import Head from 'next/head';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Copyright from './Footer/Copyright';

function Layout(props) {
  return (
    <div className="PageWrapper">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <title>Sheba Marketplace</title>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>

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