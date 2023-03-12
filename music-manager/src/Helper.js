import { lsKey } from "./enums";

export class Helper {
  static greet() {
    console.log('Greetings!');
  }
  static showAddMenu() {
    const addMenu = document.querySelector('.add');
    addMenu.style.display = 'flex';
  }
  static hideAddMenu() {
    const addMenu = document.querySelector('.add');
    addMenu.style.display = 'none';
  }
  static storageData() {
    return JSON.parse(localStorage.getItem(lsKey));
  }
  static addData(obj) {
    let data = JSON.parse(localStorage.getItem(lsKey));
    data.push(obj);
    this.sortData(data);
    localStorage.setItem(lsKey, JSON.stringify(data));
  }
  static filterData(str) {
    const data = this.storageData();
    return data.filter(obj => obj.title.toUpperCase().search(str.toUpperCase()) != -1);
  }
  static sortData(data) {
    return data.sort((a, b) => {
      if (a.year !== b.year) {
        return a.year - b.year;
      } else if (a.author !== b.author) {
        return a.author.localeCompare(b.author);
      } else {
        return a.title.localeCompare(b.title);
      }
    });
  }
  static removeData(i) {
    let data = JSON.parse(localStorage.getItem(lsKey));
    data.splice(i, 1)
    localStorage.setItem(lsKey, JSON.stringify(data));
  }
}