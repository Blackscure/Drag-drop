$(document).ready(function(){
    // Get the numbet of all the items dropped in the diagram
    var droppedItem = [];
    var canvas = $(".draw-area")
    var tableCol = $(".tables-main")
    // Set the elements to draggable
    $(".draggable").draggable({
        // Set the helper to clone such that it drugs on the copy of the item
        helper: "clone",
        // grid: [ 20, 20 ]

    });

    // The draw are turn it to droppable to ba able to drop items 
    canvas.droppable({
        drop: function(event, ui){
            // Create an object to represent the properties of a dragged object
            var items = {
                _id:(new Date).getTime(),
                // Set the position of an object using the ui property
                position:ui.helper.position()
            }
            // THe position of the item drugged takes the width of the Tables column and adds it to the draw are width so we need to move it
            items.position.left -= (canvas.position().left )
            console.log(window.innerWidth)
            // Use the ui property from jqueryUI to get the value i.e the class of the node selected
            if (ui.helper.hasClass('circle')){
                // add an item property 'TYPE' to the item object
                items.type = "Circle"
            } else if (ui.helper.hasClass('rectangle')){
                // add an item property 'TYPE' to the item object
                items.type = "Rectangle"
            } else if (ui.helper.hasClass('diamond')){
                // add an item property 'TYPE' to the item object
                items.type = "Diamond"
            } else if (ui.helper.hasClass('barrier-bold')){
                // add an item property 'TYPE' to the item object
                items.type = "Barrier Bold"
            } else if (ui.helper.hasClass('barrier-hollow')){
                // add an item property 'TYPE' to the item object
                items.type = "Barrier Hollow"
            } else if (ui.helper.hasClass('barrier-label')){
                // add an item property 'TYPE' to the item object
                items.type = "Barrier Label"
            } else {
                return;
            }

            // Push the item object to the droppedItem
            droppedItem.push(items)
            // console.log(droppedItem)
           // Render the item in the dropped area
           renderItem(droppedItem)
        }
    })

    // This function draws the item on the dropped area
    function renderItem(droppedItem){
        canvas.empty()
        // Loop through all the items 
        for (var i in droppedItem){
            var item = droppedItem[i]
            
            // Add the item to the canvas/draw area
            var html = "";
            if (item.type === 'Circle'){
                // html =  $(this).addClass("circle")
                html =  "<div class='hold-circle'></div>"
            } else if (item.type === 'Rectangle'){
                html =  "<div class='hold-rectangle'></div>"
            } else if (item.type === 'Diamond'){
                html =  "<div class='hold-diamond'></div>"
            } else if (item.type === 'Barrier Bold'){
                html =  "<div class='dropped_barrier_bold'></div>"
            } else if (item.type === 'Barrier Hollow'){
                html =  "<div class='dropped_barrier_hollow'></div>"
            } else if (item.type === 'Barrier Label'){
                html = "<div class='dropped_barrier_label'><span>Label</span></div>"
            } 
            // Convert the html to a dom object
            // set the css property of where to be dropped
            var dom = $(html).css({
                "position":"absolute",
                "top":item.position.top,
                "left":item.position.left
            }).draggable({
                // when dragging items inside the draw area we need to hundle it in such that it doesnt create a new item but updates it position from the one in the list
                // to achieve that we need to use the stop jquery method to indicate when item is stoped moving

                stop: function(event, ui){
                    // Get the id of the item using the helper property which is created by the attr() below
                    var id = ui.helper.attr("id")
                    console.log(id)
                    for ( var i in droppedItem){
                        // Check for the item wth the same id as the moved item
                        if (droppedItem[i]._id == id){
                            droppedItem[i].position.top = ui.position.top,
                            droppedItem[i].position.left = ui.position.left
                        }
                    }
                }
            }).attr("id", item._id)  // This attr() allows us to send the elemnt to the dom with an id of that particular item
           

            // html.draggable()
            canvas.append(dom)
            // console.log(item)
            
        }
        
    }


})