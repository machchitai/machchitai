import React from 'react';

const Map = () => {
    return (
        <div>
            <div className="mapwrapper">
                <div id="map" className="container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3453.66325428613!2d31.24094885319519!3d30.046517359733745!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1403554513536"   className="googlemap"></iframe>
                
                
                </div> {/**end of map id */}

            </div>    {/**end of map wrapper */}
        </div>
    );
};

export default Map;