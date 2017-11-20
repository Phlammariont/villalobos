import React, { Component } from 'react';

class Navbar extends Component{
  constructor (props) {
    super();
    this.state = { items:  props.menuItems.map( (item) => {
      item.className = "";
      if ( item.id === props.index ) item.className = "visible initial";
      return item;
    } ).sort( ( item ) => item.className.length ).reverse() };
    this.onMouseEnter = this.onMouseEnter.bind(this);
    //this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter () {
    this.setState( {items: this.state.items.map((item) => {
      item.className = "animated visible";
      return item;
    }) });
  }

  onMouseLeave (that) {
    return function () {
      that.setState({ items:  that.state.items.map( (item) => {
        if ( item.id === that.props.index ) {
          item.className = "initial";
        } else {
          item.className = ""
        }
        return item;
      } ) });
    }
  }

  navigateTo ( item ) {
    console.log(item, item.divId);
    const top = document.getElementById(item.divId).offsetTop;
    window.scroll({
      top: top,
      left: 0,
      behavior: 'smooth'
    });
  }

  render () {
    return (
      <nav className="top-nav">
        <div className={ "color-back-" + this.state.items[0].lastWord + " glitter"}></div>
        <ul onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave(this)}>
          {
            this.state.items.map( (item) => {
              let array = item.label.split(" ");
              return (
                <li onClick={( ) => this.navigateTo( item )} key={item.id} className={"fadeInUp uppercase " + ( !!item.className ? item.className : "inVisible" )}>
                  <a href={ "#" + item.divId }>{array.splice(0, array.length - 1).join(" ")} <span className={"color-" + item.lastWord}> {array.pop()}</span></a>
                </li>
              );
            })
          }
        </ul>
      </nav>
    )
  }
}

export default Navbar