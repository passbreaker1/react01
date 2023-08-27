import React from 'react'

// function Child(props) {
//   //const {age, name, children} = props;
//   console.log(age, name, children)
//   return 
//     <div>Child</div>
  
// }

function Child({age, name, children}) {
  console.log(age, name, children);
  return <div>Child</div>


}
Child.defaultProps = {
  age: '기본 나이 30',
};

export default Child