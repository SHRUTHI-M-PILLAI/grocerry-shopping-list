//function shoppinglist(){
    //var xhttp = new XMLHttpRequest();
    //xhttp.onreadystatechange = function(){
      //  if(this.onreadystatechange == 4 && this.status==200){
        //    var object = this.responseText;
            //var listed = JSON.parse(xhttp);
          //  document.getElementById("list").innerHTML = this.responseText;
            //console.log(object);
       // }
    //}
    //xhttp.open("GET","shopping.json",true);
    //xhttp.send();
//}

function shoppingList()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if ( this.readyState == 4 && this.status == 200)
        {
           var myObj = this.responseText;
           var items = JSON.parse(myObj);
           console.log(items);
           var table =  "<caption><b>Grocery List<b></caption>" + "<thead><tr><th> Serial Number: </th><th> Name </th><th> Quantity </th><th> Unit </th><th> Department </th><th> Notes </th></tr></thead>";
            for (var i=0;i<items.length;i++ )
            {
                table += "<tbody><tr><td>" +
                 items[i].serialno + "</td><td>" + 
                 items[i].name + "</td><td>" +
                 items[i].quantity + "</td><td>" +
                 items[i].unit + "</td><td>" +
                 items[i].department + "</td><td>" +
                 items[i].notes + "</td></tr></tbody>";
            
            }
            console.log(table);
            document.getElementById('list').innerHTML = table;
         }
    };
    xhttp.open('GET',"shopping.json",true);
    xhttp.send();

}
