
import React, { Component } from 'react';
import Profile from '../images/profilepic.png'
import Goal from "./Goal"
import goalsData from "./goalsData"

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 4
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
 
  
  render(){
    const goalComponents = goalsData.slice(0, this.state.clicks).map(goal => <Goal key={goal.id}  goal={goal.goal} />)
    return (
      <div>
   
            <div className="container h-100 align-items-center mastheade2" id="blog">
                <div className="col-12 text-center p-4">
                    <div className="row">

                        <div className="col-3">

                            <img className="profile-pic img-fluid" src={Profile} alt="Profilepic" />

                        </div>

                        <div className="col-9">

                            <h2 className="font-weight-light">About Me</h2>

                            <p className="lead text-left">
                                I'm an aspiring Software Engineer currently working at Aviro Health. I enjoy Javascript and exploring new ideas and concepts. I’m a lover of the little things in life. I love the smell and feel of books, rain, hanging out with friends,laughter, the thrill I get from writing, conversations,
                                hugs, good music, board games, trying new delicacies and the sensation of going on an adventure. I’m in my early twenties but I have a very old soul.
                                
                            <h3 className="text-center font-weight-light">Aspirations</h3>
                                <ol>
                                {goalComponents} 
                                </ol>
                            <i className="fa fa-plus btn btn-dark p-1" aria-hidden="true" onClick={this.IncrementItem}></i>
                            <i className="fa fa-minus btn btn-secondary p-1" aria-hidden="true" onClick={this.DecreaseItem}></i>
                            </p>
                            <div className="row">
                                <div className="col-9">
                                    <p>
                                        <a href="https://drive.google.com/file/d/1ch7Rbk7cI8n-87XFm21po0uv8naDbv7A/view?usp=sharing" download className="btn btn-secondary" ><i className=" fa fa-download"></i>Download Resume</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}

export default Blog;