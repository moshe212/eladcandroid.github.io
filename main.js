axios
  .get("https://api.thecatapi.com/v1/images/search")
  .then(function (res) {
    var imeg = document.querySelector("img");
    imeg.src = res.data[0].url;
  })
  .catch(function (error) {
    console.log(error);
  });
