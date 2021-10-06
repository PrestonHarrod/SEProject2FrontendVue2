import axios from "axios";

var baseurl = "";
if (process.env.NODE_ENV === "development") {
  baseurl = "http://localhost:3000/api/";
} else {
  baseurl = "/api/";
}

const apiClient = axios.create({
  baseURL: baseurl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Origin" : "*",
    crossDomain: true
  },
  
   transformRequest: (data, headers) => {
     let token = localStorage.getItem("token");
     let authHeader = "";
     if (token != null && token != "") authHeader = "Bearer " + token;
     headers.common["Authorization"] = authHeader;
     return JSON.stringify(data);
   },
  transformResponse: function(data) {
    data = JSON.parse(data);
    if (!data.success && data.code == "expired-session") {
      localStorage.deleteItem("token");
    }
    return data;
  }
});

export default {
  getCourses(index) {
    return apiClient.get("courses?index=" + index);
  },
  getCourse(id) {
    return apiClient.get("courses/" + id);
  },
  addCourse(course) {
    return apiClient.post("courses", course);
  },
  updateCourse(courseId, course) {
    return apiClient.put("courses/" + courseId, course);
  },
  deleteCourse(courseId) {
    return apiClient.delete("courses/" + courseId);
  },
};
