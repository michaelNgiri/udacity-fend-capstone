import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { revert } from './js/functions'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

// console.log(checkForName);

// alert("I EXIST")
// console.log("CHANGE!!");
export { handleSubmit, checkForName };

const submitBTN = document.getElementById("submit")
submitBTN.addEventListener("click", handleSubmit);

const revertBTN = document.getElementById("revert_btn")
revertBTN.addEventListener("click", revert);