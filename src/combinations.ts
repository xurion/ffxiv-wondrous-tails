// prettier-ignore
export type Combination = [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean];

// prettier-ignore
const getAllCombinations = (): Combination[] => [
  [ //A
    true,true,true,true,false,true,false,true,false,false,true,true,false,false,false,true
  ],
  [ //B
    true,true,true,true,false,true,false,false,false,true,true,false,false,true,false,true
  ],
  [ //C
    false,true,false,true,false,true,true,false,false,true,false,false,true,true,true,true
  ],
  [ //D
    true,true,true,true,false,true,true,false,false,false,true,false,false,false,true,true
  ],
  [ //E
    true,false,false,false,true,true,false,false,true,true,true,true,true,false,false,true
  ],
  [ //F
    true,false,true,false,true,true,true,true,false,false,true,false,false,false,true,true
  ],
  [ //G
    true,false,false,false,true,true,false,false,true,false,true,false,true,true,true,true
  ],
  [ //H
    true,false,false,true,false,true,false,true,true,true,true,true,false,false,false,true
  ],
  [ //I
    true,false,false,true,true,false,true,false,true,true,true,true,true,false,false,false
  ],
  [ //J
    false,false,true,true,false,false,true,false,false,true,true,false,true,true,true,true
  ],
  [ //K
    false,false,false,true,false,false,true,true,true,true,true,true,true,false,false,true
  ],
  [ //L
    true,true,false,false,false,true,false,false,true,true,true,true,false,true,false,true
  ],
  [ //M
    true,true,true,true,true,false,true,false,true,true,false,false,true,false,false,false
  ],
  [ //N
    true,false,true,false,false,true,true,false,false,false,true,false,true,true,true,true
  ],
  [ //O
    false,false,false,true,true,true,true,true,false,true,false,true,true,false,false,true
  ],
  [ //P
    true,false,false,true,true,true,true,true,true,true,false,false,true,false,false,false
  ],
  [ //Q
    true,false,false,true,true,true,true,true,false,false,true,true,false,false,false,true
  ],
  [ //R
    false,true,false,true,true,true,true,true,false,true,false,false,true,true,false,false
  ],
  [ //S
    false,false,false,true,false,false,true,true,false,true,false,true,true,true,true,true
  ],
  [ //T
    true,false,false,false,true,true,true,true,true,false,true,false,true,false,false,true
  ],
  [ //U
    true,true,true,true,false,false,true,false,false,true,true,false,true,false,true,false
  ],
  [ //v
    true,true,true,true,false,true,true,false,false,true,false,false,true,true,false,false
  ],
  [ //W
    true,true,false,false,false,true,false,false,false,true,true,false,true,true,true,true
  ],
  [ //x
    false,false,true,true,false,false,true,false,true,true,true,true,true,false,true,false
  ]
];

export default getAllCombinations;
