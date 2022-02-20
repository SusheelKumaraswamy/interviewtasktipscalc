function calc(tippercent){
        var billamount=document.getElementById("billamount").value;
        var person=document.getElementById("people").value;
        console.log(tippercent);
        var tips=billamount*(tippercent/100);
        var tipeach=tips/person;
        var totalbill=+billamount+tips;

        var billforeach=totalbill/person;

        var a=document.getElementById("tipamount");
        a.innerHTML=tipeach.toFixed(2);

        var b= document.getElementById("total");
        b.innerHTML=billforeach.toFixed(2);
}
