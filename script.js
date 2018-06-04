var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        img: 'images/harry.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        img: 'images/krol_lew.jpg'
    },
    {
        id: 3,
        title: 'To właśnie miłość',
        desc: 'Komedia romantyczna',
        img: 'images/to_wlasnie_milosc.jpg'
    },
    {
        id: 4,
        title: 'Władca pierścieni',
        desc: 'Filmowa trylogia wg powieści Tolkiena',
        img: 'images/wladca.jpg'
    },
    {
        id: 5,
        title: 'Pulp Fiction',
        desc: 'Przemoc i odkupienie w opowieści o dwóch płatnych mordercach pracujących na zlecenie mafii',
        img: 'images/pulp_fiction.jpg'
    }
];

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (
            React.createElement('li', {},
                React.createElement(MovieTitle, { title: this.props.movie.title }),
                React.createElement(MovieDesc, { desc: this.props.movie.desc }),
                React.createElement(MovieImg, { img: this.props.movie.img })
            )
        )
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },

    render: function () {
        return (
            React.createElement('h2', {}, this.props.title)
        )
    },
});

var MovieDesc = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },

    render: function () {
        return (
            React.createElement('p', {}, this.props.desc)
        )
    },
});


var MovieImg = React.createClass({
    propTypes: {
        img: React.PropTypes.string.isRequired,
    },

    render: function () {
        return (
            React.createElement('img', { src: this.props.img })
        )
    },
});


var MovieList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired,
    },

    render: function () {
        var moviesElements = this.props.movies.map(function (movie) {
            return React.createElement(Movie, {
                key: movie.id,
                movie: movie
            });
        });
        return React.createElement('ul', {}, moviesElements);
    }
});


var element = React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(MovieList, { movies: movies })
);

ReactDOM.render(element, document.getElementById('app'))
