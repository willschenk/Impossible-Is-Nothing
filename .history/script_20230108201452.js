async function getHeadlines() {
  try {
    const response = await fetch('headlines.txt');
    const data = await response.text();
    const headlines = data.split(' ');
    headlines.forEach(headline => {
      const headlineElement = document.createElement('p');
      headlineElement.innerHTML = `${headline}&nbsp;`;
      document.getElementById('headlines').appendChild(headlineElement);
    });
  } catch (error) {
    console.error(error);
  }
} 


getHeadlines();



