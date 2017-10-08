import React from 'react';
import ReactDOM from 'react-dom';
import Appbar from 'muicss/lib/react/appbar';

class Appnavbar extends React.Component {
  render() {
    let s1 = {verticalAlign: 'middle'};
    let s2 = {textAlign: 'left'};
    let s3 = {textAlign: 'right'};

    return (
      <Appbar color='primary'>
       <table width="100%">
         <tbody>
           <tr style={s1}>
             <td className="mui--appbar-height" style={s2}>Card Drop</td>
             <td className="mui--appbar-height" style={s3}></td>
           </tr>
         </tbody>
       </table>
      </Appbar>
    );
  }
}

export default Appnavbar;
