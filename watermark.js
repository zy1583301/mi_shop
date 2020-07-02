/**
 * @param {Object} options - 使用水印的配置项
 * @param {type:String,require:true} options.str - 要填充的文本内容
 * @param {type:Boolean,require:false,default:true} options.flag - 是否开启水印
 * @param {type:Number,require:false,default:320} options.width - 单个canvas画布宽度
 * @param {type:Number,require:false,default:200} options.flag - 单个canvas画布高度
 */

const watermark = (options) => {
  const id = '1.23452384164.123412415'
  if(options === undefined || options.constructor !== Object) {
    throw "options must be object";
  }
  let { str, flag, width, height } = options;
  if (str === undefined) {
    throw "Please input watermark fill content";
  }
  if (flag === undefined || typeof(flag) !== 'boolean') {
    flag = true
  }
  if (width === undefined) {
    width = 320
  }
  if (height === undefined) {
    height = 200
  }
  if (document.getElementById(id) !== null) {
    document.body.removeChild(document.getElementById(id))
  }
  if (!flag) {
    return
  }
  const can = document.createElement('canvas')
  can.width = width
  can.height = height
  const cans = can.getContext('2d')
  cans.rotate(-20 * Math.PI / 180)
  cans.font = '20px Vedana'
  cans.fillStyle = 'rgba(200, 200, 200, 0.60)'
  cans.textAlign = 'left'
  cans.textBaseline = 'Middle'
  cans.fillText(str, can.width / 5, can.height / 3)
  const div = document.createElement('div')
  div.id = id
  div.style.pointerEvents = 'none'
  div.style.top = '50px'
  div.style.left = '0px'
  div.style.position = 'fixed'
  div.style.zIndex = '100000'
  console.log(document.documentElement.clientWidth)
  div.style.width = document.documentElement.clientWidth + 'px'
  div.style.height = document.documentElement.clientHeight + 'px'
  div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat'
  document.body.appendChild(div)
}
export default watermark


