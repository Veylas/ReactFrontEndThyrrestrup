import styled from "styled-components";
import React, {Component} from "react";
var CreateReactClass = require('create-react-class');


var loginForm = CreateReactClass({
    render: function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous" />
          <link rel="stylesheet" href="/style.css" />
          <title>Document</title>
          <nav>
            <h4>Node MySQL</h4>
            <ul>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/contact">Kontakt</a></li>
                <li><a href="/fleet">Fleet</a></li>
                <li><a href="/createMachine">createMachine</a></li>
                <li><a href="/deleteMachine">deleteMachine</a></li>
              </ul>
            </ul>
          </nav>
          <div className="container mt-4">
            <div className="card">
              <div className="card-header">
                Login <form />
              </div>
              <div className="card-body">
                <form action="/auth/login" method="POST">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" className="form-control" id="email" name="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" />
                  </div>
                  <button type="submit" className="btn btn-primary">Login</button>
                </form>
              </div>
            </div>
            {'{'}{'{'}#if message{'}'}{'}'}
            <h4 className="alert alert-danger mt-4">{'{'}{'{'}message{'}'}{'}'}</h4>
            {'{'}{'{'}/if{'}'}{'}'}
          </div>
        </div>
      );
    }
  });

  
export default loginForm;