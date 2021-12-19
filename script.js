function convertToUSD (money) {
    return money*1.4;

}
console.log(convertToUSD(500));
function convertToBRL (money) {
    return money*5.7*0.99;

}
console.log(convertToBRL(500));

//convert £ to usd,brl or tr

//a is currency (USD or BRL or TR)
//b is value of money for £

function convertMoney(a,b) {
    money =  1000 ;//£ olarak
    if (a==="USD" && b===1.4) {
        return money*1.4 + "USD";
        
    } else if (a==="BRL" && b===5.7) {
        return money*5.7*0.99 + "BRL"
    } else if (a==="TL" && b===19) {
        return money*19*0.99 + "TL"
    }else {
        return "hatalı giriş yaptınız"
    }
}


//1000 £ için deneyelim
console.log(convertMoney("USD",1.4))//1400 USD 
console.log(convertMoney("BRL",5.7))//5643 BRL
console.log(convertMoney("TL",19))//18810 TL

