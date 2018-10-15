"use strict";

var app = new Vue({

  el: "#app",
  data: {
    info: "",
    msg: ["45", "asd", "qwe"],
    flag: true
  },
  computed: {
    search: function search() {
      var _this = this;

      if (this.info) {
        return this.msg.filter(function (msg) {
          return msg.includes(_this.info);
        });
      }
    }
  }

});
