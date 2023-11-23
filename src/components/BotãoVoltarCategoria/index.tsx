import { useCategoriasPesquisadas } from "../../contexts/CategoriasPesquisadas/useCategoriasPesquisadas";

interface Props {
  texto: string;
  className: string;
}

export default function BotaoVoltar({ texto, className = "" }: Props) {
  const defaultStyle =
    "border text-white p-4 rounded-md bg-black bg-opacity-40";
  const { categoriasPesquisadas, setCategoriasPesquisadas } =
    useCategoriasPesquisadas();

  if (categoriasPesquisadas.length > 0) {
    return (
      <button
        className={defaultStyle + " " + className}
        onClick={() => {
          setCategoriasPesquisadas([]);
        }}
      >
        {texto}
      </button>
    );
  } else {
    return <></>;
  }
}
