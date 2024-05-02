export const useCompany = () => useState("company", () => null)
export const useCompanies = () => useState("companies", () =>  [
    {
        "id": 1,
        "name": "Bayer-Kreiger",
        "type": "standard",
        "invoiceEmail": "nikita80@example.org",
        "active": "true",
        "customers": [
            {
                "id": 1,
                "name": "Lizeth Volkman",
                "email": "keebler.lura@example.net",
                "active": "false",
                "company": {
                    "id": 1,
                    "name": "Bayer-Kreiger"
                }
            },
            {
                "id": 2,
                "name": "Blanca Spencer DVM",
                "email": "streich.leland@example.net",
                "active": "false",
                "company": {
                    "id": 1,
                    "name": "Bayer-Kreiger"
                }
            },
            {
                "id": 3,
                "name": "Dr. Vladimir Konopelski Jr.",
                "email": "xrohan@example.com",
                "active": "false",
                "company": {
                    "id": 1,
                    "name": "Bayer-Kreiger"
                }
            },
            {
                "id": 4,
                "name": "Karianne Schaden PhD",
                "email": "reina28@example.com",
                "active": "false",
                "company": {
                    "id": 1,
                    "name": "Bayer-Kreiger"
                }
            },
            {
                "id": 5,
                "name": "Aubrey Runolfsson",
                "email": "bosco.marielle@example.org",
                "active": "false",
                "company": {
                    "id": 1,
                    "name": "Bayer-Kreiger"
                }
            }
        ]
    },
    {
        "id": 2,
        "name": "Heaney, Collier and Effertz",
        "type": "account",
        "invoiceEmail": "chase.volkman@example.com",
        "active": "true",
        "customers": []
    },
    {
        "id": 3,
        "name": "Mante-Kautzer",
        "type": "standard",
        "invoiceEmail": "ddare@example.org",
        "active": "true",
        "customers": []
    },
    {
        "id": 4,
        "name": "Schroeder-Kulas",
        "type": "standard",
        "invoiceEmail": "nikolaus.vivianne@example.net",
        "active": "true",
        "customers": []
    },
    {
        "id": 5,
        "name": "McLaughlin-Koelpin",
        "type": "account",
        "invoiceEmail": "troy85@example.net",
        "active": "true",
        "customers": []
    },
    {
        "id": 6,
        "name": "Harvey-Upton",
        "type": "account",
        "invoiceEmail": "fleannon@example.com",
        "active": "true",
        "customers": []
    },
    {
        "id": 7,
        "name": "Williamson Group",
        "type": "standard",
        "invoiceEmail": "tabitha.bruen@example.com",
        "active": "false",
        "customers": [
            {
                "id": 6,
                "name": "Violette Berge",
                "email": "lance45@example.org",
                "active": "false",
                "company": {
                    "id": 7,
                    "name": "Williamson Group"
                }
            },
            {
                "id": 7,
                "name": "Margaretta Moen II",
                "email": "durgan.emery@example.com",
                "active": "true",
                "company": {
                    "id": 7,
                    "name": "Williamson Group"
                }
            },
            {
                "id": 8,
                "name": "Lincoln Marvin IV",
                "email": "maya.parker@example.net",
                "active": "false",
                "company": {
                    "id": 7,
                    "name": "Williamson Group"
                }
            },
            {
                "id": 9,
                "name": "Kira Keebler DVM",
                "email": "sincere.becker@example.net",
                "active": "true",
                "company": {
                    "id": 7,
                    "name": "Williamson Group"
                }
            },
            {
                "id": 10,
                "name": "Shawn Hahn",
                "email": "effertz.leonie@example.org",
                "active": "false",
                "company": {
                    "id": 7,
                    "name": "Williamson Group"
                }
            }
        ]
    },
    {
        "id": 8,
        "name": "Morissette, Rippin and Powlowski",
        "type": "account",
        "invoiceEmail": "reynold.maggio@example.org",
        "active": "false",
        "customers": []
    },
    {
        "id": 9,
        "name": "Sauer LLC",
        "type": "account",
        "invoiceEmail": "emmett.ondricka@example.org",
        "active": "false",
        "customers": []
    },
    {
        "id": 10,
        "name": "Grimes-Fahey",
        "type": "account",
        "invoiceEmail": "hking@example.net",
        "active": "true",
        "customers": []
    },
    {
        "id": 11,
        "name": "Fritsch Group",
        "type": "account",
        "invoiceEmail": "veronica.stehr@example.com",
        "active": "false",
        "customers": []
    },
    {
        "id": 12,
        "name": "King, Mueller and Waters",
        "type": "standard",
        "invoiceEmail": "lilian01@example.com",
        "active": "true",
        "customers": []
    },
    {
        "id": 13,
        "name": "Runolfsdottir-Skiles",
        "type": "account",
        "invoiceEmail": "wbecker@example.com",
        "active": "true",
        "customers": [
            {
                "id": 11,
                "name": "Mr. Jaden Okuneva DVM",
                "email": "huel.dewitt@example.com",
                "active": "true",
                "company": {
                    "id": 13,
                    "name": "Runolfsdottir-Skiles"
                }
            },
            {
                "id": 12,
                "name": "Dr. Blair Koch",
                "email": "xbernhard@example.net",
                "active": "true",
                "company": {
                    "id": 13,
                    "name": "Runolfsdottir-Skiles"
                }
            },
            {
                "id": 13,
                "name": "Devante Mills DVM",
                "email": "lbartoletti@example.net",
                "active": "false",
                "company": {
                    "id": 13,
                    "name": "Runolfsdottir-Skiles"
                }
            },
            {
                "id": 14,
                "name": "Jarrell Pacocha",
                "email": "newell.boyle@example.net",
                "active": "true",
                "company": {
                    "id": 13,
                    "name": "Runolfsdottir-Skiles"
                }
            },
            {
                "id": 15,
                "name": "Prof. Zion Kovacek",
                "email": "kschowalter@example.com",
                "active": "true",
                "company": {
                    "id": 13,
                    "name": "Runolfsdottir-Skiles"
                }
            }
        ]
    },
    {
        "id": 14,
        "name": "Turcotte-Kilback",
        "type": "account",
        "invoiceEmail": "alverta45@example.com",
        "active": "false",
        "customers": []
    },
    {
        "id": 15,
        "name": "Dare-Feeney",
        "type": "account",
        "invoiceEmail": "sherwood14@example.org",
        "active": "false",
        "customers": []
    }
],)




// export async function getCompanies() {
//     try {
//         const response: any = await GET(`/companies`)
//         const companies = useCompanies()

//         console.log('companies' , response)
//         companies.value = response?.data ?? []
//         return [response, null]
//     }
//     catch (error) {
//         return [null, error]
//     }
// }