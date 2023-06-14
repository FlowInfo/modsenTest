import React from "react"

class Input extends React.Component {
     waitingKeyPress = (event) => {
        if (event.key === 'Enter') {
            const searchValue = event.target.value; 
            const searchUrl =  `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=AIzaSyByMtJ1mpylPuE9Yr9HreMl5Bxzr7FTTS0`;

            console.log('Измененный URL:', searchUrl);
        }
    };

    render() {
        return (
            <div className="search">
                <input 
                    type = "text" 
                    id = "searchInput" 
                    placeholder = "Enter text to serch"  
                    onKeyDown = {this.waitingKeyPress}
                />
                <button id = "searchButton">button</button>
            </div>
        )
    }
}

export default Input