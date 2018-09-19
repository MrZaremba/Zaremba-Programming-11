function getAnswer(answer){
    if(!answer){
        $(document).ready(function (){
            $("#grade").html("<strong>Incorrect</strong>");
            $("#solution").attr("class", "alert alert-danger");
        });
    }
    else{
        $(document).ready(function (){
            $("#grade").html("<strong>Correct!!</strong>");
            $("#solution").attr("class", "alert alert-success");
        });
    }
}
