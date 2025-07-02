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
                    <image src = ''/>
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