import { Header } from "./components/Header";
import { Post } from "./Post";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <Post author="Diego Fernandes" content="Lorem ipsum dolor" />

      <Post
        author="Matheus Ferreira"
        content="Lorem ipsum dolor Lorem ipsum dolor"
      />
    </div>
  );
}
