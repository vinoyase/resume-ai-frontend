(function () {
  const token = localStorage.getItem("token");
  const publicPages = ["login.html", "register.html", "index.html"];

  const currentPage = window.location.pathname.split("/").pop();

  if (!token && !publicPages.includes(currentPage)) {
    window.location.href = "login.html";
  }
})();