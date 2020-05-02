import React from "react";


class ProfileStatus extends React.Component {
  state = {
    changeMode: false
  }

  insertYoursStatus = () => {
    this.setState({changeMode: true})
  }
  deactivateChangeMode = () => {
    this.setState({changeMode: false})
  }

  render() {
    return (
      <div>
        {!this.state.changeMode ?
          <div>
            <span onDoubleClick={this.insertYoursStatus} >{this.props.status}</span>
          </div>
          :
          <div>
            <input onBlur={this.deactivateChangeMode} autoFocus={true} value={this.props.status}/>
          </div>
        }
      </div>
    );
  };
}

export default ProfileStatus;
//