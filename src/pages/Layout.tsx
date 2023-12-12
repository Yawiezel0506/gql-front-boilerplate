import { gql, useQuery } from "@apollo/client";
import { useAppSelector } from "../context/hooks";

const Layout = () => {
  const test = useAppSelector((state) => state.products.products);
  console.log(test);

  const APOLLO_TEST = gql`
    query GetAllProducts {
      getAllProducts {
        category
      }
    }
  `;

  const { data: products } = useQuery(APOLLO_TEST);
  console.log(products);

  return <div>Layout</div>;
};

export default Layout;
