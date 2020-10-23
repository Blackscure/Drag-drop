<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

<!-- jQuery and JS bundle w/ Popper.js --
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>-->
<link rel="stylesheet" type="text/css" href="styles.css" />
    <title>Drag and drop</title>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
 
</head>
<body>
    <!-------------Dragzone--------->
<h6>Tables</h6><br>
<div id="block-1">
    <img class="circle" id="dragelement1" ondragstart="dragStart(event)">
    <img class="square" id="dragelement2" ondragstart="dragStart(event)">
    <img src="https://img.icons8.com/ios/100/000000/kite-shape.png" id="dragelement3" ondragstart="dragStart(event)">
   <!-- <img class="diamond" id="dragelement3" ondragstart="dragStart(event)">-->
</div>
 

<h6>Barriers & Lables</h6>
<img class="rectangle" id="dragelement4" ondragstart="dragStart(event)"><br>
<img class="thickLine" id="dragelement5" ondragstart="dragStart(event)"><br>
<img class="lightLine" id="dragelement6" ondragstart="dragStart(event)"></img>

<!-------dropezone------->


<div id="dropzone" ondragover="allowDrop(event)" ondrop="drop(event)">
        <div class="product_drag_area"></div>  
        </div>


    <script type="text/javascript" src="script.js"></script>
</body>
</html>