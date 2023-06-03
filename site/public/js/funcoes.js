let hbMenu = document.getElementById('menu')
let ntf = document.getElementById('notification')

function toggle() {
    hbMenu.classList.toggle('active')
}

function notify(text) {
    let cnt = document.getElementById('content')

    cnt.innerHTML = `${text}`
    ntf.classList.toggle('pop')
    setTimeout(() => {
        ntf.classList.toggle('pop')
    }, 2400)


}