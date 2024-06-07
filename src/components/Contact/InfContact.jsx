import React from 'react'

const InfContact = () => {
    return (
    <div >
        <div>
            <h3>Información de contacto</h3>
            <address>
                <div>
                    <span>
                        <a href="https://wa.me/+573143046748?text=Tu%20Mensaje%20De%20Texto" target="_blank">Enviar mensaje a
                        WhatsApp</a>
                    </span>
                </div>
                <div>
                    <span class="contact__info-number">
                        <a href="tel:1-234-567-8910"> +57 3143046748 </a>
                    </span>
                </div>
                <div>
                    <span>
                        <a id="mail" href="mailto:test@correo.com"> kerlysarrias011@gmail.com </a>
                    </span>
                </div>
                <div>
                    <span class="contact__info-map"> Bogotá, Colombia. </span>
                </div>
            </address>
            </div>
        </div>
    )
}

export default InfContact
