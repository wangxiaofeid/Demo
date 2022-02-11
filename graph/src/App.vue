<template>
  <component :is="demo" />
</template>

<script>
import Cron from "./Demo/Cron";
import Demo1 from "./Demo/Demo1";
import Demo2 from "./Demo/Demo2";
import Demo3 from "./Demo/Demo3";
import Demo4 from "./Demo/Demo4";
import Demo5 from "./Demo/Demo5";
import Demo6 from "./Demo/Demo6";
import Demo7 from "./Demo/Demo7";
import Tree1 from "./Demo/Tree1";
import Tree2 from "./Demo/Tree2";
import Tree3 from "./Demo/Tree3";
import Tree4 from "./Demo/Tree4";
import Tree5 from "./Demo/Tree5";
// import Check from './Demo/Check'

const compMap = {
  cron: Cron,
  1: Demo1,
  2: Demo2,
  3: Demo3,
  4: Demo4,
  5: Demo5,
  6: Demo6,
  7: Demo7,
  t1: Tree1,
  t2: Tree2,
  t3: Tree3,
  t4: Tree4,
  t5: Tree5
  // check: Check
};

export default {
  name: "App",
  data() {
    const key = window.location.search.replace("?", "") || "1";
    return {
      demo: compMap[key]
    };
  }
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}

.node.highlight circle {
  fill: red;
}
</style>
