

    $(document).on("click", "#ResetBtn", (function (event) {
        event.preventDefault();
        $.ajax({
            url: "/API/Reset", 
            method: "POST"
        }).then(results =>{location.reload()})
    }))