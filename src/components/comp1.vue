<template>
  <div class="shadow-2 q-ma-md q-pa-md">
    <div class="text-h6">Component 1</div>
    <q-btn @click.stop="click1" :class="cClass">test1</q-btn>
    <comp2 />
  </div>

</template>

<script>
import { defineComponent, ref } from 'vue'
import comp2 from "components/comp2.vue";

export default defineComponent({
  name: 'Comp1',
  components: {
    comp2,
  },
  setup() {
    let cClass = ref('');

    return {
      cClass
    }
  },
  methods: {
    click1() {
      console.log('component comp1.clicked');
      this.cClass = this.cClass?'':'bg-red-2';
      this.$eventbus.emit('comp1.clicked', 'in comp1');
    },
  },
  mounted() {
    let _this = this;
    this.$eventbus.on("comp2.clicked", function (attr) {
      _this.cClass = _this.cClass?'':'bg-blue-2';
    });
  }
})
</script>
