function isPowerOfTwo(number) {
if(number<1){
    return false;
}   
while(number>1){

    if(number%2 != 0){
        return false;
    }
    number = number/2;
}
return true;

}
console.log(isPowerOfTwo(4096) );
console.log(isPowerOfTwo(11) );