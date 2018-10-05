function count_1()
{
  var arr=document.getElementsByName('mark');
  var total=0;
  for(var i=0;i<3;i++){
    if(parseInt(arr[i].value))
     total+=parseInt(arr[i].value);
  }
   document.getElementById('total_1').value=total;
   document.getElementById('average_1').value=total/3;
}

function count_2()
{
  var arr=document.getElementsByName('mark1');
  var total=0;
  for(var i=0;i<3;i++){
    if(parseInt(arr[i].value))
     total+=parseInt(arr[i].value);
  }
   document.getElementById('total_2').value=total;
   document.getElementById('average_2').value=total/3;
}

function count_3()
{
  var arr=document.getElementsByName('mark2');
  var total=0;
  for(var i=0;i<3;i++){
    if(parseInt(arr[i].value))
     total+=parseInt(arr[i].value);
  }
   document.getElementById('total_3').value=total;
   document.getElementById('average_3').value=total/3;
 }
function count_4()
{
  var arr=document.getElementsByName('mark3');
  var total=0;
  for(var i=0;i<3;i++){
    if(parseInt(arr[i].value))
     total+=parseInt(arr[i].value);
  }
   document.getElementById('total_4').value=total;
   document.getElementById('average_4').value=total/3;
}
