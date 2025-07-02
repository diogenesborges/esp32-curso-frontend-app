import React from "react";
import styled from "styled-components";

const ListaCards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300 px, 1fr));
`;

const ListaDevices = styled.div`
    min-height: 30vg;
    overflow: hidden;
    padding: 5rem 10rem;

`;


const Medidas = ()=>{
    return (
        <ListaDevices>
            <ListaCards>
                <div className="card">
                    <img src = 'data:image/jpeg;base64,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'/>
                    <div>
                        <h3>Device</h3>
                        <h4>Kw/h :</h4>
                        <h4>Corrente :</h4>
                        <h4>Voltagem :</h4>
                        <h4>F.P : </h4>
                    </div>

                </div>
            </ListaCards>
        </ListaDevices>
    )
}

export default Medidas