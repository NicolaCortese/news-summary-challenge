const NewsApi = require("./newsApi");
const NewsView = require("./newsView");

const newsApi = new NewsApi();
const newsView = new NewsView(newsApi);

newsView.searchNews();
