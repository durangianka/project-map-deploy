import Navbar from '../components/Navbar'
import Map from '../components/Map'
import ProfileWidget from '../components/ProfileWidget'


export default function home() {

    const user =
    {
        id: 126,
        name: "John",
        surname: 'Doe',
        dob: '11/05/1996',
        ppic: 'data:image/jpeg;base64,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',
        job: "Chief SuperVisor"
    }

    const drivers = [
        {
            id: 1,
            startPointLat: 51.53335637291514,
            startPointLon: -0.17910367615539258,
            endPointLat: 51.5141368190169,
            endPointLon: -0.12041237633056312,
            routeGeojson: {
                type: 'Feature',
                geometry: {
                    type: 'LineString',
                    coordinates: [
                        [
                            -0.179036,
                            51.533303
                        ],
                        [
                            -0.178795,
                            51.533422
                        ],
                        [
                            -0.17703,
                            51.531741
                        ],
                        [
                            -0.176014,
                            51.529239
                        ],
                        [
                            -0.173206,
                            51.52705
                        ],
                        [
                            -0.16818,
                            51.52467
                        ],
                        [
                            -0.165445,
                            51.522627
                        ],
                        [
                            -0.164358,
                            51.521118
                        ],
                        [
                            -0.163982,
                            51.521051
                        ],
                        [
                            -0.152438,
                            51.523091
                        ],
                        [
                            -0.144577,
                            51.524107
                        ],
                        [
                            -0.142264,
                            51.52407
                        ],
                        [
                            -0.135422,
                            51.525792
                        ],
                        [
                            -0.130842,
                            51.527355
                        ],
                        [
                            -0.120986,
                            51.519056
                        ],
                        [
                            -0.120387,
                            51.517744
                        ],
                        [
                            -0.120102,
                            51.517103
                        ],
                        [
                            -0.119551,
                            51.516377
                        ],
                        [
                            -0.121746,
                            51.514861
                        ],
                        [
                            -0.120296,
                            51.514578
                        ]
                    ]
                }
            }
        },
        {
            id: 2,
            startPointLat: 51.513733246588714,
            startPointLon: -0.09721955451496456,
            endPointLat: 51.56271000767194,
            endPointLon: -0.13867738351234493,
            routeGeojson: {
                type: 'Feature',
                geometry: {
                    type: 'LineString',
                    coordinates: [
                        [
                            -0.096642,
                            51.514008
                        ],
                        [
                            -0.096858,
                            51.514623
                        ],
                        [
                            -0.097689,
                            51.515115
                        ],
                        [
                            -0.106405,
                            51.517612
                        ],
                        [
                            -0.111381,
                            51.518176
                        ],
                        [
                            -0.113947,
                            51.522347
                        ],
                        [
                            -0.120704,
                            51.530184
                        ],
                        [
                            -0.12189,
                            51.530585
                        ],
                        [
                            -0.122664,
                            51.537843
                        ],
                        [
                            -0.124857,
                            51.539838
                        ],
                        [
                            -0.126533,
                            51.545714
                        ],
                        [
                            -0.131174,
                            51.548228
                        ],
                        [
                            -0.132929,
                            51.550575
                        ],
                        [
                            -0.132926,
                            51.550676
                        ],
                        [
                            -0.131757,
                            51.550695
                        ],
                        [
                            -0.133044,
                            51.551702
                        ],
                        [
                            -0.132396,
                            51.552257
                        ],
                        [
                            -0.138394,
                            51.556861
                        ],
                        [
                            -0.13679,
                            51.561412
                        ],
                        [
                            -0.137446,
                            51.561725
                        ],
                        [
                            -0.138244,
                            51.561901
                        ],
                        [
                            -0.13792,
                            51.562625
                        ],
                        [
                            -0.138658,
                            51.562744
                        ]
                    ]
                }
            }
        },
        {
            id: 3,
            startPointLat: 51.529431834888726,
            startPointLon: -0.06508363524613969,
            endPointLat: 51.5096945995673,
            endPointLon: 0.020335815058047046,
            routeGeojson: {
                type: 'Feature',
                geometry: {
                    type: 'LineString',
                    coordinates: [
                        [
                            -0.065349,
                            51.529394
                        ],
                        [
                            -0.064956,
                            51.528356
                        ],
                        [
                            -0.065232,
                            51.528303
                        ],
                        [
                            -0.063969,
                            51.523815
                        ],
                        [
                            -0.060381,
                            51.524018
                        ],
                        [
                            -0.060278,
                            51.522578
                        ],
                        [
                            -0.058024,
                            51.519501
                        ],
                        [
                            -0.057918,
                            51.519524
                        ],
                        [
                            -0.057262,
                            51.517711
                        ],
                        [
                            -0.050043,
                            51.51689
                        ],
                        [
                            -0.042622,
                            51.516776
                        ],
                        [
                            -0.041491,
                            51.515826
                        ],
                        [
                            -0.041392,
                            51.514799
                        ],
                        [
                            -0.037359,
                            51.514135
                        ],
                        [
                            -0.034055,
                            51.514218
                        ],
                        [
                            -0.031869,
                            51.512401
                        ],
                        [
                            -0.02937,
                            51.512275
                        ],
                        [
                            -0.021037,
                            51.510815
                        ],
                        [
                            -0.010749,
                            51.511351
                        ],
                        [
                            -0.01044,
                            51.511295
                        ],
                        [
                            -0.007901,
                            51.511715
                        ],
                        [
                            -0.006916,
                            51.511599
                        ],
                        [
                            -0.00097,
                            51.512689
                        ],
                        [
                            0.000625,
                            51.513152
                        ],
                        [
                            0.00132,
                            51.513751
                        ],
                        [
                            0.003112,
                            51.514637
                        ],
                        [
                            0.006234,
                            51.515306
                        ],
                        [
                            0.007611,
                            51.515594
                        ],
                        [
                            0.008214,
                            51.515664
                        ],
                        [
                            0.011275,
                            51.511712
                        ],
                        [
                            0.013459,
                            51.509307
                        ],
                        [
                            0.01508,
                            51.509113
                        ],
                        [
                            0.020342,
                            51.509667
                        ]
                    ]
                }
            },
        }
    ]

    const chargingStations = [
        {
            title: "Revees Station",
            postCode: "W1K 2QD",
            slots: 10,
            available: 7,
            busy: 3,
            lat: 51.509938,
            lon: -0.152364
        },
        {
            title: "Bridgeway Station",
            postCode: "NW1 1QS",
            slots: 4,
            available: 4,
            busy: 0,
            lat: 51.532672,
            lon: -0.134228
        },
        {
            title: "Webber St Station",
            postCode: "SE1 8QW",
            slots: 7,
            available: 2,
            busy: 5,
            lat: 51.500904,
            lon: -0.105868
        },
        {
            title: "Warner Station",
            postCode: "EC1R 3DJ",
            slots: 5,
            available: 2,
            busy: 3,
            lat: 51.52308,
            lon: -0.109178
        },
        {
            title: "Lime St Station",
            postCode: "EC3M 7HR",
            slots: 10,
            available: 7,
            busy: 3,
            lat: 51.511863,
            lon: -0.083437
        },
    ]

    return (
        <div className=" h-screen w-full flex flex-col">
            <Navbar />
            <Map chargingStations={chargingStations} drivers={drivers} />
            <ProfileWidget user={user} />
        </div>
    )
}
