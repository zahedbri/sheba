import { Fragment, useState, useEffect } from 'react';

import { PageLoader, Layout } from '../components';
import { isMobileAgent } from '../utils';
import { HeroBanner, FeaturedCategoriesMobile, FeaturedCategories, HighDemand, TrendingServices, HappyService, Counter, ServiceProcess, Testimonial, AppDownload, RequestService, OfficeSolution, BecomePartner } from '../components/Homepage';
import AppContext from '../components/AppContext';

function Homepage( props ) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    let timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => { clearTimeout(timer) }
  }, []);
  
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
        ],
        categories: [
          { id: 1, title: 'Grocery', image: '01.png' },
          { id: 2, title: 'Emergency Services', image: '02.png' },
          { id: 3, title: 'Cleaning & Pest Control', image: '03.png' },
          { id: 4, title: 'Beauty & Salon', image: '04.png' },
          { id: 5, title: 'Shifting', image: '05.png' },
          { id: 6, title: 'Appliance Repair', image: '06.png' },
          { id: 7, title: 'Electric and Plumbing', image: '08.svg' }
        ],
        highDemand: [
          { id: 1, title: 'Hire a Cleaner', image: '06.jpg' },
          { id: 2, title: 'AC Repair Services', image: '01.jpg' },
          { id: 3, title: 'Beauty Salon Service for Woman', image: '03.jpg' },
          { id: 4, title: 'Plumbing & Sanitary Services', image: '07.jpg' },
          { id: 5, title: 'Electricians for Electrical Service', image: '08.jpg' },
          { id: 6, title: 'Home Cleaning', image: '02.jpg' },
          { id: 7, title: 'House Shifting Services', image: '09.jpg' },
          { id: 8, title: 'Laptop Servicing', image: '10.jpg' },
          { id: 9, title: 'Bosontokalin Offer @349 Tk', image: '11.jpeg' },
          { id: 10, title: 'Exclusive Winter Package for Laundry & Dry Wash', image: '12.jpg' }
        ],
        trending: [
          { id: 1, title: 'AC Repair Services', image: '01.jpg' },
          { id: 2, title: 'Home Cleaning', image: '02.jpg' },
          { id: 3, title: 'Beauty Salon Service for Woman', image: '03.jpg' },
          { id: 4, title: 'Sheba Groceries', image: '04.jpg' },
          { id: 5, title: 'Health Checkup & Lab Test', image: '05.png' }
        ],
        counters: [
          { id: 1, title: 'Service Providers', count: '15,000' },
          { id: 2, title: 'Order Served', count: '1,00,000' },
          { id: 3, title: '5 Star Received', count: '76,000' }
        ],
        testimonials: [
          {
            id: 1,
            comment: 'Such service platforms are available in other countries. I’ve personally used those when I was abroad. I’m very pleased that such a portal is available here in Bangladesh as well. Thank you Sheba.xyz.',
            name: 'Zabeen Yusuf Nur',
            profession: 'IT Consultant, Australia',
            image: '01.jpg',
            video: 'https://www.youtube.com/watch?v=Ey0ESUxWTL0'
          },
          {
            id: 2,
            comment: 'It was my marriage and wasn’t getting schedule from any beauty parlor. So, I downloaded Sheba.xyz app and found that it has all of my requirements. The beautician arrived in time and was really amazing. Thank you.',
            name: 'Zeba Fariba',
            profession: 'Management Trainee',
            image: '02.jpg',
            video: 'https://youtu.be/_1juTr9E46U'
          }
        ]
      }}
    >
      {
        isLoaded ?
          <Layout>
            <div className="Homepage">
              {
                props.isMobile ?
                  <FeaturedCategoriesMobile /> :
                  <Fragment>
                    <HeroBanner />
                    <FeaturedCategories />
                    <HighDemand />
                    <TrendingServices />
                    <HappyService />
                    <Counter />
                  </Fragment>
              }
              <ServiceProcess />
              <Testimonial />
              {
                !props.isMobile &&
                  <Fragment>
                    <AppDownload />
                    <RequestService />
                    <OfficeSolution />
                    <BecomePartner />
                  </Fragment>
              }
            </div>
          </Layout> :
          <PageLoader />
      }
    </AppContext.Provider>
  );
}

Homepage.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) {
    userAgent = req.headers['user-agent'];
  } else {
    userAgent = navigator.userAgent;
  }

  let isMobile = isMobileAgent(userAgent);

  return { isMobile }
}

export default Homepage;