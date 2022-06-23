import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link } from "react-router-dom";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    { locale: ptBR }
  );

  return (
    <div>
      <span className="text-gray-300 select-none">
        {availableDateFormatted}
      </span>
      <Link to={`/event/lesson/${props.slug}`}>
        <div className="rounded border border-gray-500 p-4 mt-2 hover:bg-gray-900 transition duration-150 ease-in-out">
          <header className="flex items-center justify-between">
            {isLessonAvailable ? (
              <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                <CheckCircle size={20} />
                Conteúdo Liberado
              </span>
            ) : (
              <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                <Lock size={20} />
                Em breve
              </span>
            )}
            <span className="text-xs rounded py-[0.125rem] px-2 text-gray-100 border border-green-300 font-bold">
              {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
            </span>
          </header>
          <strong className="text-gray-100 mt-5 block">{props.title}</strong>
        </div>
      </Link>
    </div>
  );
}
