export type Operator = {
  id: string;
  title: string;
  image: string;
}

export const operators: Operator[] = [
  {
    id: 'mts',
    title: 'МТС',
    image: '/assets/mts.jpeg',
  },
  {
    id: 'beeline',
    title: 'Билайн',
    image: '/assets/beeline.jpeg',
  },
  {
    id: 'megafone',
    title: 'Мегафон',
    image: '/assets/megafone.jpeg',
  },
];
