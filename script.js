var id;
var copy;
var current;
var i = 0;

function allowDrop(event) {
    event.preventDefault();
}

function dragStart(event) {
    id = event.target.id;
    let originalElement = document.getElementById(id)

    copy = originalElement.cloneNode(true);
    copy.id =  id + ++i;
    copy.dragStart = dragStartDropZone(event);
    current = copy;
}

function drop(event) {
    event.preventDefault();
    event.target.append(current);
}

function dragStartDropZone(event) {
    id = event.target.id;
    current = document.getElementById(id);
}

//moveble
$( function() {
    $( "#dropzone" ).draggable();
  } );