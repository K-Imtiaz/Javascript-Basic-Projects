// 1.radianToDegree
function radianToDegree(radian) {

    if (typeof radian !== 'number') {

        return 'Invalid number';
    } else {

        const degree = radian * 57.2958;

        return degree;
    }
}
const radian = 0.76;
const degree = radianToDegree(radian);
// console.log("Degree: ", degree);