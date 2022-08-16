//2.  IS JavaScript File   

function isJavaScriptFile(name) {

    if (typeof name !== 'string') {

        return 'Input Valid information ';
    } else {

        if (name.endsWith('.js')) {
            return true;
        } else {
            return false;
        }
    }
}

// const names = 19;
// const fileName = isJavaScriptFile(names);
// console.log(fileName);