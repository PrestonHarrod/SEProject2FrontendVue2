<template>
  <div>
 <button name="cancel" v-on:click.prevent="cancel()">Go Back</button>

<p></p>
<button name="edit" v-on:click.prevent="updateCourse(course)">Edit</button>
<p></p>
   


 <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Hours</th>
                    <th>Course Number</th>
                    <th>Level</th>
                    <th>Dept</th>
                    <th>Course Description</th>
                </tr>
            </thead>
            <tbody>
                    <td>{{course.name}}</td>
                    <td>{{course.hours}}</td>
                    <td>{{course.courseNum}}</td>
                    <td>{{course.level}}</td>
                    <td>{{course.dept}}</td>
                    <td>{{course.desc}}</td>
            </tbody>
        </table>

  </div>
</template>

<script>
import courseServices from '@/services/courseServices.js'
export default {
  props: ['id'],
  components: {},
  data() {
    return {
      course: {}
      
    }
  },
  created() {
      courseServices.get(this.id)
      .then(response => {
        this.course = response.data,
        console.log(this.course)
      })
      .catch(error => {
        console.log('There was an error:', error.response)
        
      })
        
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  },
  methods: {
    addForm(){
      this.addCourseDisplay = true;
    },
    updateCourse(course) {
          this.$router.push({ name: 'edit', params: {id: course.id}})
        .then(() => {
        })
        .catch(error => {
         console.log(error)
        })
    },
    cancel() {
      this.$router.push({ name: 'list' })
    },

    deleteCourse(id){
    courseServices.delete(id)
      .then(() => {
        this.courses.forEach((course,i) => {
          if (course.id == id) {
            this.courses.splice(i, 1);
          }
        })
          
        })
        .catch(error => {
         this.message = error.response.data.message
        })
    },
    
}
}
</script>

<style></style> 
