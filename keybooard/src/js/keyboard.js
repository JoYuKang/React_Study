export class keyboard {
  #switchEl;
  constructor() {
    this.#assignElement();
    this.#addEvent();
  }
  #assignElement() {
    this.#switchEl = document.getElementById("switch");
  }
  #addEvent() {
    this.#switchEl.addEventListener("change", () => {
      document.documentElement.setAttribute(
        "theme",
        event.target.checked ? "dark-mode" : ""
      );
      console.log(event.target.checked);
    });
  }
}
