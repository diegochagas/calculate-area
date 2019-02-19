function calculateAreas() {
	let shapes = ["square", "rectangle", "circle", "triangle"];
	let side = document.getElementById('side');
	let length = document.getElementById('length');
	let width = document.getElementById('width');
	let radius = document.getElementById('radius');
	let base = document.getElementById('base');
	let height = document.getElementById('height');
	values_arr = getValues(side, length, width, radius, base, height);
	getAreas (shapes, values_arr)
		.then(areas => {
			document.getElementById('square-area').innerHTML = areas[0];
			document.getElementById('rectangle-area').innerHTML = areas[1];
			document.getElementById('circle-area').innerHTML = areas[2];
			document.getElementById('triangle-area').innerHTML = areas[3];
		}).catch(err => {
			console.error(`Couldn't get the areas: ${err}`);
		});
}

function getValues(...values) {
	return values.forEach(value => (value !== undefined ? value : 0));
}