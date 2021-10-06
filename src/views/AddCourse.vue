<template>
  <div>
    <H1 style="background-color: #811429; color:#f2f2f2">Add Course</H1>
  

    <form @submit.prevent="addCourse">
      <table class="center">
      <tr>
      <td style="height: 30px; width: 80px; display: inline-block">  Department: </td>    
      <td style="height: 30px; display: inline-block" > <input v-model="course.Dept" type="text" id="courseDept"> </td>    
      </tr>
      <tr>
      <td style="height: 30px; width: 80px; display: inline-block"> Course Number: </td>
      <td style="height: 30px;  display: inline-block"><input v-model="course['Course Number']" type="text" id="courseNumber"> </td>
      </tr>
      <tr>
      <td style="height: 30px; width: 80px; display: inline-block"> Level: </td>
      <td style="height: 30px;  display: inline-block"> <input v-model="course.Level" type="text" id="courseLevel"> </td> 
      </tr>
      <tr>
      <td style="height: 30px; width: 80px; display: inline-block"> Hours: </td>
      <td style="height: 30px;  display: inline-block"> <input v-model="course.Hours" type="text" id="courseHours"> </td>
      </tr>
      <tr>
      <td style="height: 30px; width: 80px; display: inline-block"> Course Name: </td>
      <td style="height: 30px; display: inline-block"> <input v-model="course.Name" type="text" id="courseName"> </td>
      </tr>
      <tr>
      <td style="width: 80px; display: inline-block"> Description: </td>
      <br>
      <textarea v-model="course.Description" type="text" style='height:80px; width:500px; white-space: pre-line;' id="courseDescription"></textarea> 
      </tr>
      <br> <br>
      <tr>
      <button name="submit" v-on:click.prevent="addCourse()">Submit</button>
      <button name="cancel" v-on:click.prevent="cancel()">Cancel</button>
      </tr>
      </table>
    </form>
  </div>
</template>

<script>
import courseServices from '@/services/courseServices.js'
export default {
  data() {
    return {
      course: {}
    }
  },
  methods: {
    addCourse() {
     
        courseServices.addCourse(this.course)
        .then(() => {
          this.$router.push({ name: 'list' })
        })
        .catch(error => {
          console.log(error)
        })
    },
    cancel() {
      this.$router.push({ name: 'list' })
    },
  }
}
</script>

<style scoped>
.center {
  margin-left: auto;
  margin-right: auto;
}
</style>