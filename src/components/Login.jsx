import React, { Component } from 'react';

import Nav from './layout/Nav';

export default class Login extends Component {
    // DÉCLARE UN STATE POUR LOGIN USER
    // PAR DEFAUT, LORSQUE USER ARRIVE SUR L'APP IL N'EST PAS LOGUE
    state = {
        username: '',
        password: '',
        isOnline: false
    }
    // HANDLE CHANGE PERMET DE RECUPERER ET SETTER LE STATE A CHAQUE 'EVENEMENTS'
    // C'EST A DIRE A CHAQUE FOIS QUE USER SAISI DU TEXTE DANS LES CHAMPS INPUT, LA VALEUR EST RECUPEREE ET LE STATE EST MIS A JOUR
    handleChange = (e) => {
        console.log(this.state);
        this.setState({
            //LA GENERATION D'EVENEMENT EST DECLENCHÉE AU ONCLICK
            //EN JS, LES EVENEMENTS PERMETTENT D'AVOIR ACCES A LA TARGET ET A LA VALEUR DE L'EVENEMENT ECOUTE (ON CLICK / ON CHANGE...)
            // ICI [e.target.name] CORRESPOND A LA FOIS A L'INPUT 'USERNAME' ET 'PASSWORD' DONT LES NAMES SONT LES MEMES QUE NOTRE STATE, 
            // IL EST DONC POSSIBLE DE METTRE A JOUR LE STATE DE CETTE MANIERE : 
            // COMME E.TARGET.NAME = USERNAME PUIS E.TARGET.NAME = PASSWORD
            // SI J'ECRIS [e.target.name]: e.target.value CELA DONNE
            // USERNAME : USERNAME.VALUE
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        // ICI NORMALEMENT TEST DES ID DE CONNEXION POUR VERIFIER QUE USER EXISTE
        // SEND MESSAGE SUCCESS OU ERROR
        alert('login success');
        // SET STATE ONLINE TRUE SI USER LOG SUCCUSS
            this.setState({
                isOnline: true
            })
        //STOCKAGE DU USERNAME ET DE SON STATUT DANS LOCAL STORAGE 
        localStorage.setItem('username', this.state.username);
        localStorage.setItem('isOnline', this.state.isOnline);
    }

    render() {
        return (
            <div className="container">
                <Nav />
                <div className="text-center">
                    <form>
                        <div className="row">
                            <div className="col-12">
                                <input type="text" name="username" placeholder="username" onChange={this.handleChange} />
                            </div>
                            <div className="col-12">
                                <input type="password" name="password" placeholder="password" onChange={this.handleChange} />
                            </div>
                            <div className="col-12">
                                <input type="submit" value="Submit" onClick={this.onSubmit} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}