import {Jumbotron, Button} from 'reactstrap';
import React from 'react';
import GitHub from '../GitHub.png';

export default function Welcome(props){
    return(
        <Jumbotron>
            <h1 className="display-3">Welcome to ToDoList App</h1>
            <p className="lead">Simple ToDoList app I made in order to learn basics of frontend web development</p>
            <hr className="my-2" />
            <p className="lead">               
                <Button color="primary" onClick={props.handleLogIn}>Log in</Button>

            </p>
            <p className="lead">               
                <Button color="success" onClick={props.handleRegister}>Register</Button>

            </p>
            <p className="lead">
                <img src={GitHub}></img>{' '}
                <Button size="sm" href="https://github.com/szymenn/ToDoDo-frontend">frontend</Button>{' '}
                <Button size="sm" href="https://github.com/szymenn/ToDoDo-backend">backend</Button>
            </p>
    
        </Jumbotron>
    )
}