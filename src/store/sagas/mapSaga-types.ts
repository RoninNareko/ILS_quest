export type Points = {
    latitude: number;
    longitude: number;
  };

  export type RouteData = {
    distance: number;
    hint: string;
    location: [number, number]; // Массив с двумя числовыми элементами (latitude и longitude)
    name: string;
  };