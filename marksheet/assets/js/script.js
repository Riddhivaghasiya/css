function addrow() {
      var table=document.getElementById("table");
      var lastrow = table.rows.length;
      var newrow=table.insertRow(lastrow);


      var cel1=newrow.insertCell(0);
      cel1.innerHTML="<input type='text' id='id_4'/>";

      var cel2=newrow.insertCell(1);
      cel2.innerHTML="<input type='text' id='name_4' />";

      var cel3=newrow.insertCell(2);
      cel3.innerHTML="<input type='text' id='english_4'onClick='count_4()' name='mark3'/>";

      var cel4=newrow.insertCell(3);
      cel4.innerHTML="<input type='text' id='math_4'   onClick='count_4()' name='mark3'/>";

      var cel5=newrow.insertCell(4);
      cel5.innerHTML="<input type='text' id='science_4'onClick='count_4()' name='mark3'/>";

      var cel6=newrow.insertCell(5);
      cel6.innerHTML="<input type='text' id='total_4'/>";

      var cel7=newrow.insertCell(6);
      cel7.innerHTML="<input type='text' id='average_4'/>";


  }
     function max()
     {
       var a,b,c;
       var a=document.getElementById('t1').value;
       var b=document.getElementById('t2').value;
       var c=document.getElementById('t3').value;
       document.getElementById('hm').value=Math.max(a,b,c);
     }

     function min()
     {
       var a,b,c;
       var a=document.getElementById('t1').value;
       var b=document.getElementById('t2').value;
       var c=document.getElementById('t3').value;
       document.getElementById('lm').value=Math.min(a,b,c);
     }

     function number()
     {
       var table=document.getElementById('table');
       var rowcount=0;
       var rows=table.getElementsByTagName("tr")
       for(var i=0;i<rows.length;i++){
         if(rows[i].getElementsByTagName("td").length>0){
           rowcount++;
         }

       }
       document.getElementById("nos").innerHTML=rowcount;


     }
  function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
  }



























    // for(var i=1;i<table.rows.length;i++)
    // {
    //   sumval=sumval+table.rows[i].cels[7].innerhtml;
    // }
    //   console.log(sumval);
