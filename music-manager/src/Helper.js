import { lsKey } from "./enums";

export class Helper {
  static showAddMenu() {
    const addMenu = document.querySelector('.add');
    addMenu.style.display = 'flex';
  }
  static hideAddMenu() {
    const addMenu = document.querySelector('.add');
    addMenu.style.display = 'none';
  }
  static clearAddMenu() {
    document.querySelector('.add__form-input.title').value = '';
    document.querySelector('.add__form-input.author').value = '';
    document.querySelectorAll('.add__form-input.genre > option')[0].selected = true;
    document.querySelector('.add__form-input.year').value = '';
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
  static generateId() {
    let data = JSON.parse(localStorage.getItem(lsKey));
    let ids = data.map(album => album.id);
    ids.sort();
    for (let i = 0; i < 9; i++) {
      if (ids[i] !== i)
        return i;
    }
    return 0;
  }
}