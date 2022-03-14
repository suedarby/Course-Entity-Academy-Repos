import React from "react";
import ReactDOM from "react-dom";


const stateInfo  = (
  state1, capitol1, miles1,
  state2, capitol2, miles2,  
  state3, capitol3, miles3
) => {
  return (
      <div>
    <table className="table">
<thead>
    <tr>
        <th scope="col">State</th>
        <th scope="col">Capitol</th>
        <th scope="col">Total Sq Miles</th>
    </tr>
</thead>
<tbody>
    <tr>     
        <td>{state1}</td>
        <td>{capitol1}</td>
        <td>{miles1}</td>
    </tr>
    <tr>
        <td>{state2} </td>
        <td>{capitol2}</td>
        <td>{miles2}</td>
    </tr>
    <tr>
        <td>{state3}</td>
        <td>{capitol3}</td>
        <td>{miles3}</td>
    </tr>
</tbody>
</table>
    </div>
  );
};
  ReactDOM.render(
    stateInfo(
      'Alaska', 'Juneau', '663,300 mi²',
      'Texas', 'Austin', '268,597 mi²',
      'California', 'Sacramento (or is it Disney Land!)','163,696 mi²'
    ),
    document.getElementById('root')
  );
