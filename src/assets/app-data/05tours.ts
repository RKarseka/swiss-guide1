export type TourData = {
  id: string;
  addons?: string;
  attractions?: string[];
  cost: string;
  description: string;
  duration: string;
  fullWidth?: boolean;
  mainText: string;
  prices?: { cost: string; title: string; notification?: string }[];
  shortDescription?: string;
  title: string;
  titlePreview: string;
};

export const toursData: TourData[] = [
  {
    id: 'geneva',
    duration: '2,5-3 hours',
    cost: 'from 220 CHF',
    prices: [
      { title: '1-4 persons', cost: '190 CHF' },
      {
        title: 'for each additional person',
        cost: '40 CHF',
      },
    ],
    attractions: [
      '**Fountain Jet D’eau** - the symbol of Geneva',
      '**Flower Clock** in the English Garden - a colorful demonstration of Geneva as the cradle of watchmaking',
      '**Saint-Pierre Cathedral** - the main religious attraction of the city',
      'Promenade de la Treille with that same bench:), but most importantly - with stunning views on the local mountain **Salève** and the Park Bastion',
      '**The Reformation Wall** - of the same author with the famous statue Christ the Redeemer in Rio',
      "The streets, that used to be **'red lights district'** in Geneva's history",
      'Cheese tasting in one of the local **artisanal shops**',
      'The best **chocolate shops** in the city',
      'And many more!',
    ],
    addons:
      '10 CHF – cheese tasting\n' +
      '7 CHF – the entrance to the top of the tower of Saint-Pierre Cathedral (optional)',
    title: 'Geneva. Food and Culture Tour',
    titlePreview: 'Geneva\nFood and Culture Tour',
    description:
      'Old Town walking tour with stops for Swiss cheese and Swiss chocolate tasting!',
    mainText:
      'Geneva is a cosmopolitan city, a World Financial Center, the birthplace of Swiss watch industry, one of the most expensive cities in the world...\n\n' +
      'And at the same time, Geneva is a very beautiful and cozy place, that provides you not only the cultural enjoyment, but a delightful local food experience! I invite you for a nice walk around Geneva to see the main attractions of the Old Town mixed with the best foodie places.\n\n' +
      'By request, we may continue our beautiful day by making a nice walk around the lake towards the French village of Yvoire, which is officially in the list of the most beautiful French villages (1.5 hours one way). ',
  },
  {
    id: 'watches',
    duration: '2-2,5 hours',
    cost: 'from 190 CHF',
    prices: [
      { title: '1-4 persons', cost: '190 CHF' },
      {
        title: 'for each additional person',
        cost: '40 CHF',
      },
    ],
    attractions: [
      '**Fountain Jet D’eau** - the symbol of Geneva',
      '**Flower Clock** in the English Garden - a colorful demonstration of Geneva as the cradle of watchmaking',
      '**Saint-Pierre Cathedral** - the main religious attraction of the city',
      'Promenade de la Treille with that same bench:), but most importantly - with stunning views on the local mountain **Salève** and the Park Bastion',
      '**The Reformation Wall** - of the same author with the famous statue Christ the Redeemer in Rio',
      "The streets, that used to be **'red lights district'** in Geneva's history",
      'Cheese tasting in one of the local **artisanal shops**',
      'The best **chocolate shops** in the city',
      'And many more!',
    ],
    title: 'It’s all about Swiss Watches!',
    titlePreview: 'It’s all about Swiss Watches!',
    description: 'Geneva and its watch history\n(and present!)',
    mainText:
      'Geneva, known as the watchmaking capital of the world, has a rich horological history that can be explored through several key locations. On this tour you will learn why specifically Geneva became the cradle of the world watchmaking, the most famous watch brands history, what is the influence of Swiss watches on the world market, and much more. \n\n' +
      'On our way we will also enjoy Geneva’s famous touristic attractions as well as the city’s hidden curiosities.\n\n' +
      'By request, we may visit the unique studio where models of modern Swiss watchmakers are presented.\n\n',
  },
  {
    fullWidth: true,
    id: 'lausanne',
    duration: '3-3,5 hours',
    cost: 'from 240 CHF',
    prices: [
      { title: '1-4 persons', cost: '240 CHF' },
      {
        title: 'for each additional person',
        cost: '40 CHF',
      },
    ],
    attractions: [
      '**Walk through the Old Town** with its ancient buildings and you will get to know interesting facts about celebrities living here, Coco Chanel and David Bowie being among them!',
      'Visit **Lausanne Cathedral** which is one of the best examples of Gothic art not only in Switzerland but in the whole Europe. The views from the tower of the Cathedral on the city, Lake Geneva and the Alps are just stunning!',
      'Enjoy a **mini-show on Palud Square** which tells the history of Lausanne and the canton Vaud.',
      'Visit the **oldest chocolate shop** in Lausanne to taste local delicacy.',
      'Local **cheese tasting** might be organized **by request** (which takes around 20 minutes).',
      'After the Old Town walk we will head to **Lausanne Ouchy** to let you get enchanted with the beauty of Lausanne lakeside promenade.',
    ],
    addons:
      '5 CHF – the entrance to the top of the tower of the Cathedral (optional)',
    title: 'Lausanne, the historical, creative and contrasting city',
    titlePreview: 'Lausanne, the historical, creative and contrasting city',
    description:
      'The medieval Old Town, Belle Epoque atmosphere, the romantic modern embankment – all these in one day!',
    mainText:
      'Lausanne is a city of Swiss Riviera region on the shores of Lake Geneve with a special resort flair. You will walk through its streets and admire the medieval architecture of the Old Town.\n\n' +
      '**This tour may be combined with Lavaux Terraced Vineyards visiting, which are located between Lausanne and Montreux.**',
  },
  {
    id: 'lavaux',
    duration: '3,5-4 hours',
    cost: 'the price depends on meeting point',
    prices: [
      {
        title: '1-4 persons',
        cost: '280 CHF',
        notification: 'if we meet in Lausanne',
      },
      {
        title: '1-4 persons',
        cost: '360 CHF',
        notification: 'if we meet in Lausanne',
      },
      {
        title: 'for each additional person',
        cost: '40 CHF',
      },
    ],
    title: 'Lavaux Vineyard Terraces',
    titlePreview: 'Lavaux Vineyard Terraces',
    description:
      'The most instagrammable location on the shores of Lac Leman. Incredibly picturesque walk and local wine tasting',
    mainText:
      "I invite you for a picturesque walk through LAVAUX, the Switzerland's largest contiguous vineyard area with almost one-thousand-year history. Listed as a UNESCO World Heritage site, LAVAUX wine region is famous for its unique landscape, long traditions and stunning views!\n\n" +
      'Stretched on 32 km. between Lausanne and Montreux, this region is the most instagrammable location on the Lake Geneve shore.\n\n' +
      '**Meeting point:**\n' +
      '•\tyour hotel in Geneva, \n' +
      '•\tyour hotel in Lausanne or\n' +
      '•\tby agreement. Then we will go by train together to the tour starting point\n\n' +
      'It takes **5-15 minutes** to get to the starting point by train from Lausanne-Gare (main train station) and around **1 hour** by train from Geneve train station.',
    shortDescription:
      'Apart from enjoying the atmosphere and the scenery, you will learn the history of the region, the varieties of grapes that are grown here, the local wine’s characteristics and why only around 1% of Swiss wine is exported.\n\n' +
      'And for a complete immersion in the LAVAUX charm you will visit a local winery for the unique Swiss wine tasting! ',
    addons:
      'The wine tasting price is not included and should be paid additionally on the place (there are different options, on average from 25 to 50 chf per person).\n\n' +
      '**Please note, the tour is roughly 4 km in length and it is mainly hilly. Comfortable foot wear and a bottle of water are strongly advised.**',
  },
  {
    id: 'montreux',
    duration: '5,5-6 hours',
    cost: 'from 580 CHF',
    title: 'Montreux walking tour and train ride to Roches-de-Naye',
    titlePreview: 'Montreux walking tour and train ride to Roches-de-Naye',
    description:
      'After visiting the best in Montreux we’ll continue our day by heading up on 2000 metres to admire stunning views over the Lake and the Alps',
    mainText:
      'We will start our tour by taking the cog train from Montreux to the summit of Rochers-de-Naye mountain, which offers stunning panoramic views over the Lake Geneva and the Alps.\n\n' +
      "We'll continue by having delicious Swiss fondue (or another dish according to your preferencies) at an emblematic mountain restaurant that provides the idyllic scenery.\n\n" +
      "Once back in Montreux, we'll continue by the charming lakeside promenade.  Montreux is the unofficial capital of Swiss Riviera, an excursion here is a walk in the footsteps of celebrities who lived or visited this place: Freddie Mercury, Vladimir Nabokov, Igor Stravinsky, Henry Nestle are among them. While you'll be enjoying the city's sights, I will be telling interesting stories and anecdots about Swiss Riviera past and present.\n\n" +
      'Upon request, we may visit Queen studio and one charming and famous local confectionery to try the finest Swiss chocolate!',
    shortDescription:
      '***The tour is recommended in good weather condition.**\n' +
      '****The train tickets should be bought in advance**',
  },
];
