import React, { Component } from "react";
import EmojiSelect from "./EmojiSelect";

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredData: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ filteredData: event.target.value });
  };

  render() {
    const { placeholder } = this.props;
    const { filteredData } = this.state;

    return (
      <div className="search">
        <div className="searchInput">
          <input
            type="text"
            placeholder={placeholder}
            onChange={this.handleInputChange}
            value={filteredData}
          />
        </div>

        <div>
          <div className="searchIcon"></div>
        </div>
        <div className="dataResult">
          <EmojiSelect Receiver={filteredData} />
        </div>
      </div>
    );
  }
}

export default SearchInput;
