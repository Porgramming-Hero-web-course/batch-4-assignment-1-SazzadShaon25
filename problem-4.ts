type Circle = {
    shape: "circle";
    radius: number;
};
type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
};
const calculateShapeArea = (geomertry : Circle | Rectangle): number => {
    if(geomertry.shape === "rectangle")
    {
        const result = geomertry.height * geomertry.width;
        return result;
    }
    else {
        const result = 3.1416 * geomertry.radius * geomertry.radius
        return result;
    }
}
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
console.log(rectangleArea);