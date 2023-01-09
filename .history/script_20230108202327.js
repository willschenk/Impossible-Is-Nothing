async function getHeadlines() {
  try {
    const response = await fetch('headlines.txt');
    const data = await response.text();
    const headlines = data.split(/[\n\s]/);
    
    headlines.forEach(headline => {
      const headlineElement = document.createElement('p');
      headlineElement.innerHTML = `&nbsp;const headlines = data.split(/[\n\s]/);
      const headlines = data.split(/[\n\s]/);
const headlines = data.split(/[\n\s]/);
      ${headline}`;
      document.getElementById('headlines').appendChild(headlineElement);
    });
  } catch (error) {
    console.error(error);
  }
} 


getHeadlines();



