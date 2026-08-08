const Profile = () => {
    return <>
        <h1>Profile Challenge</h1>
        <ProfileCard 
        name = 'Rameez'
        age = {21}
        greeting = {
            <div>
                <strong>
                    Hi Rameez, have a  wonderful day!
                </strong>
            </div>
        } 
        >

         <p>Hobbies: Coding, Reading</p>
         <button>Contact</button>

        </ProfileCard> 
    </>
};

export default Profile;

function ProfileCard(props) {
    const {name,age,greeting,children} = props;
    console.log(props)
    return (<>
          <h2>Name: {name}</h2>
          <p>age: {age}</p>
          <p>{greeting}</p>
          <div>{children}</div>
    </>)
};