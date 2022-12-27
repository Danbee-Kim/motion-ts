import { Component } from "./components/component.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponenet } from "./components/page/item/note.js";
import { TodoComponenet } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import {
  Composable,
  PageComponent,
  PageItemComponent,
} from "./components/page/page.js";
class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      "Image Title",
      "https://picsum.photos/600/300",
    );
    this.page.addChild(image);

    const note = new NoteComponenet("note Title", "note body");
    this.page.addChild(note);

    const todo = new TodoComponenet("todo Title", "todo item");
    this.page.addChild(todo);
    const video = new VideoComponent(
      "Video Title",
      "https://www.youtube.com/watch?v=Lk4e1mk4lJU",
    );
    this.page.addChild(video);
  }
}

new App(document.querySelector(".document")! as HTMLElement);
