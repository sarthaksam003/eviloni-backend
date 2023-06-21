import mongoose from "mongoose";

export const products = [
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Evil Oni - Unisex Bomber Jacket",
    category: "Jacket",
    price: 1999,
    productB: "https://i.imgur.com/rHzJvZR.jpg",
    productF: "https://i.imgur.com/FGf1pfa.jpg",
    productM: "https://i.imgur.com/U84Zm72.jpg",
    description:
      "['Official Evil Oni™ Merchandise','Evil Oni™ logo on the back and embroidered patches on sleeves','100% Polyester','Machine wash']",
    __v: 0,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Tie Dye: Blue Spiral Vortex",
    price: 999,
    category: "Sweatshirt",
    productM: "https://i.imgur.com/WptHcjc.jpg",
    productB: "https://i.imgur.com/rP9o2oU.jpg",
    productF: "https://i.imgur.com/201I5BU.jpg",
    description:
      "['Men`s Sweatshirts By Evil Oni™','Dark blue and Baby Blue Vortex design on White background.','100% Cotton','NO Machine wash']",
    __v: 0,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Looney Tunes: B & L Pattern",
    category: "Sweatshirt",
    price: 999,
    productM: "https://i.imgur.com/vSMizwQ.jpg",
    productB: "https://i.imgur.com/O5BFrje.jpg",
    productF: "https://i.imgur.com/7t5V40F.jpg",
    description:
      "['Women`s Sweatshirts By Looney Tunes™','Bugs And Lola Bunny Pattern on lavender background','80% Cotton 20% Polyester','NO Machine wash']",
    __v: 0,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "GAME OVER",
    category: "Knitted Sweater",
    price: 1299,
    productB: "https://i.imgur.com/sOM0iCY.jpg",
    productF: "https://i.imgur.com/DWj9i4D.jpg",
    productM: "https://i.imgur.com/kdGGJIN.jpg",
    description:
      "['Men`s Knitted Sweaters By Evil Oni™','GAME OVER!These two words are what every gamer`s nightmares are made of.','100% Cotton','NO Machine wash']",
    __v: 0,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "The Flintstones: Dino Pattern",
    category: "Sweatshirt",
    price: 999,
    productM: "https://i.imgur.com/rI4LxPS.jpg",
    productB: "https://i.imgur.com/EiYTwoJ.jpg",
    productF: "https://i.imgur.com/uejYpmt.jpg",
    description:
      "['Women`s Sweatshirts By The Flintstones™','Dino pattern on Black background.','80% Cotton 20% Polyester','Machine wash']",
    __v: 0,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Solids: Pink Orange Stripes",
    category: "Knitted Sweater",
    price: 1199,
    productB: "https://i.imgur.com/YpZolIS.jpg",
    productF: "https://i.imgur.com/O1oVZPd.jpg",
    productM: "https://i.imgur.com/MjHhNxC.jpg",
    description:
      "['Women`s Knitted Sweaters By Evil Oni™','Horizontal Pink and Orange stripes Turtleneck Sweater.','100% Cotton','NO Machine wash']",
    __v: 0,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Rick And Morty: Oh Geez!",
    category: "Sweatshirt",
    price: 999,
    productB: "https://i.imgur.com/7SZJ73v.jpg",
    productF: "https://i.imgur.com/5FRTYW9.jpg",
    productM: "https://i.imgur.com/DBg3yLY.jpg",
    description:
      "['Men`s Sweatshirts By Evil Oni™','Morty design on Blue-Green tie dye background.','100% Cotton','Machine wash']",
    __v: 0,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Courage: Lavendar Hoodie",
    category: "Hoodie",
    price: 1399,
    productB: "https://i.imgur.com/1uF9KGt.jpg",
    productF: "https://i.imgur.com/37UO2Yd.jpg",
    productM: "https://i.imgur.com/mYx2qs5.jpg",
    description:
      "['Women`s Hoodies By Evil Oni™','Courage: The Cowardly Dog pattern on Lavender background','100% Cotton','Machine wash']",
    __v: 0,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Rick And Morty: Space",
    category: "Knitted Sweater",
    price: 1299,
    productB: "https://i.imgur.com/xsTlZNJ.jpg",
    productF: "https://i.imgur.com/Sp5lWLu.jpg",
    productM: "https://i.imgur.com/iFumg5Q.jpg",
    description:
      "['Men`s Knitted Sweaters By Evil Oni™','Rick and Morty logo on Black background with polka dots.','100% Cotton','NO Machine wash']",
    __v: 0,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Looney Tunes: S & T Pattern",
    category: "T-Shirt",
    price: 599,
    productB: "https://i.imgur.com/EHAH3lG.jpg",
    productF: "https://i.imgur.com/hVBM7Ns.jpg",
    productM: "https://i.imgur.com/6R16tu1.jpg",
    description:
      "['Women`s T-Shirts By Evil Oni™','Sylvester and Tweety design on Yellow background','100% Cotton','NO Machine wash']",
    __v: 0,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Mortal Kombat: Scorpion",
    category: "T-Shirt",
    price: 399,
    productB: "https://i.imgur.com/k4aqJHj.jpg",
    productF: "https://i.imgur.com/qZGe8xn.jpg",
    productM: "https://i.imgur.com/ijw9K89.jpg",
    description:
      "['Women`s T-Shirts By Evil Oni™','Mortal Kombat character Skorpion design on Black background','100% Cotton','NO Machine wash']",
    __v: 0,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Captain America : Hero",
    category: "T-Shirt",
    price: 599,
    productB: "https://i.imgur.com/srtZ0qi.jpg",
    productF: "https://i.imgur.com/lJiI5qc.jpg",
    productM: "https://i.imgur.com/UfTyxkM.jpg",
    description:
      "['Men`s T-Shirts By Evil Oni™','Gold and Red Capt. America art on Grey and Black Tie Dye background','100% Cotton','Machine wash']",
    __v: 0,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Tie Dye: Stay Trippy",
    category: "T-Shirt",
    price: 599,
    productB: "https://i.imgur.com/OSqeZZ9.jpg",
    productF: "https://i.imgur.com/W3n2n6r.jpg",
    productM: "https://i.imgur.com/yEFd7nC.jpg",
    description:
      "['Women`s T-Shirts By Evil Oni™','Stay Trippy Little Hippie typography on Baby Blue background.','100% Cotton','NO Machine wash']",
    __v: 0,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "The Flintstones: YDD Tie Dye",
    category: "Sweatshirt",
    price: 999,
    productB: "https://i.imgur.com/Cqgl7sk.jpg",
    productF: "https://i.imgur.com/8HR0uCQ.jpg",
    productM: "https://i.imgur.com/IPmUTOA.jpg",
    description:
      "['Men`s Sweatshirts By Evil Oni™','Fred Flintstone and catchphrase typography on Pink, Green and Yellow tie dye on White background.','100% Cotton','Machine wash']",
    __v: 0,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Feelin' Groovy",
    category: "T-Shirt",
    price: 599,
    productB: "https://i.imgur.com/1HGPwn2.jpg",
    productF: "https://i.imgur.com/maK9MLu.jpg",
    productM: "https://i.imgur.com/donf9cN.jpg",
    description:
      "['Men`s Sweatshirts By Evil Oni™','Fred Flintstone and catchphrase typography on Pink, Green and Yellow tie dye on White background.','100% Cotton','Machine wash']",
    __v: 0,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Rick And Morty: Pounders",
    category: "T-Shirt",
    price: 599,
    productB: "https://i.imgur.com/DsjBMcW.jpg",
    productF: "https://i.imgur.com/vbCuW9b.jpg",
    productM: "https://i.imgur.com/nFjCpMB.jpg",
    description:
      "['Men`s T-Shirts By Evil Oni™','Rick and Morty : P***y Pounders logo on Mint color background.','100% Cotton','Machine wash']",
    __v: 0,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Mickey Mouse: Olive Green",
    category: "Sweatshirt",
    price: 999,
    productB: "https://i.imgur.com/4SKuVKY.jpg",
    productF: "https://i.imgur.com/aM18jmr.jpg",
    productM: "https://i.imgur.com/q3Vn2QC.jpg",
    description:
      "['Women`s Sweatshirts By Evil Oni™','Mickey Mouse Pattern on Olive Green background','100% Cotton','Machine wash']",
    __v: 0,
  },
];
