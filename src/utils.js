export function createElement (name, {
  tag,
  children,
  ...rest
}) {
  const element = document.createElement(tag)
  element.className = name
  element.id = name
  children?.forEach(child => element.appendChild(child))
  Object.entries(rest).forEach(([key, value]) => element[key] = value)
  return element
}

export function clearChildren (node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild)
  }
}