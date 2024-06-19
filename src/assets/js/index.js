function openNav() {
  document.getElementById("mySideNav").style.width = "15rem";
}

function closeNav() {
  ajustarAnchoElemento();
}

// Función para ajustar el ancho del elemento
  function ajustarAnchoElemento() {
    var elemento = document.getElementById("mySideNav");
    var anchoRestaurado = 15;

      elemento.style.width = verifyWidth() ? anchoRestaurado + "rem" : "0";
  }

function verifyWidth(){
    return window.innerWidth > 576;
}

filterSelection("all"); // Execute the function and show all angcols
      function filterSelection(c) {
        var x, i;
        x = document.getElementsByClassName("angcol");
        if (c === "all") c = "";
        // Add the "show" class (display:flex) to the filtered elements, and remove the "show" class from the elements that are not selected
        for (i = 0; i < x.length; i++) {
          angRemoveClass(x[i], "show");
          if (x[i].className.indexOf(c) > -1) angAddClass(x[i], "show");
        }
      }

      // Show filtered elements
      function angAddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
          if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
          }
        }
      }

      // Hide elements that are not selected
      function angRemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
          while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
          }
        }
        element.className = arr1.join(" ");
      }

      // Add active class to the current button (highlight it)
      var btnContainer = document.getElementById("myPortFolioFilterBG");
      var btns = btnContainer.getElementsByClassName("btn");
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
        });
      }