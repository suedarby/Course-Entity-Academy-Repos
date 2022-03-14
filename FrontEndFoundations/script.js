function loadRepo() {
  let newRequest = new XMLHttpRequest();
  newRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      results = JSON.parse(this.responseText);
      document.getElementById("repos").innerHTML = "";
      for (let i = 0; i < results.length; i++) {
        console.log(results[i].name);
        let ul = document.getElementById("repos");
        let li = document.createElement("LI");
        li.className = "list-group-item";
        let a = document.createElement("a");
        li.appendChild(document.createTextNode(results[i].name));
        a.appendChild(li);
        a.setAttribute("href", results[i].html_url);
        ul.appendChild(a);
      }
    }
  };
  newRequest.open("GET", "https://api.github.com/users/suedarby/repos", true);
  newRequest.send();
}