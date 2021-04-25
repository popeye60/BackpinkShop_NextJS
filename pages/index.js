import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'ROSÉ TEE',
    image:
      'https://cdn.shopify.com/s/files/1/0022/5011/3123/products/FINAL-ROSE-TEE-NEW-BACK_1024x1024.png?v=1615493399',
    price: '$30.00',
    size: 'S M L XL 2XL',
    detail: 'SHIPS IN 6-8 WEEKS WHITE TEE FEATURING ROSÉ GRAPHICS.',
  },
  {
    id: 'm2',
    title: 'ROSÉ CREWNECK I',
    image:
      'https://cdn.shopify.com/s/files/1/0022/5011/3123/products/ROSE-CREW-FRONT_1024x1024.png?v=1615493327',
    price: '$55.00',
    size: 'S M L XL 2XL',
    detail: 'SHIPS IN 6-8 WEEKS WHITE CREWNECK FEATURING ROSÉ GRAPHICS AND EMBROIDERED ROSÉ GRAPHIC ON THE BACK.',
  },
  {
    id: 'm3',
    title: 'ROSÉ CREWNECK III',
    image:
      'https://cdn.shopify.com/s/files/1/0022/5011/3123/products/FINAL-PHOTO-CREW-FRONT_1024x1024.png?v=1615493423',
    price: '$55.00',
    size: 'S M L XL 2XL',
    detail: 'SHIPS IN 6-8 WEEKS WHITE CREWNECK FEATURING EMBROIDERED ROSÉ GRAPHIC ON THE FRONT AND SCREENPRINTED ROSÉ GRAPHIC ON THE BACK.',
  },
  {
    id: 'm4',
    title: 'R CD DIGIPAK',
    image:
      'https://cdn.shopify.com/s/files/1/0022/5011/3123/products/ROSE_digipak_1024x1024.png?v=1616703308',
    price: '$12.00',
    size: '-',
    detail: 'SHIPS ON OR AROUND MAY 14, 2021.',
  },
  {
    id: 'm5',
    title: 'ROSÉ BUCKET HAT',
    image:
      'https://cdn.shopify.com/s/files/1/0022/5011/3123/products/FINAL-WHITE-BUCKET_1024x1024.png?v=1615493318',
    price: '$35.00',
    size: 'M L',
    detail: 'WHITE BUCKET HAT FEATURING EMBROIDERED ROSÉ GRAPHIC.',
  },
  {
    id: 'm6',
    title: 'ROSÉ POSTER',
    image:
      'https://cdn.shopify.com/s/files/1/0022/5011/3123/products/FINAL-POSTER_1024x1024.png?v=1615493391',
    price: '$15.00',
    size: '-',
    detail: '18" X 24" POSTER FEATURING ROSÉ GRAPHIC.',
  },
  {
    id: 'm7',
    title: 'THE ALBUM (VERSION 1)',
    image:
      'https://cdn.shopify.com/s/files/1/0022/5011/3123/products/BP_Box_V1_90fc247f-9726-4ee6-a117-7823ed2373b6_1024x1024.png?v=1602082456',
    price: '$30.00',
    size: '-',
    detail: '"THE ALBUM" INCLUDES: A PACKAGE BOX (4 DIFFERENT VERSIONS), HARDCOVER PHOTOBOOK (96 PAGES), CD, POSTCARD SET (4 UNIQUE CARDS), CREDITS SHEET, PHOTOCARDS (2 OF 20, RANDOM), POSTCARDS (2 OF 20, RANDOM), STICKER (1 OF 4, RANDOM), MOUNTED PHOTOCARD.',
  },
  {
    id: 'm8',
    title: 'LOVESICK GIRLS T-SHIRT I',
    image:
      'https://cdn.shopify.com/s/files/1/0022/5011/3123/products/LG_WHT_1_1024x1024.png?v=1601589518',
    price: '$35.00',
    size: 'S M L XL 2XL',
    detail: 'WHITE UNISEX CREWNECK TEE FEATURING LOVESICK GIRLS GRAPHICS.',
  },
  {
    id: 'm9',
    title: 'LOVESICK GIRLS T-SHIRT II',
    image:
      'https://cdn.shopify.com/s/files/1/0022/5011/3123/products/LG_BlackTee_1_1024x1024.png?v=1601589526',
    price: '$35.00',
    size: 'S M L XL 2XL',
    detail: 'BLACK UNISEX CREWNECK TEE FEATURING LOVESICK GIRLS GRAPHICS.',
  },
  {
    id: 'm10',
    title: 'LOVESICK GIRLS L/S I',
    image:
      'https://cdn.shopify.com/s/files/1/0022/5011/3123/products/BLK-LS_FRNT_1024x1024.png?v=1601589533',
    price: '$45.00',
    size: 'S M L XL 2XL',
    detail: 'BLACK UNISEX LONGSLEEVE TEE FEATURING LOVESICK GIRLS GRAPHICS.',
  },
  {
    id: 'm11',
    title: 'ICE CREAM SUNGLASSES',
    image:
      'https://cdn.shopify.com/s/files/1/0022/5011/3123/products/BPSG_Glasses_1024x1024.png?v=1598580813',
    price: '$40.00',
    size: '-',
    detail: 'PINK TINTED ICE CREAM SUNGLASSES, INCLUDES A DRAWSTRING POUCH.',
  },
  {
    id: 'm12',
    title: 'ICE CREAM LITHO',
    image:
      'https://cdn.shopify.com/s/files/1/0022/5011/3123/products/BPSG_Litho_1024x1024.png?v=1598580665',
    price: '$15.00',
    size: '-',
    detail: '18" X 24" LITHOGRAPH FEATURING ICE CREAM GRAPHICS.',
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
