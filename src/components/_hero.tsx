import Image from "next/image";
export const HeroComponent = () => (
  <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="relative mb-6 sm:mx-auto md:mb-10 md:max-w-md lg:max-w-lg px-24">
      <Image
        src="/vpontes.jpg"
        alt="Foto do Vinicius Pontes"
        width="400"
        height="400"
        priority
        className="rounded-full w-full ring ring-success shadow-lg ring-offset-base-100 ring-offset-2"
      />
    </div>
    <div className="hero content-between mt-10">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Olá, &#128075;</h1>
          <p className="py-6">
            Eu sou Vinicius Pontes, engenheiro de software e especialista em
            JavaScript, desenvolvimento Mobile e em smartTV. CEO da LIVSYS,
            consultoria líder em tecnologia. Busco soluções eficientes e
            criativas para meus clientes.
          </p>
          <button className="btn btn-primary">Ver Projetos</button>
        </div>
      </div>
    </div>
  </div>
);
