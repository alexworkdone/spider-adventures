<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

* {
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

main,
nav,
section,
footer,
header,
aside,
article,
dialog,
figcaption,
figure,
hgroup {
  display: block;
}

ul,
dl {
  margin: 0;
  padding: 0;
  list-style: none;
}

ol {
  padding-left: 20px;
  font-size: 0.8em;
}

img {
  max-width: 100%;
  border: 0;
  vertical-align: top;
  user-select: none;
}

// button {
//   margin: 0;
//   padding: 0;
//   background-color: transparent;
//   border: none;
//   cursor: pointer;
// }

a:focus,
img:focus,
button:focus,
input:focus,
textarea:focus,
select:focus,
option:focus {
  outline: none;
}

b,
strong {
  font-weight: 600;
}

input,
textarea,
select,
button {
  font-family: var(--ff-rany);
  font-weight: 400;
}

select::-ms-expand {
  display: none;
}

input::-webkit-input-placeholder {
  color: var(--bg-body);
}

input::-moz-input-placeholder {
  color: var(--bg-body);
}

input:focus::-webkit-input-placeholder {
  color: transparent;
}

input[type='number'] {
  -moz-appearance: textfield;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number']:hover,
input[type='number']:focus {
  -moz-appearance: number-input;
}

input[type='submit'],
input[type='text'],
input[type='email'],
input[type='search'],
textarea,
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

input[type='search']::-webkit-search-cancel-button {
  -webkit-appearance: none;
  appearance: none;
}

// ---------------------------
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 auto;
  padding: 0 24px;
  max-width: 800px;
}

.home {
  padding-bottom: 40px;
}

h1,
h2,
h3,
h4,
.text-center {
  text-align: center;
}

.title {
  margin-bottom: 4px;
}

.sub-title {
  margin-top: 0;
  font-size: 1.7em;
  color: #000;
}

.chapters-title {
  margin-top: 40px;
  margin-bottom: 0;
}

.menu-scroll-list {
  position: fixed;
  top: 24px;
  right: 24px;
  width: 100%;
  max-width: max-content;
  max-height: calc(100vh - 48px);
  background-color: #f3f3f3;
  padding: 16px;
  margin: 0;
  list-style: decimal;
  text-align: left;

  li {
    padding: 4px 0;
    list-style: none;
    cursor: pointer;

    &:hover {
      background-color: pink;
    }

    &:first-child {
      position: absolute;
      top: -10px;
      right: -10px;
      padding: 0;
      margin: 0;
      width: 24px;
      height: 24px;
      font-size: 30px;
      line-height: 0;
      background-color: #d9d9d9;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

.btn-burger {
  position: fixed;
  top: 24px;
  right: 24px;
}

table {
  width: 100%;
  background-color: #00e4ad29;

  tr {
    td {
      border: 1px solid #ddd;
      padding: 8px;

      &:first-child {
        width: 120px;
      }
    }
  }
}
</style>
