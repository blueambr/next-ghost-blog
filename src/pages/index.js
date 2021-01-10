import Layout from '@/layout';
import Header from '@/sections/Header';
import data from 'data.json';

const Home = () => (
  <>
    <Layout>
      <Header data={data} />
    </Layout>
  </>
);

export default Home;
