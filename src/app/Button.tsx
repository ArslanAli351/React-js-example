'use client';









type Buttontypes = {
    label:string;
    fun:() =>  void;
}
export default function MyButton({label,fun}:Buttontypes){
    return <button onClick={fun}>{label}</button>
}