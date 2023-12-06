<!-- Chart connection -->
<script>
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
  document.head.appendChild(script);

  // Creating a graph
  script.onload = function() {
    const ctx = document.createElement('canvas').getContext('2d');
    document.body.appendChild(ctx.canvas);

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Label1', 'Label2', 'Label3'],
        datasets: [{
          label: 'Dataset',
          data: [10, 20, 30],
        }]
      }
    });
  };
</script>
