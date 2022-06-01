<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{ id: string }>();
const showList = computed(() => !props.id);
console.log(props.id);
</script>

<template>
  <div class="user-editor">
    <h1>User Editor</h1>
    <div>
      <div v-if="showList">Show user list</div>
      <div v-else>Show user {{ id }}</div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .user-editor {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
}
</style>
