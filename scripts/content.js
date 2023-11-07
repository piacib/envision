console.log("content script");
let container = document.createElement("div");
let button = document.createElement("button");

container.append(button);
button.innerText = "Copy Addendum Data";
button.addEventListener("click", () => {
  // const
  navigator.clipboard.writeText("test\ntest\ntest\t1\t2");
});
console.log(document.getElementsByTagName("h1")[0]);
document.getElementsByTagName("h1")[0].after(container);
