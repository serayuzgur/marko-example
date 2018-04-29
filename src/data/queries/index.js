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
      product {
        title
      }
      prices {
        minPrice
        maxPrice
      }
      imageIds
    }
  }
}
`;
module.exports =  {
  search
};
