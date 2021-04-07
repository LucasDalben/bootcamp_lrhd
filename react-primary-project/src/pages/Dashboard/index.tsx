import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './style';
import logoImg from '../../assets/logoicone.svg';

const Dashboard: React.FC = () =>{
    return(
        <>
            <img src={logoImg} alt="Github Explorer"/>
            <Title>Explore repositórios no Github</Title>

            <Form>
                <input placeholder="Digite o nome do repositório"/>
                <button type="submit">Pesquisar</button>
            </Form>
            <Repositories>
                <a href="teste">
                    <img
                        src="https://avatars.githubusercontent.com/u/52721182?v=4"
                        alt="foto da pessoa"
                    />
                    <div>
                        <strong>rocketseat/uniform</strong>
                        <p>Lets go test, 123, fazendo arte</p>
                    </div>
                    <FiChevronRight size={20}/>
                </a>
                <a href="teste">
                    <img
                        src="https://avatars.githubusercontent.com/u/52721182?v=4"
                        alt="foto da pessoa"
                    />
                    <div>
                        <strong>rocketseat/uniform</strong>
                        <p>Lets go test, 123, fazendo arte</p>
                    </div>
                    <FiChevronRight size={20}/>
                </a>
                <a href="teste">
                    <img
                        src="https://avatars.githubusercontent.com/u/52721182?v=4"
                        alt="foto da pessoa"
                    />
                    <div>
                        <strong>rocketseat/uniform</strong>
                        <p>Lets go test, 123, fazendo arte</p>
                    </div>
                    <FiChevronRight size={20}/>
                </a>
            </Repositories>
        </>    
    )
}

export default Dashboard;