function makeCounter(start = 0){

    let count = start;

    function increment(){
        count++;
    }
    function decrement(){
        count--;
    }
    function get(){
        return count;
    }
    return{
        increment, decrement, get;
    }
}