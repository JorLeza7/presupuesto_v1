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
            document.querySelector('#r2').innerHTML = r;
            document.querySelector('#spm1').innerHTML = n1;
            document.querySelector('#spa1').innerHTML = (n1*12);
            document.querySelector('#spm2').innerHTML = n2;
            document.querySelector('#spa2').innerHTML = (n2*12);
            document.querySelector('#spm3').innerHTML = n3;
            document.querySelector('#spa3').innerHTML = (n3*12);
            //document.querySelector('#spm3.1').innerHTML = r;
            //document.querySelector('#spa3.1').innerHTML = (r*12);

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
                n1=n1*4
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
            document.querySelector('#r99').innerHTML = r;
            document.querySelector('#spm4').innerHTML = n1;
            document.querySelector('#spa4').innerHTML = (n1*12);
            document.querySelector('#spm5').innerHTML = n2;
            document.querySelector('#spa5').innerHTML = (n2*12);
            document.querySelector('#spm6').innerHTML = n3;
            document.querySelector('#spa6').innerHTML = (n3*12);
            document.querySelector('#spm7').innerHTML = n4;
            document.querySelector('#spa7').innerHTML = (n4*12);
            document.querySelector('#spm8').innerHTML = n5;
            document.querySelector('#spa8').innerHTML = (n5*12);
            document.querySelector('#spm9').innerHTML = n6;
            document.querySelector('#spa9').innerHTML = (n6*12);
            document.querySelector('#spm10').innerHTML = n7;
            document.querySelector('#spa10').innerHTML = (n7*12);
            document.querySelector('#spm11').innerHTML = n8;
            document.querySelector('#spa11').innerHTML = (n8*12);
            document.querySelector('#spm12').innerHTML = n9;
            document.querySelector('#spa12').innerHTML = (n9*12);
        }
