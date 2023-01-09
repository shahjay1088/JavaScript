const outer =()=>{
const OuterVar="Hello";
const Inner= () =>{
    const innerVar="Good Morning";
    console.log(OuterVar,innerVar);
}
return Inner;

}

const innerFun= outer();
innerFun()