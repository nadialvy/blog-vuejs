<template>
    <div id="show-blogs"> <!-- wide adalah value didalam binding -->
        <h1>List Blog Titles</h1>
        <input type="text" v-model="search" placeholder="Search blogs"/>
        <div class="single-blog" v-for="(blog, idx) in filteredBlogs" :key="idx">
            <h2 v-rainbow> {{ blog.title | toUppercase}} </h2>
        </div>
    </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {
    data () {
        return {
            blogs: [
                // isinya
                // id
                // title 
                // user id
                // body
            ],
            search: ''
        }
    },
    created() {
        this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
            this.blogs = data.body.slice(0,10); //first ten element from 100 element of an arrays
      })
    },
    computed:{
        
    },
    filters: {
        toUppercase(value){
            return value.toUpperCase();
        }
    },
    directives: {
        'rainbow': {
            bind(el, binding, vnode){
                el.style.color = "#" + Math.random(16).toString().slice(2,8);
            }
        }
    },
    mixins: [
        searchMixin
    ]

}
</script>

<style scoped>
#show-blogs{
    max-width: 700px;
    margin: 0 auto;
}

.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}

input{
    /* max-width: 400px; */
    width: 96%;
    display: block;
    padding: 5px 10px;

}
</style>
