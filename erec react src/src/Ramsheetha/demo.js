// import React from 'react';
// import ReactDOM from 'react-dom/client';

// function MissedGoal() {
// 	return <h1>MISSED!</h1>;
// }

// function MadeGoal() {
// 	return <h1>GOAL!</h1>;
// }

// function Goal(props) {
//   const isGoal = props.isGoal;
//   if (isGoal) {
//     return <MadeGoal/>;
//   }
//   return <MissedGoal/>;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Goal isGoal={true} />);

              
// export default Goal;


// function Car(props) {
//     return <li>I am a { props.brand }</li>;
//   }
  
//   function Garage() {
//     const cars = [
//       {id: 1, brand: 'Ford'},
//       {id: 2, brand: 'BMW'},
//       {id: 3, brand: 'Audi'}
//     ];
//     return (
//       <>
//           <h1>Who lives in my garage?</h1>
//           <ul>
//           {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
//         </ul>
//       </>
//     );
//   }
  
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(<Garage />);
  
                
// export default Garage;  