<template>
  <span class="icon-text" @click="click">
    <i :class="icon" />
    {{ title }}
  </span>
</template>

<script>
export default {
  name: 'IconText',
  props: ['icon', 'title'],
  methods: {
    click: function (e) {
      this.$emit('click', e)
    }
  }
}
</script>
