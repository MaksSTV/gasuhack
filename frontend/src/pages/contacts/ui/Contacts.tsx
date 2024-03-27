import { YMaps, Map } from '@pbe/react-yandex-maps';
import "./contacts.scss"

function Contacts() {

    return (
        <div className="container_contacts">
            <YMaps>
                <div>
                    Местоположение студсовета
                    <Map defaultState={{ center: [59.915096640731555, 30.31459785681434], zoom: 16 }} />
                </div>
            </YMaps>
        </div>
    )
}

export default Contacts