var
  Fs     = require ('fs'),
  Path   = require ('path'),
  HTML_IMPORT;
  
var patches = {
  __HTML_IMPORT__: "src/html_import.html",
  __HEADER__: "src/header.html",
  __GOOGLE_ANALYTICS__: "src/google_analytics.html"
}
 
var files_to_patch = [
  ["src/introduction.html", "index.html"],
  ["src/first_application.html", "first_application.html"],
  ["src/object_model.html", "object_model.html"],
  ["src/template.html", "template.html"]
  // ["src/animated_transition.html", "animated_transition.html"],
  // ["src/examples.html", "examples.html"]
]

function load_patches (end_load) {
  var nb_patches = Object.keys (patches).length;

  function load_patch (key, file_name) {
    Fs.readFile (file_name, 'utf8', function (err, data) {
      patches [key] = data;
      
      nb_patches--;
      if (!nb_patches && end_load) end_load ();
    });
  }

  for (key in patches) {
    load_patch (key, patches[key]);
  }
}

function patch_files () {
  function patch_file (src_file_name, trg_file_name) {
    Fs.readFile (src_file_name, 'utf8', function (err, data) {
    
      for (key in patches) {
        data = data.replace (key, patches[key]);
      }
      Fs.writeFile (trg_file_name, data, 'utf8');
    });
  }

  files_to_patch.forEach (function (data) { patch_file (data[0], data[1]);});
}

load_patches (patch_files);