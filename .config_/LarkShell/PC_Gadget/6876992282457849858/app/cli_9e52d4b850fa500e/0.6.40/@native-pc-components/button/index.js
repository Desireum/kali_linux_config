define("@native-pc-components/button/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
 'use strict';

const typeList = [
  'primary',
  'secondary',
  'secondary-primary',
  'text',
  'icon',
  'icon-secondary',
  'link',
  'text-primary',
  'icon-primary',
];

const shapeList = ['round'];

const sizeList = ['extra-small', 'small', 'middle', 'large'];

Component({
  properties: {
    type: {
      type: String,
      value: 'secondary',
      observer(v) {
        if (!typeList.includes(v)) {
          throw new Error(`Prop "type" receive invalid value "${v}"`)
        }
        this.computeIsIcon(v);
        return v
      },
    },
    block: { type: Boolean, value: false },
    warn: { type: Boolean, value: false },
    ghost: { type: Boolean, value: false },
    shape: {
      type: String,
      value: '',
      observer(v) {
        if (!shapeList.includes(v) && v !== '') {
          throw new Error(`Prop "shape" receive invalid value "${v}"`)
        }
        return v
      },
    },
    icon: { type: String, value: '' },
    size: {
      type: String,
      value: 'middle',
      observer(v) {
        if (!sizeList.includes(v)) {
          throw new Error(`Prop "size" receive invalid value "${v}"`)
        }
        return v
      },
    },
    loading: { type: Boolean, value: false },
    disabled: { type: Boolean, value: false },
    selected: { type: Boolean, value: false },
    boarding: { type: Boolean, value: false },
    customStyle: { type: String, value: '' },
    // 原生属性透传
    formType: { type: String, value: '' },
    openType: { type: String, value: '' },
    hoverClass: { type: String, value: 'button-hover' },
    hoverStopPropagation: { type: Boolean, value: false },
  },

  data: {
    /* eslint-disable */
    isIcon: false,
  },

  methods: {
    onClick(e) {
      const { disabled, loading } = this.properties;
      if (disabled || loading) return
      this.triggerEvent('click', e);
    },

    computeIsIcon(type) {
      const isIcon = [
        'icon',
        'icon-primary',
        'icon-secondary',
        'icon-secondary-primay',
      ].includes(type);
      this.setData({
        isIcon,
      });
    },
  },
});

});