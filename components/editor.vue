<template>
  <div>
    <div ref="editor" class="quill-editor"></div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, defineEmits, defineProps, watch } from 'vue';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const emit = defineEmits(['update:modelValue']); // Emit the updated value
const props = defineProps({
  modelValue: { // Change to modelValue for v-model compatibility
    type: String,
    default: ''
  },
  editorHeight: {
    type: String,
    default: '400px'
  }
});

const editor = ref(null);
let quill;

onMounted(() => {
  quill = new Quill(editor.value, {
    theme: 'snow',
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        ['code-block', 'code'],
        ['clean']
      ]
    },
    placeholder: 'Type your content here...',
  });

  // Set initial content
  quill.root.innerHTML = props.modelValue; // Use modelValue instead of initialContent

  // Emit the content whenever it changes
  quill.on('text-change', () => {
    const content = quill.root.innerHTML;
    emit('update:modelValue', content); // Emit updated content
  });
});

// Watch for changes in the prop and update the editor content
watch(() => props.modelValue, (newValue) => {
  if (newValue !== quill.root.innerHTML) {
    quill.root.innerHTML = newValue; // Update Quill content if prop changes
  }
});

// Clean up the Quill instance
onBeforeUnmount(() => {
  if (quill) {
    quill = null; // Cleanup
  }
});
</script>

<style scoped>
.quill-editor {
  height: var(--editor-height, 400px); /* Use CSS variable */
}
</style>
