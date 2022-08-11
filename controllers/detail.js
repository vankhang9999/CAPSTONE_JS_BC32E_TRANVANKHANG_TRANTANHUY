window.onload=function(){
    const urlParams= new URLSearchParams(window.location.search);
    const myParam=urlParams.get('productID');
    //console.log('param',myParam)
    layIDapi(myParam);
}

function layIDapi(idClick){
    var promise=axios({
        url:'https://shop.cyberlearn.vn/api/Product/getbyid?id='+idClick,
        method:'GET',
    })
    promise.then(function(result){
        console.log(result.data.content)
        renderShoe(result.data.content);
    });
    promise.catch(function(err){
        console.log(err)
    })
}


function renderShoe (ShoesMypram){
    var html='';
    var html2='';
    var htmlsize=''
    var htmllist=''
    
        var list=ShoesMypram;

    html+=`
            <img src="${list.image}" alt="..">
        `
    html2+=`
        <div class="item">
            <h2>Product name</h2>
            <p class="descrip">${list.description}</p>
            <h3 class="text-success">Available size</h3>
            <div id="sizeList"></div>
            <p class="prices">${list.price}$</p>
            <span class="button-plus">+</span>
            <span>1<span>
            <span class="button-minus">-</span>
            <br>
            <button class="btn btn-success addto">Add to cart</button>
        </div>
    `
    for(const value of list.size){
        htmlsize+=`
        <span>${value}</span>
        `
    }
    const listShoes=list.relatedProducts
    for(const value of listShoes){
        htmllist+=`
            <div class="col-xl-4 col-md-6 col-sm-12">
                <div class="item">
                    <img src="${value.image}" alt="..">
                    <h3>${value.name}</h3>
                    <p>${value.shortDescription}</p>
                    <div class="detail">
                        <a href="../detail.html?productID=${value.id}" target="_blank" class="btn btn-warning">Buy now</a>
                        <span>${value.price}$</span>   
                    </div>
                   </div>
                </div>
            </div>        
        
        `
    }
    
    document.getElementById('imgShoes').innerHTML=html;
    document.getElementById('infoShoes').innerHTML=html2;
    document.getElementById('sizeList').innerHTML=htmlsize;
    document.getElementById('shoesList').innerHTML=htmllist
}