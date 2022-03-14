// function loadTech(){
//     let newRequest = new XMLHttpRequest();
//     newRequest.onreadystatechange = function () {
//         if (this.load == 4 && this.status == 200) {
//             let myObj = JSON.parse(this.responseText);
//             for (var i = 0; i < myObj.tech.length; i++); {
//                 var node = document.createElement("LI");    // Create a <li> node
//                var textnode = document.createTextNode(myObj.tech[i]); // Create a text node
//                 node.appendChild(textnode);      // Append the text to <li>
//                 document.getElementById("tech").appendChild(node);     // Append <li> to <ul> with id="myList"
//    }
// }
// };
// newRequest.open("GET", "tech.json", true);
// newRequest.send(); 
// }
//     let newRequest2 = new XMLHttpRequest();

// function loadTech() {
//     getTech.onreadystatechange = function () {
//       if (this.readyState == 4 && this.status == 200) {
//         let getTech = JSON.parse(this.responseText);
//         document.getElementById("tech").innerHTML = "";
//         for (let i = 0; i < results.length; i++) {
//           console.log(results[i].tech);
//           let li = document.createElement("LI");
//           let textnode = document.createTextNode(getTech.tech[i])
//                    node.appendChild(textnode);
//                    document.getElementById("tech").appendChild(node);
//                   }
//       }
//     };
//     newRequest2.open("GET", "tech.json", true);
//     newRequest2.send();
//   }


function tech() {
    newRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            results = JSON.parse(this.responseText);
            document.getElementById("tech").innerHTML = "";
            for (var i = 0; i < myObj.tech.length; i++) {
                console.log(myObj[i].tech);
                var node = document.createElement("li"); // Create a <li> node
                var textnode = document.createTextNode(myObj.tech[i]); // Create a text node
                node.appendChild(textnode); // Append the text to <li>
                document.getElementById("tech").appendChild(node); // Append <li> to <ul> with id="tech"
            }
        };
    }
    newRequest.open("GET", "tech.json", true);
    newRequest.send();
}