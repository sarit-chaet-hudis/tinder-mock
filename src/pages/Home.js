import React from "react";

import "./Home.css";
import ImageDisplay from "../components/ImageDisplay";
import Counter from "../components/Counter";
import Button from "../Utils/Button";

class Home extends React.Component {
  state = {
    likeCount: 0,
    dislikeCount: 0,
    currentShirt: 0,
    disabled: false,
    images: [
      "UGLY SHIRT",
      "NICE SHIRT!",
      "OKAY SHIRT",
      "BAD SHIRT",
      "GORGEOUS SHIRT",
      "EXCELLENT SHIRT",
      "WORN OUT SHIRT",
      "NO MORE SHIRTS TO SHOW",
    ],
  };

  displayNext() {
    if (this.state.currentShirt + 2 === this.state.images.length) {
      this.setState({ disabled: true });
    }
    this.setState((prev) => {
      return { currentShirt: prev.currentShirt + 1 };
    });
  }

  like(e) {
    this.setState((prev) => {
      return { likeCount: prev.likeCount + 1 };
    });
    this.displayNext();
  }

  dislike(e) {
    this.setState((prev) => {
      return { dislikeCount: prev.dislikeCount + 1 };
    });
    this.displayNext();
  }

  render() {
    return (
      <>
        <h1>Homepage</h1>
        <div className="counterContainer">
          <Counter count={this.state.dislikeCount} counterImage="&#129314;" />
          <Counter count={this.state.likeCount} counterImage="&#128513;" />
        </div>
        <ImageDisplay image={this.state.images[this.state.currentShirt]} />
        <div className="buttonContainer">
          <Button
            onClick={() => this.dislike()}
            buttonText="dislike"
            disabled={this.state.disabled}
          />
          <Button
            onClick={() => this.like()}
            buttonText="like"
            disabled={this.state.disabled}
          />
        </div>
      </>
    );
  }
}

export default Home;
