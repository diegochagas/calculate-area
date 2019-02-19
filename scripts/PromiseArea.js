

// It returns a Promise which on success, returns area of the shape, and on failure returns [-1].
let calculateArea = (shape, values) => {
    let promise = new Promise((resolve, reject) => {
        let area = -1;
        if (shape === "square") {
            area = values[0] * values[0];
        }
        if (shape === "rectangle") {
            area = values.reduce((reducer, value) => reducer * value, 1);
        }
        if (shape === "circle") {
            let radius = values[0] * values[0];
            let notRoundedArea = Math.PI * radius;
            area = Math.floor(notRoundedArea * 10) / 10;
        }
        if (shape === "triangle") {
            let reduceValues = values.reduce((reducer, value) => reducer * value, 1);
            area = 0.5 * reduceValues;
        }        
        resolve(area);
    });
    return promise;
}

// It returns a Promise which on success, returns an array of areas of all the shapes and on failure, returns [-1].
let getAreas = (shapes, values_arr) => {
    let promise = new Promise((resolve, reject) => {
        let areas = [];
        for (let i = 0; i < shapes.length; i++) {
            calculateArea(shapes[i], values_arr[i]).then(area => {
                areas.push(area);
            }).catch(error => {
                console.error(error);
            });
        }
        setTimeout(function () {
            let invalidArea = areas.find(area => area === -1);
            if (invalidArea !== undefined) {
                areas.length = 0;
                areas.push(-1);
            }
            resolve(areas);
        }, 1000);
        
    });
    return promise;
}




