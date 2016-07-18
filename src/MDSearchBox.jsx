import React, { PropTypes, Component } from 'react';
import styles from './MDSearchBox.css';

class MDSearchBox extends Component {

  constructor(props) {
    super(props);
    this.state = { text: this.props.text };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    const text = this.refs.searchbox.value;
    this.setState({ text });
    this.props.onChange(text);
  }

  render() {
    const { width, height } = this.props;
    const style = { width, height };
    return (
      <div className={styles.container} style={style}>
        <div className={styles.searchbox}>
          <span className="fontawesome-search"></span>
          <input
            type="searchbox"
            id="searchbox"
            ref="searchbox"
            placeholder="搜索"
            onChange={this.onChange}
            className={styles.input}
            value={!!this.props.text || null}
          />
        </div>
      </div>
    );
  }

}

MDSearchBox.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number,
};

MDSearchBox.defaultProps = {
  text: '',
  width: 300,
  height: 42,
}

export default MDSearchBox;
