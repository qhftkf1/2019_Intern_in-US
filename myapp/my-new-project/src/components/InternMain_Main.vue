<template>
  <div>
    <InternMainTitle></InternMainTitle>
    <InternBoardInput v-bind:propsdata="show" @changed="change"></InternBoardInput>
    <InternBoardList v-bind:propsdata="show" ></InternBoardList>
    <InternBoardForm v-bind:propsdata="show" ></InternBoardForm>

  </div>
</template>

<script>
import InternBoardInput from '@/components/Board/InternMain_Board_input'
import InternMainTitle from '@/components/InternMain_Title'
import InternBoardList from '@/components/Board/InternMain_Board_list'
import InternBoardForm from '@/components/Board/InternMain_Board_form'

export default {
  data: function () {
    return {
      show: true
    }
  },
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
