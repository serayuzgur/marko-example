const search = `
query search(
  $keyword: String
) {
  search(
    sort: "rank,desc"
    limit: 20
    keyword: $keyword
  ) {
    numFound
    products {
      id
      product {
        id
        model
        title
        url
        rank
        categoryId
        brandId
        productType
        mainProductId
        hasArticle
      }
      prices {
        minPrice
        maxPrice
      }
      merchantCount
      imageIds
      rating {
        rate
        count
      }
      metaData {
        title
        description
        fullCategory
      }
      topOffers {
        sid
        merchantUrl
        merchantId
        price
      }
    }
  }
}
`;
module.exports =  {
  search
};
