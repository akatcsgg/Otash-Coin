document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('coinChart').getContext('2d');

  // Изначальные данные для графика
  const labels = ['0 сек', '5 сек', '10 сек', '15 сек', '20 сек'];
  const data = [0.0567, 0.0783, 0.1012, 0.1423, 0.1300];

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

  // Функция для генерации случайных данных
  function getRandomPrice(lastPrice) {
    const randomChange = (Math.random() * 0.02 - 0.01); // Случайное изменение от -0.01 до +0.01
    return Math.max(0, (lastPrice + randomChange).toFixed(4)); // Цена не может быть ниже 0
  }

  // Обновление графика каждые 5 секунд
  setInterval(() => {
    const lastLabel = labels[labels.length - 1];
    const lastPrice = data[data.length - 1];

    // Добавляем новые данные
    labels.push(`${parseInt(lastLabel) + 5} сек`);
    data.push(getRandomPrice(parseFloat(lastPrice)));

    // Ограничиваем количество точек на графике (например, до 10)
    if (labels.length > 10) {
      labels.shift(); // Удаляем старую метку
      data.shift();   // Удаляем старую цену
    }

    // Обновляем график
    coinChart.update();
  }, 5000);
});