import React, { Component } from "react";

import style from './header.module.scss';

class Header extends Component{

    constructor(props) {
        super(props);
        this.state = {
            inputLabel: '',
        }
    }

    onType = (e) => {
        const { value } = e.target;
        this.setState({
            inputLabel: value,
        })
        if (value.length === 0) {
            this.props.handleSearch(value);
        }
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { inputLabel } = this.state;

        this.props.handleSearch(inputLabel);
    }

    render() {
        const { placeHolder } = this.props;
        return (
            <form action="" onSubmit={this.onSubmit}>
                <input placeholder={placeHolder} className={style.search} onChange={this.onType}/>
            </form>
        )
    }
}

export default Header;
