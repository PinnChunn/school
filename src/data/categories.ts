export type Category = {
  id: string;
  name: string;
  description: string;
};

export type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  categoryId: string;
};

export const categories: Category[] = [
  {
    id: 'macarons',
    name: '馬卡龍',
    description: '精緻可愛的法式甜點，多種獨特風味'
  },
  {
    id: 'choux',
    name: '泡芙',
    description: '酥脆外皮，綿密內餡的完美結合'
  },
  {
    id: 'tarts',
    name: '塔類',
    description: '新鮮水果與香酥塔皮的美味組合'
  },
  {
    id: 'cakes',
    name: '蛋糕',
    description: '經典法式蛋糕，層次豐富口感細緻'
  },
  {
    id: 'seasonal',
    name: '季節限定',
    description: '依季節推出的特製甜點'
  },
  {
    id: 'giftboxes',
    name: '禮盒',
    description: '精美包裝，最佳送禮選擇'
  },
  {
    id: 'teatime',
    name: '下午茶組合',
    description: '豐富多樣的下午茶套餐'
  }
];

export const products: Product[] = [
  {
    id: 1,
    name: '綜合馬卡龍禮盒',
    price: 'NT$ 880',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80',
    description: '12入精選口味馬卡龍，完美展現法式甜點的精緻與美味。內含：覆盆子、開心果、香草、巧克力、檸檬、玫瑰等經典口味。',
    categoryId: 'macarons'
  },
  {
    id: 2,
    name: '巧克力閃電泡芙',
    price: 'NT$ 180',
    image: 'https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&q=80',
    description: '香濃比利時巧克力醬與法國鮮奶油的完美結合，酥脆的泡芙外皮包裹著綿密的內餡。',
    categoryId: 'choux'
  },
  {
    id: 3,
    name: '季節水果塔',
    price: 'NT$ 220',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80',
    description: '嚴選當季水果，搭配香酥塔皮與香草卡士達醬，每一口都能品嚐到新鮮水果的甜美。',
    categoryId: 'tarts'
  },
  {
    id: 4,
    name: '法式千層薄餅蛋糕',
    price: 'NT$ 1,280',
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&q=80',
    description: '層層堆疊的薄餅與香草奶油，搭配焦糖醬，口感豐富層次分明。',
    categoryId: 'cakes'
  },
  {
    id: 5,
    name: '草莓季限定塔',
    price: 'NT$ 250',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80',
    description: '季節限定！使用日本空運草莓，搭配特製草莓慕斯與香草卡士達，完美呈現草莓的清甜。',
    categoryId: 'seasonal'
  },
  {
    id: 6,
    name: '經典下午茶組合',
    price: 'NT$ 1,580',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80',
    description: '內含：精選馬卡龍4入、迷你泡芙4入、手工餅乾組合、精選茶包，完美的下午茶饗宴。',
    categoryId: 'teatime'
  }
];