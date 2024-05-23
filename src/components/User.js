const User=({name,email})=>{
    return(
        <div className="user-card">
            <h1>{name}</h1>
            <h4>{email}</h4>

        </div>
    )
}
export default User;