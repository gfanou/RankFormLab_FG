$(document).ready(function()
{
    $("button").click(getRank);

    function getRank(event)
    {
        // stop form from submitting
        event.preventDefault();


        let fName = $("#firstName").val();
        let lName = $("#lastName").val();
        let rName = $("input[name=rank]:checked").val();


        let output = ` Hello, ${rName}. ${fName}  ${lName}`;


        $(" #message").html(output);


    }
});
