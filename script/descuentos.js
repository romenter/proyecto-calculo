//Funcion de descuentos
function calcularDescuento(price, disc) {
        let discount =  price * (disc/100);
        return discount
}





function couponDiscount(){
//array cupones de redes sociales
    const couponValue = [
        {
            name: "facebook",
            disc: 25,
        },{
            name: "twitter",
            disc: 25,
        },{
            name: "instagram",
            disc: 20,
        },{
            name: "tiktok",
            disc: 20,
        },{
            name: "reddit",
            disc: 15,
        },{
            name: "wassap",
            disc: 15,
        },
    ]
//validador de cupones
    const CouponValid = function (couponValue){
        // let f = document.getElementById("coupon")
        // let coupon = f.value;
        return couponValue.name === coupon;
    };

//buserCoupon = primer cupon igual que se encuentre en el array
    const userCoupon = couponValue.find(CouponValid);
// Me quede en la parte en donde no se puede validar el cupon de descuento.
//Funcionaria en caso de simplificarlo, pero no tendria sentido ver descuentos
//mayores a 100, ni precios en descuentos de negativos. Seguire con el proyecto
//para no atrasarme, ya que llevo mas de 4hs intentando (con grandes avances) pero
//ya bloqueado. 
    if (!userCoupon){
        alert('El cupon ' + userCoupon + ' no es valido')
    }else{
        let b = document.getElementById("discounts");
        let disc = parseFloat(b.value);
        let a = document.getElementById("price");
        let price = parseFloat(a.value);

        if((disc + userCoupon.disc)>100){
        t.innerText = "El precio final del producto con descuento y cupon es de $0, felicidades, acumulo un gran descuento ;)"
        
        }else{
            const discount = userCoupon.disc;
            const discDecimal = discount/100;
            const discCoupon = price* discDecimal;

            const priceDiscCoupon = price - calcularDescuento(price, disc) - discCoupon;
            priceDiscCoupon.innerText = "El precio final del producto con descuento y cupon es de $" +priceDiscCoupon

        }
    }
    
    
    
    
    
}




// Funcion descripcion descuento
function OneClickButtonDescuento(){
    
    let a = document.getElementById("price");
    let b = document.getElementById("discounts");
    let price = parseFloat(a.value);
    let disc = parseFloat(b.value);
    let t = document.getElementById('resultDiscount');

    if(price<0 ){
        alert('Por favor, ingrese un monto mayor a 0')
    }else{
        if(disc < 0 || disc > 100){
            alert('Descuento invalido. Indique un descuento que sea mayor a 0 y menor a 100')
        }else{
            let descuento = price - calcularDescuento(price, disc);
            t.innerText = "El precio final del producto con descuento es de $" +
        descuento
        }  
    }


    
}






