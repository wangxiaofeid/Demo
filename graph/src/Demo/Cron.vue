<template>
  <div>
    <cron v-model="value1" />
    {{ value1 }}
    <cron v-model="value2" multiple />
    {{ value2 }}
    <cron v-model="value3" />
    {{ value3 }}
  </div>
</template>

<script>
export default {
  name: "cccc",
  data() {
    return {
      value1: "6 6 14 ? * 6 *",
      value2: "0 0 0 1,6 * ? *",
      value3: "0 0 0 L 4/12 ? *"
    };
  }
}
</script>
