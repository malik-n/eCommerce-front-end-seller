import { gql } from "@apollo/client";

export const ADD_PRODUCT = gql`
  mutation addProduct(
    $productName: String!
    $description: String!
    $brandName: String!
    $categoryName: String!
    $price: String!
  ) {
    addProduct(
      product: {
        productName: $productName
        description: $description
        brand: { brandName: $brandName }
        category: { categoryName: $categoryName }
        price: $price
        review: "I like the product, it's a WOW!!"
        rating: 2
      }
    ) {
      productName
    }
  }
`;
