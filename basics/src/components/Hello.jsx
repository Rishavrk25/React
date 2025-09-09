function Hello(){
  let myName='Rishav';
  let fullName = () => {
    return 'Rishav Kumar';
  }
  return (
  <h3> 
    Hello my name is {myName}
    <br></br>
    Full name is {fullName()}
  </h3>
  );
}
export default Hello;