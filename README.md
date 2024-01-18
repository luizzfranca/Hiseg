Gym App

O Gym App é uma aplicação móvel desenvolvida em React Native, projetada para ajudar os usuários a acompanhar seus treinos, visualizar exercícios, marcar conclusão, manter um histórico e fazer anotações pessoais. A aplicação utiliza Axios para interação com a API, Styled Components para estilização e oferece uma experiência intuitiva e amigável.

Funcionalidades
Visualização de Exercícios:

Explore uma variedade de exercícios, 
categorizados para diferentes grupos musculares.

Marcação de Conclusão:

Marque os exercícios concluídos para acompanhar o progresso.

Histórico de Treinos:

Acesse o histórico completo de treinos e visualizações anteriores.

Anotações Pessoais:

Faça anotações pessoais sobre treinos, progresso ou qualquer outra informação relevante.



Tecnologias Utilizadas:

React Native

Axios para requisições HTTP

Styled Components para estilização

Typescript

React Hook Form

Yup

Como Instalar:

Pré-requisitos

Certifique-se de ter o Node.js instalado na sua máquina.

(versão 20.10.0 recomendada)

Passos de Instalação:

1.Clone o repositório:
git clone https://github.com/seu-usuario/gym-app.git
cd gym-app

2.Instale as dependências:

Com npm:
npm install

Ou com yarn:
yarn install


API IgniteGym

Você pode utilizar a API IgniteGym fornecida por orodrigogo. Para executar a API, siga as instruções abaixo:

2.1.Clone o repositório da API:

git clone https://github.com/orodrigogo/ignitegym-api.git


cd ignitegym-api

2.2.Instale as dependências:
npm install ou yarn install

Inicie a API:
npm start ou yarn start


3.Configuração da API:

Abra o arquivo src/api/api.ts e altere a linha abaixo com o IP do seu computador:

const api = axios.create({
  baseURL: "http://SEU_IP_AQUI:3333",
});

Substitua SEU_IP_AQUI pelo IP do seu computador.


6. **Compilar para Dispositivos Móveis:**

- Siga as instruções específicas para o sistema operacional desejado no site oficial do [React Native](https://reactnative.dev/docs/environment-setup).

7. **Executar no Emulador ou Expo Go:**

   - **Emulador:**
      - Siga as instruções do [React Native](https://reactnative.dev/docs/running-on-device) para abrir o aplicativo no emulador.

   - **Expo Go:**
      - Instale o aplicativo Expo Go no seu dispositivo móvel através da [App Store](https://apps.apple.com/br/app/expo-go/id982107779) (iOS) ou [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR) (Android).
      - Após iniciar o projeto com `npm start` ou `yarn start`, você verá um QR Code no terminal.
      - Abra o aplicativo Expo Go no seu dispositivo móvel e escaneie o QR Code para abrir o aplicativo Gym.

8. **Compilar para Dispositivos Móveis:**

   - Siga as instruções específicas para o sistema operacional desejado no site oficial do [React Native](https://reactnative.dev/docs/environment-setup).

9. **Executar no Dispositivo Móvel:**

   - Conecte seu dispositivo ao computador e siga as instruções do [React Native](https://reactnative.dev/docs/running-on-device) para rodar a aplicação no seu dispositivo.
  

4.Inicie a Aplicação:
npx expo start ou yarn start

Agora você deverá ter o Gym App instalado e em execução no seu dispositivo ou emulador, pronto para ajudá-lo em seus treinos diários!

![f1](https://github.com/luizzfranca/Hiseg/assets/70065768/908a4d0b-281d-43ef-b630-cae2a524ba38)
![f2](https://github.com/luizzfranca/Hiseg/assets/70065768/b8515903-78a7-4d4a-abad-788e41184bbe)
![f3](https://github.com/luizzfranca/Hiseg/assets/70065768/c181ab54-c44c-4326-b0bd-6484e6752f54)
![f4](https://github.com/luizzfranca/Hiseg/assets/70065768/d193e9a4-1e0c-4605-a860-338372c6b0ef)
![f5](https://github.com/luizzfranca/Hiseg/assets/70065768/1c1220c9-669d-40ff-9f84-8ee9528b6562)
![f6](https://github.com/luizzfranca/Hiseg/assets/70065768/dd262c69-620e-4157-8a7c-a646c6f55a2c)
![f7](https://github.com/luizzfranca/Hiseg/assets/70065768/782f9681-02e1-4230-b426-524f1b7a7f8d)
![f8](https://github.com/luizzfranca/Hiseg/assets/70065768/528000b9-4405-47ed-855c-b13f7d37d32f)
![f9](https://github.com/luizzfranca/Hiseg/assets/70065768/9206644f-2227-4343-b318-94f466b5f302)
![f10](https://github.com/luizzfranca/Hiseg/assets/70065768/605ff668-cb86-4a36-91c2-fbb57852c530)



