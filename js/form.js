// FORM UITILITY
function setErrorFor(input, message) {
  input.classList.remove("border-dark");
  input.classList.add("error");
  let parent = input.parentElement;
  let small = parent.querySelector(".error-text");
  small.innerHTML = `
    <div class="d-flex align-items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 30 30">
        <g id="Group_85" data-name="Group 85" transform="translate(-7989 -1790)">
          <circle id="Ellipse_35" data-name="Ellipse 35" cx="15" cy="15" r="15" transform="translate(7989 1790)" fill="#d50119"/>
          <text id="_" data-name="!" transform="translate(8000 1814)" fill="#fff" font-size="24" font-family="Helvetica-Bold, Helvetica" font-weight="700"><tspan x="0" y="0">!</tspan></text>
        </g>
      </svg>
      <span>${message}</span>
    </div>
    `;
  isError = true;
}

function setSuccessFor(input) {
  input.classList.remove("error");
  input.classList.add("border-dark");
  let parent = input.parentElement;
  let small = parent.querySelector(".error-text");
  small.innerText = "";
}

function isEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function isPhone(phone) {
  const re = /^\+?[1-9]\d{1,14}$/;
  return re.test(String(phone).toLowerCase());
}