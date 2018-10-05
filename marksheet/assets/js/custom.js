$( document ).ready(function() {
  $('#green').click( function() {
     $('.tabledata').css({"color":"#228B22"});
   });
  $('#red').click( function() {
     $('.tabledata').css({"color":"#A0522D"});
   });
  $('#blue').click( function() {
     $('.tabledata').css({"font-size":"15px","color":"#4682B4"});
     $('.table').css({"border":"blue"});
   });
  var total_no_of_students = 3;
  function update_summary() {
    var total = 0;
    var min = 300;
    var max = 0;
    var total_no_of_students = 0
    $(".total").each(function( index ) {
     total_no_of_students += 1;
     student_total = (parseInt($(this).text()) ? parseInt($(this).text()) : 0);
     if(max < student_total) { max = student_total }
     if(min > student_total) { min = student_total }
     total += student_total;
   });
   $("#total").html(total);
   $("#average").html((total/3).toFixed(2));
   $("#min").html(min);
   $("#max").html(max);
   $("no_of_student").html(total_no_of_students);
 }

   function assing_change_event(){
     $(".marks").change(function() {
       id = $(this).data("id");
       sum = (parseInt($("#english_" + id).val())  ? parseInt($("#english_" + id).val()) : 0) +
            (parseInt($("#math_" + id).val())     ? parseInt($("#math_" + id).val()) : 0) +
            (parseInt($("#science_" + id).val())  ? parseInt($("#science_" + id).val()) : 0);
     $("#total_" + id).html(sum);
     $("#average_" + id).html((sum/3).toFixed(2) + "%");
     update_summary();
     $("#table").removeClass("marks");
    });
  }
  assing_change_event();
  $("#add").click(function(){
    total_no_of_students += 1;
    var english = parseInt($("#english").val())  ? parseInt($("#english").val()) : 0;
    var math = parseInt($("#math").val())  ? parseInt($("#math").val()) : 0;
    var science = parseInt($("#science").val())  ? parseInt($("#science").val()) : 0;

    var sum = english + math + science;
    var avg = (sum/3).toFixed(2)+"%";
    var markup =  "<tr>" +
                    "<td align='center'>" + parseInt($("#id").val()) + "</td>" +
                    "<td align='right'>" + $("#name").val() + "</td>" +
                    "<td align='right' class='marks' id='english'  value='' data-id='" + parseInt($("#id").val())+"'>" + english + "</td>" +
                    "<td align='right' class='marks' id='math' value='' data-id='" + parseInt($("#id").val())+"'>" + math + "</td>" +
                    "<td align='right' class='marks' id='science'    value='' data-id='" + parseInt($("#id").val())+"'>" + science + "</td>" +
                    "<td align='right' id='total_" + parseInt($("#id").val()) + "'  class='total'>" + sum + "</td>" +
                    "<td align='right' id='average_" + parseInt($("#id").val()) +"' class='average'>" + avg + "</td>" +
                    "<td align='center'><input type='button' class='remove_field_button'  value='Delete'>" +"</td>"+
                    // "<td align='center'><input type='button' class='edit_button'  value='Edit'>" +"</td>"+
                  "</tr>";
  $("#table").append(markup);
  $("#no_of_student").html(total_no_of_students);
  // assing_change_event();
  update_summary();
  $('.modal-body').find('input').val('');
  });

  $("#table").on('click','.remove_field_button',function(){
      $(this).closest('tr').remove();
      total_no_of_students-=1;
  });

  $("#remove").click(function(){
    $('#table tr:last').remove();
    total_no_of_students -= 1;
    $("#no_of_student").html(total_no_of_students);
    update_summary();
  });

  // $("#table").on('click','.edit_button',function(){
  //   var par = $(this).parent().parent();
  //   var tdId = par.children("td:nth-child(1)");
  //   var tdName=par.children("td:nth-child(2)");
  //   var tdEnglish=par.children("td:nth-child(3)");
  //   var tdMath=par.children("td:nth-child(4)");
  //   var tdScience=par.children("td:nth-child(5)");
  //   var tdTotal=par.children("td:nth-child(6)");
  //   var tdAverage=par.children("td:nth-child(7)");
  //
  //   tdId.html("<input type='text' id='txtId' value='"+tdId.html()+"'/>");
  //   tdName.html("<input type='text' id='txtName' value='"+tdName.html()+"'/>");
  //   tdEnglish.html("<input type='text' id='txtEnglish' value='"+tdEnglish.html()+"'/>");
  //   tdMath.html("<input type='text' id='txtMath' value='"+tdMath.html()+"'/>");
  //   tdScience.html("<input type='text' id='txtScience' value='"+tdScience.html()+"'/>");
  //   tdTotal.html("< id='txtTotal' value='"+tdTotal.html()+"'/>");
  //   tdAverage.html("< id='txtAverage' value='"+tdAverage.html()+"'/>");
  // });

});
