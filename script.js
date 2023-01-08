const API_KEY = 'ee51205e5b4a4b2d857023568f01623b';
const API_URL = 'https://newsapi.org/v2/everything?qInTitle=impossible&language=en';

async function getHeadlines() {
  try {
    const response = await fetch(`${API_URL}&apiKey=${API_KEY}`);
    const data = await response.json();
    const headlines = data.articles.map(article => article.title).slice(0, 400);
    headlines.forEach(headline => {
      const headlineElement = document.createElement('p');
      headlineElement.innerHTML = `${headline}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`;
      document.getElementById('headlines').appendChild(headlineElement);
    });
  } catch (error) {
    console.error(error);
  }
}

getHeadlines();