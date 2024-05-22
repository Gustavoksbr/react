import React from 'react';

function LoopnoReact() {
 // const data = [{ id: 1, fruit: 'Apple' }, { id: 2, fruit: 'Banana' }, { id: 3, fruit: 'Cherry' }];

//   return (
//     <ul>
//       {data.map((item) => (
//         <li key={item.id}>{item.fruit}</li>
//       ))}
//     </ul>
//   );
// }
const seasons = ["Spring", "Summer", "Autumn", "Winter"];
return (
  <div>
    <h2>Seasons of the year</h2>
    <ul>
      {seasons.map((season) => (
        <li key={season.id}>{season}</li>
      ))}
    </ul>
  </div>
);
}

export default LoopnoReact;




