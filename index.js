

var count = 0;
$(function(){
    $('#add').click(function(){
        count++;
        var tr = `<tr>
        <td style="color: white; text-align:center">`+count+`</td>
        <td><input type='text' value='' id='Items' class='form-control form-control-sm'></td>

        <td><input type='number' value='' id='Price' class='form-control form-control-sm' ></td>
        <td><input type='number' value='1' id='Quantity' class='form-control form-control-sm' ></td>
        <td><input type='number' value='' id='Total' disabled class='form-control form-control-sm' ></td>
        <td style='width:120px; float: left'><button id='edit' class='btn btn-info btn-sm mr-2'><i id='i1' class='fa fa-edit'></i>
        </button><button id='neardel' class='btn btn-danger btn-sm mr-2'><i id='i2' class='fa fa-trash'></i>
        </button></td>
        </tr>`;;
        // function for adding, del and removing tr
        console.log(count)
    $('tbody').append(tr);
    var grandTotal = function () {
      var sumTotal = 0;
         $("tr").find("#Total").each(function () {
              var innputVal = $(this).closest(this).val();
                  if ($.isNumeric(innputVal)) {
                      sumTotal += parseFloat(innputVal)
           }
               $("#Ftotal").text(sumTotal)
    })
}

function counter() {
  var i = 0;
  $("tr").each(function () {
$(this).find("#serial").html(i);
      i++;
})
}


    var subTotal = function () {
      $("tr").each(function () {
     $(this).closest("tr").find("#Total").
     val($(this).closest("tr").find("#Price").val() * $(this).closest("tr").find("#Quantity").val());
     })
}

$(document).on("keyup", "#Quantity", function () {
  subTotal();
  grandTotal()
})
$(document).on("keyup", "#Price", function () {
 subTotal();
 grandTotal();
})
$(document).on("click", "#detall", function () {
  $("tbody").find("tr").remove("tr");
  $("#Ftotal").text('');
  counter();
  

})
   $(document).on('click', '#neardel', function(){
     $(this).closest('tr').remove();
   })
  
   
})
})
function refresh(){
    location.reload();
}

