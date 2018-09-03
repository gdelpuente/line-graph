function linegraph(json_url, name, id) {
	$.ajax({
		url: json_url,
		dataType: "json",
		success: function(data) {
			var config = {
				type: 'line',
				data: {
					labels: data["labels"],
					datasets: [{
						label: 'Vendite',
						fill: false,
						backgroundColor: 'rgb(54, 162, 235)',
						borderColor: 'rgb(54, 162, 235)',
						data: data["vendite"],
					}, {
						label: 'stock anno precedente',
						fill: false,
						backgroundColor: 'rgb(75, 192, 192)',
						borderColor: 'rgb(75, 192, 192)',
						borderDash: [5, 5],
						data:data["stock_prec"],
					}, {
						label: 'stock',
						backgroundColor: 'rgb(255, 99, 132)',
						borderColor: 'rgb(255, 99, 132)',
						data:data["stock"],
						fill: true,
					}]
				},
				options: {
					responsive: true,
					title: {
						display: true,
						text: name
					},
					tooltips: {
						mode: 'index',
						intersect: false,
					},
					hover: {
						mode: 'nearest',
						intersect: true
					},
					scales: {
						xAxes: [{
							display: true,
							scaleLabel: {
								display: true,
								labelString: 'Month'
							}
						}],
						yAxes: [{
							display: true,
							scaleLabel: {
								display: true,
								labelString: 'Value'
							}
						}]
					}
				}
			};
			var ctx = document.getElementById(id).getContext('2d');
				window.myLine = new Chart(ctx, config);
		},
		error: function(data) {
			console.log(data);
		}
	});
}
linegraph("j.json",'grafico 1', 'graph1');
linegraph("j.json",'grafico 2', 'graph2');
linegraph("j.json",'grafico 3', 'graph3');
