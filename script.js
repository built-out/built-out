var files = [];

function listFiles() {
  var directory = document.getElementById("directory");
  var files = directory.files;

  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    var li = document.createElement("li");
    li.innerHTML = file.name;
    filesList.appendChild(li);
  }
}

function uploadFile() {
  var file = document.getElementById("file").files[0];

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/upload");
  xhr.onload = function() {
    if (xhr.status === 200) {
      alert("File uploaded successfully!");
    } else {
      alert("File upload failed!");
    }
  };

  var formData = new FormData();
  formData.append("file", file);
  xhr.send(formData);
}

window.onload = listFiles;
