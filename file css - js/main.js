let dropdown = document.querySelector('.dropdown-content')
let iconadd = document.querySelector('.iconadd')

//dropdown with add
dropdown.classList.add('show')
iconadd.addEventListener('click', (event) => {
  dropdown.style = 'z-index : 1'
  let link = `<a href="">New repository</a>
              <a href=""> Import repository </a>
              <a href=""> New codespace </a>
              <a href=""> New gist</a>
              <a href=""> New organization </a>
              <a href=""> New project </a>`
  dropdown.innerHTML = link
  dropdown.classList.toggle('show')
  if (dropdown.classList.contains('show')) {
    $('.dropdown-content').hide()
  }
  if (!dropdown.classList.contains('show')) {
    $('.dropdown-content').show()
  }
})

//mood

let moon = document.getElementById('dark-mood')
let logofooter = document.getElementById('logo-footer')

if (localStorage.getItem('MOOD') == null) {
  localStorage.setItem('MOOD', 'dis')
}

moon.addEventListener('click', function () {
  let stor = localStorage.getItem('MOOD')
  if (stor == 'dis') {
    enapleMOOD()
    console.log('true')
  } else {
    console.log('flase')
    dis()
  }
})

if (localStorage.getItem('MOOD') == 'enaple') {
  enapleMOOD()
} else {
  dis()
}

// console.log($('.icon-text').children()[1])
// // function handlerIn(event) {
// //   $(event.target).children()[1].css('color', 'white')
// // }
// // function handlerout(event) {
// //   $(event.target).children()[1].css('color', 'black')
// // }
//lite mood
function enapleMOOD() {
  localStorage.setItem('MOOD', 'enaple')
  document.body.style = 'background-color:white ; transition: 1s'
  moon.setAttribute('class', 'fa-solid fa-sun')
  moon.style = 'rotate : 180deg ; color :orange ; width:20px ;  transition: 1s;'
  $('.arow').css('color', 'black')
  $('span').css('color', 'black')
  // $('.icon-text').on('mouseenter', handlerIn).on('mouseleave', handlerout)
}

//dark mood
function dis() {
  localStorage.setItem('MOOD', 'dis')
  document.body.style = 'transition: 1s'
  moon.style = 'transition: 1s; '
  moon.setAttribute('class', 'fa-solid fa-moon')
  $('.arow').css('color', 'white')
  $('span').css('color', '#7d8590')
  $('.text-bold').css('color', 'white')
  $('.p-label').css('color', 'white')
  $('#names').css('color', 'white')
}

//vs name

// viarble
let imgusers = document.getElementById('img-users')
let followers = document.getElementById('followers')
let following = document.getElementById('following')
let loce = document.getElementById('location')
let name = document.getElementById('name')
let nameUsers = document.getElementById('nameUsers')
let timeat = document.getElementById('timeat')

let search = document.getElementById('search')
let iconsearch = document.getElementById('icon-search')

let namerepo = document.getElementById('name-repo')
let cards = document.querySelector('.cards')

let searchnav = document.getElementById('searchnav')
let iconsearchnav = document.getElementById('iconsearch-nav')

let reponumber = document.getElementById('reponumber')
let imgnav = document.getElementById('img-nav')

search.addEventListener('focus', function () {
  $('#search').val('')
})
// let clientSecrets = 'f5ac17484f7991de5575b8a9ccbfd6b95fb1e101'
// let clientId = 'bf6c64bf473f54548ef0'

iconsearch.addEventListener('click', function () {
  console.log('ahmad')
  getinfor(search)
})
iconsearchnav.addEventListener('click', function () {
  getinfor(searchnav)
})
function getinfor(fild) {
  cards.innerHTML = ''
  let nameinput = fild.value

  let ahmad = 'AhmadAlshobaki20'
  //fetch get users
  fetch(`https://api.github.com/users/${nameinput}`)
    .then((req) => req.json())
    .then((res) => {
      console.log(res)
      // imgnav.setAttribute('src', res.avatar_url)
      imgusers.setAttribute('src', res.avatar_url)
      followers.textContent = res.followers
      following.textContent = res.following
      loce.textContent = res.location
      names.innerHTML = res.name
      nameUsers.textContent = res.login
      timeat.textContent = res.created_at
      reponumber.innerHTML = res.public_repos
    })
  //fetch get rebos users
  fetch(`https://api.github.com/users/${nameinput}/repos`)
    .then((req) => req.json())
    .then((res) => {
      for (let i = 0; i < 6; i++) {
        let cont = `<div class="card">
              <div class="first">
                <a  href="${res[i].html_url}" target="_blank">${res[i].name}</a>
                <button>${res[i].visibility}</button>
              </div>
              <h6 class="lang"><span class="circle"></span>${res[i].language}</h6>
            </div>`
        cards.innerHTML += cont

        let lang = document.querySelectorAll('.lang')
        let circle = document.querySelectorAll('.circle')
        if (lang[i].textContent == 'HTML') {
          console.log('true')
          circle[i].style = 'background-color:red'
        }
        if (lang[i].textContent == 'JavaScript') {
          circle[i].style = 'background-color:rgb(241, 224, 90)'
        }
        if (lang[i].textContent == 'CSS') {
          circle[i].style = 'background-color:rgb(86, 61, 124)'
        }
      }
    })
}

// iconsearch.addEventListener('click', function () {
// cards.innerHTML = ''
// let nameinput = search.value
// let ahmad = 'AhmadAlshobaki20'
// //fetch get users
// fetch(`https://api.github.com/users/${nameinput}`)
//   .then((req) => req.json())
//   .then((res) => {
//     console.log(res)
//     let img = imgusers.setAttribute('src', res.avatar_url)
//     followers.textContent = res.followers
//     following.textContent = res.following
//     loce.textContent = res.location
//     names.innerHTML = res.name
//     nameUsers.textContent = res.login
//     timeat.textContent = res.created_at
//   })
// //fetch get rebos users
// fetch(`https://api.github.com/users/${nameinput}/repos`)
//   .then((req) => req.json())
//   .then((res) => {
//     for (let i = 0; i < 6; i++) {
//       let cont = `<div class="card">
//             <div class="first">
//               <a  href="${res[i].html_url}" target="_blank">${res[i].name}</a>
//               <button>${res[i].visibility}</button>
//             </div>
//             <h6 class="lang"><span class="circle"></span>${res[i].language}</h6>
//           </div>`
//       cards.innerHTML += cont
//       let lang = document.querySelectorAll('.lang')
//       let circle = document.querySelectorAll('.circle')
//       if (lang[i].textContent == 'HTML') {
//         console.log('true')
//         circle[i].style = 'background-color:red'
//       }
//       if (lang[i].textContent == 'JavaScript') {
//         circle[i].style = 'background-color:rgb(241, 224, 90)'
//       }
//       if (lang[i].textContent == 'CSS') {
//         circle[i].style = 'background-color:rgb(86, 61, 124)'
//       }
//     }
//   })
// })
let navburger = document.getElementById('nav-burger')
let showdrop = document.querySelector('.showdrop')
// showdrop.style.display = 'none'
showdrop.style.display = 'none'
navburger.addEventListener('click', function () {
  console.log('sss')
  if (showdrop.style.display == 'none') {
    showdrop.style.display = 'flex'
  } else showdrop.style.display = 'none'
})

console.log(navburger)
//fetch get users secon
