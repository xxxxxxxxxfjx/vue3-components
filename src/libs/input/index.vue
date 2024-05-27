<template>
  <div class=" relative leading-[0]">
    <!-- 单行文本 -->
    <input v-if="type === TEXT" type="text" v-model="data" :maxlength="max"
      class=" w-full text-sm text-zinc-900 border border-gray-300 outline-0 rounded focus:border-blue-400 py-0.5 px-1">
    <!-- 多行文本 -->
    <textarea v-if="type === TEXTAREA" v-model="data" :maxlength="max" rows="5"
      class=" w-full text-sm text-zinc-900 border border-gray-300 outline-0 rounded focus:border-blue-400 py-0.5 px-1"></textarea>
    <!-- max数字提示 -->
    <span class=" absolute right-2 bottom-0.5 text-xs text-gray-300"
      :class="{ ' text-red-300': currentNumber === parseInt(max) }">{{ currentNumber }} / {{ max }}</span>
  </div>
</template>

<script>
// 单行文本
const TEXT = "input"
// 多行文本
const TEXTAREA = "textarea"
</script>

<script setup>
import { computed } from 'vue'

// 绑定的输入数据
const data = defineModel({ required: true, type: String })
// 输入字符串长度
const currentNumber = computed(() => data.value.length)


defineProps({
  // 类型
  type: {
    type: String,
    default: TEXT,
    validator(val) {
      const typeArr = [TEXT, TEXTAREA]
      const isIn = typeArr.includes(val)
      if (!isIn) {
        throw new Error(`type 必须是 ${typeArr.join('、')} 中的一种!`)
      }
      return isIn
    }
  },
  // 输入的最大长度
  max: {
    type: [String, Number]
  },
  // placehold
  placehold: {
    type: String
  }
})

</script>

<style lang='scss' scoped></style>
