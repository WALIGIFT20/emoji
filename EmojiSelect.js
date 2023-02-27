import React, { Component } from "react";

class EmojiSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emoji: [],
    };
  }

  componentDidMount() {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://emoji-api.com/emojis?access_key=1189878b5c72f8e7e05ef2184680cf80fcc429f7"
        );
        const data = await response.json();
        this.setState({ emoji: data });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }

  render() {
    const { Receiver } = this.props;
    const { emoji } = this.state;
    return (
      <div>
        {emoji
          .slice(0, 100)
          .filter((emoji) => {
            return Receiver.toLowerCase() === ""
              ? ""
              : emoji.unicodeName
                  .toLowerCase()
                  .includes(Receiver.toLowerCase());
          })
          .map((emoji) => (
            <div key={emoji.unicodeName}>
              {emoji.character}:{emoji.unicodeName}
            </div>
          ))}
      </div>
    );
  }
}

export default EmojiSelect;
