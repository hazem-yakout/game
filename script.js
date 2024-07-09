const cont = document.querySelector(".container");
const userres = document.querySelector(".user_res img");
const comres = document.querySelector(".com_res img");
const res = document.querySelector(".res");
const optimg = document.querySelectorAll(".option-img");
optimg.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");
    userres.src = comres.src = "rock.jpeg";
    optimg.forEach((image2, index2) => {
      index != index2 && image2.classList.remove("active");
    });
    cont.classList.add("start");
    let time = setTimeout(() => {
      cont.classList.remove("start");
      let imgsrc = e.target.querySelector("img").src;
      userres.src = imgsrc;
      let random = Math.floor(Math.random() * 3);
      let comimg = ["rock.jpeg", "paper.jpeg", "scissors.png"];
      comres.src = comimg[random];
      let comval = ["R", "P", "S"][random];
      let userval = ["R", "P", "S"][index];
      let outcomes = {
        RR: "DRAW",
        RP: "USER",
        RS: "USER",
        PP: "DRAW",
        PR: "COMPUTER",
        SP: "COMPUTER",
        SS: "DRAW",
        SP: "COMPUTER",
        SR: "COMPUTER",
        PS: "USER",
      };
      let outcomeval = outcomes[userval + comval];
      res.textContent =
        userval === comval ? "Match Draw" : `${outcomeval} Won !!`;
    }, 2500);
  });
});
