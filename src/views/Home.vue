<template>
  <div>
    <h1>Course Home</h1>
    <button @click="$router.push('/api/courses/courseadd')">Add Course</button>
    <button @click="getNextPage(--index)">Prev</button>
    <button @click="getNextPage(++index)">Next</button>


         <table class="center">

            <thead>
                <tr>
                    <th>Name</th>
                    <th>Hours</th>
                    <th>Course Number</th>
                    <th>View Course</th>
                     <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="course in courses" :key="course.id" :course="course">
                    <td>{{course.Name}}</td>
                    <td>{{course.Hours}}</td>
                    <td>{{course["Course Number"]}}</td>

                    <button name="view" v-on:click.prevent="viewCourse(course)">View Course</button>
                    <button class="delete-btn" @click="doDelete(courses, course.id)">
            Delete
          </button>
          <confirm-dialog ref="confirmDialog"></confirm-dialog>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
//import CourseListDisplay from '@/components/CourseListDisplay.vue'
import courseServices from '@/services/courseServices.js'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
export default {
    components: {ConfirmDialog},
    data() {
        return {
            courses: {},
            index: 0
        };
    },
  created() {

      courseServices.getCourses(0) 
      .then(response => {
        this.courses = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
   viewCourse(course) {
          this.$router.push({ name: 'view', params: {id: course.id}})
        .then(() => {
        })
        .catch(error => {
         console.log(error)
        })
    },
    async doDelete(courses, id) {
            const ok = await this.$refs.confirmDialog.show({
                title: 'Delete Course',
                message: 'Are you sure you want to delete this course? It cannot be undone.',
                okButton: 'Delete Forever',
            })
            // If you throw an error, the method will terminate here unless you surround it wil try/catch
            if (ok) {
                courseServices.deleteCourse(id)
      .then(() => {
        this.courses.forEach((course,i) => {
          if (course.id == id) {
            this.courses.splice(i, 1);
          }
        })

        })
            } else {
                alert('You chose not to delete this course. Doing nothing now.')
            }
      },
      getNextPage(num){
      if (num < 0) //dont allow index more less than 0
      {
        num = 0;
        this.index = 0;
      }
      console.log("Number: " + num);
      console.log("Index: " + this.index);
      courseServices.getCourses(num * 50)
      .then(response => {
        this.courses = response.data
        })
        .catch(error => {
        console.log('There was an error:', error.response)
        })
    },
      },

  }
</script>

<style>
table {
  border-collapse: collapse;
  width: 100%;
}
th,
td {
  text-align: left;
  padding: 8px;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
th {
  background-color: #811429;
  color: white;
}
.delete-btn {
  margin-left: 100px;
  padding: 0.5em 1em;
  background-color: #eccfc9;
  color: #c5391a;
  border: 2px solid #ea3f1b;
  border-radius: 5px;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
}
</style>
