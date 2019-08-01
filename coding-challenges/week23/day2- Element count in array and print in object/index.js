
function frequency(names) {
    let obj ={};
    names.forEach(e => obj[e] = obj[e] ? obj[e] + 1 : 1 )
    // for (let i = 0; i < names.length; i++){
    //     let element = names[i];

    //     if (!obj[element]) {
    //         obj[element] = 0;
    //     }

    //     obj[element] += 1;
    // }
    console.log(obj);
}


let names = ["Ansal", "Vaibhav", "Divyam", "Vaibhav", "Dwarak"];
let arr = [2, 3, 2, 4, 3, 5, 3];
frequency(names);
frequency(arr);