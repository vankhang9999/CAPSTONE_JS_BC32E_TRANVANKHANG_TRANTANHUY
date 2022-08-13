function ProDuct(){
    this.id='';
    this.name='';
    this.price='';
    this.description='';
    this.size='';
    this.shortDescription='';
    this.quantity='';
    this.deleted='';
    this.categories='';
    this.relatedProducts='';
    this.feature='';
    this.image='';
}
function Data(){
    this.email='';
    this.password='';
    this.name='';
    this.gender=true;
    this.phone='';


    layGioiTinh=(gender)=>{
         
        for(const i in gender){
            if(gender[i].checked===true){
                if(gender[i].value==='true'){
                    return true
                }return false
            }
        }
       }
}