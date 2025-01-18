const a = document.querySelector('.navb')
console.log(a);
console.log(a.children[1].innerHTML);
//PINTING ALL THE VALUES OF CHILDRENS 
for (let index = 0; index < a.children.length; index++) {
console.log(a.children[index].innerHTML);
    
}
const div=document.createElement('div')
console.log(div);
div.className='footer'
div.setAttribute("title","f")
const f1=document.createTextNode("Copyrights @2025")

div.appendChild(f1)
div.style.display = 'flex';
div.style.justifyContent = 'center';
div.style.alignItems = 'center';
div.style.height = '50px';
div.style.backgroundColor = '#f0f0f0';

//ATTACHING THE DIV IN THE HTML
document.body.appendChild(div)

//OPTIMISED APPROACH FOR EDIT 
const button2=document.getElementById('b22')
button2.innerText='Clear'

const inname=document.getElementById("inputn")
const ivalue=document.getElementById("inputv")

button2.addEventListener('click',clearf,false)
function clearf(){
        if(inname.value=="" && ivalue.value==""){
                alert("No values to be cleared ")
        }
        else{
        alert("You will lost your input")
        console.log(inname.value);
        console.log(ivalue.value);
        inname.value=""
        ivalue.value=""
        }
        
}
const exlist=[];
const button1=document.getElementById('b21')
button1.addEventListener('click',addf)
function addf(){
        if(inname.value=="" && ivalue.value==""){
                alert("No values to add ")
        }
        else{
               const obj={
                name : inname.value,
                values : Number(ivalue.value)
               }
               exlist.push(obj)
               console.log(exlist);
               alert("Added!")
               inname.value=""
               ivalue.value=""
               s=""

               
        }

}
const button3=document.getElementById('b23')
button3.addEventListener('click',()=> spendf(exlist))
function spendf(aob){//ARRAYS OF OBJECTS 
        let s=0
for(let i=0;i<aob.length;i++){
        s+=aob[i].values

}
console.log(s);
totalvalue.innerText=s

}
const totalvalue=document.getElementsByClassName("total")[0]
console.log(totalvalue);
totalvalue.style.textAlign = "center";
totalvalue.style.fontSize = "18px";

//SETTIMEOUT FUNCTION.....
let r=document.getElementById("et2")

const st =setTimeout(rem,10000)
function rem(){
        r.innerText="(Enter Expenses !..)"
        r.style.display='inline'
        r.style.fontFamily='Times new roman'
        r.style.fontSize='20px'
}


button1.addEventListener('click',function(){
        clearTimeout(st)
        r.innerText=''
        console.log("Stopped/added");
        
})


