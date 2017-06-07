const MOBILE_BREAKPOINT = 640
const isMobile = window.innerWidth < 640

document.addEventListener('DOMContentLoaded', () => emoji.init())
document.addEventListener('scroll', initStickyHeadings)

function unaffix(el) {
  el.style.position = "relative"
  el.style.left = "0"
  el.style["z-index"] = "0"

  el.classList.add("mt1")
  el.classList.remove("bg-white", "py2",  isMobile ? "px3" : "px4", "m0", "shadow")
}

function initStickyHeadings() {
  const nodes = document.getElementsByClassName("sticky")
  let currentNode = null
  let nextNode = null

  const affix = (el) => {
    const isMobile = window.innerWidth < MOBILE_BREAKPOINT
    el.style.position = "fixed"
    el.style.left = isMobile ? "0" : "244px"
    el.style.top = "0"
    el.style.right = "0"
    el.style["z-index"] = "1"

    el.classList.remove("mt1")
    el.classList.add("bg-white", "py2", isMobile ? "px3" : "px4", "m0", "shadow")
  }

  const getCurrentNode = () => {
    for (i = 0; i <= nodes.length - 1; i++) {
      const node = nodes[i]
      const nodeTop = node.getBoundingClientRect().top
      const isLastNode = i === nodes.length - 1
      const nextNode = isLastNode ? null : nodes[i + 1]
      const nextNodeTop = nextNode ? nextNode.getBoundingClientRect().top : null

      if ( nodeTop <= 0 && nextNodeTop > 30) return node
    }
  }

  const unaffixNodes = () => {
    for (i = 0; i <= nodes.length - 1; i++) {
      unaffix(nodes[i])
    }
  }

  unaffixNodes()
  currentNode = getCurrentNode()
  if (currentNode) affix(currentNode)
}
