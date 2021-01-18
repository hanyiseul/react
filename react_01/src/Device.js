import React from 'react';

// function Device(data){
// 	console.log(JSON.stringify(mydevice));

// 	return(
// 		<div>my {mydevice}</div>
// 	);
// }

function Device(data){
	console.log(JSON.stringify(data));

	return(
		<div>my {data.mydevice},{data.myfavoritecharacter }</div>
	);
}

 
// function Device({ mydevice, myfavoritecharacter  }) {
//     console.log(JSON.stringify(myfavoritecharacter ));
//     return <div>My { mydevice },{myfavoritecharacter }</div>;
// }
 
export default Device;