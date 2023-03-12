const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://youtube-v31.p.rapidapi.com/search?part=snippet&order=date&q=reactjs");
xhr.setRequestHeader("X-RapidAPI-Key", "09ad088806msh2f29f64e846a8aap1e9b30jsnb7cb1a482af3");
xhr.setRequestHeader("X-RapidAPI-Host", "youtube-v31.p.rapidapi.com");

xhr.send(data);