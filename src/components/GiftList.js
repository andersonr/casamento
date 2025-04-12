import { createGiftItem } from "./GiftItem.js";


export function createGiftList() {
	const gifts = [
		{
			imgSrc:
				"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907606/terapia_jabul0.webp",
			description: "Terapia para a noiva após os preparativos do casamento",
			value: 150,
			pixSrc: "./images/150.svg",
			pixCode:
				"aaaado00020126510014BR.GOV.BCB.PIX0129anderson.rissardi94@gmail.com5204000053039865406150.005802BR5917Anderson Rissardi6009SAO PAULO610805409000622405207x6YVQBRBJ45U9Mmwdwh6304A556",
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907608/banda-branca-de-neve_opdxwh.webp",
			description: "Banda no casamento",
			value: 100,
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907609/creatina_tspg0m.webp",
			description: "Creatina para o projeto verão",
			value: 80,
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907605/poli_nly7bk.webp",
			description: "Aulas de dança pro noivo, ele ta precisando",
			value: 171,
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907605/drinks-noivos_wfhz2p.webp",
			description: "Drinks para o casal na lua de mel",
			value: 60,
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907609/cerveja_jugpxi.webp",
			description: "Caixinha de cerveja para o noivo",
			value: 40,
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907605/pao_queijo_wtrbl4.webp",
			description: "Pão de queijo que o noivo adora",
			value: 30,
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907605/netflix_btkkom.webp",
			description: "1 mês de Netflix pro casal",
			value: 50,
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907608/alianca_zysoz8.webp",
			description: "Parcela das alianças",
			value: 1000,
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907606/uber_sfquxt.webp",
			description: "Uber até o aeroporto",
			value: 200,
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907607/whey_rjmk1v.webp",
			description: "Wheyzinho do monstro",
			value: 110,
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907604/curso_tpm_fq3xmv.webp",
			description: "Vídeo aula sobre TPM pro noivo não morrer",
			value: 300,
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907606/vinho_jc3zv4.webp",
			description: "Vinhozinho pra noiva",
			value: 100,
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907608/aviaozinho_uyzoyr.webp",
			description: "Aviãozinho do Silvio Santos",
			value: 50,
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737908307/lavalouca_mfjfbt.jpg",
			description: "Parcela da lava-louças pro noivo não sofrer",
			value: 400,
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907609/contas_afsd7j.webp",
			description: "Adote uma conta",
			value: 150,
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907605/rolex_yv6aqv.webp",
			description: "Rolex pro noivo",
			value: 10,
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907606/sandalia_wllxso.webp",
			description: "Um sapatinho pra noiva não machucar o pé",
			value: 300,
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907604/manicure_wlmk7b.webp",
			description: "Manicure pro grande dia",
			value: 180,
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907604/lingerie_nbs9iz.webp",
			description: "Lingerie sensual pra noiva",
			value: 200,
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737908441/comprinhas_li5row.webp",
			description: "Umas blusinhas porque a noiva não tem nada pra vestir",
			value: 300,
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737908501/cueca-furada_k4bspi.jpg",
			description: "Umas cuecas pro noivo que anda tão necessitado",
			value: 200,
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907605/roupa_noivo_nrxpjj.webp",
			description: "Parcela da roupa do noivo",
			value: 400,
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907609/barbeiro_u2fdvd.webp",
			description: "Barbeiro do grande dia",
			value: 100,
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907604/lua_de_mel_ikoxgm.webp",
			description: "Parcela da viagem de lua de mel",
			value: 1000,
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907605/jantar_romantico_k9wkht.webp",
			description: "Um jantar romântico na lua de mel",
			value: 500,
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737908122/casino_vkk1bi.jpg",
			description: "Uma jogadinha no casino",
			value: 120,
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737908585/sogra_navw3d.jpg",
			description: "Ajudar no quartinho da sogra",
			value: 700,
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737908673/buque_n1ofo1.jpg",
			description: "Jogar o buque na sua direção",
			value: 600,
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737908776/buffet_xydcmq.jpg",
			description: "Primeiro lugar na fila do buffet",
			value: 500,
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737908848/tiktok-31_kx7xio.png",
			description: "Foto e dancinha pro tiktok com os noivos",
			value: 150,
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737909056/fim_orcal1.jpg",
			description: "Eu não vou embora!! Ajuda na hora extra dos fornecedores",
			value: 80,
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737909156/tutubarao_r5crnm.jpg",
			description: "Mergulho com tubarões - Apenas o noivo",
			value: 250,
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737909240/Cocobay-Resort-2_qapoly.jpg",
			description: "Parcela do hotel da lua de mel",
			value: 1200,
		},		
	];

	return `
	
    <main class="p-8 bg-amarelo-queimado text-primary text-raleway">
      <div class="grid gap-4" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); max-width: 1200px; margin: 0 auto;">
        ${gifts
					.map((gift, index) =>
						createGiftItem(
							gift.imgSrc,
							gift.description,
							gift.value,
							index,
							gift.pixCode,
						),
					)
					.join("")}
      </div>
    </main>
  `;
}
