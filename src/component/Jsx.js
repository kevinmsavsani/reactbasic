import React from 'react';

export class Jsx extends React.Component {
    render() {
        let i = 1;
        let myStyle = {
            fontSize: 100,
            color: '#FF0000'
         }
      return (
        <div>
           <h1>Header</h1>
           <h2>Content</h2>
           <p  attribute = "value">This is the content!!!</p>
           <h1>{1+1}</h1>
           <h1>{i == 1 ? 'True!' : 'False'}</h1>
           <h1 style={myStyle}>Hello Style!</h1>

           {//End of the line Comment...
           }
            {/*Multi line comment...*/}
        </div>
     );
    }
  }