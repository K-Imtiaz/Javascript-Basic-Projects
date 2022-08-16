function isJavaScriptFile(text) {

    if (typeof text !== 'string') {

        return 'Input Valid information ';
    } else {

        if (text.endsWith('.js')) {
            return true;
        } else {
            return false;
        }
    }
}

const file = 12;
const fileName = isJavaScriptFile(file);
// console.log(fileName);