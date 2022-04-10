const NewsApi = require("./newsApi");

class NewsView {
  constructor(newsApi = new NewsApi()) {
    this.newsApi = newsApi;
    this.setUpEventListener();
  }

  setUpEventListener() {
    const searchButton = document.querySelector("#search-button");
    searchButton.addEventListener("click", () => {
      console.log("i've been clicked");
      this.searchNews();
    });
  }

  async searchNews() {
    const searchValue = document.querySelector("#user-input").value;
    // console.log(searchValue);
    const data = await this.newsApi.loadNews(searchValue);
    this.displayNews(data);
  }

  displayNews(data) {
    const clearNews = document.querySelectorAll(".news");
    clearNews.forEach((article) => article.remove());

    const newsDataArray = data;
    // console.log(newsDataArray);
    newsDataArray.forEach((newsArticle) => {
      const newsList = document.querySelector("#news-list");
      const article = document.createElement("div");
      const title = document.createElement("a");
      title.href = newsArticle.webUrl;
      title.innerText = newsArticle.fields.headline;
      article.className = "news";
      const image = document.createElement("img");
      image.src = newsArticle.fields.thumbnail;
      const br1 = document.createElement("br");
      const br2 = document.createElement("br");
      const br3 = document.createElement("br");
      newsList.append(article);
      article.append(title);
      article.append(br1);
      article.append(image);
      article.append(br2);
      article.append(br3);
    });
  }
}

module.exports = NewsView;
