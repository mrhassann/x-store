// ====== geat elment========
let title= document.getElementById('title');
let price= document.getElementById('price');
let taxes= document.getElementById('taxes');
let ads= document.getElementById('ads');
let total= document.getElementById('total');
let category= document.getElementById('category');
let submet= document.getElementById('submet');
let ubdate= document.getElementById('ubdate');
let searsh= document.getElementById('searsh');
let name= document.getElementById('namee');
var mood='creat';
var index=0;
let color = document.getElementById('headmark');
color.style.color='red'
let colorr = document.getElementById('undermark');
colorr.style.color = 'red'
// =========get total=============
function GetTotal()
{
    if(price.value != ''){
        let rusalt = +price.value + +taxes.value + +ads.value;
        total.innerHTML=rusalt;
        total.style.backgroundColor='#040';
    }else{
        total.value=''
        total.style.backgroundColor='#a00d02';
    }
}
// ==============creat prodact (c)==============
let prodactlest=[];
if(localStorage.getItem('prodactt') !==null){
    prodactlest=JSON.parse(localStorage.getItem('prodactt'))
    displaydata();
}
function creatprodact()
{
    let newproduct={
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        total:total.innerHTML,
        namee:namee.value,
        category:category.value,
    }
    prodactlest.push(newproduct);
    localStorage.setItem('prodactt',JSON.stringify(prodactlest));
    clearinput();
    displaydata();
}
// =========clear my data============
function clearinput(){
    title.value=null;
    price.value=null;
    taxes.value=null;
    ads.value=null;
    total.innerHTML=null;
    namee.value=null,
    category.value=null;
}
// =============read data=============
function displaydata()
{
    let cartona='';
    for(var i=0;i<prodactlest.length;i++){
        cartona+=
        `
        <tr>
                    <td class="pb-3 pt-3">${[i]}</td>
                    <td class="pb-3 pt-3">${prodactlest[i].title}</td>
                    <td class="pb-3 pt-3">${prodactlest[i].price}</td>
                    <td class="pb-3 pt-3">${prodactlest[i].taxes}</td>
                    <td class="pb-3 pt-3">${prodactlest[i].ads}</td>
                    <td class="pb-3 pt-3">${prodactlest[i].total}</td>
                    <td class="pb-3 pt-3">${prodactlest[i].namee}</td>
                    <td class="pb-3 pt-3">${prodactlest[i].category}</td>
                    <td><button onclick="setdata(${i})" class="btn btn-outline-warning">UBDATE</button></td>
                    <td><button onclick="deletebroduct(${i})" class="btn btn-outline-danger">DELETE</button></td>
                </tr>
        `
    }
    document.getElementById('creatnew').innerHTML=cartona;
}
// =============delete items (HTML & localstorage)======================
function deletebroduct(bro)
{
    prodactlest.splice(bro,1);
    localStorage.setItem('prodactt',JSON.stringify(prodactlest));
    displaydata();
}
function searshproduct()
{
    var term=searsh.value;
    let cartona='';
    for(var i=0;i<prodactlest.length;i++){
        if(prodactlest[i].namee.tolwercase().includes(term.tolwercase())==true){
            cartona+=
                    `
                    <tr>
                                <td class="pb-3 pt-3">${[i]}</td>
                                <td class="pb-3 pt-3">${prodactlest[i].title}</td>
                                <td class="pb-3 pt-3">${prodactlest[i].price}</td>
                                <td class="pb-3 pt-3">${prodactlest[i].taxes}</td>
                                <td class="pb-3 pt-3">${prodactlest[i].ads}</td>
                                <td class="pb-3 pt-3">${prodactlest[i].total}</td>
                                <td class="pb-3 pt-3">${prodactlest[i].namee}</td>
                                <td class="pb-3 pt-3">${prodactlest[i].category}</td>
                                <td><button onclick="setdata(${i})" class="btn btn-outline-warning">UBDATE</button></td>
                                <td><button onclick="deletebroduct(${i})" class="btn btn-outline-danger">DELETE</button></td>
                            </tr>
                    `
        }
    }
    document.getElementById('creatnew').innerHTML=cartona;
}
function setdata(indexelment)
{
    title.value=prodactlest[indexelment].title;
    price.value=prodactlest[indexelment].price;
    taxes.value=prodactlest[indexelment].taxes;
    ads.value=prodactlest[indexelment].ads;
    GetTotal();
    namee.value=prodactlest[indexelment].namee;
    category.value=prodactlest[indexelment].category;
    submet.classList.add('d-none');
    ubdate.classList.remove('d-none');
    index=indexelment;
}
function ubdatebrodact()
{
    let newproduct={
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        total:total.innerHTML,
        namee:namee.value,
        category:category.value,
    }
    prodactlest.splice(index,1,newproduct)
    localStorage.setItem('prodactt',JSON.stringify(prodactlest));
    clearinput();
    displaydata();
    submet.classList.remove('d-none');
    ubdate.classList.add('d-none');
}
function validcategory()
{
    var text=category.value;
    var regex=/^[A-Z][a-z]{3,10}$/
    var msgname=document.getElementById('msgname')
    if(regex.test(text)==true){
        category.classList.add('is-valid')
        category.classList.remove('is-invalid')
        msgcategory.classList.add('d-none');
    }else{
        category.classList.add('is-invalid')
        category.classList.remove('is-valid')
        msgcategory.classList.remove('d-none');
    }
}
function validname()
{
    var text=namee.value;
    var regexx=/^([A-Z]|[a-z]){4,10}$/
    if(regexx.test(text)==true){
        namee.classList.add('is-valid');
        namee.classList.remove('is-invalid');
        msgname.classList.add('d-none');
    }else{
        namee.classList.add('is-invalid');
        namee.classList.remove('is-valid');
        msgname.classList.remove('d-none');
    }
}
