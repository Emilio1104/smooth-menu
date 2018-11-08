import React, { Component } from 'react';
import MenuButton from './MenuButton';
import Menu from './Menu';

class MenuContainer extends Component{
    constructor(props, context){
        super(props, context);
 

        this.state= {
    
            visible: false
        };  
        
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);

    }

    handleMouseDown(e){
        this.toggleMenu();

        console.log("clicked");
        e.stopPropagation();
    }
    
    toggleMenu(){
        this.setState({
            visible: !this.state.visible
        });
    }
    render(){
        return(
            
            <div>
                <MenuButton handleMouseDown={this.handleMouseDown}/>
                <Menu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>
                <h1>Sliding_Menu_Example</h1>
                <ul>
                    <li>unyttig</li>
                    <li>info</li>
                    <li>kan finnes</li>
                    <li>her</li>
                    <li>!!</li>
                    <li>____</li>
                </ul>
                
              
            </div>
        );
    }
}

export default MenuContainer;