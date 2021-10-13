import http from "../http-common";

class courseServices {
  getAll() {
    return http.get("/courses");
  }

  get(id) {
    return http.get(`/courses/${id}`);
  }

  create(data) {
    return http.post("/courses", data);
  }

  update(id, data) {
    return http.put(`/courses/${id}`, data);
  }

  delete(id) {
    return http.delete(`/courses/${id}`);
  }

  deleteAll() {
    return http.delete(`/courses`);
  }

  findByTitle(id) {
    return http.get(`/courses?courseID=${id}`);
  }
}

export default new courseServices();

