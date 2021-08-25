<template>
  <div class="SearchFormWrap">
    <input 
        class="QueryInput" 
        type="text" 
        placeholder="Search..."
        v-model="Query"
        v-on:keyup.enter="submit"
    >
    <div v-if="submitted == true">
      <h2 class="querySearch">Search results for : "{{ Query }}"" </h2>
        <Cards 
            v-for="content in searchResult" 
            :key="content.title"
            :title="content.htmlTitle"
            :url="content.link"
            :desc="content.snippet"
        />
    </div>
  </div>
</template>

<script>
import Cards from './cards.vue';
export default {
  components: { Cards },
  name: 'SearchForm',
  data() {
    return {
      Query:'',
      searchResult:'',
      submitted: '',
      cseKey: 'AIzaSyDsz19NIz9r47InPRpR9H6JUmX3yqDO8YU',
      cseCX: 'cb44057e05e275dcb'
    }
  },
  methods: {
    submit : function () {
      const headers = { "Content-Type": "application/json" };
      fetch(`https://www.googleapis.com/customsearch/v1?key=${ this.cseKey }&cx=${ this.cseCX }&q=${ this.Query }`, {headers})
        .then(response => response.json())
        .then(data => {
            this.searchResult = data.items
            console.log(data)
        })
      this.submitted = true
    }
  }
}
</script>

<style scoped>
  .QueryInput {
    border: 0;
    padding: 0 20px;
    height: 50px;
    width: 800px;
    max-width: 100%;
    border-radius: 20px;
    background: #eec6c6;
    color: rgb(236, 222, 222);
    margin-bottom: 10px;
    margin: 0 auto;
    text-shadow: 1px 1px rgb(77, 77, 77);
  }
  .querySearch {
    margin: 0 auto;
    width: 700px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 19px;
  }
</style>