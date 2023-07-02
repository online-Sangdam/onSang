import React, { Component } from "react";
import SignIn from "./SignIn";

class button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <>
        <a style={{textDecoration: "none", color: "white", fontSize: "20px" ,fontWeight:"bold", cursor: "pointer"}}onClick={this.openModal}>로그인</a>
        <SignIn isOpen={this.state.isModalOpen} close={this.closeModal} />
      </>
    );
  }
}

export default button;