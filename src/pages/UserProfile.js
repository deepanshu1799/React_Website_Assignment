import axios from 'axios'
import React from 'react'

export default class UserProfile extends React.Component{
    constructor(props){
        super(props)
        this.state={}
}
    componentDidMount(){
        console.log(this.props)
        const data = {uid: this.props.match.params.uid}
        console.log(data)
        axios.get("https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentGet", data)
        .then(res => res.json())
        .then(json => {
            this.setState({
            isLoaded: true,
            user: json
            });
        });
    }
    render(){
        return(
            <div>Profile
                {this.state?.user?.name}
            </div>
        )
    }
}
