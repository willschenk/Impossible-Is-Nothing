async function getHeadlines() {
  try {
    const response = await fetch('headlines.txt'); 

    const data = await response.text(); 
    const modifiedData = data.replace(/\n/g, '\t\n');

    const headlines = modifiedData.split(/[\n\s]/);
    
    headlines.forEach(headline => {
      const headlineElement = document.createElement('p');
      headlineElement.innerHTML = `&nbsp;${headline}`;
      document.getElementById('headlines').appendChild(headlineElement);
    });
  } catch (error) {
    console.error(error);
  }
} 


getHeadlines();



