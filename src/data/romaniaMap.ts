type RomaniaGraph = Record<string, { child: string; weight: number }[]>;

export const romaniaGraph: RomaniaGraph = {
  Arad: [
    { child: "Zerind", weight: 75 },
    { child: "Sibiu", weight: 140 },
    { child: "Timisoara", weight: 118 }
  ],
  Zerind: [
    { child: "Arad", weight: 75 },
    { child: "Oradea", weight: 71 }
  ],
  Oradea: [
    { child: "Zerind", weight: 71 },
    { child: "Sibiu", weight: 151 }
  ],
  Sibiu: [
    { child: "Arad", weight: 140 },
    { child: "Oradea", weight: 151 },
    { child: "Fagaras", weight: 99 },
    { child: "Rimnicu Vilcea", weight: 80 }
  ],
  Timisoara: [
    { child: "Arad", weight: 118 },
    { child: "Lugoj", weight: 111 }
  ],
  Lugoj: [
    { child: "Timisoara", weight: 111 },
    { child: "Mehadia", weight: 70 }
  ],
  Mehadia: [
    { child: "Lugoj", weight: 70 },
    { child: "Drobeta", weight: 75 }
  ],
  Drobeta: [
    { child: "Mehadia", weight: 75 },
    { child: "Craiova", weight: 120 }
  ],
  Craiova: [
    { child: "Drobeta", weight: 120 },
    { child: "Pitesti", weight: 138 },
    { child: "Rimnicu Vilcea", weight: 146 }
  ],
  "Rimnicu Vilcea": [
    { child: "Sibiu", weight: 80 },
    { child: "Craiova", weight: 146 },
    { child: "Pitesti", weight: 97 }
  ],
  Fagaras: [
    { child: "Sibiu", weight: 99 },
    { child: "Bucharest", weight: 211 }
  ],
  Pitesti: [
    { child: "Rimnicu Vilcea", weight: 97 },
    { child: "Craiova", weight: 138 },
    { child: "Bucharest", weight: 101 }
  ],
  Bucharest: [
    { child: "Fagaras", weight: 211 },
    { child: "Pitesti", weight: 101 },
    { child: "Giurgiu", weight: 90 },
    { child: "Urziceni", weight: 85 }
  ],
  Giurgiu: [
    { child: "Bucharest", weight: 90 }
  ],
  Urziceni: [
    { child: "Bucharest", weight: 85 },
    { child: "Hirsova", weight: 98 },
    { child: "Vaslui", weight: 142 }
  ],
  Hirsova: [
    { child: "Urziceni", weight: 98 },
    { child: "Eforie", weight: 86 }
  ],
  Eforie: [
    { child: "Hirsova", weight: 86 }
  ],
  Vaslui: [
    { child: "Urziceni", weight: 142 },
    { child: "Iasi", weight: 92 }
  ],
  Iasi: [
    { child: "Vaslui", weight: 92 },
    { child: "Neamt", weight: 87 }
  ],
  Neamt: [
    { child: "Iasi", weight: 87 }
  ]
};

