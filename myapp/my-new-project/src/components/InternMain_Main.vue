<template>
  <div>
    <InternMainTitle></InternMainTitle>
    <InternBoardInput></InternBoardInput>
    <InternBoardList></InternBoardList>
    <InternBoardForm></InternBoardForm>

  </div>
</template>

<script>
import InternBoardInput from '@/components/Board/InternMain_Board_input'
import InternMainTitle from '@/components/InternMain_Title'
import InternBoardList from '@/components/Board/InternMain_Board_list'
import InternBoardForm from '@/components/Board/InternMain_Board_form'

export default {

  components: {
    InternMainTitle,
    InternBoardInput,
    InternBoardList,
    InternBoardForm
  },
  methods: {
    change (value) {
      this.show = value
    }
  }
}
</script>

<style scoped>
</style>
