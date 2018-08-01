const phi = 22 / 7;

//--- CIRCLE & BALL

let circle_radius = 7;

function circle_area(radius){
    let result_circle_area = phi * radius * radius;
    return result_circle_area;
}

function ball_perimeter(radius, circle_area){
    let result_ball_perimeter = 4 * circle_area;
    return result_ball_perimeter;
}

function ball_volume(radius, ball_perimeter){
    let result_ball_volume = ball_perimeter * radius / 3;
    return result_ball_volume;
}

let ball_perimeter_1 = ball_perimeter(circle_radius, circle_area(circle_radius));
console.log(`Ball perimeter with radius = ${circle_radius} is ${ball_perimeter_1}`);

let ball_volume_1 = ball_volume(circle_radius, ball_perimeter(circle_radius, circle_area(circle_radius)));
console.log(`Ball volume with radius = ${circle_radius} is ${ball_volume_1}`);


//--- SQUARE & CUBE
let square_side = 8;

function square_area(side){
    let result_square_area = side * side;
    return result_square_area;
}

function cube_area(square_area){
    let result_cube_area = 6 * square_area;
    return result_cube_area;
}

function cube_volume(side, cube_area){
    let result_cube_volume = side * cube_area;
    return result_cube_volume;
}

let cube_area_1 = cube_area(square_area(square_side));
console.log(`Cube area with side = ${square_side} is ${cube_area_1}`);

let cube_volume_1 = cube_volume(square_side, square_area(square_side));
console.log(`Cube volume with side = ${square_side} is ${cube_volume_1}`);

