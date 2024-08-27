{
    //1-masala
    let a = 10
    if(a >= 0){
        a++
        console.log(a);
    }else{
        console.log(a);
    }
}

{
    //2-masala
    let a = -5
    if(a >= 0){
        a++
        console.log(a);
    }
    else{
        a -= 2
        console.log(a);
    }
}

{
    //3-masala
    let a = 0
    if(a > 0){
        a++
        console.log(a);
    }
    else if(a == 0){
        a = 10
        console.log(a);
    }
    else{
        a -= 2
        console.log(a);
    }
}

{
    //4-masala
    let a = 3
    let b = 7
    let c = -2
    let musbat = 0
    if(a >= 0){
        musbat++
    }else{
    }
    if(b >= 0){
        musbat++
    }else{
    }
    if(c >= 0){
        musbat++
    }else{
    }
    console.log(`a(${a}), b(${b}) va c(${c}) sonlar orasida ${musbat} ta musbat son bor`);
}


{
    //5-masala
    let a = 23
    let b = -30
    let c = -8
    let musbat = 0
    let manfiy = 0
    if(a >= 0){
        musbat++
    }else{
        manfiy++
    }
    if(b >= 0){
        musbat++
    }else{
        manfiy++
    }
    if(c >= 0){
        musbat++
    }else{
        manfiy++
    }
    console.log(`a(${a}), b(${b}) va c(${c}) sonlar orasida ${musbat} ta musbat, ${manfiy} ta manfiy son mavjud`);
}

{
    //6-masala
    let a = 23
    let b = 14
    if(a > b){
        console.log(`${a} soni ${b} sonidan katta`);
    }else{
        console.log(`${b} soni ${a} sonidan katta`);
    }
}

{
    //7-masala
    let a = 32
    let b = 20
    if(a < b){
        console.log(`Kichik son birinchi: ${a} (1-tartib)`);
    }
    else if(b < a){
        console.log(`Kichik son ikkinchi: ${b} (2-tartib)`);
    }
    else{
        console.log(`Ikkala son ham teng: ${a}`);
    }
}

{
    //8-masala
    let a = 90
    let b = 101
    if(a < b){
        console.log(`${b} katta ${a} kichik son`);
    }else{
        console.log(`${a} katta ${b} kichik son`);
    }
}

{
    // 9-masala
    let a = 3.1
    let b = 2.3
    if(a > b){
        let temp = a
        a = b
        b = temp
    }
    console.log(`Kichik son a: ${a}. Katta son b: ${b}`);
}

{
    //10-masala
    let a = 12
    let b = 19
    if(a === b){
        a = b = a + b
    }else{
        a = b = 0
    }
    console.log(`a=${a}. b=${b}`);
}



const showBody = document.querySelector(".body")

function bodyToggle(){
    showBody.classList.toggle("show")
}
