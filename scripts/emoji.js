var emoji = new Object()

emoji.toEmoji = function(element) {
  return element.innerHTML = emojione.toImage(element.innerHTML)
}

emoji.init = function() {
  for ( var i = 0; i < document.getElementsByClassName('emoji').length; i++) {
    emoji.toEmoji(document.getElementsByClassName('emoji')[i])
  }
}
