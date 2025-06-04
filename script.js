// Smooth scroll
document.addEventListener('DOMContentLoaded', () => {
  const learnMoreBtn = document.querySelector('.btn');
  learnMoreBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('challenges').scrollIntoView({ behavior: 'smooth' });
  });

  fetchLiveNews();
});

// Fetch news from NewsAPI
async function fetchLiveNews() {
  const apiKey = 'YOUR_NEWSAPI_KEY'; // Replace with your actual NewsAPI key
  const url = `https://newsapi.org/v2/everything?q=small+business+innovation&language=en&pageSize=5&sortBy=publishedAt&apiKey=${apiKey}`;
  const newsContainer = document.getElementById('news-list');

  try {
    const response = await fetch(url);
    const data = await response.json();

    newsContainer.innerHTML = '';
    if (data.articles && data.articles.length > 0) {
      data.articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        newsItem.innerHTML = `
          <h4><a href="${article.url}" target="_blank" rel="noopener noreferrer">${article.title}</a></h4>
          <p>${article.description || 'No description available.'}</p>
        `;

        newsContainer.appendChild(newsItem);
      });
    } else {
      newsContainer.innerHTML = '<p>No relevant news found.</p>';
    }
  } catch (error) {
    newsContainer.innerHTML = '<p>Failed to load news. Please try again later.</p>';
    console.error('News fetch error:', error);
  }
}
document.addEventListener('DOMContentLoaded', () => {
  // AI Adoption Chart
  const ctxAdoption = document.getElementById('aiAdoptionChart').getContext('2d');
  const aiAdoptionChart = new Chart(ctxAdoption, {
    type: 'bar',
    data: {
      labels: ['2023', '2024'],
      datasets: [{
        label: 'AI Adoption (%)',
        data: [23, 40], // Example data: 23% in 2023, 40% in 2024
        backgroundColor: ['#4e79a7', '#f28e2b']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'AI Adoption in SMEs Over Years'
        }
      }
    }
  });

  // AI Benefits Chart
  const ctxBenefits = document.getElementById('aiBenefitsChart').getContext('2d');
  const aiBenefitsChart = new Chart(ctxBenefits, {
    type: 'pie',
    data: {
      labels: ['Increased Efficiency', 'Higher Profitability', 'Improved Customer Service'],
      datasets: [{
        label: 'Benefits of AI Adoption',
        data: [80, 70, 65], // Example data: percentages of SMEs reporting each benefit
        backgroundColor: ['#59a14f', '#e15759', '#76b7b2']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Reported Benefits of AI Adoption by SMEs'
        }
      }
    }
  });
});
