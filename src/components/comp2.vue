<template>
  <div class="shadow-2 q-ma-md q-pa-md">
    <div class="text-h6">Component 2</div>
    <q-btn @click.stop="click2" :class="cClass">test2</q-btn>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Comp2",
  setup() {
    let cClass = ref("");

    return {
      cClass,
    };
  },
  methods: {
    click2() {
      console.log("component comp2.clicked");
      this.$eventbus.emit("comp2.clicked", "in comp2");
    },
  },
  mounted() {
    let _this = this;
    this.$eventbus.on("comp1.clicked", function (attr) {
      _this.cClass = _this.cClass ? "" : "bg-green-2";
    });
  },
});
</script>
