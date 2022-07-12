import logo from '../../assets/img/logo.svg'

import './styles.css'

function Header() {
    return (

        <header>
            <div className="cabecalho-logo-principal">
                <img src={logo} alt="DSMeta" />
                    <h1>DSMeta</h1>
                    <p>
                        Desenvolvido por
                        <a href="https://www.linkedin.com/in/giovanni-santos-1326341a9">
                            Giovanni Almeida
                        </a>
                    </p>
            </div>
        </header>

    )
}

export default Header
