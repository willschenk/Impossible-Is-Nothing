async function getHeadlines() {
  try {
    const response = await fetch('headlines.txt');
    const data = await response.text();
    const headlines = data.split('\n');
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


headlines.forEach(headline => {
    const headlineElement = document.createElement('p');
    headlineElement.innerHTML = `${headline}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`;
    headlineElement.style.marginLeft = `${Math.floor(Math.random() * 100)}%`;
    document.getElementById('headlines').appendChild(headlineElement);
  }); 

  