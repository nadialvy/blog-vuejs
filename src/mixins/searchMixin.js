// mixin is a junk of code that we can use over and over 
// in different places

// export object 
export default {
    //export our computed properties
    computed: {
        filteredBlogs: function(){
            return this.blogs.filter((blog) => {
                return blog.title.toLowerCase().match(this.search.toLowerCase());
            });
        }
    }
}