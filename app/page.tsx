'use client'

import Button from "@/src/components/button";
import { SimpleCard } from "@/src/components/cards";
import Forms from "@/src/components/forms";
import { Header } from "@/src/components/header";
import Section from "@/src/components/section";
import Image from "next/image";
import { useState } from "react";

export default function Page() {

  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <Forms
        open={open}
        setOpen={setOpen}
      />
      <Header
        open={open}
        setOpen={setOpen}
        title={<>10 Anos de Crescimento em 2: O <span className="text-[#edbe32]">Plano Para Quem Quer Liderar</span> no Mercado Tributário.</>}
        description={<>No dia 09 de abril, você vai conhecer as quatro metas que transformarão sua carreira e garantirão seu lugar entre os melhores.</>}
        list={[]}
        btn_text="QUERO ACERTAR NA CONTRATAÇÃO"
        badge="Este conteúdo é exclusivo para profissionais que trabalham na Área tributária."
      />
      <main className="relative bg-black z-50">
        <div className="absolute -top-24 w-full h-72 sm:block hidden">
          <Image
            src="/images/section.png"
            alt="Divisória"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <Section classNameS="sm:pt-48 pt-12 px-4">
          <div className="absolute left-0 w-[96px] h-[296px] bg-[#edbe32] blur-[180px]"></div>
          <div className="flex flex-col gap-20 items-center">
            <div className="max-w-5xl sm:grid sm:grid-cols-2 flex flex-col items-start gap-12 z-50">
              <div className="flex flex-col gap-4 text-left text-white">
                <h3 className="text-4xl sm:text-6xl font-semibold">Para quem é esta <span className="text-[#edbe32]">Super Live</span>?</h3>
                <p className="text-2xl">Se você atua na área tributária e busca crescimento acelerado, este evento é para você:</p>
              </div>
              <div className="flex flex-col gap-8">
                <SimpleCard
                  title="Analistas, consultores e gestores"
                  subtitle="que querem se destacar e conquistar as melhores oportunidades."
                />
                <SimpleCard
                  title="Advogados tributaristas"
                  subtitle="que precisam ir além do conhecimento técnico para crescer na área."
                />
                <SimpleCard
                  title="Empreededores e contadores"
                  subtitle="que desejam estratégias para aumentar sua autoridade e valor de mercado."
                />
              </div>
            </div>
          </div>
        </Section>
        <section className="flex justify-center py-12 sm:py-24">
          <p className="border border-[#edbe32]/10 px-4 sm:px-8 py-4 sm:rounded-full uppercase text-center sm:text-2xl text-white font-bold sm:my-shadow bg-zinc-900">Se você quer <span className="text-[#edbe32]">se tornar referência</span> no setor, este é o momento.</p>
        </section>
        <Section classNameS="pb-8 px-4 sm:mt-0 -mt-16">
          <div className="sm:grid sm:grid-cols-2 items-center gap-24 z-50">
            <div className="relative xl:w-[768px] xl:h-[768px] sm:w-[656px] sm:h-[656px] w-full h-96">
              <Image
                src="/images/toledo.png"
                alt="Altair Toledo"
                objectFit="contain"
                layout="fill"
              />
            </div>
            <div className="flex flex-col gap-4 text-white z-50 sm:mt-0 -mt-12">
              <h2 className="text-3xl sm:text-4xl font-bold">Muito prazer! <br />Meu nome é Altair Toledo</h2>
              <p className="font-thin text-lg">Sócio da KPMG com mais de 25 anos de experiência na área tributária. Durante sua trajetória, ajudou profissionais e empresas a se posicionarem estrategicamente para crescer de forma acelerada. Agora, ele vai revelar em primeira mão o Plano JK, um método exclusivo para você transformar sua carreira em tempo recorde.</p>
              <p className="font-thin text-lg">Clique no botão abaixo, faça sua inscrição e venha descobrir como crescer 20 anos em 2!</p>
              <div className="flex w-full sm:max-w-sm">
                <Button>Inscreva-se</Button>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </>
  )
}