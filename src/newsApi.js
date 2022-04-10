class NewsApi {
  constructor() {}

  async loadNews(searchTerm) {
    // console.log(searchTerm);
    const response = await fetch(
      `https://content.guardianapis.com/search?q=${searchTerm}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=7875afa8-419d-4bc5-88e3-83046caf6d67`
    );

    const data = await response.json();

    return data.response.results;
  }
}

module.exports = NewsApi;
