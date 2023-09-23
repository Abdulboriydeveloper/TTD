import './map.scss'
import {YMaps , Map, Placemark, FullscreenControl, GeolocationControl, TrafficControl, ZoomControl, RouteButton, TypeSelector} from '@pbe/react-yandex-maps';
import placemarkicon from "../../assets/img/locationIcon.png"

const Maps = () =>{

    return (
        <YMaps>
            <div className="demo">
                <Map
                    defaultState={{
                        center: [41.299496,69.240074],
                        zoom:12,
                    }}
                >
                    <Placemark 
                        options={{
                            iconLayout: "default#image",
                            iconImageHref: placemarkicon,
                            iconImageSize: [25, 35],
                        }}
                        geometry={[41.324090,69.231826]} 
                    />
                    {/* <FullscreenControl options={{ float: 'left'}} /> */}
                    {/* <GeolocationControl options={{ float: 'right'}} /> */}
                    {/* <TrafficControl options={{float: 'right'}} />
                    <ZoomControl options={{float: 'left'}} /> */}
                    {/* <RouteButton options={{ float: 'right'}} /> */}
                    {/* <TypeSelector options={{float: 'right'}} /> */}
                </Map>
            </div>
        </YMaps>
    )
}

export default Maps