<template>
    <div id="show-blogs" v-theme:column="'narrow'"> <!-- wide adalah value didalam binding -->
        <h1>All Blog Articles</h1>
        <div class="single-blog" v-for="(blog, idx) in blogs" :key="idx">
            <h2 v-rainbow> {{ blog.title }} </h2>
            <article>
                {{ blog.body }}
            </article>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            blogs: [
                // isinya
                // id
                // title 
                // user id
                // body 
            ]
    }
  },
  methods: {

  },
    created() {
        this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
            this.blogs = data.body.slice(0,10); //first ten element from 100 element of an arrays
      })
  }
}
</script>

<style scoped>
#show-blogs{
    max-width: 800px;
    margin: 0 auto;
}

.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
