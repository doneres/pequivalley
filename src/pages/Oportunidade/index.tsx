import CardOportunidade from "../../components/CardOportunidade";

export default function Oportunidade() {
  return (
    <div className="p-3">
      <h1>Hello World!</h1>

      <CardOportunidade
        descricaoCompleta={["teste"]}
        logoEmpresa="https://jerimumjobs.imd.ufrn.br/jerimumjobs/file/img/150/150/7862e1dd-25b7-472e-a1da-852553df21a6"
        remunacao="192"
        titulo="Teste de vaga"
        key={1}
      />
    </div>
  );
}
