export default {
  bind: function (el, binding) {
    console.log(el)
      $(el).css("zIndex", "75")
      let target = $(el).children("input").on("focus",function () {
        let markDiv = $("<div style='position: fixed; top: 0;bottom: 0;left: 0;right: 0;z-index: 70;'>")
        $('body').append(markDiv)

        let ul = $("<ul style='" +
          "margin: 0;padding: 0;" +
          "list-style: none;" +
          "position: absolute;" +
          "z-index: 80;" +
          "background-color: #fff;" +
          "background-color: #eeeeee;" +
          "width: 100%;'>")
        ul.append($("<li>天府三街</li>"))
        ul.append($("<li>犀浦快铁站</li>"))
        ul.append($("<li>成都医学院</li>"))
        let liArr = ul.find('li');
        ul.find('li').css({
          "line-height": "30px"
        })
        ul.on("mouseover", function (e) {
          liArr.css("backgroundColor", "#eeeeee")
          $(e.target).css({
            "backgroundColor": "rgb(161, 157, 157)"
          })
        })
        ul.on("click", function (e) {
          binding.value.start = $(e.target).text()
          markDiv.css("display", "none")
          ul.css("display", "none")
        })
        markDiv.on("click", function () {
          markDiv.css("display", "none")
          ul.css("display", "none")
        })

      $(el).append(ul)
      // $(el).parent().parent().toggleClass('showDiv')
    })
  }
}
