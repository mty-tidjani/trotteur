import { MarketItem } from "../../models/marketitiem.model";

export const migrateData = async () => {
  const item = await MarketItem.findOne({});
  if (!item) {
    await MarketItem.create([
      {
        title: "COFFRET DÉCOUVERTE PROVENCE HUILE & TAPENADE",
        price: 30,
        image:
          "https://res.cloudinary.com/coq-trotteur/image/upload/picture/5fad464da042d308da58cf09",
      },
      {
        title: "HUILE D’OLIVE (VARIÉTÉ TANCHE) 1L",
        price: 23.5,
        image:
          "https://res.cloudinary.com/coq-trotteur/image/upload/picture/5fad470da042d308da58cf12",
      },
      {
        title: '"Entre nous" Côtes du Rhône Bio',
        price: 7.5,
        image:
          "https://res.cloudinary.com/coq-trotteur/image/upload/picture/5fad47fda042d308da58cf13",
      },
      {
        title: "Pull et gilet",
        price: 59,
        image:
          "https://res.cloudinary.com/coq-trotteur/image/upload/picture/5fad48d1a042d308da58cf14",
      },
      {
        title: 'Peinture "aux portes de la ville"',
        price: 660,
        image:
          "https://res.cloudinary.com/coq-trotteur/image/upload/picture/5fad49b6a042d308da58cf15",
      },
      {
        title: "Calendrier de l’avent de la Chocolaterie Chaloin",
        price: 21,
        image:
          "https://res.cloudinary.com/coq-trotteur/image/upload/picture/5fad4b0ca042d308da58cf16",
      },
      {
        title: "Renne de Noël tout en chocolat de la Chocolaterie Chaloin",
        price: 17.5,
        image:
          "https://res.cloudinary.com/coq-trotteur/image/upload/picture/5fad4bf9a042d308da58cf17",
      },
      {
        title: "Jogging, jeans, sweet...",
        price: 19,
        image:
          "https://res.cloudinary.com/coq-trotteur/image/upload/picture/5fae573fa042d308da58e28f",
      },
      {
        title: 'T-shirt "Vaison Moi J\'Adore"',
        price: 9.9,
        image:
          "https://res.cloudinary.com/coq-trotteur/image/upload/picture/5fae5ea5a042d308da58e294",
      },
      {
        title: "Calendrier de l'avent gourmand",
        price: 21,
        image:
          "https://res.cloudinary.com/coq-trotteur/image/upload/picture/5fae655ba042d308da58e297",
      },
      {
        title: "Renne de Noël",
        price: 17.5,
        image:
          "https://res.cloudinary.com/coq-trotteur/image/upload/picture/5fae6721a042d308da58e299",
      },
      {
        title: "Tasse tout en chocolat",
        price: 19.8,
        image:
          "https://res.cloudinary.com/coq-trotteur/image/upload/picture/5fae6af9a042d308da58e2af",
      },
      {
        title: "Sachet Truffes au chocolat (150gr)",
        price: 15.75,
        image:
          "https://res.cloudinary.com/coq-trotteur/image/upload/picture/5fb3f2c4fd54c208dbfb6186",
      },
      {
        title: "Sachet friture de Noël",
        price: 13.75,
        image:
          "https://res.cloudinary.com/coq-trotteur/image/upload/picture/5fae6eb7a042d308da58e2b1",
      },
      {
        title: '"Entre nous" Côtes du Rhône Bio',
        price: 7.5,
        image:
          "https://res.cloudinary.com/coq-trotteur/image/upload/picture/5fae97cd1e845506584a7521",
      },
      {
        title: '"Souviens-toi" AOC Vacqueyras Bio',
        price: 15,
        image:
          "https://res.cloudinary.com/coq-trotteur/image/upload/picture/5fae98d61e845506584a7522",
      },
      {
        title: '"Ché d\'Œuvre" Sans soufre rouge Bio',
        price: 12,
        image:
          "https://res.cloudinary.com/coq-trotteur/image/upload/picture/5fae9ab31e845506584a7527",
      },
      {
        title: '"Flagrant délice" rosé Bio',
        price: 6.5,
        image:
          "https://res.cloudinary.com/coq-trotteur/image/upload/picture/5fae9b521e845506584a7528",
      },
      {
        title: 'Souris grande soeur de Noël "Maileg"',
        price: 26.5,
        image:
          "https://res.cloudinary.com/coq-trotteur/image/upload/picture/5faed6a9730e9208da78cc6f",
      },
      {
        title: 'Souris grand frère de noël "Maileg"',
        price: 26.5,
        image:
          "https://res.cloudinary.com/coq-trotteur/image/upload/picture/5faed7fb730e9208da78cc78",
      },
      {
        title: 'Grande souris de noël en robe "Maileg"',
        price: 39.5,
        image:
          "https://res.cloudinary.com/coq-trotteur/image/upload/picture/5faedee3730e9208da78cc7a",
      },
      {
        title: 'Grande souris de Noël "Maileg" ',
        price: 39.5,
        image:
          "https://res.cloudinary.com/coq-trotteur/image/upload/picture/5faee0a8730e9208da78cc7c",
      },
      {
        title: 'Souris petit frère de Noël "Maileg" + valisette en métal',
        price: 21,
        image:
          "https://res.cloudinary.com/coq-trotteur/image/upload/picture/5faee2a7730e9208da78cc7e",
      },
      {
        title: "Poupée Paola Reina et sa tenue",
        price: 67.5,
        image:
          "https://res.cloudinary.com/coq-trotteur/image/upload/picture/5faee53a730e9208da78cc82",
      },
      {
        title: "Poupée Paola Reina et sa tenue",
        price: 77.5,
        image:
          "https://res.cloudinary.com/coq-trotteur/image/upload/picture/5faee730730e9208da78cc83",
      },
      {
        title: "Étuis biscuits salés assortis 200 gr.",
        price: 6.36,
        image:
          "https://res.cloudinary.com/coq-trotteur/image/upload/picture/5faffdf7730e9208da78cc8d",
      },
      {
        title: "Vrac Assortiment de votre choix",
        price: 31.8,
        image:
          "https://res.cloudinary.com/coq-trotteur/image/upload/picture/5fafffa2730e9208da78cc95",
      },
      {
        title: "Panier  3 miels de Provence ",
        price: 19,
        image:
          "https://res.cloudinary.com/coq-trotteur/image/upload/picture/5fb12749730e9208da78cca8",
      },
      {
        title: "Poupée Paola Reina et sa tenue",
        price: 60,
        image:
          "https://res.cloudinary.com/coq-trotteur/image/upload/picture/5fb14ff2730e9208da78ccab",
      },
      {
        title: "Poupon Paola Reina et sa tenue",
        price: 64.5,
        image:
          "https://res.cloudinary.com/coq-trotteur/image/upload/picture/5fb150e0730e9208da78ccac",
      },
    ]);
  }
  console.log("Market items migrated");
};
