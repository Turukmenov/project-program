const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeModalBtn = document.querySelector('.modal_close')
const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}
const openModal2 = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
    window.removeEventListener('scroll', checkScrollToBottom)
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}
modalTrigger.onclick = () => openModal()
modal.onclick = (event) => {
    if (event.target === modal || event.target === closeModalBtn) closeModal()
}

// HOMEWORK
    setTimeout(() => {
        openModal()
    }, 10000)

const checkScrollToBottom = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        setTimeout(openModal2, 500)
    }
}
window.addEventListener('scroll', checkScrollToBottom)