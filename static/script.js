const router = async () => {
  const routes = [
    { path: "/", view: () => `<a href="/about">about page</a>` },
    { path: "/about", view: () => `<a href="/">home page</a>` },
  ];

  let match = routes.find((route) => {
    return window.location.pathname === route.path;
  });

  if (!match) {
    match = {
      route: routes[0],
    };
  }
  document.querySelector("#app").innerHTML = match.route.view();
};

const navigate = (url) => {
  history.pushState(null, null, url);
  router();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (event) => {
    if (event.target.nodeName === "A") {
      console.log("here");
      event.preventDefault();
      navigate(event.target.href);
    }
  });

  router();
});
