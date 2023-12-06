<template>
  <div>
    Tag List
  </div>

  <ul>
    <li v-for="item in props.tags">
      {{ item }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

const props = defineProps({
  tags: {
    type: Array as PropType<string[]>
  },
});

</script>
