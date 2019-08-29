module.exports = function randomArray(max) {

    let arr = [];
    for (let i = 0; i < max; i++) {
        arr.push(Math.floor(Math.random() * 10)); 
    }
    return arr;
}