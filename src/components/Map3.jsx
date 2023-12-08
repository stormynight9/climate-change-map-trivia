import world from './world-map.gif'

export default function Map3() {
    return (
        <div>
            <img src={world} alt="world" style={{width: '100vw', height: '100vh'}} />
            {/* <img src={world} alt="world" style={{width: '100vw', height: '100vh'}} /> */}
        </div>
    )
}