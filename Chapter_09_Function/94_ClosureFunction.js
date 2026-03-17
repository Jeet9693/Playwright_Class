function outer(){
    let message = "Hello its me";
    console.log("Outer called");
    

    function inner(){
        console.log(message);
        
    }
}

outer();

let fn_inner = outer();
fn_inner();
