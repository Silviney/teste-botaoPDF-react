import React, { Component } from 'react';
import './Form.css'

import Button from '../components/Button';

export default class Form extends Component {
    
    page1(){
        window.open ('https://doc-10-64-apps-viewer.googleusercontent.com/viewer/secure/pdf/uccq01370avqucqq1b9cl14q7tjlt6fn/5689iepqh9sqgecvfm1m3a0f1mp8eqcn/1646963025000/drive/06730930736886224761/ACFrOgCEmJww58D08bygQYKmSOCbrQWIq5fNyYujHwHKGOyVTNwkBY3hUXZa4Z-Co_k2ccZ14npqvT3Hk7vsxSmRawUvR4IRkQu3HtlyFIyTuugEad57AQUt28jX5f5KfJMgCKlJCOw-QDzdv1GH#page=1', '_blank')  
    }

    page2(){
        window.open ('https://doc-10-64-apps-viewer.googleusercontent.com/viewer/secure/pdf/uccq01370avqucqq1b9cl14q7tjlt6fn/5689iepqh9sqgecvfm1m3a0f1mp8eqcn/1646963025000/drive/06730930736886224761/ACFrOgCEmJww58D08bygQYKmSOCbrQWIq5fNyYujHwHKGOyVTNwkBY3hUXZa4Z-Co_k2ccZ14npqvT3Hk7vsxSmRawUvR4IRkQu3HtlyFIyTuugEad57AQUt28jX5f5KfJMgCKlJCOw-QDzdv1GH#page=3', '_blank')  
    }

    page3(){
        window.open ('https://doc-10-64-apps-viewer.googleusercontent.com/viewer/secure/pdf/uccq01370avqucqq1b9cl14q7tjlt6fn/5689iepqh9sqgecvfm1m3a0f1mp8eqcn/1646963025000/drive/06730930736886224761/ACFrOgCEmJww58D08bygQYKmSOCbrQWIq5fNyYujHwHKGOyVTNwkBY3hUXZa4Z-Co_k2ccZ14npqvT3Hk7vsxSmRawUvR4IRkQu3HtlyFIyTuugEad57AQUt28jX5f5KfJMgCKlJCOw-QDzdv1GH#page=4', '_blank')  
    }

    render(){
        return (
            <div className="form">
                <Button label= "botão 1" click={() => this.page1()} />
                <Button label= "botão 2" click={() => this.page2()} />
                <Button label= "botão 3" click={() => this.page3()} />
            </div>
        )
    }
}