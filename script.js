<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="CodeHim">
    <title>Simple Bootstrap to-do-list List Example</title>
    
 
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
  
	<link rel="stylesheet" href="demo.css">
  
  </head>
  <body>

  </main>
        <div class=" container rounded-3 form-control shadow  py-3  my-5" style="height:auto;">
        <div>
        <h1 class=" h1">To Do List</h1> 
    <div class=" box row">
            <div class=" col-8">
        <input class=" py-3 mb-2 mt-1 form-control shadow" placeholder="Enter your task" type="text" id="inputText"> 
            </div>
            <div class="col-2">
                <button onclick="addList()" class=" mt-3 px-4 btn btn-dark"> Add </button>
            </div>
        </div>
    </div>
        <hr>
    <div class="row rounded bg-grey">
        <div class=" col-10"> 
        <ul class=" list-group" id="list"></ul>
        </div> 
    </div> 
    
    </div>
  
 </main>
 
      
  
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
     

<script src="to-do-list.js"></script>
  </body>
</html>