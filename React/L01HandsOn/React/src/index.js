import React from 'react';
import ReactDOM from 'react-dom';

const color1 = React.createElement('li', {}, 'Yellow');
const color2 = React.createElement('li', {}, 'Blue');
const color3 = React.createElement('li', {}, 'Pink');

const fabric1 = React.createElement('li', {}, 'Silk');
const fabric2 = React.createElement('li', {}, 'Cotton');
const fabric3 = React.createElement('li', {}, 'Linen');

const food1 = React.createElement('li', {}, 'Pizza');
const food2 = React.createElement('li', {}, 'Enchiladas');
const food3 = React.createElement('li', {}, 'Teriyaki Chicken');

const website1 = React.createElement(
    'li', {},
    React.createElement('a', {
        href: 'https://www.sue-a-darby.com'
    }, 'My Portfolio')
);
const website2 = React.createElement(
    'li', {},
    React.createElement(
        'a', {
            href: 'https://www.linkedin.com/in/suedarby/'
        },
        'LinkedIn'
    )
);
const website3 = React.createElement(
    'li', {},
    React.createElement(
        'a', {
            href: 'https://www.suestinycostumes.com'
        },
        'My Dolls'
    )
);

ReactDOM.render(
    React.createElement(
        'div', {},
        React.createElement('h1', {}, 'My Favorite Things'),
        React.createElement(
            'ul', {},
            React.createElement(
                'li', {},
                'Favorite Colors',
                React.createElement('ol', {}, color1, color2, color3)
            ),
            React.createElement(
                'li', {},
                'Favorite Fabric',
                React.createElement('ol', {}, fabric1, fabric2, fabric3)
            ),
            React.createElement(
                'li', {},
                'Favorite Food',
                React.createElement('ol', {}, food1, food2, food3)
            ),
            React.createElement(
                'li', {},
                'Favorite Websites',
                React.createElement('ol', {}, website1, website2, website3)
            )
        )
    ),
    document.getElementById('root')
);