//user first
let followersfirst = document.getElementById('followers-First')
let nameFirst = document.getElementById('nameFirst')
let reboFuser = document.querySelectorAll('.repos')[0]
let imgFirst = document.getElementById('imgFirst')

// Wait for the page to load
let audio = document.getElementById('myAudio')
// Get the audio element by its ID
let clear = document.getElementById('clearbtn')
clear.addEventListener('click', function () {
  location.reload()
})
// Play the audio and bom win
const fireDiv = document.querySelector('.fireworksDiv')
const fireworks = new Fireworks(fireDiv, {
  // delay: {min: 10, max: 15},
  // trace: 5,
  // speed: 0.5,
  // particles: 50,
})

//user second
let followersSecond = document.getElementById('followers-Second')
let nameSecond = document.getElementById('nameSecond')
let inputseconduser = document.getElementById('seconduser')
let reboSuser = document.querySelectorAll('.repos')[1]
let imgSecond = document.getElementById('imgSecond')

//navburger respons
let navburger = document.getElementById('nav-burger')
let showdrop = document.querySelector('.showdrop')
showdrop.style.display = 'none'

//show and hide navburger
navburger.addEventListener('click', function () {
  if (showdrop.style.display == 'none') {
    showdrop.style.display = 'flex'
  } else showdrop.style.display = 'none'
})

//span vs
let spanleft = document.querySelector('.span-VS-left')
let spanright = document.querySelector('.span-VS-right')
console.log(spanleft)
console.log(spanright)

let rotatewin = document.getElementById('rotate-win')

function wintime() {
  setTimeout(() => {
    audio.play()
    fireworks.start()
  }, 1300)
}

function rotaeRight() {
  rotatewin.style = 'rotate : 90deg'
  wintime()
}
function rotaeLeft() {
  rotatewin.style = 'rotate : -90deg'
  wintime()
}

let inputfirstuser = document.getElementById('firstuser')
let btn = document.getElementById('btn-compartion')

btn.addEventListener('click', function () {
  let inputFirst = inputfirstuser.value
  let inputSecond = inputseconduser.value
  if (inputFirst.length != 0 && inputSecond.length != 0) {
    let ahmad = 'AhmadAlshobaki20'
    //fetch get user first
    fetch(`https://api.github.com/users/${inputFirst}`)
      .then((req) => req.json())
      .then((res) => {
        console.log(res)
        imgFirst.setAttribute('src', res.avatar_url)
        followersfirst.textContent = res.followers
        nameFirst.textContent = res.name
        reboFuser.textContent = res.public_repos
        spanleft.innerHTML = res.name

        //   names.innerHTML = res.name
        let a = 'ahmad'

        fetch(`https://api.github.com/users/${inputSecond}`)
          .then((req) => req.json())
          .then((res) => {
            console.log(res)
            imgSecond.setAttribute('src', res.avatar_url)
            followersSecond.textContent = res.followers
            nameSecond.textContent = res.name
            reboSuser.textContent = res.public_repos
            spanright.innerHTML = res.name
            console.log(typeof parseInt(reboSuser.textContent))
            if (
              parseInt(reboFuser.textContent) > parseInt(reboSuser.textContent)
            ) {
              console.log(' first is  is win')
              rotaeLeft()
            } else if (
              parseInt(reboFuser.textContent) < parseInt(reboSuser.textContent)
            ) {
              rotaeRight()
              console.log('second  is win ')
            } else {
              console.log('compair')
              if (
                parseInt(followersfirst.textContent) >
                parseInt(followersSecond.textContent)
              ) {
                rotaeLeft()
                console.log('FIRS WIN WITH FOLLWERS')
              } else if (
                parseInt(followersfirst.textContent) <
                parseInt(followersSecond.textContent)
              ) {
                rotaeRight()
                console.log('second WIN WITH FOLLWERS')
              } else {
                console.log('compair folower')
              }
            }
          })
      })

    inputfirstuser.value = ''
    inputseconduser.value = ''

    setTimeout(() => {
      btn.style = 'visibility: hidden;'
    }, 400)
    btn.disabled = true
  }
})

//fetch get users secon

//fetch get users secon
