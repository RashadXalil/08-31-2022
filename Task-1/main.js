const message = document.getElementById('message-content')
const duration = document.getElementById('duration')
const cancelable = document.getElementById('cancelable')
const success = document.getElementById('success')
const err = document.getElementById('error')
const addBtn = document.getElementById('add-button')
const clearBtn = document.getElementById('clear-button')
const toasts = document.getElementById('toasts')

addBtn.addEventListener('click', function () {
  let messageText = message.value
  let durationVal = duration.value
  let cancelableVal = cancelable.checked
  let successVal = success.checked
  let errVal = err.checked
  let toast = document.createElement('div')
  toast.classList.add('toast')
  let messageP = document.createElement('p')
  messageP.classList.add('message')
  messageP.innerText = messageText
  if (successVal == true) {
    toast.classList.add('success-toast')
    if (messageText) {
      messageP.innerHTML = messageText
      toast.append(messageP)
      console.log('sal')
    } else {
      messageP.innerText = 'Success!'
      toast.append(messageP)
    }
  }
  if (errVal == true) {
    toast.classList.add('error-toast')
    if (messageText) {
      messageP.innerHTML = messageText
      toast.append(messageP)
    } else {
      messageP.innerHTML = 'Error.'
      toast.append(messageP)
    }
  }
  if (cancelableVal == true) {
    let cancelBtn = document.createElement('button')
    cancelBtn.innerHTML = 'X'
    cancelBtn.classList.add('cancel-button')
    toast.append(messageP, cancelBtn)
    cancelBtn.addEventListener('click', function (e) {
      e.target.parentElement.style.display = 'none'
    })
  } else {
    toast.append(messageP)
  }
  let numDurationVal = Number.parseInt(durationVal)
  console.log(numDurationVal)
  if (
    !numDurationVal ||
    numDurationVal < 500 ||
    typeof numDurationVal != 'number'
  ) {
    numDurationVal = 500
    console.log(numDurationVal)
  }
  setTimeout(() => {
    toast.remove()
  }, numDurationVal)
  toasts.appendChild(toast)
})

clearBtn.addEventListener('click', function () {
  toasts.innerHTML = ''
})
