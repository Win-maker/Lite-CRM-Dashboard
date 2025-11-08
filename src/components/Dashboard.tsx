import React from "react";


import { useInView } from "react-intersection-observer";
import { useProducts } from "@/api/useProduct";
import CategoryDistributionChart from "@/shared/charts/CategoryDistributionChart";
import PriceHistogramChart from "@/shared/charts/PriceHistogramChart";

const Lazy = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return <div ref={ref}>{inView ? children : <div style={{ height: "400px" }}>Loading chart…</div>}</div>;
};

const Dashboard: React.FC = () => {
  const { products, total, loading, error } = useProducts();

  if (loading) return <div>Loading data…</div>;
  if (error) return <div>Error: {error}</div>;

  const averagePrice = (products.reduce((sum, p) => sum + p.price, 0) / products.length).toFixed(2);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Dashboard</h1>
      <div>
        <strong>Total Products:</strong> {total}
      </div>
      <div>
        <strong>Average Price:</strong> ${averagePrice}
      </div>

      <div style={{ marginTop: "40px" }}>
        <h2>Category Distribution</h2>
        <Lazy>
          <CategoryDistributionChart products={products} />
        </Lazy>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h2>Price Distribution</h2>
        <Lazy>
          <PriceHistogramChart products={products} />
        </Lazy>
      </div>

      {/* You can add more charts similarly */}
    </div>
  );
};

export default Dashboard;
