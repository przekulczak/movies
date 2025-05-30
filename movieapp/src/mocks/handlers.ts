import { http, HttpResponse } from "msw";

const movieData = {
  adult: false,
  backdrop_path: "/vmGWKadwri2y67t4truG1nPVd6v.jpg",
  belongs_to_collection: {
    id: 183256,
    name: "Killer Collection",
    poster_path: "/dXt1HDLGLcTqohAMMiyJhu63eSV.jpg",
    backdrop_path: "/84D7WwbxOnx5RkVxp6H19DEPMUq.jpg",
  },
  budget: 0,
  genres: [
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 28,
      name: "Action",
    },
  ],
  homepage: "",
  id: 31132,
  imdb_id: "tt0127626",
  origin_country: ["PL"],
  original_language: "pl",
  original_title: "Kiler",
  overview:
    'An innocent cab driver is mistaken for a contract killer and imprisoned. Soon, he is sprung by a mob boss who needs a "killer" for a few more jobs.',
  popularity: 0.6759,
  poster_path: "/ho08qS2vBVFywB4I180PhaTtxg4.jpg",
  production_companies: [
    {
      id: 250,
      logo_path: "/evWKasiElVQywuKv2dI72P9twz8.png",
      name: "Canal+",
      origin_country: "PL",
    },
    {
      id: 68040,
      logo_path: null,
      name: "ITI Cinema",
      origin_country: "PL",
    },
    {
      id: 20792,
      logo_path: null,
      name: "Studio Filmowe Zebra",
      origin_country: "PL",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "PL",
      name: "Poland",
    },
  ],
  release_date: "1997-11-17",
  revenue: 0,
  runtime: 104,
  spoken_languages: [
    {
      english_name: "Polish",
      iso_639_1: "pl",
      name: "Polski",
    },
  ],
  status: "Released",
  tagline: "A film that kills... with laughter",
  title: "Killer",
  video: false,
  vote_average: 7.6,
  vote_count: 159,
};

const searchResults = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/vmGWKadwri2y67t4truG1nPVd6v.jpg",
      genre_ids: [35, 28],
      id: 31132,
      original_language: "pl",
      original_title: "Kiler",
      overview:
        'An innocent cab driver is mistaken for a contract killer and imprisoned. Soon, he is sprung by a mob boss who needs a "killer" for a few more jobs.',
      popularity: 0.6759,
      poster_path: "/ho08qS2vBVFywB4I180PhaTtxg4.jpg",
      release_date: "1997-11-17",
      title: "Killer",
      video: false,
      vote_average: 7.6,
      vote_count: 159,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [28, 18],
      id: 775502,
      original_language: "pt",
      original_title: "O dojo dos Ninjas e o Sassino de Mestres",
      overview:
        "Pequeno Colibri starts a bloody revenge to honor the memory of his teacher, Mestra Kioji, after she meets her fate at the hands of Sassino, the killer of masters.",
      popularity: 0.1006,
      poster_path: null,
      release_date: "2020-12-12",
      title: "Ninja Dojo and the Kiler of Masters",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [80, 27],
      id: 279032,
      original_language: "pl",
      original_title: "Fantom Kiler 3",
      overview:
        "A beautiful woman drives to the country, strips and photographs herself in various compromising positions.  Naturally, Such lewed behaviour cannot go unpunished by the Fantom Kiler.  Later on Ursula arrives at a run down garage where she hopes to get her car serviced.  Unfortunately its not only her car that gets serviced as Natasha is forced to strip and be humiliated.  But there's only so much a woman can take as she turns the tables on the licentious mechanics.  But for Ursula a more terrible fate awaits her out in the woods...",
      popularity: 0.053,
      poster_path: "/13YEGlH0AUH8SUVQeXKXdhzpMLi.jpg",
      release_date: "2003-06-11",
      title: "Fantom Kiler 3",
      video: false,
      vote_average: 2,
      vote_count: 4,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [27, 80],
      id: 157164,
      original_language: "pl",
      original_title: "Fantom Kiler 2",
      overview:
        "One hooker found hanging in a meat van, another is sawed in half while a policewoman is mercilessly slashed to pieces. A detective, haunted by his lack of results, vents his frustration by abusing the same women who are being preyed upon by the mysterious killer. For the police and the hookers of this small east European town, there seems to be no end to the sadistic nightmare.",
      popularity: 0.0404,
      poster_path: "/iNF1MZzhJeOVSoFlKw7IoB4AT2K.jpg",
      release_date: "1999-01-01",
      title: "Fantom Kiler 2",
      video: false,
      vote_average: 2.5,
      vote_count: 9,
    },
    {
      adult: false,
      backdrop_path: "/nl8PmSPL58CzpjXcLqj6R7vpu50.jpg",
      genre_ids: [35, 28, 80],
      id: 38872,
      original_language: "pl",
      original_title: "Kiler-ów 2-óch",
      overview:
        "Jurek Kiler has become a VIP - sponsoring the Polish government, playing tennis with the President, meeting world leaders. He must oversee a transfer of a substantial amount of gold. However, in his past activities, he has made enemies. Mighty ones. And thus Jurek Kiler's next adventure begins as he has to face attempts at kidnapping, assassinations and problems in his love life...",
      popularity: 0.2808,
      poster_path: "/y1bF4yRRLpc9M2EVrzwwyDdsjct.jpg",
      release_date: "1999-01-08",
      title: "Killer 2",
      video: false,
      vote_average: 7.1,
      vote_count: 99,
    },
    {
      adult: false,
      backdrop_path: "/6Q51j0AZ1jLdpVLoZzYQOvn0iAb.jpg",
      genre_ids: [35, 16, 28, 12, 53],
      id: 24528,
      original_language: "en",
      original_title: "Killer Bean Forever",
      overview:
        "When things go bad in Beantown, top assassin Killer Bean is called to clean-up the mess. Detective Cromwell finds himself in the middle between Killer Bean and mob boss Cappuccino.",
      popularity: 1.5396,
      poster_path: "/2ap3acfhZaDp16JPVqL56essU6i.jpg",
      release_date: "2008-09-05",
      title: "Killer Bean Forever",
      video: false,
      vote_average: 7.208,
      vote_count: 183,
    },
    {
      adult: false,
      backdrop_path: "/hJ4xtZnejzfneeRqv2NaTzxJ1jp.jpg",
      genre_ids: [28, 35, 53, 10749],
      id: 37821,
      original_language: "en",
      original_title: "Killers",
      overview:
        "When an elite assassin marries a beautiful computer whiz after a whirlwind romance, he gives up the gun and settles down with his new bride. That is, until he learns that someone from his past has put a contract out on his life.",
      popularity: 3.2986,
      poster_path: "/9VB8vGV4Aznf6GUc9C7a1EzGHLz.jpg",
      release_date: "2010-06-04",
      title: "Killers",
      video: false,
      vote_average: 5.956,
      vote_count: 2223,
    },
  ],
  total_pages: 1,
  total_results: 7,
};

export const handlers = [
  http.get("https://api.themoviedb.org/3/movie/:id", () => {
    return HttpResponse.json(movieData);
  }),

  http.get("https://api.themoviedb.org/3/search/movie", () => {
    return HttpResponse.json(searchResults);
  }),
];
