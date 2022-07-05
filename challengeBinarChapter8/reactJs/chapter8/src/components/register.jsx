import React from 'react'

function Daftar(){
  return(
    <div className="form">
     <form>
      <h1>SILAHKAN DAFTAR TUAN</h1>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="username" required />
       </div>
       <div className="input-container">
         <label>Email </label>
         <input type="text" name="email" required />
       </div>
       <div className="input-container">
         <label>Experience </label>
         <input type="number" name="experience" required />
       </div>
       <div className="input-container">
         <label>Lvl </label>
         <input type="number" name="lvl" required />
       </div>
       <button className="btn btn-primary">
         <input type="submit" />
       </button>
     </form>
   </div>
  )
}

export default Daftar;


