
function display(data){
    console.log(data);
    var a = data.people.length;
    const div = document.getElementById('list');
    for(var i=0 ; i<a;i++){
         
        const listitem = document.createElement('li');
        const text1 = document.createTextNode(data.people[i].name);
        const text2 = document.createTextNode("--------------" + data.people[i].craft);

          listitem.appendChild(text1);
          listitem.appendChild(text2);
              div.appendChild(listitem);
    }
}





$.ajax({
    url:'http://api.open-notify.org/astros.json',
    method:'GET',
    success: display
})