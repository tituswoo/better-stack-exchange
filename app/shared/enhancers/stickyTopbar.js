export const topBar = () => document.querySelector('.topbar')
export const container = () => document.querySelector('.container')

export default function() {
  let { style } = topBar()

  const height = topBar().offsetHeight

  style.position = 'fixed'
  style.zIndex = '10000'

  container().style.paddingTop = height + 'px'
}
