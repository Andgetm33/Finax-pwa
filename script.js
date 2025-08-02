async function fetchPortfolio() {
  const container = document.getElementById("portfolio");
  try {
    const res = await fetch("https://finax-api.onrender.com/api/assets");
    const data = await res.json();
    container.innerHTML = "";
    data.forEach(asset => {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${asset.name} (${asset.symbol})</strong> : ${asset.price.toFixed(2)} ${asset.currency}`;
      container.appendChild(div);
    });
  } catch (e) {
    container.textContent = "Erreur de chargement du portefeuille.";
  }
}
fetchPortfolio();

function simulate() {
  const amount = parseFloat(document.getElementById("amount").value || 0);
  const years = parseInt(document.getElementById("years").value || 1);
  const result = document.getElementById("sim-result");
  const growthRate = 0.07;
  const futureValue = amount * Math.pow(1 + growthRate, years);
  result.innerHTML = `<p>Résultat estimé après ${years} ans : <strong>${futureValue.toFixed(2)} €</strong></p>`;
}

// Simulated news placeholder
async function fetchNews() {
  const container = document.getElementById("news-container");
  try {
    const res = await fetch("https://api.currentsapi.services/v1/latest-news", {
      headers: { "Authorization": "demo" }
    });
    const data = await res.json();
    container.innerHTML = "";
    data.news.slice(0, 3).forEach(item => {
      const div = document.createElement("div");
      div.className = "news-item";
      div.innerHTML = `<strong>${item.title}</strong><br><small>${item.published}</small><p>${item.description}</p>`;
      container.appendChild(div);
    });
  } catch (e) {
    container.innerHTML = "<p>Impossible de charger les actualités.</p>";
  }
}
fetchNews();
