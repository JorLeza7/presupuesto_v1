function calcu(){
    //console.log ("aquiiiii");
    let n1 = parseInt("0" + document.querySelector('#n11').value);
    let n2 = parseInt("0" + document.querySelector('#n22').value);
    let n3 = parseInt("0" + document.querySelector('#n33').value);
    let x = "" + document.querySelector('#p1').value;
        if (x=="s")
            n1= n1*4;
            x = "" + document.querySelector('#p2').value;
        if (x=="s")
            n2= n2*4; 
            x = "" + document.querySelector('#p3').value;
        if (x=="s")
            n3= n3*4;
        let r;      
            r = n1 + n2 + n3;
            console.log (r);
            document.querySelector('#r2').innerHTML = "Bs. "+ r;
            //document.querySelector('#prueba').innerHTML = r;
            document.querySelector('#spm33').innerHTML = "Bs. "+ r;
            document.querySelector('#spa33').innerHTML ="Bs. "+ (r*12);
            document.querySelector('#spm1').innerHTML = "Bs. "+ n1;
            document.querySelector('#spa1').innerHTML = "Bs. "+ (n1*12);
            document.querySelector('#spm2').innerHTML = "Bs. "+ n2;
            document.querySelector('#spa2').innerHTML = "Bs. "+ (n2*12);
            document.querySelector('#spm3').innerHTML = "Bs. "+ n3;
            document.querySelector('#spa3').innerHTML = "Bs. "+ (n3*12);
            
}

function calcu2(){
    //console.log ("aquiiiii");
    let n1 = parseInt("0" + document.querySelector('#n99').value);
    let n2 = parseInt("0" + document.querySelector('#n98').value);
    let n3 = parseInt("0" + document.querySelector('#n97').value);
    let n4 = parseInt("0" + document.querySelector("#n96").value);
    let n5 = parseInt("0" + document.querySelector("#n95").value);
    let n6 = parseInt("0" + document.querySelector("#n94").value);
    let n7 = parseInt("0" + document.querySelector("#n93").value);
    let n8 = parseInt("0" + document.querySelector("#n92").value);
    let n9 = parseInt("0" + document.querySelector("#n91").value);
    let x = "" + document.querySelector("#p4").value;
        if (x == "s")
            n1=n1*4;
            x = "" + document.querySelector('#p5').value;
        if (x=="s")
            n5= n5*4;
            x = "" + document.querySelector('#p6').value;
        if (x=="s")
            n6= n6*4;
            x = "" + document.querySelector('#p7').value;
        if (x=="s")
            n7= n7*4;
            x = "" + document.querySelector('#p8').value;
        if (x=="s")
            n8= n8*4;
            x = "" + document.querySelector('#p9').value;
        if (x=="s")
            n9= n9*4;
            let r;
            r = n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9;
            //console.log (r9);
            document.querySelector('#r99').innerHTML = "Bs. "+ r;
            document.querySelector('#rm22').innerHTML = "Bs. "+ r;
            //document.querySelector('#prueba2').innerHTML = r;
            document.querySelector('#ra99').innerHTML = "Bs. "+ (r*12);
            document.querySelector('#spm4').innerHTML = "Bs. "+ n1;
            document.querySelector('#spa4').innerHTML = "Bs. "+ (n1*12);
            document.querySelector('#spm5').innerHTML = "Bs. "+ n2;
            document.querySelector('#spa5').innerHTML = "Bs. "+ (n2*12);
            document.querySelector('#spm6').innerHTML = "Bs. "+ n3;
            document.querySelector('#spa6').innerHTML = "Bs. "+ (n3*12);
            document.querySelector('#spm7').innerHTML = "Bs. "+ n4;
            document.querySelector('#spa7').innerHTML = "Bs. "+ (n4*12);
            document.querySelector('#spm8').innerHTML = "Bs. "+ n5;
            document.querySelector('#spa8').innerHTML = "Bs. "+ (n5*12);
            document.querySelector('#spm9').innerHTML = "Bs. "+ n6;
            document.querySelector('#spa9').innerHTML = "Bs. "+ (n6*12);
            document.querySelector('#spm10').innerHTML ="Bs. "+ n7;
            document.querySelector('#spa10').innerHTML ="Bs. "+ (n7*12);
            document.querySelector('#spm11').innerHTML ="Bs. "+ n8;
            document.querySelector('#spa11').innerHTML ="Bs. "+ (n8*12);
            document.querySelector('#spm12').innerHTML ="Bs. "+ n9;
            document.querySelector('#spa12').innerHTML ="Bs. "+ (n9*12);       
            
            //let ingreso = parseInt("0" + document.querySelector('#spm33').value);
            //let egreso = parseInt("0" + document.querySelector('#rm22').value);

            //console.log(yi);
            //console.log(egreso);

            //document.querySelector('#ahorro').innerHTML = (ingreso - egreso);

}

/*function calc3(){

    let n1 = parseInt("0" + document.querySelector('#n11').value);
    let n2 = parseInt("0" + document.querySelector('#n22').value);
    let n3 = parseInt("0" + document.querySelector('#n33').value);
    let n4 = parseInt("0" + document.querySelector('#n99').value);
    let n5 = parseInt("0" + document.querySelector('#n98').value);
    let n6 = parseInt("0" + document.querySelector('#n97').value);
    let n7 = parseInt("0" + document.querySelector("#n96").value);
    let n8 = parseInt("0" + document.querySelector("#n95").value);
    let n9 = parseInt("0" + document.querySelector("#n94").value);
    let n10 = parseInt("0" + document.querySelector("#n93").value);
    let n11 = parseInt("0" + document.querySelector("#n92").value);
    let n12 = parseInt("0" + document.querySelector("#n91").value);
    let egr = "" + document.querySelector("#p4").value;
    let ing = "" + document.querySelector('#p1').value;
        if (x=="s")
            n1= n1*4;
            x = "" + document.querySelector('#p2').value;
        if (x=="s")
            n2= n2*4; 
            x = "" + document.querySelector('#p3').value;
        if (x=="s")
            n3= n3*4;
        if (x == "s")
            n4=n4*4;
            x = "" + document.querySelector('#p5').value;
        if (x=="s")
            n8= n8*4;
            x = "" + document.querySelector('#p6').value;
        if (x=="s")
            n9= n9*4;
            x = "" + document.querySelector('#p7').value;
        if (x=="s")
            n10= n10*4;
            x = "" + document.querySelector('#p8').value;
        if (x=="s")
            n11= n11*4;
            x = "" + document.querySelector('#p9').value;
        if (x=="s")
            n12= n12*4;
        let ingreso; 
        let egreso;     
            ingreso = n1 + n2 + n3;
            egreso = n4 + n5 + n6 + n7 + n8 + n9 + n10 + n11 + n12;
            console.log (ingreso);
            document.querySelector('#r2').innerHTML = ingreso;
            document.querySelector('#spm33').innerHTML = ingreso;
            //yi=r;
            document.querySelector('#spa33').innerHTML = (ingreso*12);
            
            //document.querySelector("#totAho").innerHTML = (ingreso-r);
        
            //console.log (r9);
            document.querySelector('#r99').innerHTML = egreso;
            document.querySelector('#rm22').innerHTML = egreso;
            document.querySelector('#ra99').innerHTML = (r*12);
 

}*/