Vue.createApp({
    data() {
      return {
        data:[],
        input:'',
        button_name:'Hide list',
        showlist:true,

      }
    },
    methods: {
        add_task(){
         if(this.input.length > 0) this.data.push(this.input);this.input='';
        }
        
    },
    watch:{
        showlist () {
            if(this.showlist === true) this.button_name = 'Hide List';
            else this.button_name = 'Show List';
        }
    }
  }).mount('#assignment');