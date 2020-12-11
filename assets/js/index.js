/**
 * 
 * @authors cherish yii2 (cherish@cherish.pw)
 * @date    2020-12-10 16:48:28
 * @version v1.0
 * @description the core js of todolist project
 * 
 * ━━━━━━神兽出没━━━━━━
 * 　　   ┏┓　 ┏┓
 * 　┏━━━━┛┻━━━┛┻━━━┓
 * 　┃              ┃
 * 　┃       ━　    ┃
 * 　┃　  ┳┛ 　┗┳   ┃
 * 　┃              ┃
 * 　┃       ┻　    ┃
 * 　┃              ┃
 * 　┗━━━┓      ┏━━━┛ Code is far away from bugs with the animal protecting.
 *       ┃      ┃     神兽保佑,代码无bug。
 *       ┃      ┃
 *       ┃      ┗━━━┓
 *       ┃      　　┣┓
 *       ┃      　　┏┛
 *       ┗━┓┓┏━━┳┓┏━┛
 *     　  ┃┫┫　┃┫┫
 *     　  ┗┻┛　┗┻┛
 *
 * ━━━━━━感觉萌萌哒━━━━━━
 */

// 请根据考试说明文档中列出的需求进行作答
// 预祝各位顺利通过本次考试，see you next week！
// ...


$(function () {


  // 回车添加
  $('#title').on('keydown', function (e) {
    e = e || window.event
    var code = e.keyCode || e.which
    if (code === 13) {
      const value = this.value.trim()
      if (!value) return
      e.preventDefault()
      const a = $('#title').val()
      const str = `
      <li>
        <input type="checkbox" />
        <p onclick="edit(${$('ol').children().length + 1})">${a}</p>
        <a href="javascript:remove(${$('ol').children().length + 1})">-</a>
      </li>
    `
      $('ol').append(str)
      $('#todocount').text($('ol').children().length)
      $('#title').val('')
      scn()
    }
  })

  scn()
  function scn() {


    // 删除事件(ol)
    $('#todolist li a').on('click', function () {
      $(this).parent().remove()
      $('#todocount').text($('ol').children().length)
    })
    // 删除事件(ul)
    $('#donelist li a').on('click', function () {
      $(this).parent().remove()
      $('#donecount').text($('ul').children().length)
    })

    // input 点击事件
    $('li input').on('click', function () {
      if ($(this).attr('checked')) {
        $(this).removeAttr('checked')
        $('ol').append($(this).parent())
      $('#todocount').text($('ol').children().length)
      $('#donecount').text($('ul').children().length)
      } else {
        $(this).attr('checked', 'abc')
        $('ul').append($(this).parent())
      $('#todocount').text($('ol').children().length)
      $('#donecount').text($('ul').children().length)
      }
    })

    





  }


})

