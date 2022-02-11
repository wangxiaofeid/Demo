import React from "react";

export default class Demo extends React.PureComponent {
    state = { num: 1 };
    render() {
        const { num } = this.state;
        return (
            <div>
                {num}
                <button
                    onClick={this.setState({
                        num: num + 1,
                    })}
                >
                    +1
                </button>
            </div>
        );
    }
}
