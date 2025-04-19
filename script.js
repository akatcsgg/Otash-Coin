document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('coinChart').getContext('2d');

  // Изначальные данные для графика
  const labels = ['0 сек', '5 сек', '10 сек', '15 сек', '20 сек', '25 сек'];
  const data = [0.05, 0.08, 0.1, 0.12, 0.11, 0.13];

  // Создаем график
  const coinChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Стоимость ($)',
        data: data,
        borderColor: '#00ccaa',
        borderWidth: 2,
        backgroundColor: 'rgba(0, 204, 170, 0.2)',
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: false }
      }
    }
  });

  // Динамическое обновление графика
  setInterval(() => {
    const lastPrice = data[data.length - 1];
    data.push((lastPrice + (Math.random() * 0.02 - 0.01)).toFixed(4));
    labels.push(`${parseInt(labels[labels.length - 1]) + 5} сек`);

    if (data.length > 10) {
      data.shift();
      labels.shift();
    }
    coinChart.update();
  }, 5000);
});