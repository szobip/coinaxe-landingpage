export default function (to, from, savedPosition) {
  if (to.hash) {
    location.hash.replace('#', '')

    return window.scrollTo({
      top: document.querySelector(to.hash).offsetTop,
      behavior: 'smooth',
    })
  }
  return window.scrollTo({ top: 0, behavior: 'smooth' })
}
