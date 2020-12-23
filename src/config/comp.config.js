/* const typeMap = {
  'text': '纯文本输入框',
  'font': '字体样式',
  'upload': '图片上传控件',
  'select': '下拉选择',
  'radio': 'Radio单选',
  'datetime': '日期时间选择器',
  'color-picker': '颜色拾取器',
  'desc': '描述文本内容'
} */

module.exports = {
  'text': {
    title: '文本',
    base: [
      {
        type: 'textarea',
        label: '文本内容',
        val: '默认文本',
        isNecessary: true
      }
    ],
    style: [
      {
        type: 'font',
        label: '字体',
        attr: ['font-weight', 'text-decoration', 'font-style', 'text-align'],
        val: ['400', 'none', 'inherit', 'left'],
        isNecessary: false
      }, {
        type: 'color-picker',
        label: '颜色',
        attr: 'color',
        val: '#333333',
        isNecessary: true
      }, {
        type: 'input-number',
        label: '大小',
        attr: 'font-size',
        val: 24,
        unit: 'px',
        step: 1,
        max: 200,
        min: 20,
        isNecessary: false
      }, {
        type: 'input-number',
        label: '行距',
        attr: 'line-height',
        val: 1.5,
        step: 0.5,
        max: 12,
        min: 0.5,
        isNecessary: false
      }, {
        type: 'input-number',
        label: '字间距',
        attr: 'letter-spacing',
        val: 0,
        step: 1,
        max: 100,
        min: 0,
        unit: 'px',
        isNecessary: false
      }, {
        type: 'input-number',
        label: '上边距',
        attr: 'padding-top',
        val: 20,
        unit: 'px',
        min: 0,
        max: 100,
        step: 1,
        isNecessary: true
      }, {
        type: 'input-number',
        label: '右边距',
        attr: 'padding-right',
        val: 30,
        unit: 'px',
        min: 0,
        max: 100,
        step: 1,
        isNecessary: true
      }, {
        type: 'input-number',
        label: '下边距',
        attr: 'padding-bottom',
        val: 20,
        unit: 'px',
        min: 0,
        max: 100,
        step: 1,
        isNecessary: true
      }, {
        type: 'input-number',
        label: '左边距',
        attr: 'padding-left',
        val: 30,
        unit: 'px',
        min: 0,
        max: 100,
        step: 1,
        isNecessary: true
      }
    ],
    action: {
      type: 'click',
      title: '点击配置',
      config: null
    }
  },
  'img': {
    title: '图片',
    base: [],
    style: [
      {
        type: 'upload',
        label: '上传图片',
        attr: 'src',
        val: '',
        isNecessary: true
      }, {
        type: 'input-number',
        label: '上边距',
        attr: 'padding-top',
        val: 20,
        unit: 'px',
        min: 0,
        max: 100,
        step: 1,
        isNecessary: true
      }, {
        type: 'input-number',
        label: '右边距',
        attr: 'padding-right',
        val: 30,
        unit: 'px',
        min: 0,
        max: 100,
        step: 1,
        isNecessary: true
      }, {
        type: 'input-number',
        label: '下边距',
        attr: 'padding-bottom',
        val: 20,
        unit: 'px',
        min: 0,
        max: 100,
        step: 1,
        isNecessary: true
      }, {
        type: 'input-number',
        label: '左边距',
        attr: 'padding-left',
        val: 30,
        unit: 'px',
        min: 0,
        max: 100,
        step: 1,
        isNecessary: true
      }
    ],
    action: {
      type: 'click',
      title: '点击配置',
      config: null
    }
  }
}
