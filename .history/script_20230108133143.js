async function getHeadlines() {
    const CX = '33d4bcdba52d147d3'; // Replace with your Custom Search Engine ID
    const API_KEY = 'your-api-key';
    const API_URL = `https://www.googleapis.com/customsearch/v1?q=impossible&cx=${CX}&language=en&sort=date&num=400&key=${API_KEY}`;
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      const headlines = data.items.map(item => item.title);
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
  