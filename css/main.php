@font-face {
  font-family: 'Ureg';
  font-display: swap;
  src: url("../fonts/Ubuntu-Regular.ttf");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Ubold';
  font-display: swap;
  src: url("../fonts/Ubuntu-Bold.ttf");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Ubold2';
  font-display: swap;
  src: url("../fonts/agfatumc-bold.otf");
  font-weight: normal;
  font-style: normal;
}

* {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body, html {
  margin: 0;
  padding: 0;
  width: auto;
  overflow-x: hidden;
  height: auto;
  color: #000;
  font-family: "Ureg", sans-serif;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  font-size: 14px;
  line-height: 18px;
  -ms-overflow-style: scrollbar;
}

a, a:hover, a:active, a:link, a:focus {
  text-decoration: none;
  outline: none;
}

ol, ul {
  list-style: none;
  font-size: 18px;
}

div, span, article, nav, section, main, header {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 0;
  margin: 0;
}

input, button, select, textarea {
  border: 1px solid red;
}

input:focus, textarea:focus, select:focus {
  outline: none;
}

h1, h2, h3, h4, h5 {
  font-size: 28px;
  width: 100%;
  font-family: "Ubold", sans-serif;
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.container-fluid {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}

.row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

.container {
  background-color: green;
}

@media (max-width: 1199px) {
  body {
    background-color: #fff;
  }
}

@media (max-width: 992px) {
  body {
    background-color: #fff;
  }
}

@media (max-width: 768px) {
  body {
    background-color: #fff;
  }
}

@media (max-width: 578px) {
  body {
    background-color: #fff;
  }
}

@media (max-width: 440px) {
  body {
    background-color: #fff;
  }
}

@media (max-width: 380px) {
  body {
    background-color: #fff;
  }
}

@media (max-width: 360px) {
  body {
    background-color: #fff;
  }
}
/*# sourceMappingURL=main.css.map */