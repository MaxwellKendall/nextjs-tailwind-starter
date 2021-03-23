import { useContext } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import stripeClient from '../client';

import CartContext from '../globalState';
import { persistCartInLocalStorage } from '../helpers';

export const getStaticProps = async () => {
  const { data: products } = await stripeClient.products.list({
    active: true
  });

  return {
    props: {
      products
    }
  };
};

const propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
};

const Home = ({
  products
}) => {
  const numberOfProducts = products.length;
  const { cart, dispatch } = useContext(CartContext);
  const addToCart = () => {
    // create a session then init the cart in local storage & globalState
    persistCartInLocalStorage({ id: '123' });
    // dispatch({ type: 'INIT_CART', })
  }
  return (
    <div className="container mx-auto w-full">
      <Head>
        <title>NextJS and Tailwind Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1 className="title text-2xl w-full text-center">NextJS and Tailwind Starter</h1>
        <button onClick={addToCart}>Test</button>
      </header>
      <main className="my-5 flex flex-col justify-center items-center">
        <span>
          Number of total Products from stripe:
          {numberOfProducts}
        </span>
        <ul>
          {products.map((obj) => {
            console.info('Product Objects from Stripe: ', obj);
            return (
              <li>{`Product Name: ${obj.name}`}</li>
            );
          })}
        </ul>
      </main>
      <footer className="mt-5 w-full flex flex-col justify-center items-center">
        <p>this is the footer</p>
      </footer>
    </div>
  );
};

Home.propTypes = propTypes;
export default Home;
