import {lazy} from 'react';

const Home = lazy(() => import('./views/pages/home/Home'));
const About = lazy(() => import('./views/pages/about/About'));
const Contact = lazy(() => import('./views/pages/contact/Contact'));

const Routes = [
  { path: '/', exact: true, name: 'Home', element: Home },
  { path: '/about', exact: true, name: 'About', element: About },
  { path: '/contact', exact: true, name: 'Contact', element: Contact },
]

export default Routes
