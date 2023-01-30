import ProductItems from '@/components/ProductItems';
import data from '@/utils/data';
import Layout from '../components/Layout';

export default function Home() {
  let products = data.products.map((product) => (
    <ProductItems product={product} key={product.slug} />
  ));
  return (
    <Layout title="Home Page">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products}
      </div>
    </Layout>
  );
}
