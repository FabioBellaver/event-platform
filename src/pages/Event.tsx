import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { Footer } from "../components/Footer";

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <Video lessonSlug={slug} /> : (
          <div className="flex flex-1 items-center justify-center">
            <img src="/src/assets/react.png" alt="" className="opacity-40"/>
            <h1>O poder do React</h1>
          </div>
        )}
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
}
