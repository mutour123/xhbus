export default {
  bind: function (el) {
    $(el).click(function () {
      $(el).parent().next().toggleClass('showTwoDiv')
    })
  }
}
