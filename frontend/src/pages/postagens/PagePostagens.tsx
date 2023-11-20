import CardPostagem from "../../components/CardPostagem/CardPostagem";
import ColunaLateral from "../../components/ColunaLateral/ColunaLateral";

export default function PagePostagens() {
  return (
    <section className="flex flex-grow ">
      <ColunaLateral/>
      <div className="pt-4 flex grow flex-col items-center">
        <CardPostagem/>
      </div>
    </section>
  )
}
