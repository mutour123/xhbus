export default {
  bind: function (el) {
    $(el).click(function () {
      $(el).parent().parent().toggleClass('showDiv')
    })
  }
}
