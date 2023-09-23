import './contact.scss';
import {YMaps , Map, Placemark, FullscreenControl, GeolocationControl, TrafficControl, ZoomControl, RouteButton, TypeSelector} from '@pbe/react-yandex-maps';
import PlacemarkIcon from "../../assets/img/locationIcon.png"

const Mapscontact = () =>{

    var data = [
        {
          name: 'Chorsu',
          coordinates: [41.324090,69.231826]
        },
        {
          name: 'Mega Planet',
          coordinates: [41.3672996,69.2910677]
        },
        {
            name: 'Xalqlar dostligi',
            coordinates: [41.310547,69.2415726]
          },
      ];

    return (
        <YMaps>
            <div className="demo1">
                <Map
                    defaultState={{
                        center: [41.299496,69.240074],
                        zoom:12,
                    }}
                >
                    {data.map((point, index) => (
                        <Placemark
                            options={{
                                iconLayout: "default#image",
                                iconImageHref: PlacemarkIcon,
                                iconImageSize: [25, 35],
                            }}
                            key={index}
                            geometry={point.coordinates}
                            properties={{
                                item: index
                            }}
                        />
                    ))}
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

export default Mapscontact