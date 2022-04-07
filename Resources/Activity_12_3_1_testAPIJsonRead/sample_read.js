d3.json("samples.json").then(function(data){
    console.log("hello");
});

//This produces an error due to browsers being unable to read local.
//need to set up a local server to 'pretend' its online
//go to where the folder is in the console and type - python -m http.server