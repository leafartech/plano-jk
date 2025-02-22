import { ReactNode } from "react"

function CardItem({ label, icon }: { label: string, icon: ReactNode }) {

    return (
        <div className="px-8 bg-text1 py-3 rounded-xl">
            <div className="relative ps-11 text-left">
                {icon}
                <p className="text-white text-sm">{label}</p>
            </div>
        </div>
    )
}

function RightCard() {

    const data = [
        'Contratações erradas que geram prejuízo e retrabalho.',
        'Funcionários desalinhados e sem perfil adequado para o cargo.',
        'Rotatividade alta, forçando você a contratar e treinar sempre.',
        'Falta de clareza para escolher o candidato certo.',
        'Equipe desmotivada e baixa produtividade.'
    ]

    return (
        <div className="sm:w-[445px] rounded-3xl overflow-hidden">
            <div className="py-4 border-b border-white bg-[#D70000] px-4">
                <h4 className="text-white text-lg sm:text-xl font-bold uppercase">Sem um processo <br />estruturado:</h4>
            </div>
            <div className="flex flex-col gap-4 bg-[#191919] py-8 px-8">
                {data.map((item: string, index: number) => (
                    <CardItem
                        label={item}
                        icon={
                            <svg className="absolute top-1 left-0" width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_267_4089)">
                                    <path d="M13.0556 20.1008C12.9244 19.9696 12.8507 19.7915 12.8507 19.6059C12.8507 19.4203 12.9244 19.2423 13.0556 19.111L17.5105 14.6561L13.0556 10.2012C12.9281 10.0692 12.8575 9.89234 12.8591 9.7088C12.8607 9.52526 12.9343 9.34968 13.0641 9.21989C13.1939 9.09011 13.3695 9.01649 13.553 9.01489C13.7366 9.0133 13.9134 9.08385 14.0454 9.21137L18.5003 13.6663L22.9552 9.21137C23.0873 9.08385 23.2641 9.0133 23.4476 9.01489C23.6312 9.01649 23.8067 9.09011 23.9365 9.21989C24.0663 9.34968 24.1399 9.52526 24.1415 9.7088C24.1431 9.89234 24.0726 10.0692 23.9451 10.2012L19.4902 14.6561L23.9451 19.111C24.0726 19.243 24.1431 19.4199 24.1415 19.6034C24.1399 19.7869 24.0663 19.9625 23.9365 20.0923C23.8067 20.2221 23.6312 20.2957 23.4476 20.2973C23.2641 20.2989 23.0873 20.2283 22.9552 20.1008L18.5003 15.6459L14.0454 20.1008C13.9142 20.2321 13.7361 20.3058 13.5505 20.3058C13.3649 20.3058 13.1869 20.2321 13.0556 20.1008Z" fill="#D70000" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5003 28.6564C26.2327 28.6564 32.5007 22.3885 32.5007 14.6561C32.5007 6.92371 26.2327 0.655762 18.5003 0.655762C10.768 0.655762 4.5 6.92371 4.5 14.6561C4.5 22.3885 10.768 28.6564 18.5003 28.6564ZM18.5003 27.2564C25.4592 27.2564 31.1006 21.615 31.1006 14.6561C31.1006 7.69723 25.4592 2.0558 18.5003 2.0558C11.5415 2.0558 5.90003 7.69723 5.90003 14.6561C5.90003 21.615 11.5415 27.2564 18.5003 27.2564Z" fill="#D70000" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_267_4089" x="0.5" y="0.655762" width="36.0007" height="36.0005" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_267_4089" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_267_4089" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        }
                    />
                ))}
            </div>
        </div>
    )
}
function LeftCard() {

    const data = [
        'Contratações certeiras, sem achismos.',
        'Funcionários alinhados à cultura da empresa desde o início.',
        'Redução da rotatividade e equipe mais estável.',
        'Processo seletivo estruturado, evitando erros e prejuízos.',
        'Time produtivo e motivado, gerando mais resultados.'
    ]

    return (
        <div className="sm:w-[445px] rounded-3xl overflow-hidden">
            <div className="py-4 border-b border-white linear-2  px-4">
                <h4 className="text-white text-lg sm:text-xl font-bold uppercase">Com a Jornada de Contratação<br /> Bem Sucedida:</h4>
            </div>
            <div className="flex flex-col gap-4 bg-[#191919] py-8 px-8">
                {data.map((item: string, index: number) => (
                    <CardItem
                        label={item}
                        icon={
                            <svg className="absolute top-1 left-0" width="28" height="28" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 27.2562C21.4587 27.2562 27.1 21.615 27.1 14.6563C27.1 7.69755 21.4587 2.05625 14.5 2.05625C7.5413 2.05625 1.9 7.69755 1.9 14.6563C1.9 21.615 7.5413 27.2562 14.5 27.2562ZM14.5 28.6563C22.2322 28.6563 28.5 22.3884 28.5 14.6563C28.5 6.92405 22.2322 0.65625 14.5 0.65625C6.7678 0.65625 0.5 6.92405 0.5 14.6563C0.5 22.3884 6.7678 28.6563 14.5 28.6563Z" fill="#0A70FF" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.969 9.23755C22.1067 9.36196 22.1894 9.53597 22.1988 9.72132C22.2083 9.90666 22.1437 10.0882 22.0194 10.2259L12.6702 20.5586L7.017 15.1624C6.89006 15.0326 6.81847 14.8587 6.81734 14.6772C6.81621 14.4957 6.88562 14.3208 7.01093 14.1895C7.13624 14.0582 7.30766 13.9807 7.48901 13.9734C7.67037 13.966 7.84748 14.0294 7.983 14.1502L12.596 18.5531L20.9813 9.28725C21.043 9.21906 21.1176 9.16369 21.2007 9.12432C21.2838 9.08495 21.3738 9.06235 21.4657 9.05779C21.5576 9.05324 21.6494 9.06684 21.736 9.0978C21.8226 9.12877 21.9023 9.17649 21.9704 9.23825" fill="#0A70FF" />
                            </svg>
                        }
                    />
                ))}
            </div>
        </div>
    )
}

export default function Cards() {
    return (
        <div className="flex sm:flex-row flex-col gap-6">
            <RightCard />
            <LeftCard />
        </div>
    )
}