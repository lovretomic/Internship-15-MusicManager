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
}