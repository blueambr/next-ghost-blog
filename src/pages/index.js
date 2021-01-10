import Layout from '@/layout';
import Header from '@/sections/Header';
import Featured from '@/sections/Featured';
import data from 'data.json';

const Home = () => {
  const { featured } = data;

  return (
    <>
      <Layout>
        <Header data={data} />
        <Featured data={featured} />
      </Layout>
    </>
  );
};

export default Home;
