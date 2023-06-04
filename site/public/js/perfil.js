let notaIng = 0
let notaFra = 0
let notaJpn = 0


const ctx1 = document.getElementById("myChart1");
const ctx2 = document.getElementById("myChart2");
const ctx3 = document.getElementById("myChart3");

let grafico1 = new Chart(ctx1, {
	type: "doughnut",
	data: {
		labels: ["Acertos", "Erros"],
		datasets: [
			{
				label: "Acompanhamento dos votos:",
				data: [notaIng, 3],
				backgroundColor: ['rgba(232, 159, 19, .9)',
                'rgba(75, 72, 22, .9)'],
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


let grafico2 = new Chart(ctx2, {
	type: "doughnut",
	data: {
		labels: ["Acertos", "Erros"],
		datasets: [
			{
				label: "Acompanhamento dos votos:",
				data: [notaFra, 3],
				backgroundColor: ['rgba(232, 159, 19, .9)',
                'rgba(75, 72, 22, .9)'],
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


let grafico3 = new Chart(ctx3, {
	type: "doughnut",
	data: {
		labels: ["Acertos", "Erros"],
		datasets: [
			{
				label: "Acompanhamento dos votos:",
				data: [notaJpn, 3],
				backgroundColor: ['rgba(232, 159, 19, .9)',
                'rgba(75, 72, 22, .9)'],
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

function removeData(chart) {
	chart.data.datasets.forEach((dataset) => {
		dataset.data.pop();
	});
	chart.update();
}

function attNotas1(chart) {
	chart.data.datasets[0].data[0] = notaIng;
	chart.data.datasets[0].data[1] = 3 - notaIng;

	chart.update();
}

function attNotas2(chart) {
	chart.data.datasets[0].data[0] = notaFra;
	chart.data.datasets[0].data[1] = 3 - notaFra;

	chart.update();
}

function attNotas3(chart) {
	chart.data.datasets[0].data[0] = notaJpn;
	chart.data.datasets[0].data[1] = 3 - notaJpn;

	chart.update();
}


function buscarNota() {
	fetch("/usuarios/listar", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then(function resposta(response) {
			response.json().then((json) => {
				let listLength = json.length;
                let userID = sessionStorage.ID_USUARIO

                for(let i = 0; i < listLength; i++) {
                    if(json[i].idUsuario == userID) {
                        notaIng = json[i].testeIng;
                        notaFra = json[i].testeFra;
                        notaJpn = json[i].testeJpn;
                    }
                }

                removeData(grafico1)
                removeData(grafico2)
                removeData(grafico3)

                attNotas1(grafico1)
                attNotas2(grafico2)
                attNotas3(grafico3)

                console.log(notaIng, notaFra, notaJpn)
			});
		})
		.catch(function (resposta) {
			console.log(`#ERRO: ${resposta}`);
		});
}

