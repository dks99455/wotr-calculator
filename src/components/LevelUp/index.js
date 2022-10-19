import { useState } from 'react';

const LevelUp = ({ characterLevel, jobClass, jobLevel }) =>{
  const [charLevel, setCharLevel] = useState(characterLevel);
  const [CharClass, setCharClass] = useState(jobClass);
  const [jLevel, setJLevel] = useState(jobLevel);

  // const levelPath = (jobClass, jobLevel) => {
  //   const level1 = '';
  //   const level2 = '';
  //   const level3 = '';
  //   const level4 = '';
  //   const level5 = '';
  //   const level6 = '';
  //   const level7 = '';
  //   const level8 = '';
  //   const level9 = '';
  //   const level10 = '';
  //   const level11 = '';
  //   const level12 = '';
  //   const level13 = '';
  //   const level14 = '';
  //   const level15 = '';
  //   const level16 = '';
  //   const level17 = '';
  //   const level18 = '';
  //   const level19 = '';
  //   const level20 = '';
  // }

  return (
    <div>Choose Class</div>
  )
}

export default LevelUp