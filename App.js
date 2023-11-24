import React, { useState, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet, Link, useRouteError } from 'react-router-dom';
import About from "./src/components/About";
import useOnlineStatus from './src/utils/useOnlineStatus';
// const parent = React.createElement('div', { id: 'parent' }, React.createElement('div', { id: 'child' }, [React.createElement('h1', {}, 'i am gradson h1 tag'), React.createElement('h2', {}, 'i am gradson h2 tag')]));

var root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(root);

//jsx (Transpiled before it reaches the JS) -Parcel - Babel
//JSX => React.createElement => ReactElement-JS Object => HTML(render)
// const jsx = <h1>Through JSX elements</h1>;

// Header -> logo + navbar
// Body -> container -> card
// Footer -> copyright + license

const About = lazy(() => import("./src/components/About"));

const resList = [
    {
        "info": {
            "id": "254133",
            "name": "McDonald's",
            "cloudinaryImageId": "6dc3ed2ca21d71acff7c2a51dfe4c720",
            "locality": "Vishwakarma Road",
            "areaName": "Sector 63",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "American"
            ],
            "avgRating": 4.2,
            "feeDetails": {
                "restaurantId": "254133",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3500
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3500
            },
            "parentId": "630",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "20 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-17 00:45:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-65b5437e-b147-4c0d-9171-8c3017605d4a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/mcdonalds-vishwakarma-road-sector-63-noida-1-254133",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "24144",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "dnmrukmf2pdvzfrxaxjy",
            "locality": "H 1st A Block",
            "areaName": "Sector 63",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            "avgRating": 3.8,
            "feeDetails": {
                "restaurantId": "24144",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3600
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3600
            },
            "parentId": "2456",
            "avgRatingString": "3.8",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 25,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-16 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-65b5437e-b147-4c0d-9171-8c3017605d4a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/dominos-pizza-h-1st-a-block-sector-63-noida-1-24144",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "90170",
            "name": "Burger King",
            "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            "locality": "H Block",
            "areaName": "Sector 63",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Burgers",
                "American"
            ],
            "avgRating": 4.2,
            "feeDetails": {
                "restaurantId": "90170",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3500
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3500
            },
            "parentId": "166",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 21,
                "lastMileTravel": 1.8,
                "serviceability": "SERVICEABLE",
                "slaString": "21 mins",
                "lastMileTravelString": "1.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-17 06:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹129"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-65b5437e-b147-4c0d-9171-8c3017605d4a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/burger-king-h-block-sector-63-noida-1-90170",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "485420",
            "name": "KFC",
            "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
            "locality": "H Block",
            "areaName": "Sector 63",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
            ],
            "avgRating": 4,
            "feeDetails": {
                "restaurantId": "485420",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4100
            },
            "parentId": "547",
            "avgRatingString": "4.0",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 18,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "18 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-17 04:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "EVERY ITEM",
                "subHeader": "@ ₹179"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-65b5437e-b147-4c0d-9171-8c3017605d4a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-h-block-sector-63-noida-1-485420",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "130253",
            "name": "Bikanervala",
            "cloudinaryImageId": "rzy3s6u7zpxguzeml6vz",
            "locality": "A Block",
            "areaName": "Sector 62",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "North Indian",
                "South Indian",
                "Chinese",
                "Desserts"
            ],
            "avgRating": 4,
            "veg": true,
            "feeDetails": {
                "restaurantId": "130253",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 5100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 5100
            },
            "parentId": "45936",
            "avgRatingString": "4.0",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 4.2,
                "serviceability": "SERVICEABLE",
                "slaString": "29 mins",
                "lastMileTravelString": "4.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-16 22:45:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-65b5437e-b147-4c0d-9171-8c3017605d4a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/bikanervala-a-block-sector-62-noida-1-130253",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "367568",
            "name": "Haldiram's",
            "cloudinaryImageId": "f7pb8jaeadenex9mr9vo",
            "locality": "H Block",
            "areaName": "Sector 63",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "North Indian"
            ],
            "avgRating": 4,
            "veg": true,
            "feeDetails": {
                "restaurantId": "367568",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4300
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4300
            },
            "parentId": "377669",
            "avgRatingString": "4.0",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 1.7,
                "serviceability": "SERVICEABLE",
                "slaString": "29 mins",
                "lastMileTravelString": "1.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-16 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-65b5437e-b147-4c0d-9171-8c3017605d4a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/haldirams-h-block-sector-63-noida-1-367568",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "579096",
            "name": "EatFit",
            "cloudinaryImageId": "6126c9b45de2cb222405c1af8a321e74",
            "locality": "C Block",
            "areaName": "Sector 63",
            "costForTwo": "₹270 for two",
            "cuisines": [
                "Chinese",
                "Healthy Food",
                "Tandoor",
                "Pizzas",
                "North Indian",
                "Thalis",
                "Biryani"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "579096",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3500
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3500
            },
            "parentId": "76139",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 16,
                "lastMileTravel": 0.4,
                "serviceability": "SERVICEABLE",
                "slaString": "16 mins",
                "lastMileTravelString": "0.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-16 23:59:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "brand",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "brand"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-65b5437e-b147-4c0d-9171-8c3017605d4a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/eatfit-c-block-sector-63-noida-1-579096",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "676441",
            "name": "Chowman",
            "cloudinaryImageId": "06d12ec700e4118d159fab6c3a7256dd",
            "locality": "Niti Khand-3",
            "areaName": "Indirapuram",
            "costForTwo": "₹900 for two",
            "cuisines": [
                "Chinese",
                "Asian",
                "Thai",
                "Oriental",
                "Burmese",
                "Tibetan"
            ],
            "avgRating": 4.2,
            "feeDetails": {
                "restaurantId": "676441",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 5200
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 5200
            },
            "parentId": "266",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "31 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-16 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-65b5437e-b147-4c0d-9171-8c3017605d4a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/chowman-niti-khand-3-indirapuram-noida-1-676441",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "524942",
            "name": "Theobroma",
            "cloudinaryImageId": "b033728dcb0101ceb19bff0e1e1f6474",
            "locality": "Indirapuram",
            "areaName": "Ghaziabad",
            "costForTwo": "₹600 for two",
            "cuisines": [
                "Bakery",
                "Desserts"
            ],
            "avgRating": 4.5,
            "feeDetails": {
                "restaurantId": "524942",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 5100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 5100
            },
            "parentId": "1040",
            "avgRatingString": "4.5",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 4.5,
                "serviceability": "SERVICEABLE",
                "slaString": "22 mins",
                "lastMileTravelString": "4.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-16 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Gourmet",
                                    "imageId": "newg.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "ABOVE ₹159",
                "discountTag": "FLAT DEAL"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-65b5437e-b147-4c0d-9171-8c3017605d4a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/theobroma-indirapuram-ghaziabad-noida-1-524942",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
]

const Header = () => {

    const online = useOnlineStatus();

    return (
        <div className="header">
            <div className="logoc">
                <img className='logo' src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg" />
            </div>
            <div className="navbar">
                <ul>
                    <li>
                        Online status : {(online) ? "🟢" : "🔴"}
                    </li>
                    <li>
                        <Link to="/">Home </Link>
                    </li>
                    <li>
                        <Link to="/about" >About us</Link>
                    </li>
                    <li>
                        <Link to="/contact" >Contact us</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

const Card = ({ name, rating }) => {
    // console.log("prop from Card: ", name, rating);
    // const  = props;


    return (
        <div className='card'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6T3IhWM7H1JRXqfkS6zigUsc84U4CRTUSz64gKAC5&s" />

            <div className='card-data'>
                <h4>{name}</h4>
                <p>{rating}</p>
            </div>
        </div>
    );
}

const Body = () => {

    // const {resList} = resList;
    // const resobj = resList.info;
    // const res = resList[0];
    // console.log(resList);
    // console.log("res here : " , res.info);

    return (
        <div>
            <div className="search">
                Search
            </div>
            <div className="res-container">
                {resList.map((res) => {
                    console.log(res.info.name);
                    <Card key={res.info.id} />
                })}
            </div>
        </div>
    );
}

const AppLayout = () => {
    return (
        <div className=''>
            <Header />
            {/* <Body /> */}
            <Outlet />
        </div>
    );
}

const Contact = () => {
    return (
        <div>
            contact us
        </div>
    )
}

const ErrorPage = () => {
    return (
        <>
        errro</>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/about',
                element: <Suspense fallback="ruk ruk ruk, Arey baba ruk..!"><About name={"lattu"} /></Suspense>,
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    },

]);


root.render(<RouterProvider router={appRouter} />);