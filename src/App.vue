<template>
  <div id="app">
    <div
      class="btn"
      @click.left="onLeftClick"
      @click.right.prevent="onRightClick"
    >
      {{ name }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "click-me",
    };
  },
  name: "App",
  methods: {
    onRightClick(e) {
      console.log("right click");
      this.name = "right";
    },
    onLeftClick(e) {
      console.log("left click");
      this.name = "left";
    },
  },
};
</script>

<style>
#app {
  font-family: sans-serif;
}
div {
  text-align: center;
  color: #2c3e50;
  padding: 3rem 3rem;
  background: red;
  cursor: pointer;
}
</style>
