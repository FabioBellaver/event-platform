import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";
import conditionalStyle from 'classnames';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson(props: LessonProps) {

  const { slug } = useParams<{ slug: string; }>();

  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    { locale: ptBR }
  );

  const isActiveLesson = slug === props.slug;

  return (
    <div>
      <span className="text-gray-300 select-none">
        {availableDateFormatted}
      </span>
      <Link to={`/event/lesson/${props.slug}`}>
        <div className={conditionalStyle("rounded border border-gray-500 p-4 mt-2 hover:bg-gray-900 transition-colors", {
          "bg-green-500 hover:bg-green-700" : isActiveLesson,
        })}>
          <header className="flex items-center justify-between">
            {isLessonAvailable ? (
              <span className={conditionalStyle("text-sm text-blue-500 font-medium flex items-center gap-2", {
                'text-white' : isActiveLesson,
              })}>
                <CheckCircle size={20} />
                Conteúdo Liberado
              </span>
            ) : (
              <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                <Lock size={20} />
                Em breve
              </span>
            )}
            <span className={conditionalStyle("text-xs rounded py-[0.125rem] px-2 text-gray-100 border border-green-300 font-bold", {
              'border-white' : isActiveLesson,
            })}>
              {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
            </span>
          </header>
          <strong className={conditionalStyle("text-gray-200 mt-5 block",{
            'text-white' : isActiveLesson,
          })}>{props.title}</strong>
        </div>
      </Link>
    </div>
  );
}
