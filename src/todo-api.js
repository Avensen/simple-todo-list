export default class ToDo {
  static async getAll() {
    return JSON.parse(localStorage.getItem("todo-list") || "[]");
  }

  static async save(items) {
    localStorage.setItem("todo-list", JSON.stringify(items));
  }
}
