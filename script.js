document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('coinChart').getContext('2d');
  const coinChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Январь', 'Февраль', 'Март', 'Апрель'],
      datasets: [{
        label: 'Стоимость ($)',
        data: [0.0567, 0.0783, 0.1012, 0.1423],
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

  document.getElementById('amount').addEventListener('input', function() {
    const price = 0.1423;
    const value = parseFloat(this.value || 0);
    document.getElementById('result').textContent = (value / price).toFixed(2);
  });
});