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
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className="flex flex-1 min-h-screen bg-blur bg-cover bg-no-repeat flex-col items-center">
            <div className="w-full max-w-[1100px] flex items-center mt-96 flex-col">
              <span className="text-2xl leading-relaxed">
                <span className="font-bold">Event Platform</span> é um projeto
                de estudos da{" "}
                <a
                  className="text-green-500 hover:text-green-600 transition-colors"
                  href="https://www.rocketseat.com.br/"
                >
                  Rocketseat
                </a>
                .
              </span>
              <span className="mt-4 text-gray-200 text-md leading-relaxed">
                Tecnologias usadas no projeto:
              </span>
              <ul className="flex mt-4 text-gray-300 gap-4 select-none">
                <li>
                  <a
                    className="hover:text-gray-100 transition-colors"
                    href="https://reactjs.org/"
                  >
                    React
                  </a>
                </li>{" "}
                |
                <li>
                  <a
                    className="hover:text-gray-100 transition-colors"
                    href="https://vitejs.dev/"
                  >
                    Vite
                  </a>
                </li>{" "}
                |
                <li>
                  <a
                    className="hover:text-gray-100 transition-colors"
                    href="https://www.typescriptlang.org/"
                  >
                    TypeScript
                  </a>
                </li>{" "}
                |
                <li>
                  <a
                    className="hover:text-gray-100 transition-colors"
                    href="https://tailwindcss.com/"
                  >
                    TailwindCSS
                  </a>
                </li>{" "}
                |
                <li>
                  <a
                    className="hover:text-gray-100 transition-colors"
                    href="https://graphql.org/"
                  >
                    GraphQL
                  </a>
                </li>{" "}
                |
                <li>
                  <a
                    className="hover:text-gray-100 transition-colors"
                    href="https://graphcms.com/"
                  >
                    GraphCMS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
}
