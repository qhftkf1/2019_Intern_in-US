<template>
  <div>
    <div v-if="this.$store.state.selectedTab === 'Home'">
      <InternMainTitle><h1>Home</h1></InternMainTitle>
      <InternHomePicture></InternHomePicture>
    </div>
    <div v-if="this.$store.state.selectedTab === 'Content'">
      <InternMainTitle><h1>Content</h1></InternMainTitle>
      <InternContentGraph></InternContentGraph>
    </div>
    <div v-if="this.$store.state.selectedTab === 'Board'">
      <InternMainTitle><h1>Board</h1></InternMainTitle>
      <InternBoardInput></InternBoardInput>
      <InternBoardList></InternBoardList>
      <InternBoardForm></InternBoardForm>
    </div>

  </div>
</template>

<script>
import InternBoardInput from '@/components/Board/InternMain_Board_input'
import InternMainTitle from '@/components/InternMain_Title'
import InternBoardList from '@/components/Board/InternMain_Board_list'
import InternBoardForm from '@/components/Board/InternMain_Board_form'
import InternHomePicture from '@/components/Home/InternMain_Home_picture'
import InternContentGraph from '@/components/Content/InternMain_Content_graph'
export default {

  components: {
    InternMainTitle,
    InternBoardInput,
    InternBoardList,
    InternBoardForm,
    InternHomePicture,
    InternContentGraph
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
