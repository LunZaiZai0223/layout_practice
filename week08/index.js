const userNameInput = document.querySelector('[data-username]');
const passwordInput = document.querySelector('[data-password]');
const submitBtn = document.querySelector('[data-submit]');
const cardEle = document.querySelector('.card');
const cardFooter = document.querySelector('.cardFooter');
const header = document.querySelector('.header');

let isSignUp = true;

submitBtn.addEventListener('click', handleClick);

function changeText (cardFooter, header) {
  if (isSignUp) {
    header.innerHTML = 'sign up';
    cardFooter.innerHTML = 'I am already a member<span>SIGN IN</span>';
  } else {
    header.innerHTML = 'sign in';
    cardFooter.innerHTML = 'Are you a newbie?<span>SIGN UP</span>';
  }
}
function fetchData (isSignUp, data) {
  const { userNameInput, passwordInput } = data;
  if (isSignUp) {
    const url = 'https://hexschool-tutorial.herokuapp.com/api/signup';
    axios.post(url, data)
      .then((response) => {
        console.log(response);
        const { data } = response;
        if (data.success === true) {
          alert(data.message);
          userNameInput.value = '';
          passwordInput.value = '';
          changeState();
          changeText(cardFooter, header);
        } else {
          alert(data.message);
        }
      }).catch((error) => console.log(error));
  } else {
    const url = 'https://hexschool-tutorial.herokuapp.com/api/signin';
    axios.post(url, data)
      .then((response) => {
        console.log(response);
        const { data } = response;
        if (data.success === true) {
          alert(data.message);
        } else {
          alert(data.message);
        }
      }).catch((error) => console.log(error));
  }
}
function changeState () {
  isSignUp = !isSignUp;
}
function handleClick () {
  if (userNameInput.value === '' && passwordInput.value === '') {
    alert('錯誤的輸入');
  } else {
    const obj = {
      email: userNameInput.value,
      password: passwordInput.value,
      userNameInput: userNameInput,
      passwordInput: passwordInput
    };
    fetchData(isSignUp, obj);
  }
}
