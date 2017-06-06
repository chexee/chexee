document.addEventListener('DOMContentLoaded', function(event) {
  emoji.init()
})


document.addEventListener('scroll', () => {
  initStickyHeadings()
})

function initStickyHeadings() {
  const nodes = document.getElementsByClassName("sticky")
  let currentNode = null
  let nextNode = null

  const affix = (el) => {
    el.style.position = "fixed"
    el.style.left = "244px"
    el.style.top = "0"
    el.style.right = "0"
    el.style["z-index"] = "1"

    el.classList.remove("mt1")
    el.classList.add("bg-white", "py2", "px4", "m0", "shadow")
  }
  const unaffix = (el) => {
    el.style.position = "relative"
    el.style.left = "0"
    el.style["z-index"] = "0"

    el.classList.add("mt1")
    el.classList.remove("bg-white", "py2", "px4", "m0", "shadow")
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
  if (currentNode) {
    affix(currentNode)
  }


}
