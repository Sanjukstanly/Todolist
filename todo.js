function todoList() {
    
    var xhttp = new XMLHttpRequest();
  
    xhttp.onreadystatechange = function () {
  
      if (this.readyState == 4 && this.status == 200) {
  
        var response = JSON.parse(this.responseText)
  
        for (i = 0; i <= response.length; i++) {
        if(response[i].completed===false){
          var list =
            `<li class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                        <div class="d-flex align-items-center">
                          <input  class="form-check-input me-2" type="checkbox" value="" aria-label="..."  onclick="checkboxcount()"/>
                         
                         
                            
                          ${response[i].title}
                         
                        </div>
              </li>`
        }else{
            var list =
            `<li class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                        <div class="d-flex align-items-center" style="color:green; text-decoration-line: line-through;
                        text-decoration-color: rgb(205, 50, 50); font-style: italic; font-family: cursive;">
                          <input class="form-check-input me-2" type="checkbox" value=""  aria-label="..." id="cheq" />
                        
                            
                          ${response[i].title}
                        </div>
                        </li>`
        }
          document.getElementById("list").innerHTML += list;
        }
      }
    }
  
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true)
    xhttp.send();
  }
  
  
  function checkboxcount() {

    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  
    if (checkboxes.length == 5) {
      alert(' Congrat. 5 Tasks have been Successfully Completed');
    }
  
  }
  
  
  function logout(){
    window.location = "index.html";
  }
  
  window.addEventListener("load", todoList);
  