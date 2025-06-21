<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'
import FoodItem from './components/FoodItem.vue'
import FoodItem2 from './components/FoodItem2.vue'
import CommentForm from './components/CommentForm.vue'
import Comment from './components/Comment.vue'

const instruments = ref([])

async function getInstruments() {
  try {
    const { data, error } = await supabase.from('instruments').select()
    console.log('Supabase instruments:', data, error)
    if (error) {
      console.error('Error fetching instruments:', error)
    } else {
      instruments.value = data
    }
  } catch (err) {
    console.error('Unexpected error:', err)
  }
}

onMounted(() => {
  getInstruments()
})
</script>

<template>
  <h1>Hello WEBPROG AFD241 World!</h1>
  <h2>Food</h2>
  <FoodItem />
  <FoodItem2 />

  <h2>Instruments from Supabase</h2>
  <ul>
    <li v-for="instrument in instruments" :key="instrument.id">
      {{ instrument.name }}
    </li>
  </ul>

  <h2>Comments</h2>
  <CommentForm />
  <Comment />
</template>