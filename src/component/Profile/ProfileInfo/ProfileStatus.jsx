import React from "react";


class ProfileStatus extends React.Component {
  state = {
    changeMode: false,
    status: this.props.status
  }

  activateChangeMode = () => {
    this.setState({changeMode: true})
  }
  deactivateChangeMode = () => {
    this.setState({changeMode: false})
    this.props.update_User_Status(this.state.status)

  }
  onStatusChange = (e) => {
    this.setState({status: e.currentTarget.value})
  }
  componentDidUpdate(prevProps, prevState,snapshot) {
    if(prevProps.status!==this.props.status) {
      this.setState({status:this.props.status})
    }
  }

  render() {
    return (
      <div>
        {!this.state.changeMode ?
          <div>
            <span onDoubleClick={this.activateChangeMode}>{this.props.status || 'without status'}</span>
          </div>
          :
          <div>
            <input onBlur={this.deactivateChangeMode} onChange={this.onStatusChange} autoFocus={true}
                   value={this.state.status}/>
          </div>
        }
      </div>
    );
  };
}

export default ProfileStatus;
//