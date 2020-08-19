(function (name, data) {
    if (typeof onTileMapLoaded === 'undefined') {
        if (typeof TileMaps === 'undefined') TileMaps = {};
        TileMaps[name] = data;
    } else {
        onTileMapLoaded(name, data);
    }
    if (typeof module === 'object' && module && module.exports) {
        module.exports = data;
    }
})("levelsettings", {
    "height": 1,
    "infinite": false,
    "layers": [{
        "data": [0],
        "height": 1,
        "name": "Livello tile 1",
        "opacity": 1,
        "type": "tilelayer",
        "visible": true,
        "width": 1,
        "x": 0,
        "y": 0
    }, {
        "image": "..\/sprites\/pinball_reference(old).jpg",
        "name": "Livello immagine 1",
        "opacity": 0.5,
        "type": "imagelayer",
        "visible": true,
        "x": 0,
        "y": 0
    }, {
        "draworder": "topdown",
        "name": "edge_frame",
        "objects": [{
            "height": 0,
            "id": 32,
            "name": "outer",
            "polyline": [{
                "x": 0,
                "y": 0
            }, {
                "x": -0.333334,
                "y": -1260.334
            }, {
                "x": -4.33334,
                "y": -1320.334
            }, {
                "x": -10.33334,
                "y": -1369.666
            }, {
                "x": -20.3334,
                "y": -1419.666
            }, {
                "x": -33.6666,
                "y": -1459
            }, {
                "x": -50.3334,
                "y": -1496.334
            }, {
                "x": -77.6666,
                "y": -1549
            }, {
                "x": -115,
                "y": -1594.334
            }, {
                "x": -153.6666,
                "y": -1633.666
            }, {
                "x": -210.334,
                "y": -1685
            }, {
                "x": -241.666,
                "y": -1709.666
            }, {
                "x": -295,
                "y": -1735
            }, {
                "x": -345,
                "y": -1755.666
            }, {
                "x": -398.334,
                "y": -1768.334
            }, {
                "x": -451,
                "y": -1776.334
            }, {
                "x": -501,
                "y": -1779
            }, {
                "x": -549,
                "y": -1781
            }, {
                "x": -605,
                "y": -1775
            }, {
                "x": -661,
                "y": -1767
            }, {
                "x": -713,
                "y": -1753
            }, {
                "x": -757,
                "y": -1735
            }, {
                "x": -811,
                "y": -1711
            }, {
                "x": -857,
                "y": -1683
            }, {
                "x": -899,
                "y": -1651
            }, {
                "x": -949,
                "y": -1607
            }, {
                "x": -989,
                "y": -1563
            }, {
                "x": -1027,
                "y": -1517
            }, {
                "x": -1055,
                "y": -1465
            }, {
                "x": -1075,
                "y": -1411
            }, {
                "x": -1089,
                "y": -1349
            }, {
                "x": -1099,
                "y": -1281
            }, {
                "x": -1098.334,
                "y": -613
            }, {
                "x": -1025.668,
                "y": -541
            }, {
                "x": -1025.666,
                "y": -511.666
            }, {
                "x": -1102.334,
                "y": -434.334
            }, {
                "x": -1103,
                "y": -115
            }, {
                "x": -1093,
                "y": -96.3334
            }, {
                "x": -1082.334,
                "y": -87
            }, {
                "x": -786.334,
                "y": 51
            }, {
                "x": -786.334,
                "y": 96.3334
            }],
            "rotation": 0,
            "type": "",
            "visible": true,
            "width": 0,
            "x": 1127,
            "y": 1805
        }, {
            "height": 0,
            "id": 33,
            "name": "inner",
            "polyline": [{
                "x": 53.3334,
                "y": 0
            }, {
                "x": 0,
                "y": 0
            }, {
                "x": -1.333334,
                "y": -1218.666
            }, {
                "x": -5.33334,
                "y": -1308.666
            }, {
                "x": -24,
                "y": -1405.334
            }, {
                "x": -58,
                "y": -1486.666
            }, {
                "x": -84.6666,
                "y": -1529.334
            }, {
                "x": -106.6666,
                "y": -1552.666
            }, {
                "x": -164,
                "y": -1606
            }, {
                "x": -188,
                "y": -1602.666
            }, {
                "x": -200,
                "y": -1592
            }, {
                "x": -198,
                "y": -1515.334
            }, {
                "x": -188,
                "y": -1503.334
            }, {
                "x": -124.6666,
                "y": -1502.666
            }, {
                "x": -37,
                "y": -1127.666
            }, {
                "x": -48.8334,
                "y": -1090.334
            }, {
                "x": -106.9166,
                "y": -942.25
            }, {
                "x": -110.8126,
                "y": -931.48
            }, {
                "x": -113.7084,
                "y": -921.708
            }, {
                "x": -116.5,
                "y": -911.166
            }, {
                "x": -118.9166,
                "y": -900.834
            }, {
                "x": -121.875,
                "y": -889.916
            }, {
                "x": -123.8334,
                "y": -879
            }, {
                "x": -126.2916,
                "y": -867.25
            }, {
                "x": -128.25,
                "y": -856
            }, {
                "x": -129.6666,
                "y": -842.5
            }, {
                "x": -128.6666,
                "y": -584
            }, {
                "x": -123.3334,
                "y": -568.666
            }, {
                "x": -11.33334,
                "y": -452
            }, {
                "x": -11.33334,
                "y": -157.3334
            }, {
                "x": -22,
                "y": -121.3334
            }, {
                "x": -36.6666,
                "y": -103.3334
            }, {
                "x": -360,
                "y": 46
            }, {
                "x": -359.334,
                "y": 95.3334
            }],
            "rotation": 0,
            "type": "",
            "visible": true,
            "width": 0,
            "x": 1060,
            "y": 1805.334
        }],
        "opacity": 1,
        "type": "objectgroup",
        "visible": true,
        "x": 0,
        "y": 0
    }, {
        "draworder": "topdown",
        "name": "left_router",
        "objects": [{
            "height": 0,
            "id": 50,
            "name": "router_head",
            "polyline": [{
                "x": 0,
                "y": 0
            }, {
                "x": 50,
                "y": 14
            }, {
                "x": 48,
                "y": 88
            }],
            "rotation": 0,
            "type": "",
            "visible": true,
            "width": 0,
            "x": 290,
            "y": 198
        }, {
            "height": 0,
            "id": 53,
            "name": "router_tail",
            "polyline": [{
                "x": 181,
                "y": 0
            }, {
                "x": 131,
                "y": 44
            }, {
                "x": 91,
                "y": 88
            }, {
                "x": 53,
                "y": 134
            }, {
                "x": 25,
                "y": 186
            }, {
                "x": 5,
                "y": 240
            }, {
                "x": 0,
                "y": 291
            }, {
                "x": 9,
                "y": 339
            }, {
                "x": 34.6666,
                "y": 403.666
            }, {
                "x": 43.3334,
                "y": 380.334
            }, {
                "x": 51.3334,
                "y": 359
            }, {
                "x": 62.6666,
                "y": 332.334
            }, {
                "x": 78,
                "y": 302.334
            }, {
                "x": 94,
                "y": 274.334
            }, {
                "x": 116,
                "y": 244.334
            }, {
                "x": 148.6666,
                "y": 201.666
            }, {
                "x": 185.3334,
                "y": 156
            }, {
                "x": 229.334,
                "y": 89.3334
            }],
            "rotation": 0,
            "type": "",
            "visible": true,
            "width": 0,
            "x": 108,
            "y": 198
        }, {
            "height": 0,
            "id": 95,
            "name": "fork_right",
            "polyline": [{
                "x": 33,
                "y": -37
            }, {
                "x": 32,
                "y": -18
            }, {
                "x": 31,
                "y": 2
            }, {
                "x": 31,
                "y": 32
            }, {
                "x": 31,
                "y": 56
            }, {
                "x": 31,
                "y": 86
            }, {
                "x": 31,
                "y": 111
            }, {
                "x": 30,
                "y": 145
            }, {
                "x": 30,
                "y": 181
            }, {
                "x": 31,
                "y": 211
            }, {
                "x": 42,
                "y": 244
            }, {
                "x": 63,
                "y": 274
            }, {
                "x": 103,
                "y": 313
            }, {
                "x": 123.6666,
                "y": 338.334
            }, {
                "x": 144,
                "y": 368.666
            }, {
                "x": 160.6668,
                "y": 394.666
            }, {
                "x": 172.6668,
                "y": 423.666
            }, {
                "x": 177.3334,
                "y": 449
            }, {
                "x": 175.3334,
                "y": 473.334
            }, {
                "x": 167.6666,
                "y": 506.666
            }, {
                "x": 161.6668,
                "y": 474.334
            }, {
                "x": 144.6666,
                "y": 437.334
            }, {
                "x": 125,
                "y": 408.334
            }, {
                "x": 102.6666,
                "y": 381.666
            }, {
                "x": 84,
                "y": 362
            }, {
                "x": 60,
                "y": 339
            }, {
                "x": 37,
                "y": 317
            }, {
                "x": 15,
                "y": 295
            }, {
                "x": -8,
                "y": 267
            }, {
                "x": -16,
                "y": 242
            }, {
                "x": -20,
                "y": 208
            }, {
                "x": -19,
                "y": 182
            }, {
                "x": -21,
                "y": 146
            }, {
                "x": -20,
                "y": 118
            }, {
                "x": -20,
                "y": 89
            }, {
                "x": -20,
                "y": 58
            }, {
                "x": -16,
                "y": -39
            }],
            "rotation": 0,
            "type": "",
            "visible": true,
            "width": 0,
            "x": 419,
            "y": 337
        }, {
            "height": 0,
            "id": 96,
            "name": "fork_left",
            "polyline": [{
                "x": 0,
                "y": 0
            }, {
                "x": -3,
                "y": 18
            }, {
                "x": -11,
                "y": 30
            }, {
                "x": -20,
                "y": 40
            }, {
                "x": -30,
                "y": 61
            }, {
                "x": -42,
                "y": 80
            }, {
                "x": -53,
                "y": 99
            }, {
                "x": -64,
                "y": 113
            }, {
                "x": -79,
                "y": 130
            }, {
                "x": -94,
                "y": 150
            }, {
                "x": -113,
                "y": 176
            }, {
                "x": -127,
                "y": 197
            }, {
                "x": -139,
                "y": 219
            }, {
                "x": -149,
                "y": 236
            }, {
                "x": -160,
                "y": 256
            }, {
                "x": -173,
                "y": 280
            }, {
                "x": -188,
                "y": 308
            }, {
                "x": -204.5,
                "y": 338.5
            }, {
                "x": -218,
                "y": 370.334
            }, {
                "x": -228.334,
                "y": 406.666
            }, {
                "x": -227.668,
                "y": 435
            }, {
                "x": -225,
                "y": 456.666
            }, {
                "x": -219.334,
                "y": 474.5
            }, {
                "x": -209.5,
                "y": 494.668
            }, {
                "x": -181,
                "y": 529
            }, {
                "x": -186,
                "y": 503
            }, {
                "x": -185,
                "y": 463.332
            }, {
                "x": -177,
                "y": 434.332
            }, {
                "x": -167.3332,
                "y": 408.334
            }, {
                "x": -150.3334,
                "y": 372
            }, {
                "x": -129,
                "y": 334.666
            }, {
                "x": -111.2552,
                "y": 305.252
            }, {
                "x": -93,
                "y": 279
            }, {
                "x": -75,
                "y": 251
            }, {
                "x": -65,
                "y": 231
            }, {
                "x": -54,
                "y": 201
            }, {
                "x": -34,
                "y": 173
            }, {
                "x": -23,
                "y": 149
            }, {
                "x": -4,
                "y": 126
            }, {
                "x": 11,
                "y": 110
            }, {
                "x": 31,
                "y": 84
            }, {
                "x": 37,
                "y": 71
            }, {
                "x": 47,
                "y": 44
            }, {
                "x": 48,
                "y": 20
            }, {
                "x": 50,
                "y": 4
            }],
            "rotation": 0,
            "type": "",
            "visible": true,
            "width": 0,
            "x": 401,
            "y": 313
        }, {
            "height": 0,
            "id": 97,
            "name": "curve_top",
            "polyline": [{
                "x": -8,
                "y": -5
            }, {
                "x": 10,
                "y": -33
            }, {
                "x": 23,
                "y": -45
            }, {
                "x": 35,
                "y": -52
            }, {
                "x": 45,
                "y": -55
            }, {
                "x": 60,
                "y": -58
            }, {
                "x": 74,
                "y": -56
            }, {
                "x": 86,
                "y": -49
            }, {
                "x": 97,
                "y": -41
            }, {
                "x": 106,
                "y": -30
            }, {
                "x": 115,
                "y": -20
            }, {
                "x": 125,
                "y": -6
            }],
            "rotation": 0,
            "type": "",
            "visible": true,
            "width": 0,
            "x": 298,
            "y": 625
        }, {
            "height": 0,
            "id": 100,
            "name": "curve_bot",
            "polyline": [{
                "x": 28,
                "y": -60
            }, {
                "x": 26,
                "y": -83
            }, {
                "x": 34,
                "y": -108
            }, {
                "x": 43,
                "y": -130
            }, {
                "x": 51,
                "y": -148
            }, {
                "x": 59,
                "y": -165
            }, {
                "x": 68,
                "y": -177
            }, {
                "x": 76,
                "y": -183
            }, {
                "x": 85,
                "y": -186
            }, {
                "x": 94,
                "y": -188
            }, {
                "x": 104.75,
                "y": -186.25
            }, {
                "x": 116,
                "y": -181
            }, {
                "x": 126,
                "y": -173
            }, {
                "x": 140,
                "y": -158
            }, {
                "x": 151,
                "y": -146
            }, {
                "x": 164,
                "y": -134
            }, {
                "x": 176,
                "y": -119
            }, {
                "x": 190,
                "y": -102
            }, {
                "x": 202,
                "y": -87
            }, {
                "x": 208.666,
                "y": -78.3334
            }, {
                "x": 212,
                "y": -67
            }, {
                "x": 208,
                "y": -59
            }, {
                "x": 191,
                "y": -55
            }, {
                "x": 38,
                "y": -59
            }],
            "rotation": 0,
            "type": "",
            "visible": true,
            "width": 0,
            "x": 269,
            "y": 856
        }],
        "opacity": 1,
        "type": "objectgroup",
        "visible": true,
        "x": 0,
        "y": 0
    }, {
        "draworder": "topdown",
        "name": "Livello di oggetti 10",
        "objects": [{
            "height": 1920,
            "id": 120,
            "name": "",
            "rotation": 0,
            "type": "",
            "visible": true,
            "width": 1152,
            "x": 0,
            "y": 0
        }],
        "opacity": 1,
        "type": "objectgroup",
        "visible": true,
        "x": 0,
        "y": 0
    }, {
        "draworder": "topdown",
        "name": "centersafe",
        "objects": [{
            "ellipse": true,
            "height": 20,
            "id": 115,
            "name": "center",
            "rotation": 0,
            "type": "",
            "visible": true,
            "width": 20,
            "x": 520,
            "y": 1862
        }],
        "opacity": 1,
        "type": "objectgroup",
        "visible": true,
        "x": 0,
        "y": 0
    }, {
        "draworder": "topdown",
        "name": "top_channellers",
        "objects": [{
            "height": 0,
            "id": 56,
            "name": "4",
            "polygon": [{
                "x": 0,
                "y": 0
            }, {
                "x": 10,
                "y": -2
            }, {
                "x": 20,
                "y": 0
            }, {
                "x": 30,
                "y": 6
            }, {
                "x": 36,
                "y": 16
            }, {
                "x": 36,
                "y": 90
            }, {
                "x": 32,
                "y": 98
            }, {
                "x": 22,
                "y": 106
            }, {
                "x": 2,
                "y": 106
            }, {
                "x": -6,
                "y": 102
            }, {
                "x": -14,
                "y": 90
            }, {
                "x": -14,
                "y": 18
            }, {
                "x": -8,
                "y": 8
            }],
            "rotation": 0,
            "type": "",
            "visible": true,
            "width": 0,
            "x": 760,
            "y": 228
        }, {
            "height": 0,
            "id": 57,
            "name": "3",
            "polygon": [{
                "x": 0,
                "y": 0
            }, {
                "x": 10,
                "y": -2
            }, {
                "x": 20,
                "y": 0
            }, {
                "x": 30,
                "y": 6
            }, {
                "x": 36,
                "y": 16
            }, {
                "x": 36,
                "y": 90
            }, {
                "x": 32,
                "y": 98
            }, {
                "x": 22,
                "y": 106
            }, {
                "x": 2,
                "y": 106
            }, {
                "x": -6,
                "y": 102
            }, {
                "x": -14,
                "y": 90
            }, {
                "x": -14,
                "y": 18
            }, {
                "x": -8,
                "y": 8
            }],
            "rotation": 0,
            "type": "",
            "visible": true,
            "width": 0,
            "x": 644,
            "y": 252
        }, {
            "height": 0,
            "id": 58,
            "name": "2",
            "polygon": [{
                "x": 0,
                "y": 0
            }, {
                "x": 10,
                "y": -2
            }, {
                "x": 20,
                "y": 0
            }, {
                "x": 30,
                "y": 6
            }, {
                "x": 36,
                "y": 16
            }, {
                "x": 36,
                "y": 90
            }, {
                "x": 32,
                "y": 98
            }, {
                "x": 22,
                "y": 106
            }, {
                "x": 2,
                "y": 106
            }, {
                "x": -6,
                "y": 102
            }, {
                "x": -14,
                "y": 90
            }, {
                "x": -14,
                "y": 18
            }, {
                "x": -8,
                "y": 8
            }],
            "rotation": 0,
            "type": "",
            "visible": true,
            "width": 0,
            "x": 528,
            "y": 252
        }, {
            "height": 0,
            "id": 59,
            "name": "1",
            "polygon": [{
                "x": 0,
                "y": 0
            }, {
                "x": 10,
                "y": -2
            }, {
                "x": 20,
                "y": 0
            }, {
                "x": 25,
                "y": 3
            }, {
                "x": 30,
                "y": 6
            }, {
                "x": 36,
                "y": 16
            }, {
                "x": 36,
                "y": 90
            }, {
                "x": 32,
                "y": 98
            }, {
                "x": 22,
                "y": 106
            }, {
                "x": 2,
                "y": 106
            }, {
                "x": -6,
                "y": 102
            }, {
                "x": -14,
                "y": 90
            }, {
                "x": -14,
                "y": 18
            }, {
                "x": -8,
                "y": 8
            }],
            "rotation": 0,
            "type": "",
            "visible": true,
            "width": 0,
            "x": 416,
            "y": 228
        }],
        "opacity": 1,
        "type": "objectgroup",
        "visible": true,
        "x": 0,
        "y": 0
    }, {
        "draworder": "topdown",
        "name": "bot_channellers",
        "objects": [{
            "height": 0,
            "id": 79,
            "name": "vertical_right",
            "polygon": [{
                "x": -2,
                "y": 0
            }, {
                "x": 8,
                "y": 0
            }, {
                "x": 10,
                "y": 196
            }, {
                "x": 6,
                "y": 202
            }, {
                "x": 0,
                "y": 206
            }, {
                "x": -4,
                "y": 202
            }, {
                "x": -6,
                "y": 196
            }, {
                "x": -6,
                "y": 192
            }],
            "rotation": 0,
            "type": "",
            "visible": true,
            "width": 0,
            "x": 978,
            "y": 1402
        }, {
            "height": 0,
            "id": 80,
            "name": "horizontal_right",
            "polygon": [{
                "x": 0,
                "y": 0
            }, {
                "x": 8,
                "y": 14
            }, {
                "x": -224,
                "y": 122
            }, {
                "x": -236,
                "y": 86
            }],
            "rotation": 0,
            "type": "",
            "visible": true,
            "width": 0,
            "x": 972,
            "y": 1592
        }, {
            "height": 0,
            "id": 83,
            "name": "vertical_left",
            "polygon": [{
                "x": -2,
                "y": 0
            }, {
                "x": 8,
                "y": 0
            }, {
                "x": 10,
                "y": 196
            }, {
                "x": 6,
                "y": 202
            }, {
                "x": 0,
                "y": 206
            }, {
                "x": -4,
                "y": 202
            }, {
                "x": -6,
                "y": 196
            }, {
                "x": -6,
                "y": 192
            }],
            "rotation": 0,
            "type": "",
            "visible": true,
            "width": 0,
            "x": 92,
            "y": 1406
        }, {
            "height": 0,
            "id": 84,
            "name": "horizontal_left",
            "polygon": [{
                "x": 0,
                "y": 0
            }, {
                "x": 222,
                "y": 84
            }, {
                "x": 204,
                "y": 120
            }, {
                "x": -4,
                "y": 20
            }],
            "rotation": 0,
            "type": "",
            "visible": true,
            "width": 0,
            "x": 96,
            "y": 1592
        }, {
            "ellipse": true,
            "height": 20,
            "id": 85,
            "name": "head_left",
            "rotation": 0,
            "type": "",
            "visible": true,
            "width": 20,
            "x": 86,
            "y": 1392
        }, {
            "ellipse": true,
            "height": 20,
            "id": 87,
            "name": "head_right",
            "rotation": 0,
            "type": "",
            "visible": true,
            "width": 20,
            "x": 972,
            "y": 1386
        }],
        "opacity": 1,
        "type": "objectgroup",
        "visible": true,
        "x": 0,
        "y": 0
    }, {
        "draworder": "topdown",
        "name": "flipper_bumper",
        "objects": [{
            "height": 0,
            "id": 88,
            "name": "right",
            "polygon": [{
                "x": 2.41666,
                "y": -9.91666
            }, {
                "x": 0,
                "y": 200
            }, {
                "x": -96,
                "y": 236
            }, {
                "x": -126,
                "y": 216
            }, {
                "x": -42.1212,
                "y": 12.18184
            }, {
                "x": -36.6666,
                "y": 2
            }, {
                "x": -29.1818,
                "y": -7.0227
            }, {
                "x": -21.5152,
                "y": -14.8636
            }, {
                "x": -11.72726,
                "y": -23.197
            }, {
                "x": 2.14396,
                "y": -29.7348
            }],
            "rotation": 0,
            "type": "",
            "visible": true,
            "width": 0,
            "x": 904,
            "y": 1348
        }, {
            "height": 0,
            "id": 89,
            "name": "left",
            "polygon": [{
                "x": 0,
                "y": 0
            }, {
                "x": 90,
                "y": 210
            }, {
                "x": 68,
                "y": 232
            }, {
                "x": -36,
                "y": 192
            }, {
                "x": -33.3334,
                "y": -7.33334
            }, {
                "x": -32.7272,
                "y": -34.0606
            }, {
                "x": -23.6666,
                "y": -27.697
            }, {
                "x": -16.33332,
                "y": -20.6666
            }, {
                "x": -7.66666,
                "y": -10
            }],
            "rotation": 0,
            "type": "",
            "visible": true,
            "width": 0,
            "x": 210,
            "y": 1354
        }],
        "opacity": 1,
        "type": "objectgroup",
        "visible": true,
        "x": 0,
        "y": 0
    }, {
        "draworder": "topdown",
        "name": "right_channeller",
        "objects": [{
            "height": 0,
            "id": 90,
            "name": "channeller",
            "polygon": [{
                "x": 69.909,
                "y": -156.1666
            }, {
                "x": 73.5758,
                "y": -145.1666
            }, {
                "x": 76.7424,
                "y": -132.8334
            }, {
                "x": 77.2424,
                "y": -121.5
            }, {
                "x": -38,
                "y": 128.8334
            }, {
                "x": -44.6666,
                "y": 129.5
            }, {
                "x": -53.3334,
                "y": 128.8334
            }, {
                "x": -62.6666,
                "y": 124.1666
            }, {
                "x": -68.1818,
                "y": 115.1364
            }, {
                "x": -68.6666,
                "y": 105.5
            }, {
                "x": -67.2728,
                "y": 97.1364
            }, {
                "x": 52.909,
                "y": -155.1666
            }, {
                "x": 62.409,
                "y": -173.6666
            }],
            "rotation": 0,
            "type": "",
            "visible": true,
            "width": 0,
            "x": 924,
            "y": 691.334
        }],
        "opacity": 1,
        "type": "objectgroup",
        "visible": true,
        "x": 0,
        "y": 0
    }, {
        "draworder": "topdown",
        "name": "circle_bumper",
        "objects": [{
            "ellipse": true,
            "height": 120,
            "id": 94,
            "name": "3",
            "rotation": 0,
            "type": "",
            "visible": true,
            "width": 120,
            "x": 739.334,
            "y": 422.666
        }, {
            "ellipse": true,
            "height": 120,
            "id": 91,
            "name": "2",
            "rotation": 0,
            "type": "",
            "visible": true,
            "width": 120,
            "x": 678,
            "y": 608
        }, {
            "ellipse": true,
            "height": 120,
            "id": 93,
            "name": "1",
            "rotation": 0,
            "type": "",
            "visible": true,
            "width": 120,
            "x": 517.334,
            "y": 467.334
        }],
        "opacity": 1,
        "type": "objectgroup",
        "visible": true,
        "x": 0,
        "y": 0
    }, {
        "draworder": "topdown",
        "name": "flipper",
        "objects": [{
            "height": 0,
            "id": 113,
            "name": "right",
            "polygon": [{
                "x": 0,
                "y": 0
            }, {
                "x": -144,
                "y": 55.3334
            }, {
                "x": -150.6666,
                "y": 53.3334
            }, {
                "x": -154.5,
                "y": 49.5834
            }, {
                "x": -156.6666,
                "y": 46
            }, {
                "x": -158.6666,
                "y": 41.3334
            }, {
                "x": -159.25,
                "y": 35.5
            }, {
                "x": -158.0834,
                "y": 30.6666
            }, {
                "x": -153.5,
                "y": 26.4166
            }, {
                "x": -20.5834,
                "y": -44.5834
            }, {
                "x": -13.83334,
                "y": -46.1666
            }, {
                "x": -8,
                "y": -45.3334
            }, {
                "x": -2,
                "y": -42.6666
            }, {
                "x": 2,
                "y": -39.3334
            }, {
                "x": 5.33334,
                "y": -32.6666
            }, {
                "x": 8.83334,
                "y": -24.5834
            }, {
                "x": 9.33334,
                "y": -14.66666
            }, {
                "x": 6.66666,
                "y": -6.66666
            }],
            "rotation": 0,
            "type": "",
            "visible": true,
            "width": 0,
            "x": 735.334,
            "y": 1730
        }, {
            "height": 0,
            "id": 114,
            "name": "left",
            "polygon": [{
                "x": 0,
                "y": 9.1668
            }, {
                "x": -144,
                "y": -46.1666
            }, {
                "x": -150.6666,
                "y": -44.1666
            }, {
                "x": -154.5,
                "y": -40.4166
            }, {
                "x": -156.6666,
                "y": -36.8332
            }, {
                "x": -158.6666,
                "y": -32.1666
            }, {
                "x": -159.25,
                "y": -26.3332
            }, {
                "x": -158.0834,
                "y": -21.4998
            }, {
                "x": -153.5,
                "y": -17.2498
            }, {
                "x": -20.5834,
                "y": 53.7502
            }, {
                "x": -13.83334,
                "y": 55.3334
            }, {
                "x": -8,
                "y": 54.5002
            }, {
                "x": -2,
                "y": 51.8334
            }, {
                "x": 2,
                "y": 48.5002
            }, {
                "x": 5.33334,
                "y": 41.8334
            }, {
                "x": 8.83334,
                "y": 33.7502
            }, {
                "x": 9.33334,
                "y": 23.8334
            }, {
                "x": 6.66666,
                "y": 15.83346
            }],
            "rotation": 180,
            "type": "",
            "visible": true,
            "width": 0,
            "x": 315.584,
            "y": 1735.666
        }],
        "opacity": 1,
        "type": "objectgroup",
        "visible": true,
        "x": 0,
        "y": 0
    }],
    "nextobjectid": 122,
    "orientation": "orthogonal",
    "renderorder": "right-down",
    "tiledversion": "2018.03.21",
    "tileheight": 960,
    "tilesets": [],
    "tilewidth": 576,
    "type": "map",
    "version": 1.2,
    "width": 1
});