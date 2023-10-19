// $.noConflict();
// jQuery("h1").hide();
// setTimeout(()=>{
//     jQuery("h1").show();
// }, 2000);

$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });
});