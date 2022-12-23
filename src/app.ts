import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponenet } from "./components/page/item/note.js";
import { TodoComponenet } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent } from "./components/page/page.js";
class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      "Image Title",
      "https://picsum.photos/600/300",
    );
    image.attachTo(appRoot, "beforeend");

    const note = new NoteComponenet("note Title", "note body");
    note.attachTo(appRoot, "beforeend");

    const todo = new TodoComponenet("todo Title", "todo item");
    todo.attachTo(appRoot, "beforeend");

    const video = new VideoComponent(
      "Video Title",
      "https://www.youtube.com/watch?v=Lk4e1mk4lJU",
    );
    video.attachTo(appRoot, "beforeend");
  }
}

new App(document.querySelector(".document")! as HTMLElement);
