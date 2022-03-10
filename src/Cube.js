const Cube = () => {
    return ( 
        <footer className="cube">
            <div className="top"></div>
            <div>
            <span style={{"--i": 0}}>
                <a href="https://www.facebook.com/da3ker/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a> 
                <a href="https://www.facebook.com/da3ker/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a> 
            </span>
            <span style={{"--i": 1}}>
                <a href="https://github.com/da3ker" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                <a href="https://github.com/da3ker" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            </span>
            <span style={{"--i": 2}}>
                <a href="https://www.freecodecamp.org/da3ker" target="_blank" rel="noopener noreferrer"><i className="fab fa-free-code-camp"></i></a>
                <a href="https://www.freecodecamp.org/da3ker" target="_blank" rel="noopener noreferrer"><i className="fab fa-free-code-camp"></i></a>
            </span>
            <span style={{"--i": 3}}>
                <a href="https://www.linkedin.com/in/sherald-fernandez-981b6820a/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                <a href="https://www.linkedin.com/in/sherald-fernandez-981b6820a/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            </span>
            </div>
      </footer>
     );
}
 
export default Cube;