class CardComponent extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .card {
                    background-color: white;
                    border: 3px solid #a3959b;
                    padding: 16px;
                    margin: 8px;
                    border-radius: 5px;
                    max-width: 300px;
                    box-sizing: border-box;
                    overflow: hidden;
                }
                .card-content {
                    font-size: 16px;
                    color: #555;
                    text-align: start;
                }
    
            </style>
            <div class="card">
                <div class="card-header">
                    <slot name="header">Заголовок</slot>
                </div>
                <div class="card-content">
                    <slot name="content">Содержание</slot>
                </div>
            </div>
        `;
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('card-component', CardComponent);
