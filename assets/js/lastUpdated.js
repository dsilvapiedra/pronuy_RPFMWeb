
function lastUpdated() {
    $.get('images/mareografos/lastUpdate.txt', function(data) {
        document.getElementById("ultimoUpdate").innerHTML = data;
        //alert(data);
     },'text');
  }
lastUpdated()

