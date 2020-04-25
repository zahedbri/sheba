import Head from 'next/head';

import Footer from './Footer';
import Copyright from './Copyright';

function Layout(props) {
  return (
    <div className="PageWrapper">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <title>Sheba Marketplace</title>
      </Head>

      <main>
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