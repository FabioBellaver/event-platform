import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";
import { Loading } from "./Loading";

export function Sidebar() {
  const { data } = useGetLessonsQuery();

  if (!data) {
    return (
      <div className="flex items-center justify-center w-[348px]">
        <Loading />
      </div>
    );
  }

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-600 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
}
