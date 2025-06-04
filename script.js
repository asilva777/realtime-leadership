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
