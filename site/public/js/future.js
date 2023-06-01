window.onload = () => {
	buscarVotos();
};

var almVotos = 0;
var rssVotos = 0;
var manVotos = 0;
var hndVotos = 0;

const ctx = document.getElementById("myChart");

let grafico = new Chart(ctx, {
	type: "bar",
	data: {
		labels: ["Alemão", "Russo", "Mandarin", "Hindi"],
		datasets: [
			{
				label: "Acompanhamento dos votos:",
				data: [almVotos, rssVotos, manVotos, hndVotos],
				borderWidth: 1,
			},
		],
	},
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
});

setInterval(() => {
	buscarVotos();
}, 6000);

function votar(num) {
	var idVar = sessionStorage.ID_USUARIO;
	var votoVar = num;

	fetch("/votes/cadastrar", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			idServer: idVar,
			votoServer: votoVar,
		}),
	})
		.then(function resposta(response) {
			console.log("resposta: ", resposta);
		})
		.catch(function (resposta) {
			console.log(`#ERRO: ${resposta}`);
		});

	return false;
}

function removeData(chart) {
	chart.data.datasets.forEach((dataset) => {
		dataset.data.pop();
	});
	chart.update();
}

function attVotos(chart) {
	chart.data.datasets[0].data[0] = almVotos;
	chart.data.datasets[0].data[1] = rssVotos;
	chart.data.datasets[0].data[2] = manVotos;
	chart.data.datasets[0].data[3] = hndVotos;

	chart.update();
}

function buscarVotos() {
	fetch("/votes/listar", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then(function resposta(response) {
			response.json().then((json) => {
				let listLength = json.length;
				let voteList = json;

				almVotos = 0;
				rssVotos = 0;
				manVotos = 0;
				hndVotos = 0;

				removeData(grafico);

				for (let i = 0; i < listLength; i++) {
					switch (voteList[i].voto) {
						case 1:
							almVotos++;
							break;
						case 2:
							rssVotos++;
							break;
						case 3:
							manVotos++;
							break;
						case 4:
							hndVotos++;
							break;
					}
				}
				attVotos(grafico);
			});
		})
		.catch(function (resposta) {
			console.log(`#ERRO: ${resposta}`);
		});
}
