var id;
var copy;
var i = 0;

function allowDrop(event) {
    event.preventDefault();
}

function dragStart(event) {
    id = event.target.id;
    let originalElement = document.getElementById(id)
    copy = originalElement.cloneNode(true);
    copy.id =  id + ++i;
}

function drop(event) {
    event.preventDefault();
    event.target.append(copy);
}

function dragStartDropZone(event) {
    id = event.target.id;
}

function dropDropZone(event) {
    event.preventDefault();
    event.target.append(event.getElementById);
}