'use client';



import MyButton from "./Button";


type helloTypes = {
  greet:string,
    massage:string,
    label:string,
    fun:() =>  void;
}




export default function HelloWorld( {greet, massage,label,fun}:helloTypes){
return(
<>
<h1>{greet}</h1>
<p>{massage}</p>

<MyButton
label={label}
fun={fun}
/>
</>
)
}