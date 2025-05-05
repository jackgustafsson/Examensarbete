// FETCH
const fetchList = document.getElementById('fetch-lista');
if (fetchList) {
  const fetchStart = performance.now();  // Starta timer
  fetch('/api/cities')
    .then(res => res.json())
    .then(data => {
      const fetchEnd = performance.now();  // Sluta timer
      const elapsed = (fetchEnd - fetchStart).toFixed(2);
      console.log(`Fetch tog ${elapsed} ms`);
      fetchList.innerHTML = '';
      data.forEach(city => {
        const li = document.createElement('li');
        li.textContent = `${city.name} - ${city.country} (${city.population.toLocaleString()} invånare)`;
        fetchList.appendChild(li);
      });
    });
}

// AXIOS
const axiosList = document.getElementById('axios-lista');
if (axiosList) {
  const axiosStart = performance.now();  // Starta timer
  axios.get('/api/cities')
  
    .then(res => {
      const axiosEnd = performance.now();  // Sluta timer
      const elapsed = (axiosEnd - axiosStart).toFixed(2);
      console.log(`Axios tog ${elapsed} ms`);
      axiosList.innerHTML = '';
      res.data.forEach(city => {
        const li = document.createElement('li');
        li.textContent = `${city.name} - ${city.country} (${city.population.toLocaleString()} invånare)`;
        axiosList.appendChild(li);
      });
    });
}
