function layDanhSachProDuctApi(){
    var promise=axios({
        url:'https://shop.cyberlearn.vn/api/Product',
        method:'GET',

    });
    promise.then(function(result){
        console.log(result.data.content);
        renderProDuct(result.data.content);
    });
    promise.catch(function(err){
        console.log(err);
    });
}

window.onload=function(){
    layDanhSachProDuctApi();
}




function renderProDuct(arrProDuct) {
    var html = ''; 
    for (var i = 0; i < arrProDuct.length; i++) {
        var prd = arrProDuct[i]; 
        html += `
            <div class="col-xl-4 col-md-6 col-sm-12">
               <div class="item">
                <img src='${prd.image}'>
                <h3>${prd.name}</h3>
                <p>${prd.shortDescription}</p>
                <div class="detail">
                    <a href="../detail.html?productID=${prd.id}" target="_blank" class="btn btn-warning">Buy now</a>
                    <span>${prd.price}$</span>   
                </div>
               </div>
            </div>
        `;
    }
    document.querySelector('#tblproduct').innerHTML=html;
}