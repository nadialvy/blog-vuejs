<template>
  <div id="add-blog">

    <h2>Add a New Blog Post</h2>

    <form v-if="!submitted">
        <label for="">Blog Title</label>
        <input type="text" required v-model.lazy="blog.title">

        <label for="">Blog Content</label>
        <textarea v-model.lazy="blog.content"></textarea>

        <div id="checkboxes">
            <label for="ninja">Ninjas</label>
            <input id="ninja" type="checkbox" value="ninja" v-model="blog.categories">
            <label for="wizard">Wizard</label>
            <input id="wizard" type="checkbox" value="wizard" v-model="blog.categories">
            <label for="mario">Mario</label>
            <input id="mario" type="checkbox" value="mario" v-model="blog.categories">
            <label for="cheese">Cheese</label>
            <input id="cheese" type="checkbox" value="cheese" v-model="blog.categories">
        </div>

        <label for="">Author</label>
        <select v-model="blog.author">
            <option v-for="(author, idx) in authors" v-bind:key="idx">
                {{ author }}
            </option>
        </select>

        <button v-on:click.prevent="post">Add Blog</button>
    </form>

    <div v-if="submitted">
        <h3>Thanks for adding your post</h3>
    </div>

    <div id="preview">
        <h3>Preview Blog</h3>
        <p>Blog title: {{ blog.title }} </p>

        <p>Blog content:  </p>
        <p>{{ blog.content }}</p>

        <p>Blog Categories: </p>
        <ul>
            <li v-for="(category, idx) in blog.categories" v-bind:key="idx">
                {{ category }}
            </li>
        </ul>

        <p>Blog Author : {{ blog.author }} </p>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
        blog: {
            title: '',
            content: '',
            categories: [],
            author: ''
        },
        authors: [
            'The Net Ninja', 'The Angular Avenger', 'The Vue Vinidicator'
        ],
        submitted: false,
    }
  }, 
  methods: {
    post(){
        //http capability of vue resource
        this.$http.post('http://jsonplaceholder.typicode.com/posts', { //making post request to this url, in future if we use firebase, we can change the url to our firebase
            title: this.blog.title, //line 72-75 is a promise, so we have to pass thru then()
            body: this.blog.content,
            userId: 1,
            author: this.blog.author
        }).then(function(data){ //data is the data we sent when post request
              console.log(data);
              this.submitted = true;
        }); 
    }
  }
}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}

#add-blog{
    margin: 20px auto;
    max-width: 600px;
    /* border: 1px solid green; */
}

label{
    width: 500px;
    display: block;
    margin: 20px 0 10px;
}

input[type="text"], textarea{
    display: block;
    width: 600px;
    padding: 8px;
}

#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}

h3{
    margin-top: 10px;
}

#checkboxes{
    margin-top: 30px;
}

#checkboxes label{
    display: inline;
}

#checkboxes input{
    display: inline;
    margin-right: 15px;
}


</style>

