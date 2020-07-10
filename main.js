function searchbtn(Search) {
    const searchtxt = document.querySelector('.search-txt')
    const open = document.querySelector('.open')
    const close = document.querySelector('.close')
    searchtxt.style.width = Search ? '350px' : '0px'
    searchtxt.style.padding = Search ? '0 20px' : '0px 0px'
    open.style.display = Search ? 'none' : 'flex'
    close.style.display = Search ? 'flex' : 'none'
}
function changeLanguage(Change) {
    const VN = document.querySelector('.VN')
    const EN = document.querySelector('.EN')
    VN.style.display = Change ? 'none' : 'flex'
    EN.style.display = Change ? 'flex' : 'none'
}

// scroll
window.onscroll = function() {myFunction()};
function myFunction() {
  const title = document.querySelector('.product-title')
  const type = document.querySelector('.product-type')
  const imgType = type.getElementsByTagName('img')
  const h2Type = type.getElementsByTagName('h2')
  const box = document.querySelector('.box')
  const aBox = box.getElementsByTagName('a')
  const wrapFooter = document.querySelector('.wrap-footer')
  const coppy = document.querySelector('.coppy-right')
  const pCoppy = coppy.getElementsByTagName('p')
  if (document.body.scrollTop > 65 || document.documentElement.scrollTop > 65) {
    document.getElementById("hidden").className = "header fixed"
    title.style.opacity = "1"
    title.getElementsByTagName('h1')[0].style.top = "-30px"
    for(let i = 0; i < imgType.length; i++ ) {
      imgType[i].style.width = "100%"
      imgType[i].style.height = "100%"
      h2Type[i].style.fontSize = "28px"
    }
  }
  else {
    document.getElementById("hidden").className = "header"
  }
  if(document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
    document.querySelector('.products').style.opacity = "1"
  }
  if(document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {
    for(let i = 0; i < aBox.length; i++ ) {
      aBox[i].style.top = "0"
    }
  }
  if(document.body.scrollTop > 2400 || document.documentElement.scrollTop > 2400) {
    wrapFooter.style.top = "0"
  }
  if(document.body.scrollTop > 2800 || document.documentElement.scrollTop > 2800) {
    coppy.style.height = "50px"
    pCoppy[0].style.opacity = "1"
  }
}
// Arrow Move
function arrowMoveMen() {
  const men = document.querySelector('.arrow')
  men.style.left = '10%'
  men.style.transform = "translate(10%,0%)"
  const wrap = document.querySelector('.wrap')
  wrap.style.left = '0'
}
function arrowMoveWomen() {
  const women = document.querySelector('.arrow')
  women.style.left = '45%'
  women.style.transform = "translate(45%,0%)"
  const wrap = document.querySelector('.wrap')
  wrap.style.left = '-100%'
}
function arrowMoveKids() {
  const kids = document.querySelector('.arrow')
  kids.style.left = '78%'
  kids.style.transform = "translate(78%,0%)"
  const wrap = document.querySelector('.wrap')
  wrap.style.left = '-200%'
}
function openmenu(Clicked) {
  document.getElementById('mobile-menu').style.right = Clicked ? '0' : '-250px'
}
function opensub(Clicked) {
  const mobile = document.getElementById('mobile-menu')
  const showsub = mobile.getElementsByClassName('show-sub')
  const active = mobile.querySelector('.active')
    let totalheight = 0
    let height = 0
    const item = []
    for(let i = 0; i < showsub.length ; i++) {
    item[i] = showsub[i].getElementsByClassName('item')
    if(Clicked) {
      totalheight = item[i].length * 50
    }
    else {
      totalheight = 0
    }
    height = totalheight/item[i].length - 1
    showsub[i].style.height = totalheight + 'px'
    for(let j = 0 ; j < item[i].length ; j++) {
      item[i][j].style.borderBottom = Clicked ? '1px black solid' : 'none'
      if(Clicked) {
        item[i][j].style.height = height + 'px'
      }
      else {
        item[i][j].style.height = '0%'
      }
    }
  }
}