  const newRequest = new XMLHttpRequest();
  newRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let myObj = JSON.parse(this.responseText);
      document.getElementById("name").innerHTML = myObj.name;
      document.getElementById("title").innerHTML = myObj.title;
      document.getElementById("github").innerHTML = myObj.github;
      document.getElementById("linkedin").innerHTML = myObj.linkedin;
      document.getElementById("twitter").innerHTML = myObj.twitter;
      document.getElementById("facebook").innerHTML = myObj.facebook;
      document.getElementById("email").innerHTML = myObj.email;
      document.getElementById("phone").innerHTML = myObj.phone;
      document.getElementById("copyright").innerHTML = myObj.copyright;
    }
  };
  newRequest.open("GET", "tech.json", true);
  newRequest.send();