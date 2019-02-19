function calculateAreas() {
	let shapes = ["square", "rectangle", "circle", "triangle"];
	let side = +document.getElementById('side').value;
	let length = +document.getElementById('length').value;
	let width = +document.getElementById('width').value;
	let radius = +document.getElementById('radius').value;
	let base = +document.getElementById('base').value;
	let height = +document.getElementById('height').value;
	values_arr = [
		[side], 
		[length, width], 
		[radius], 
		[base, height]
	];
	getAreas (shapes, values_arr)
		.then(areas => {
			document.getElementById('square-area').innerHTML = areas[0];
			document.getElementById('rectangle-area').innerHTML = areas[1];
			document.getElementById('circle-area').innerHTML = areas[2];
			document.getElementById('triangle-area').innerHTML = areas[3];
		}).catch(err => {
			console.error(`Couldn't calculate areas: ${err}`);
		});
}
