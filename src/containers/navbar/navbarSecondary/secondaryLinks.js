/* export an array of objects with the following properties:
    * name: the name of the link set
    * path: the path of the link set
    * sublinks: an array of objects with the following properties:
        * name: the name of the sublink
        * path: the path of the sublink
*/
export const secondaryLinks = [
    {
        name: 'Hem',
        path: '/',
        sublinks: [
            {
                name: 'Nyhetsbrev',
                path: '/nyhetsbrev'
            },
            {
                name: 'Trädgården',
                path: '/tradgarden'
            },
        ]
    },
    {
        name: 'Butik',
        path: '/butik',
        sublinks: [
            {
                name: 'Sortiment',
                path: '/butik/sortiment'
            },
            {
                name: 'Veckans sten',
                path: '/butik/veckanssten'
            },
            {
                name: 'Stenkartan',
                path: '/butik/stenkartan'
            },
        ]
    },
    {
        name: 'Klinik',
        path: '/klinik',
        sublinks: [
            {
                name: 'Behandlingar',
                path: '/klinik/behandlingar'
            },
            {
                name: 'Boka',
                path: '/klinik/boka'
            },
            {
                name: 'Kontakt',
                path: '/klinik/kontakt'
            }
        ]
    },
    {
        name: 'Vandrarhem',
        path: '/vandrarhem',
        sublinks: [
            {
                name: 'Ganesha',
                path: '/vandrarhem/ganesha'
            },
            {
                name: 'Lakshmi',
                path: '/vanrarhem/lakshmi'
            },
            {
                name: 'Hanuman',
                path: '/vandrarhem/hanuman'
            },
        ]
    },
];