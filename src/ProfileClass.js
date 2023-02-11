import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    // Create state here
    this.state = {
      userInfo: {
        name: "Dummy Name",
        Location: "Dummy Location",
      },
    };
  }
  async componentDidMount() {
    //api call    //like useeffect after
    const data = await fetch(" https://api.github.com/users/Deepak9664");
    const json = await data.json();
    this.setState({
      userInfo: json,
      location: "Narnaul",
    });
  }
  render() {
    return (
      <div>
        <h1>Profile Class Component</h1>
        <h2>Name :{this.state.userInfo.name}</h2>
        <h2>Location:{this.state.location}</h2>
        <h2>Bio:{this.state.userInfo.bio}</h2>
      </div>
    );
  }
}
export default Profile;
