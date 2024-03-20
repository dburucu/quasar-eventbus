<template>
  <q-page class="flex flex-center">
    Look at console logs, too!
    <comp1 /><comp2 />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import comp1 from "components/comp1.vue";
import comp2 from "components/comp2.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    comp1,
    comp2,
  },
  created() {
    console.log("index created");
  },
  mounted() {
    console.log("index mounted");

    this.$eventbus.on("comp1.clicked", function (attr) {
      console.log("index comp1.clicked", attr);
    });

    this.$eventbus.on("comp2.clicked", function (attr) {
      console.log("index comp2.clicked", attr);
    });
  },
});
</script>
