const clothData = [
  // 상의
  {
    id: 1,
    ImageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20231221/3764096/3764096_17310331238257_500.jpg?w=780',
    price: 67600,
    type: 'top',
    answer: 2
  },
  {
    id: 2,
    ImageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20241104/4585930/4585930_17307074315429_500.jpg?w=780',
    price: 57400,
    type: 'top',
    answer: 2
  },
  {
    id: 3,
    ImageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20240201/3838941/3838941_17374378014088_500.jpg?w=780',
    price: 111300,
    type: 'top',
    answer: 3
  },
  {
    id: 4,
    ImageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20231215/3758212/3758212_17121985356964_500.jpg?w=780',
    price: 33090,
    type: 'top',
    answer: 1
  },
  {
    id: 5,
    ImageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250304/4853051/4853051_17415871545766_500.jpg?w=780',
    price: 25900,
    type: 'top',
    answer: 1
  },
  {
    id: 6,
    ImageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20230908/3545571/3545571_17116747700864_500.jpg?w=780',
    price: 19900,
    type: 'top',
    answer: 1
  },
  {
    id: 7,
    ImageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20240117/3800080/3800080_17427803468880_500.jpg?w=780',
    price: 39920,
    type: 'top',
    answer: 1
  },
  {
    id: 8,
    ImageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20190802/1108007/1108007_2_500.jpg?w=780',
    price: 71100,
    type: 'top',
    answer: 2
  },
  {
    id: 9,
    ImageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20230401/3199754/3199754_16868791072967_500.jpg?w=780',
    price: 231990,
    type: 'top',
    answer: 3
  },
  {
    id: 10,
    ImageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250114/4719238/4719238_17375990751529_500.jpg?w=780',
    price: 379990,
    type: 'top',
    answer: 4
  },
  {
    id: 11,
    ImageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250401/4971090/4971090_17445994866568_500.jpg?w=780',
    price: 1140000,
    type: 'top',
    answer: 4
  },
  {
    id: 12,
    ImageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20231011/3617852/3617852_16982839028354_500.jpg?w=780',
    price: 855000,
    type: 'top',
    answer: 4
  },
  {
    id: 13,
    ImageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20221019/2875364/2875364_1_500.jpg?w=780',
    price: 715000,
    type: 'top',
    answer: 4
  },
  {
    id: 14,
    ImageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20230314/3146073/3146073_16805688031279_500.jpg?w=780',
    price: 681000,
    type: 'top',
    answer: 4
  },
  {
    id: 15,
    ImageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20221019/2875364/2875364_1_500.jpg?w=780',
    price: 77900,
    type: 'top',
    answer: 2
  },

  // 하의
  {
    id: 16,
    ImageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20240816/4336115/4336115_17242240567856_500.jpg?w=780',
    price: 89990,
    type: 'bottom',
    answer: 2
  },
  {
    id: 17,
    ImageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20240819/4343527/4343527_17248935778075_500.jpg?w=780',
    price: 29990,
    type: 'bottom',
    answer: 1
  },
  {
    id: 18,
    ImageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20230518/3306719/3306719_17175553540537_500.jpg?w=780',
    price: 25900,
    type: 'bottom',
    answer: 1
  },
  {
    id: 19,
    ImageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20240620/4210134/4210134_17294816394935_500.jpg?w=780',
    price: 71100,
    type: 'bottom',
    answer: 2
  },
  {
    id: 20,
    ImageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20211220/2273533/2273533_1_500.jpg?w=780',
    price: 71100,
    type: 'bottom',
    answer: 2
  },
  {
    id: 21,
    ImageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250210/4771681/4771681_17399333442694_500.jpg?w=780',
    price: 619990,
    type: 'bottom',
    answer: 4
  },
  {
    id: 22,
    ImageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20230516/3298714/3298714_16883581955023_500.jpg?w=780',
    price: 194990,
    type: 'bottom',
    answer: 3
  },
  {
    id: 23,
    ImageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20230227/3110080/3110080_16789415413778_500.jpg?w=780',
    price: 1590000,
    type: 'bottom',
    answer: 4
  },
  {
    id: 24,
    ImageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20230411/3222575/3222575_16831657495946_500.jpg?w=780',
    price: 583000,
    type: 'bottom',
    answer: 4
  },
  {
    id: 25,
    ImageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250227/4839624/4839624_17421752064768_big.jpg?w=780',
    price: 108000,
    type: 'bottom',
    answer: 3
  },
  {
    id: 26,
    ImageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20240712/4246545/4246545_17207467413095_big.jpg?w=780',
    price: 64000,
    type: 'bottom',
    answer: 2
  },
  {
    id: 27,
    ImageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20210428/1926048/1926048_1_big.jpg?w=780',
    price: 32000,
    type: 'bottom',
    answer: 1
  },
  {
    id: 28,
    ImageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20220422/2510585/2510585_1_big.jpg?w=390',
    price: 13870,
    type: 'bottom',
    answer: 1
  },
  {
    id: 29,
    ImageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20230214/3082754/3082754_16774790916481_big.jpg?w=780',
    price: 148500,
    type: 'bottom',
    answer: 3
  },
  {
    id: 30,
    ImageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20240820/4347585/4347585_17242450827938_big.jpg?w=780',
    price: 135000,
    type: 'bottom',
    answer: 3
  }
];

export default clothData;
