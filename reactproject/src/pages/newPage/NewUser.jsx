import "./newUser.css"

export default function NewUser() {
    return (
        <div className="newUser">
           <h1 className="newUserTitle">
               New User
           </h1>
           <form  className="newUserForm">
               <div className="newUserItem">
                   <label >UserName</label>
                   <input type="text" placeholder="someone"/>
               </div>
               <div className="newUserItem">
                   <label >FullName</label>
                   <input type="text" placeholder="someoneNm"/>
               </div>
               <div className="newUserItem">
                   <label >Email</label>
                   <input type="text" placeholder="someone@gmail.com"/>
               </div>
               <div className="newUserItem">
                   <label >Password</label>
                   <input type="text" placeholder="password"/>
               </div>
               <div className="newUserItem">
                   <label >Phone</label>
                   <input type="text" placeholder="+26 154 598 22"/>
               </div>
               <div className="newUserItem">
                   <label >Adresse</label>
                   <input type="text" placeholder="somewhere"/>
               </div>
               <div className="newUserItem">
                   <label >Gender</label>
                   <input type="radio" name="male" id="male" value="male"/>
               </div>
           </form>
        </div>
    )
}
