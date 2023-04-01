
var postAPI = "https://script.google.com/macros/s/AKfycbwnM1Oy_F9TEjywHX6O5f9gTU9rkd6C8jU1n4XITymZGHYZjCpFURl9LDn8PgGHWOIZKQ/exec";
fetch(postAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (post) {
    $(document).ready(function () {
      $("circle").click(function () {
        var Id = $(this).attr("id");
        //  console.log("Lấy ID khi Click vào : "+Id);
        var Idslice = Id.slice(6, 9)
        //  console.log("Sau kh đã cắt Id: "+ Idslice)
        var IdNum = Number(Idslice) - 1;
        //  console.log("Sau kh đã ép dữ liệu: "+ Idslice + "| kiểu dữ liệu : " + typeof IdNum)
        var urlCmt = $(".fb-comments").attr("data-href")
        var idRange =  Number(Idslice)+1;
      // var urlCmt1 = urlCmt + post[IdNum].ky_hieu;
        
        $("#c-name").html(post[IdNum].name);
        $("#c-sign").html(post[IdNum].international_name);
        $("#c-location").html(post[IdNum].location);
        $("#c-howtofind").html(post[IdNum].howtofind);
        $("#c-needling").html(post[IdNum].needling);
        $("#c-actions").html(post[IdNum].actions);
        $("#c-special-features").html(post[IdNum].special_features);
        $("#imgHuyet").attr({
          "title": "Picture " + post[IdNum].name,
          "src": post[IdNum].link_img,
        });
        

        
      });
    });


  })

 
