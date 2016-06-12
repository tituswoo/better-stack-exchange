export default function(topbar, container) {
  let { style } = topbar

  const height = topbar.offsetHeight

  style.position = 'fixed'
  style.zIndex = '10000'

  container.style.paddingTop = height + 'px'
}
