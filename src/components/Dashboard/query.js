import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GET_PRODUCTS {
    getProducts {
      brand {
        brandName
      }
      category {
        categoryName
      }
      price
      productName
      description
    }
  }
`;
