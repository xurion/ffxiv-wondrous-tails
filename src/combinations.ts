// prettier-ignore
export type Combination = [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean];

// prettier-ignore
const getAllCombinations = (): Combination[] => [
  [ //A
    true,true,true,true,false,true,false,true,false,false,true,true,false,false,false,true
  ],
  [ //S
    false,false,false,true,false,false,true,true,false,true,false,true,true,true,true,true
  ],
  [ //G
    true,false,false,false,true,true,false,false,true,false,true,false,true,true,true,true
  ],
  [ //M
    true,true,true,true,true,false,true,false,true,true,false,false,true,false,false,false
  ],
  [ //B
    true,true,true,true,false,true,false,false,false,true,true,false,false,true,false,true
  ],
  [ //O
    false,false,false,true,true,true,true,true,false,true,false,true,true,false,false,true
  ],
  [ //N
    true,false,true,false,false,true,true,false,false,false,true,false,true,true,true,true
  ],
  [ //I
    true,false,false,true,true,false,true,false,true,true,true,true,true,false,false,false
  ],
  [ //T
    true,false,false,false,true,true,true,true,true,false,true,false,true,false,false,true
  ],
  [ //U
    true,true,true,true,false,false,true,false,false,true,true,false,true,false,true,false
  ],
  [ //H
    true,false,false,true,false,true,false,true,true,true,true,true,false,false,false,true
  ],
  [ //C
    false,true,false,true,false,true,true,false,false,true,false,false,true,true,true,true
  ],
  [ //D
    true,true,true,true,false,true,true,false,false,false,true,false,false,false,true,true
  ],
  [ //K
    false,false,false,true,false,false,true,true,true,true,true,true,true,false,false,true
  ],
  [ //W
    true,true,false,false,false,true,false,false,false,true,true,false,true,true,true,true
  ],
  [ //P
    true,false,false,true,true,true,true,true,true,true,false,false,true,false,false,false
  ],
  [ //E
    true,false,false,false,true,true,false,false,true,true,true,true,true,false,false,true
  ],
  [ //V
    true,true,true,true,false,true,true,false,false,true,false,false,true,true,false,false
  ],
  [ //Q
    true,false,false,true,true,true,true,true,false,false,true,true,false,false,false,true
  ],
  [ //J
    false,false,true,true,false,false,true,false,false,true,true,false,true,true,true,true
  ],
  [ //F
    true,false,true,false,true,true,true,true,false,false,true,false,false,false,true,true
  ],
  [ //x
    false,false,true,true,false,false,true,false,true,true,true,true,true,false,true,false
  ],
  [ //L
    true,true,false,false,false,true,false,false,true,true,true,true,false,true,false,true
  ],
  [ //R
    false,true,false,true,true,true,true,true,false,true,false,false,true,true,false,false
  ]
];

export default getAllCombinations;
