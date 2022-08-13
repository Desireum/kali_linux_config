define("@native-pc-components/editor/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
 Component({
  externalClasses: ['customClass'],
  addGlobalClass: true,
  properties: {
    eventName: String,
    contents: Object,
    plugins: {
      type: Array,
      value: [],
    },
    customStyle: {
      type: String,
      value: '',
    },
    placeholder: String,
    readOnly: Boolean,
    autoHeight: Boolean,
    aditStyle: Object,
  },

  methods: {
    onInput(e) {
      this.triggerEvent('input', e)
    },

    onInsertImage(e) {
      this.addWindowEvent(e)
      this.triggerEvent('insertimage', e)
    },

    onReady(e) {
      this.triggerEvent('ready', e)
    },

    onEditorClick(e) {
      this.triggerEvent('editorclick', e)
    },

    onGetFileInfo(e) {
      this.addWindowEvent(e)
      this.triggerEvent('getfileinfo', e)
    },

    onUploadPasteImage(e) {
      this.addWindowEvent(e)
      this.triggerEvent('uploadpasteimage', e)
    },

    addWindowEvent(e) {
      const { eventName } = this.properties
      window && (window[eventName] = e)
    },
  },
})

});