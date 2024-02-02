
import './styles.css';

export default function Home() {
    return (
        <div>
            <section>
                <h1 style={{color: 'blue'}}> Bem-vindo à MegaMart </h1> 
                <p>Sua loja online para uma ampla variedade de produtos de alta qualidade.</p>
            </section>

            <section>
                <h2>Produtos em Destaque</h2>
                <div className="product-highlight">
                    <div className="product">
                        <img src="/imgs/iphone.jpg" alt="iphone" />
                        <h3>Iphone</h3>
                        <p>Celular mais popular da atualidade.</p>
                    </div>

                    <div className="product">
                        <img src="/imgs/nike.jpg" alt="nike" />
                        <h3>Air Jordan</h3>
                        <p>Linha de calçados de basquete produzida pela Nike.</p>
                    </div>
                    
                    <div className="product">
                        <img src="/imgs/computer.jpg" alt="computer" />
                        <h3>Notebook</h3>
                        <p>Notebook de última geração de alta performance.</p>
                    </div>

                    <div className="product">
                        <img src="/imgs/camisa.jpg" alt="camisa-brasil" />
                        <h3>Camisa Brasil</h3>
                        <p>Camiseta oficial da Seleção Brasileira.</p>
                    </div>
                    
                </div>
            </section>

            <section>
                <h2>Por que escolher a MegaMart Online?</h2>
                <ul>
                    <li>Variedade de produtos de alta qualidade.</li>
                    <li>Entrega rápida e eficiente.</li>
                    <li>Atendimento ao cliente excepcional.</li>
                    <li>Experiência de compra conveniente e segura.</li>
                </ul>
            </section>

            <section>
                <h2>Assine nossa Newsletter</h2>
                <p>Fique por dentro das últimas ofertas e novidades. Assine nossa newsletter hoje mesmo!</p>
                <form>
                    <label htmlFor="email">Endereço de E-mail:</label>
                    <input type="email" id="email" name="email" required />
                    <button type="submit">Assinar</button>
                </form>
            </section>
        </div>
    );
};
 