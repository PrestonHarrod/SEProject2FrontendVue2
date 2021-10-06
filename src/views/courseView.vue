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
                    <td>{{course.Name}}</td>
                    <td>{{course.Hours}}</td>
                    <td>{{course["Course Number"]}}</td>
                    <td>{{course.Level}}</td>
                    <td>{{course.Dept}}</td>
                    <td>{{course.Description}}</td>
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
      courseServices.getCourse(this.id)
      .then(response => {
        this.course = response.data[0],
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
    courseServices.deleteCourse(this.id, id)
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
