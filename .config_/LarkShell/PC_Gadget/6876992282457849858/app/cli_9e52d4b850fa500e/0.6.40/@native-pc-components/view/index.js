define("@native-pc-components/view/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
 Component({
  externalClasses: ['customClass'],
  properties: {
    customStyle: {
      type: String,
      value: '',
    },
    hoverClass: {
      type: String,
      value: 'none',
    },
    hoverStartTime: {
      type: Number,
      value: 50,
    },
    hoverStayTime: {
      type: Number,
      value: 400,
    },
    hoverStopPropagation: {
      type: Boolean,
      value: false,
    },
  },

  methods: {
    onMouseEnter(e) {
      this.triggerEvent('mouseenter', e)
    },

    onMouseLeave(e) {
      this.triggerEvent('mouseleave', e)
    },

    onTransitionEnd(e) {
      this.triggerEvent('transitionend', e)
    },

    onClick(e) {
      this.triggerEvent('click', e)
    },
  },
})

});