import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
    return (
        <div>
            <h1>Página Inicial</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/Atv1">Atividade 1</Link>
                    </li>
                    <li>
                        <Link to="/Atv2">Atividade 2</Link>
                    </li>
                    <li>
                        <Link to="/Atv3">Atividade 3</Link>
                    </li>
                    <li>
                        <Link to="/Teste">Testes</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;