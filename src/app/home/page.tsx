import { Metadata, NextPage } from 'next';
import Home from './Home';

export const metadata: Metadata = {
  title: 'Home',
  description: 'this is home page where customer will attract',
};

/**
 * Main page of the Application
 * @page Home
 */
const HomePage: NextPage = () => {
  return (
    <Home/>
  );
};

export default  HomePage;
