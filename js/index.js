
function myFunction(e) {
    console.log(e);
    var x = document.getElementById("dropdown1");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  
  function myFunction(second) {
    console.log(second);
    var x = document.getElementById("dropdown2");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
document.querySelector('#copyright-year').innerText = new Date().getFullYear();
