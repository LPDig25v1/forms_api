import React from 'react'
import Busca from './Busca'
import env from 'react-dotenv'
import { createClient } from 'pexels'

export default class App extends React.Component {
    onBuscaRealizada = (termo) => {
        this.pexelsClient.photos.search({
            query: termo
        })
        .then(pics => console.log(pics))
    }
    render() {
        return (
            <div className="grid justify-content-center m-autyo w-9 border-round border-1 border-400">
                <div className='col-12'>
                    <h1>Exibir uma lista de...</h1>
                </div>
                <div className='col-8'>
                    <Busca />
                </div>
            </div>
        )
    }
    pexelsClient = null

    componentDidMount(){
        this.pexelsClient = createClient(env.PEXELS_KEY)
    }
}