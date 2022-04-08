const NewsView = require("./newsView");

const newsView = new NewsView();

const newsList = document.querySelector("#news-list");

const news = document.createElement("div");

news.innerText = "you're awesome :)";
news.className = "news";
newsList.append(news);
