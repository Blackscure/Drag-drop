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
    copy.classList.add("draggable")
    copy.dragStart = (e) => {
        id = e.target.id;
        current = document.getElementById(id);
        $(function() {
            $(".draggable" ).draggable();
        });
    }
}

function drop(event) {
    event.preventDefault();
    event.target.append(copy);
}