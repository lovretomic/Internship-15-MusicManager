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
    localStorage.setItem(lsKey, JSON.stringify(data));
  }
  static filterData(str) {
    const data = this.storageData();
    return data.filter(obj => obj.title.toUpperCase().search(str.toUpperCase()) != -1);
  }
}