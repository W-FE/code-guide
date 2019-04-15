<template>
  <table>
    <tr align="center">
      <td v-for="item in people" :key="item.nickname">
        <p>
          <img :src="item.avatar">
        </p>
        <a :href="item.url" target="_blank">{{item.nickname}}</a>
      </td>
      <td>
        <p class="plus">
          +
        </p>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'contributor',
  data () {
    return {
      people: [
        {
          nickname: 'flitrue',
          avatar: 'https://avatars2.githubusercontent.com/u/15258895?s=100&v=4',
          url: 'https://github.com/flitrue'
        }
      ]
    }
  }
}
</script>

<style scoped>
p{
  margin: 5px 0;
}

.plus{
  font-size: 70px;
  min-width: 100px;
  cursor: pointer;
}
</style>

