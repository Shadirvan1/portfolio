function show() {
  const sidebar = document.querySelector("#sidebar ul")

  if (sidebar.style.display === "flex") {
    sidebar.style.display = "none"
    document.getElementById("menu").innerHTML = "menu"
  } else {
    sidebar.style.display = "flex"
    document.getElementById("menu").innerHTML = "close"
  }
}

