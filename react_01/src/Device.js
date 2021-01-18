import React from 'react';

// function Device(data){
// 	console.log(JSON.stringify(mydevice));

// 	return(
// 		<div>my {mydevice}</div>
// 	);
// }

// export default Device;
 
function Device({ mydevice }) {
    console.log(JSON.stringify(mydevice));
    return <div>My { mydevice }</div>;
}
 
export default Device;