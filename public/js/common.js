$('#postTextarea').keyup(function(event){
    var textbox = $(event.target)
    var value = textbox.val().trim()

    var submitbtn = $('#submitPostButton')

    if(submitbtn.length == 0) return alert('no submit button found')

    if(value == "") {
        submitbtn.prop("disabled", true)
        return
    }
    submitbtn.prop("disabled", false)
})

$('#submitPostButton').click(function(event){
    var button = $(event.target)
    var textbox = $('#postTextarea')

    var data = {
        content: textbox.val()
    }

    //ajax request
    $.post("/api/posts", data, function(postData, status, xhr){
        console.log(postData)
    })
})