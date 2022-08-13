

document.getElementById('submit').onclick=()=>{
   var name =document.getElementById('nameID').value;
   var email =document.getElementById('email').value;
   var passWord =document.getElementById('password').value;
   var phone =document.getElementById('PhoneID').value;
   var gioiTinh =document.getElementsByName('gender');

   var data= new Data()
   data.name=name
   data.email=email
   data.password=passWord
   data.gender=layGioiTinh(gioiTinh)
   data.phone=phone
   console.log(data)

   var promise=axios({
    url:'https://shop.cyberlearn.vn/api/Users/signup',
    method:'POST',
    data:data
});

promise.then(function(result){
    console.log(result.data.content);
});
promise.catch(function(err){
    console.log(err);
})

}