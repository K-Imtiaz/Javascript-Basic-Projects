var mark = 10;

if (mark < 0 || mark > 100) {
    console.log("Invalid mark");
} else if (mark >= 80) {
    console.log("A grade");
} else if (mark >= 60) {
    console.log("B grade");
} else if (mark >= 50) {
    console.log("C grade");
} else if (mark >= 40) {
    console.log("D grade");
} else if (mark <= 39) {
    console.log("F grade");
}