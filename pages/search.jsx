import { useState, useEffect } from 'react';
import Error from 'next/error';
import Head from 'next/head';

import { PageLoader } from '../components';
import { isMobileAgent } from '../utils';
import AppContext from '../components/AppContext';
import HeroSearch from '../components/Search/HeroSearch';

function search( props ) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    let timer = setTimeout(() => setIsLoaded(true), 2000);
    return () => { clearTimeout(timer) }
  }, []);

  if (props.isMobile) {
    return (
      <AppContext.Provider
        value={{
          isMobile: props.isMobile,
          searchOptions: [
            { value: 1, label: 'AC Repair Services' },
            { value: 2, label: 'Home Cleaning' },
            { value: 3, label: 'Beauty Salon Service for Woman' },
            { value: 4, label: 'Sheba Groceries' },
            { value: 5, label: 'Health Checkup & Lab Test' }
          ]
        }}
      >
        <Head>
          <title>Search service | Sheba Marketplace</title>
        </Head>
        {
          isLoaded ?
            <div className="MobileSearch">
              <HeroSearch />
            </div> : 
            <PageLoader />
        }
      </AppContext.Provider>
    );
  }

  return <Error statusCode={404} />
}

search.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) {
    userAgent = req.headers['user-agent'];
  } else {
    userAgent = navigator.userAgent;
  }

  let isMobile = isMobileAgent(userAgent);

  return { isMobile }
}

export default search;