function permutation(n, a) {

let c = [];
for (let i = 0; i < n.length; i++) {
    c[i] = 0;
}
console.log(a);

let i = 0;
while(i < n.length) {
    if( c[i] < i) {
        if (i % 2 == 0) {
            let temp = a[0];
                a[0] = a[i];
                a[i] = temp;
        }
        else {
            let temp = a[c[i]];
                a[c[i]] = a[i];
                a[i] = temp;
        }
    }
    console.log(a);
    c[i]++;
    i = 0;
}

}

permutation('abc', [2,3,4]);