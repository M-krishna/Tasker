$(document).ready(function () {

    // Fetching from local storage and displaying it...
    if (localStorage.length > 0) {
        let values = JSON.parse(localStorage.getItem('Tasks'));
        for (let i = 0; i < values.length; i++) {
            $('.resolutions ul').append(
                $('<li>').append(values[i])
            );
        }
        $('.resolutions ul li').attr('class', 'list-group-item');

        $('.lists li').attr('id', function (i) {
            return 'item' + (i + 1);
        });

        $('.list-group').sortable({
            delay: 100
        });

        //Deleting the items from both window and localstorage...
        $('.lists li').on('click', function () {
            $(this).remove();
            let texts = $(this).text();
            let delete_items = JSON.parse(localStorage.getItem('Tasks'));
            for (let i = 0; i < delete_items.length; i++) {
                if (delete_items[i] == texts) {
                    delete_items.splice(i, 1);
                }
            }
            item = JSON.stringify(delete_items);
            console.log(item);
            localStorage.setItem('Tasks', item);
        });

    } else {
        //If localstorage is empty do nothing...
        console.log('localstorage is empty');
    }

    // Declaring array to store the values...
    let myarray = [];

    //Adding values to the window and to localstorage...
    $('#get').on('click', function (e) {
        
        e.preventDefault();
        let resolution = $('#resolution').val();

        if (resolution) {
            $('.resolutions ul').append(
                $('<li>').append(resolution)
            );

            $('.resolutions ul li').attr('class', 'list-group-item');

            $('.lists li').attr('id', function (i) {
                return 'item' + (i + 1);
            });
            myarray.push(resolution);
            localStorage.setItem('Tasks', JSON.stringify(myarray));
        } else {
            alert('Enter resolution');
        }

        //After entering the values clearing the input field...
        $('#resolution').val('');

        //Again removing...
        $('.lists li').on('click', function () {
            $(this).remove();
            let texts = $(this).text();
            let delete_items = JSON.parse(localStorage.getItem('Tasks'));
            for (let i = 0; i < delete_items.length; i++) {
                if (delete_items[i] == texts) {
                    delete_items.splice(i, 1);
                }
            }
            item = JSON.stringify(delete_items);
            localStorage.setItem('Tasks', item);

        });
    });

    //making the list group items draggable...
    $('.list-group').sortable({
        delay: 100
    });

    $('#clearAll').on('click', function(e){
        e.preventDefault();
        $('.lists li').remove();
        localStorage.removeItem('Tasks');
    })


});